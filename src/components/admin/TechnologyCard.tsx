import { Edit, Trash2 } from "lucide-react";
import { useInvalidateQuery } from "~/hooks/useInvalidateQuery";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";
import type { Category } from "~/types/Category.type";
import type { Technology } from "~/types/Technology.type";
import { ConfirmationDialog } from "../Dialog/ConfirmationDialog";
import { FormDialog } from "../Dialog/FormDialog";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Spinner } from "../ui/spinner";
import { TechnologyForm } from "./TechnologyForm";

interface TechnologyCardProps {
  tech: Technology;
  category: Category;
  className?: string;
}

export default function TechnologyCard({
  tech,
  category,
  className,
}: TechnologyCardProps) {
  const { invalidateQuery } = useInvalidateQuery();
  const deleteTechnology = api.technology.delete.useMutation({
    onSuccess: () => {
      invalidateQuery("technology", "getAll");
    },
  });

  const handleDelete = () => {
    deleteTechnology.mutate({ id: tech.id });
  };

  return (
    <Card className={cn("transition-all", category.color, className)}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">
              {tech.name}{" "}
              {deleteTechnology.isPending &&
                deleteTechnology.variables?.id === tech.id && (
                  <Spinner size="sm" className="ml-2" />
                )}
            </CardTitle>

            <CardDescription className="text-sm capitalize">
              {category.name} • Priority: {tech.priority}
              <br />
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <FormDialog
              title="Edit Technology"
              description="Edit the technology"
              trigger={
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Edit size={16} />
                </Button>
              }
            >
              {(onOpenChange) => (
                <TechnologyForm technology={tech} onOpenChange={onOpenChange} />
              )}
            </FormDialog>
            <ConfirmationDialog
              title="Delete Technology"
              description={`Are you sure you want to delete: ${tech.name}?`}
              onConfirm={handleDelete}
              trigger={
                <Button
                  variant="ghost"
                  className="h-8 w-8 text-destructive hover:text-destructive"
                >
                  <Trash2 size={16} />
                </Button>
              }
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{tech.description}</p>
      </CardContent>
    </Card>
  );
}
