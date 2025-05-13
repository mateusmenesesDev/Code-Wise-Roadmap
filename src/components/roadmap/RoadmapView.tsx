import { useAuth } from "~/hooks/useAuth";
import { api } from "~/trpc/react";
import { CategoryView } from "./category/CategoryView";
import { RecommendedProjects } from "./projects/RecommendedProjects";
import { RatingsView } from "./ratings/RatingsView";

export function RoadmapView() {
  const { user } = useAuth();

  const userRatings = api.skillRate.getByUserId.useQuery({
    userId: user?.id || "",
  });

  if (userRatings.isLoading) {
    return <div>Loading...</div>;
  }

  if (!userRatings.data) {
    return (
      <div className="py-16 text-center">
        <h2 className="mb-4 font-bold text-2xl">No Roadmap Generated</h2>
        <p className="mb-6 text-muted-foreground">
          Rate your skills in the technologies to generate a personalized
          roadmap.
        </p>
      </div>
    );
  }

  // category technologies by their rating
  const techByRating: Record<string, typeof userRatings.data> = {
    "25": [],
    "50": [],
    "75": [],
    "100": [],
  };

  for (const tech of userRatings.data || []) {
    const rating = tech.rating;

    if (rating === 25) techByRating["25"]?.push(tech);
    else if (rating === 50) techByRating["50"]?.push(tech);
    else if (rating === 75) techByRating["75"]?.push(tech);
    else if (rating === 100) techByRating["100"]?.push(tech);
  }

  const techByCategories = userRatings.data?.reduce((acc, tech) => {
    if (!acc[tech.techDetails?.category || ""]) {
      acc[tech.techDetails?.category || ""] = [];
    }
    acc[tech.techDetails?.category || ""]?.push(tech);
    return acc;
  }, {} as Record<string, typeof userRatings.data>);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2 font-bold text-2xl">Your Learning Roadmap</h2>
        <p className="text-muted-foreground">
          Based on your skill ratings, here's your personalized learning path.
          Focus on areas with lower ratings first.
        </p>
      </div>

      <RatingsView techByRating={techByRating} />

      <CategoryView
        techByCategories={techByCategories}
        userRatings={userRatings.data}
      />

      <RecommendedProjects />
    </div>
  );
}
