import { useState } from "react";
import { toast } from "sonner";
import { api } from "~/trpc/react";
import type { UserRating } from "~/types/Roadmap.type";

export const useRoadmap = () => {
  const { data: technologies, isLoading: isTechnologiesLoading } =
    api.technology.getAll.useQuery();

  const groupedTechnologies = technologies?.reduce<
    Record<string, typeof technologies>
  >((acc, tech) => {
    const category = tech.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tech);
    return acc;
  }, {});

  const [userRatings, setUserRatings] = useState<UserRating[]>([]);

  const resetRatings = () => {
    setUserRatings([]);
    toast.info("All ratings have been reset");
  };

  return {
    technologies,
    isTechnologiesLoading,
    groupedTechnologies,
    userRatings,
    setUserRatings,
    resetRatings,
  };
};
