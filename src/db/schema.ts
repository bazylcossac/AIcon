import {
  text,
  pgTable,
  integer,
  primaryKey,
  timestamp,
  boolean,
  date,
} from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  tokens: integer("token").default(1).notNull(),
  image: text("image"),
});

export const projects = pgTable("project", {
  id: text("id")
    .$defaultFn(() => crypto.randomUUID())
    .primaryKey(),
  projectName: text("projectName").notNull(),
  authorId: text("authorId")
    .notNull()
    .references(() => users.id),
  imageUrl: text("url"),
  createdAt: timestamp("createdAt").defaultNow(),
});

export const files = pgTable("file", {
  id: text("id")
    .$defaultFn(() => crypto.randomUUID())
    .primaryKey(),
  url: text("url").notNull(),
  type: text("type").notNull(),
  authorId: text("authorId")
    .references(() => users.id)
    .notNull(),
  prompt: text("prompt").notNull(),
  projectId: text("projectId")
    .notNull()
    .references(() => projects.id),
  quality: text("quality").notNull(),
  size: text("size").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});

// auth shemas

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    {
      compoundKey: primaryKey({
        columns: [account.provider, account.providerAccountId],
      }),
    },
  ]
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => [
    {
      compositePk: primaryKey({
        columns: [verificationToken.identifier, verificationToken.token],
      }),
    },
  ]
);

export const authenticators = pgTable(
  "authenticator",
  {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: text("transports"),
  },
  (authenticator) => [
    {
      compositePK: primaryKey({
        columns: [authenticator.userId, authenticator.credentialID],
      }),
    },
  ]
);
