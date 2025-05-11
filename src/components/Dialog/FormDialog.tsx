import { atom, useAtom } from "jotai";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export const dialogAtom = atom(false);

export const FormDialog = ({
  title,
  description,
  children,
  trigger,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  trigger: React.ReactNode;
}) => {
  const [open, setOpen] = useAtom(dialogAtom);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
