import { uuid } from "drizzle-orm/gel-core";
import { integer, text, pgTable } from "drizzle-orm/pg-core";

const user = pgTable("user", {
  id: uuid(),
});
