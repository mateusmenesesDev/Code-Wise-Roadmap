// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";
import { createTable } from "./config";
import { skillRate } from "./skillRate";

export const technologies = createTable(
  "technologies",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
    name: d.varchar({ length: 256 }).notNull().unique(),
    category: d.varchar({ length: 256 }).notNull(),
    description: d.text().notNull(),
    priority: d.integer().notNull(),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [index("name_idx").on(t.name)]
);

export const technologiesRelations = relations(technologies, ({ many }) => ({
  skillRates: many(skillRate),
}));
