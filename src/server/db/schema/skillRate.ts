import { index, uniqueIndex } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";
import { createTable } from "./config";
import { technologies } from "./technologies";

export const skillRate = createTable(
  "skillRate",
  (t) => ({
    id: t.integer().primaryKey().generatedByDefaultAsIdentity(),
    userId: t.varchar({ length: 256 }).notNull(),
    technology: t.varchar({ length: 256 }).notNull(),
    category: t.varchar({ length: 256 }).notNull(),
    rating: t.integer().notNull(),
    createdAt: t.timestamp().notNull().defaultNow(),
    updatedAt: t.timestamp().notNull().defaultNow(),
  }),
  (t) => [
    index("user_id_idx").on(t.userId),
    index("technology_idx").on(t.technology),
    uniqueIndex("user_tech_category_unique_idx").on(
      t.userId,
      t.technology,
      t.category
    ),
  ]
);

export const skillRateRelations = relations(skillRate, ({ one }) => ({
  technology: one(technologies, {
    fields: [skillRate.technology],
    references: [technologies.name],
  }),
}));
