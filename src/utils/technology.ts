export const getTechnologyGroupColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "frontend":
      return "border-blue-500/30 bg-blue-500/10";
    case "backend":
      return "border-green-500/30 bg-green-500/10";
    case "database":
      return "border-yellow-500/30 bg-yellow-500/10";
    case "devops":
      return "border-purple-500/30 bg-purple-500/10";
    case "mobile":
      return "border-pink-500/30 bg-pink-500/10";
    case "testing":
      return "border-orange-500/30 bg-orange-500/10";
    default:
      return "border-gray-500/30 bg-gray-500/10";
  }
};
