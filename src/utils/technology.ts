export const getTechnologyGroupColor = (group: string): string => {
  switch (group) {
    case "frontend":
      return "tech-frontend";
    case "backend":
      return "tech-backend";
    case "principles":
      return "tech-principles";
    case "architecture":
      return "tech-architecture";
    case "testing":
      return "tech-testing";
    default:
      return "gray-500";
  }
};
