import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TechnologySkeleton } from "~/components/skeletons/TechnologySkeleton";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { categories } from "~/constants";
import { columns } from "~/constants/rateBoard";
import { useRoadmap } from "~/hooks/useRoadmap";
import type { UserRating } from "~/types/Roadmap.type";
import type { Technology } from "~/types/Technology.type";
import { RatingColumn } from "./RatingColumn";
import { RatingProgress } from "./RatingProgress";
import { TechnologyGroup } from "./TechnologyGroup";

type RateBoardProps = {
  userId?: string;
};

export function RateBoard({ userId }: RateBoardProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const {
    technologies,
    isTechnologiesLoading,
    groupedTechnologies,
    userRatings,
    setUserRatings,
    resetRatings,
    handleGenerateRoadmap,
  } = useRoadmap(userId);

  const ratedCount = userRatings.length;
  const totalCount = technologies?.length || 0;

  const handleDrop = (tech: string, rating: UserRating["rating"]) => {
    setUserRatings((prev) => {
      const filtered = prev.filter((r) => r.technology !== tech);
      return [...filtered, { technology: tech, rating }];
    });
  };

  const filteredTechnologies =
    technologies?.filter(
      (tech) => selectedCategory === "all" || tech.category === selectedCategory
    ) || [];

  const filteredGroupedTechnologies = Object.entries(
    groupedTechnologies || {}
  ).reduce((acc, [category, techs]) => {
    if (selectedCategory === "all" || category === selectedCategory) {
      acc[category] = techs;
    }
    return acc;
  }, {} as Record<string, Technology[]>);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-8">
        <div>
          <h2 className="mb-2 font-bold text-2xl">Rate Your Skills</h2>
          <p className="text-muted-foreground">
            Drag and drop technologies to rate your proficiency level. This will
            help generate a personalized roadmap.
          </p>

          <div className="mt-4 flex items-center gap-4">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <RatingProgress ratedCount={ratedCount} totalCount={totalCount} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {columns.map((column) => (
            <RatingColumn
              key={column.title}
              technologies={filteredTechnologies}
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
            Object.entries(filteredGroupedTechnologies).map(
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
          <Button disabled={ratedCount === 0} onClick={handleGenerateRoadmap}>
            Generate Roadmap
          </Button>
        </div>
      </div>
    </DndProvider>
  );
}
