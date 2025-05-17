import type { RouterOutputs } from "~/trpc/react";

export type SkillRate = RouterOutputs["skillRate"]["getByUserId"][number];

export const getRatingLabel = (rating: number) => {
  switch (rating) {
    case 0:
      return "No Experience (0%)";
    case 25:
      return "Beginner (25%)";
    case 50:
      return "Intermediate (50%)";
    case 75:
      return "Advanced (75%)";
    case 100:
      return "Expert (100%)";
    default:
      return "Unknown";
  }
};

export const getPriorityLabel = (priority: number) => {
  if (priority <= 3) return { label: "High Priority", color: "text-red-400" };
  if (priority <= 6)
    return { label: "Medium Priority", color: "text-yellow-400" };
  return { label: "Low Priority", color: "text-green-400" };
};

export const calculateOverallPriority = (tech: SkillRate) => {
  const priority = tech.techDetails?.priority || 5;
  const rating = tech.rating;

  // For technologies that are already proficient (rating >= 75)
  // we want them to appear at the bottom
  if (rating >= 75) {
    return 1000; // Large number to push them to the bottom
  }

  // For non-proficient technologies:
  // - Lower priority number (1-3) means higher importance
  // - Lower rating means higher importance
  return priority * (100 - rating);
};
