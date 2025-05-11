"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { categories } from "~/constants";
import { createTechnologySchema } from "~/schemas/technology.schema";
import type { CreateTechnology, Technology } from "~/types/Technology.type";

interface TechnologyFormProps {
  technology?: Technology;
  onCancel: () => void;
}

export const TechnologyForm = ({
  technology,
  onCancel,
}: TechnologyFormProps) => {
  const { register, handleSubmit } = useForm<CreateTechnology>({
    resolver: zodResolver(createTechnologySchema),
  });

  const onSubmit: SubmitHandler<CreateTechnology> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Technology Name</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="e.g., React, Python, SQL"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select {...register("category")}>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.name} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="priority">Priority (1-10, 1 is highest)</Label>
        <Input
          id="priority"
          type="number"
          min="1"
          max="10"
          {...register("priority")}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          {...register("description")}
          placeholder="Briefly describe this technology or concept"
          className="min-h-[100px]"
          required
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {technology ? "Update" : "Add"} Technology
        </Button>
      </div>
    </form>
  );
};

export default TechnologyForm;
