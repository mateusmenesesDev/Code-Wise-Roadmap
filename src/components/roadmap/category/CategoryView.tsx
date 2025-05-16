import { AlertTriangle, Check, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { categories } from "~/constants";
import type { SkillRate } from "~/utils/roadmap";
import {
  calculateOverallPriority,
  getPriorityLabel,
  getRatingLabel,
} from "~/utils/roadmap";

interface CategoryViewProps {
  techByCategories: Record<string, SkillRate[]>;
  userRatings: SkillRate[];
}

export function CategoryView({
  techByCategories,
  userRatings,
}: CategoryViewProps) {
  return (
    <div className="mt-8 border-border border-t pt-8">
      <h2 className="mb-4 font-bold text-xl">Technologies by Category</h2>

      {Object.entries(techByCategories).map(([category, techs]) => {
        const color = categories.find((c) => c.name === category)?.color;

        // Sort technologies by overall priority
        const sortedTechs = [...techs].sort((a, b) => {
          const priorityA = calculateOverallPriority(a);
          const priorityB = calculateOverallPriority(b);
          return priorityA - priorityB; // Lower score = higher priority
        });

        return (
          <div key={category} className="mb-8 space-y-4">
            <h3 className="flex items-center gap-2 font-medium text-xl">
              {category}
            </h3>

            <div className="space-y-3">
              {sortedTechs.map((tech) => {
                const userRating = userRatings.find(
                  (r) => r.technology === tech.technology
                );
                const rating = userRating?.rating || 0;
                const priority = tech.techDetails?.priority || 5;
                const priorityInfo = getPriorityLabel(priority);

                return (
                  <Card
                    key={tech.id}
                    className={`border-${color}/30${
                      rating >= 75 ? "bg-muted/30" : ""
                    }`}
                  >
                    <CardHeader className="py-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg">
                              {tech.technology}
                            </CardTitle>
                            {rating < 75 && (
                              <div
                                className={`flex items-center gap-1 ${priorityInfo.color}`}
                              >
                                <AlertTriangle className="h-4 w-4" />
                                <span className="font-medium text-xs">
                                  {priorityInfo.label}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="mt-1 text-muted-foreground text-sm">
                            <div className="flex items-center gap-2">
                              <span>Your level: {getRatingLabel(rating)}</span>
                              <div className="flex">
                                {[25, 50, 75, 100].map((starRating) => (
                                  <Star
                                    key={`${tech.id}-star-${starRating}`}
                                    className={`h-4 w-4 ${
                                      rating >= starRating
                                        ? "fill-primary text-primary"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        {rating >= 75 && (
                          <div className="flex items-center gap-1 text-green-400">
                            <Check className="h-4 w-4" />
                            <span className="font-medium text-xs">
                              Proficient
                            </span>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <p className="text-muted-foreground text-sm">
                        {tech.techDetails?.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
