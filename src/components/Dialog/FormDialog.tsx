import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export const FormDialog = ({
  title,
  description,
  children,
  trigger,
  saveButtonText,
  cancelButtonText,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  trigger: React.ReactNode;
  saveButtonText?: string;
  cancelButtonText?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogContent>{children}</DialogContent>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            {cancelButtonText ?? "Cancel"}
          </Button>
          <Button variant="default" onClick={() => setOpen(false)}>
            {saveButtonText ?? "Save"}
          </Button>
        </DialogFooter>
      </DialogPortal>
    </Dialog>
  );
};
