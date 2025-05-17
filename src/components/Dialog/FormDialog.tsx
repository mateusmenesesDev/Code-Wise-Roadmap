import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface FormDialogProps {
  title: string;
  description: string;
  children: (onOpenChange: (open: boolean) => void) => React.ReactNode;
  trigger: React.ReactNode;
}

export const FormDialog = ({
  title,
  description,
  children,
  trigger,
}: FormDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children(setOpen)}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
