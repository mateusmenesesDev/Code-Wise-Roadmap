'use client';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '@radix-ui/react-collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

type CollapsibleCategoryProps = {
	children: React.ReactNode;
	title: React.ReactNode;
	icon: React.ReactNode;
	iconColor: string;
	techCount: number;
};

export default function CollapsibleCategory({
	children,
	title,
	icon,
	techCount
}: CollapsibleCategoryProps) {
	const [open, setOpen] = useState(false);

	return (
		<Collapsible className="mb-4" open={open} onOpenChange={setOpen}>
			<CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between rounded-lg bg-card p-4 text-left transition-colors hover:bg-card/90">
				<div className="flex items-center gap-3">
					<div className="flex items-center justify-center rounded-full bg-muted p-2">
						{icon}
					</div>
					<h3 className="font-medium text-xl">{title}</h3>
					<span className="text-muted-foreground text-sm">
						({techCount} technologies)
					</span>
				</div>
				<div className="flex items-center">
					{open ? (
						<ChevronUp className="h-5 w-5 text-muted-foreground" />
					) : (
						<ChevronDown className="h-5 w-5 text-muted-foreground" />
					)}
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent className="mt-2 rounded-none">
				<div>{children}</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
