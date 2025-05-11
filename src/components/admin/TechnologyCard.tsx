import { Edit, Trash2 } from "lucide-react";
import { cn } from "~/lib/utils";
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
import { TechnologyForm } from "./TechnologyForm";
interface TechnologyCardProps {
  tech: Technology;
  category: Category;
}

export default function TechnologyCard({
  tech,
  category,
}: TechnologyCardProps) {
  return (
    <Card className={cn("transition-all", category.color)}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{tech.name}</CardTitle>
            <CardDescription className="text-sm capitalize">
              {category.name} • Priority: {tech.priority}
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
              <TechnologyForm onCancel={() => {}} />
            </FormDialog>
            <ConfirmationDialog
              title="Delete Technology"
              description={`Are you sure you want to delete: ${tech.name}?`}
              onConfirm={() => {}}
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
