import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TechnologySkeleton } from "~/components/skeletons/TechnologySkeleton";
import { Button } from "~/components/ui/button";
import { columns } from "~/constants/rateBoard";
import { useRoadmap } from "~/hooks/useRoadmap";
import type { UserRating } from "~/types/Roadmap.type";
import { RatingColumn } from "./RatingColumn";
import { RatingProgress } from "./RatingProgress";
import { TechnologyGroup } from "./TechnologyGroup";

export function RateBoard() {
  const {
    technologies,
    isTechnologiesLoading,
    groupedTechnologies,
    userRatings,
    setUserRatings,
    resetRatings,
  } = useRoadmap();

  const ratedCount = userRatings.length;
  const totalCount = technologies?.length || 0;

  const handleDrop = (tech: string, rating: UserRating["rating"]) => {
    setUserRatings((prev) => {
      const filtered = prev.filter((r) => r.technology !== tech);
      return [...filtered, { technology: tech, rating }];
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-8">
        <div>
          <h2 className="mb-2 font-bold text-2xl">Rate Your Skills</h2>
          <p className="text-muted-foreground">
            Drag and drop technologies to rate your proficiency level. This will
            help generate a personalized roadmap.
          </p>

          <RatingProgress ratedCount={ratedCount} totalCount={totalCount} />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {columns.map((column) => (
            <RatingColumn
              key={column.title}
              technologies={technologies || []}
              rating={column.rating as UserRating["rating"]}
              userRatings={userRatings}
              onDrop={handleDrop}
              title={column.title}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6">
          {isTechnologiesLoading ? (
            <TechnologySkeleton />
          ) : (
            Object.entries(groupedTechnologies || {}).map(
              ([category, techs]) => (
                <TechnologyGroup
                  key={category}
                  category={category}
                  technologies={techs}
                  userRatings={userRatings}
                />
              )
            )
          )}
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={resetRatings}>
            Reset Ratings
          </Button>
          <Button disabled={ratedCount === 0}>Generate Roadmap</Button>
        </div>
      </div>
    </DndProvider>
  );
}
