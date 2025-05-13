import type { UserRating } from "~/types/Roadmap.type";
import type { Technology } from "~/types/Technology.type";
import { TechnologyItem } from "./TechnologyItem";

interface TechnologyGroupProps {
  category: string;
  technologies: Technology[];
  userRatings: UserRating[];
}

export function TechnologyGroup({
  category,
  technologies,
  userRatings,
}: TechnologyGroupProps) {
  const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);
  const unratedTechs = technologies.filter(
    (tech) => !userRatings.some((r) => r.technology === tech.name)
  );

  if (unratedTechs.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-xl">{categoryLabel}</h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {unratedTechs.map((tech) => (
          <TechnologyItem
            key={tech.id}
            technology={tech}
            userRatings={userRatings}
          />
        ))}
      </div>
    </div>
  );
}
