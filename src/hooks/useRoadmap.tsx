import { useState } from "react";
import { toast } from "sonner";
import { api } from "~/trpc/react";
import type { UserRating } from "~/types/Roadmap.type";
import { useAuth } from "./useAuth";

export const useRoadmap = () => {
  const { isSignedIn, user } = useAuth();

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

  const { mutateAsync: createSkillRate } = api.skillRate.create.useMutation();

  const handleGenerateRoadmap = async () => {
    if (!isSignedIn || !user?.id) {
      toast.info("You must be logged in to generate a roadmap");
      return;
    }

    const promises = userRatings.map((rating) => {
      return createSkillRate({
        technology: rating.technology,
        rating: rating.rating,
        userId: user.id,
      });
    });

    toast.promise(
      async () => {
        await Promise.all(promises);
      },
      {
        loading: "Generating roadmap...",
        success: "Roadmap generated successfully",
        error: "Failed to generate roadmap",
      }
    );
  };

  return {
    technologies,
    isTechnologiesLoading,
    groupedTechnologies,
    userRatings,
    setUserRatings,
    resetRatings,
    handleGenerateRoadmap,
  };
};
