import type { Category } from "~/types/Category.type";

export const SEO = {
  appTitle: "Code Wise - PathMaker",
  appDescription: "Code Wise - PathMaker",
  appKeywords: "Code Wise, PathMaker",
  appAuthor: "Code Wise",
};

export const authErrors = {
  default: "An error occurred. Please try again.",
  strategy_for_user_invalid: "Your account is signup with Google",
  invalid_credentials: "Invalid email or password",
  form_identifier_not_found: "Invalid email or password",
  form_code_incorrect: "Code incorrect",
};

export const categories: Category[] = [
  {
    name: "Frontend",
    color: "border-[#6366f1/30] hover:border-[#6366f1]",
  },
  {
    name: "Backend",
    color: "border-[#8b5cf6/30] hover:border-[#8b5cf6]",
  },
  {
    name: "Database",
    color: "border-[#ec4899/30] hover:border-[#ec4899]",
  },
  {
    name: "DevOps",
    color: "border-[#14b8a6/30] hover:border-[#14b8a6]",
  },
  {
    name: "Cloud",
    color: "border-[#f97316/30] hover:border-[#f97316]",
  },
  {
    name: "Principles",
    color: "border-[#ec4899/30] hover:border-[#ec4899]",
  },
  {
    name: "Architecture",
    color: "border-[#14b8a6/30] hover:border-[#14b8a6]",
  },
  {
    name: "Testing",
    color: "border-[#f97316/30] hover:border-[#f97316]",
  },
];
