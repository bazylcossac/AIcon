import { text, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id")
    .$defaultFn(() => crypto.randomUUID())
    .primaryKey(),
  email: text("email").notNull(),
  name: text("name").notNull(),
});

export const file = pgTable("file", {
  id: text("id")
    .$defaultFn(() => crypto.randomUUID())
    .primaryKey(),
  authorId: text("authorId")
    .references(() => user.id)
    .notNull(),
  url: text("url").notNull(),
});
