"use client";

import { Button } from "~/components/ui/button";
import { categories } from "~/constants";
import { type RouterOutputs, api } from "~/trpc/react";
import { FormDialog } from "../Dialog/FormDialog";
import TechnologyCard from "./TechnologyCard";
import TechnologyForm from "./TechnologyForm";

type TechnologiesListProps = {
  initialData: RouterOutputs["technology"]["getAll"];
};

function TechnologiesList({ initialData }: TechnologiesListProps) {
  const { data: technologies } = api.technology.getAll.useQuery(undefined, {
    initialData,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
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
      </div>
    </div>
  );
}

export default TechnologiesList;
