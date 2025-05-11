"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { categories } from "~/constants";
import type { Technology } from "~/types/Technology.type";
import TechnologyCard from "./TechnologyCard";
import TechnologyForm from "./TechnologyForm";

type TechnologiesListProps = {
  technologies: Technology[];
};

function TechnologiesList({ technologies }: TechnologiesListProps) {
  const [editTechnology, setEditTechnology] = useState<Technology | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const getCategoryByName = (name: string) => {
    return (
      categories.find((c) => c.name === name) || { name: name, color: "gray" }
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">Technologies</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus size={16} /> Add Technology
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Technology</DialogTitle>
              <DialogDescription>
                Create a new technology or concept for developers to rate.
              </DialogDescription>
            </DialogHeader>
            <TechnologyForm onCancel={() => setIsAddDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => {
          const category = getCategoryByName(tech.category);
          return (
            <TechnologyCard key={tech.id} tech={tech} category={category} />
          );
        })}
      </div>

      {technologies.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            No technologies added yet. Click "Add Technology" to get started.
          </p>
        </div>
      )}

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Technology</DialogTitle>
            <DialogDescription>
              Update the technology details below.
            </DialogDescription>
          </DialogHeader>
          {editTechnology && (
            <TechnologyForm
              technology={editTechnology}
              onCancel={() => {
                setEditTechnology(null);
                setIsEditDialogOpen(false);
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="max-w-xs">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this technology? This action
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => {}}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TechnologiesList;
