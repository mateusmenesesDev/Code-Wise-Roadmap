"use client";

import { useMutationState } from "@tanstack/react-query";
import { Button } from "~/components/ui/button";
import { categories } from "~/constants";
import { type RouterOutputs, api } from "~/trpc/react";
import type { CreateTechnology } from "~/types/Technology.type";
import { FormDialog } from "../Dialog/FormDialog";
import TechnologyCard from "./TechnologyCard";
import TechnologyForm from "./TechnologyForm";

type TechnologiesListProps = {
  initialData: RouterOutputs["technology"]["getAll"];
};

function TechnologiesList({ initialData }: TechnologiesListProps) {
  const { data: technologies } = api.technology.getAll.useQuery(undefined, {
    initialData,
  });

  const variables = useMutationState<CreateTechnology>({
    filters: {
      mutationKey: [["technology", "create"]],
      status: "pending",
    },
    select: (mutation) => mutation.state.variables as CreateTechnology,
  });

  const getCategoryByName = (name: string) => {
    return (
      categories.find((c) => c.name === name) || { name: name, color: "gray" }
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">Technologies</h2>
        <FormDialog
          title="Add Technology"
          description="Add a new technology to the list"
          trigger={<Button>Add Technology</Button>}
        >
          <TechnologyForm />
        </FormDialog>
      </div>

      {technologies.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No technologies added yet.</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => {
          const category = getCategoryByName(tech.category);
          return (
            <TechnologyCard key={tech.id} tech={tech} category={category} />
          );
        })}
        {variables[0] && (
          <TechnologyCard
            key={variables[0].name}
            tech={{ ...variables[0], id: 0 }}
            category={getCategoryByName(variables[0].category)}
            className="animate-pulse"
          />
        )}
      </div>
    </div>
  );
}

export default TechnologiesList;
