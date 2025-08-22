'use client';

import { useState } from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogPortal,
	DialogTitle,
	DialogTrigger
} from '~/components/ui/dialog';
import { Button } from '../ui/button';
type ConfirmationDialogProps = {
	title: string;
	description: string;
	onConfirm: () => void;
	trigger: React.ReactNode;
};

export function ConfirmationDialog({
	title,
	description,
	onConfirm,
	trigger
}: ConfirmationDialogProps) {
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
					<DialogFooter>
						<Button variant="outline" onClick={() => setOpen(false)}>
							Cancel
						</Button>
						<Button
							variant="default"
							onClick={() => {
								onConfirm();
								setOpen(false);
							}}
						>
							Confirm
						</Button>
					</DialogFooter>
				</DialogContent>
			</DialogPortal>
		</Dialog>
	);
}
