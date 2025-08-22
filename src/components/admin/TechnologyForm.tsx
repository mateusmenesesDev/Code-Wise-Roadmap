'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '~/components/ui/select';
import { Textarea } from '~/components/ui/textarea';
import { categories } from '~/constants';
import { useInvalidateQuery } from '~/hooks/useInvalidateQuery';
import { createTechnologySchema } from '~/schemas/technology.schema';
import { api } from '~/trpc/react';
import type { CreateTechnology, Technology } from '~/types/Technology.type';

interface TechnologyFormProps {
	technology?: Technology;
	onOpenChange?: (open: boolean) => void;
}

export const TechnologyForm = ({
	technology,
	onOpenChange
}: TechnologyFormProps) => {
	const { invalidateQuery } = useInvalidateQuery();

	const { register, handleSubmit, setValue, watch } = useForm<CreateTechnology>(
		{
			resolver: zodResolver(createTechnologySchema),
			defaultValues: technology
		}
	);

	const category = watch('category');
	const createTechnology = api.technology.create.useMutation({
		onError: (error) => {
			console.error(error);
			if (error.data?.code === 'CONFLICT') {
				return toast.error('Technology already exists');
			}
			toast.error('Something went wrong');
		},
		onSettled: () => {
			invalidateQuery('technology', 'getAll');
		},
		mutationKey: [['technology', 'create']]
	});

	const updateTechnology = api.technology.update.useMutation({
		onError: (error) => {
			console.error(error);
			toast.error('Something went wrong');
		},
		onSettled: () => {
			invalidateQuery('technology', 'getAll');
		},
		mutationKey: [['technology', 'update']]
	});

	const onSubmit: SubmitHandler<CreateTechnology> = (data) => {
		onOpenChange?.(false);
		if (technology) {
			updateTechnology.mutate({ ...data, id: technology.id });
		} else {
			createTechnology.mutate(data);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="name">Technology Name</Label>
				<Input
					id="name"
					{...register('name')}
					placeholder="e.g., React, Python, SQL"
					required
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="category">Category</Label>
				<Select
					onValueChange={(value) => setValue('category', value)}
					value={category}
				>
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
					{...register('priority')}
					required
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="description">Description</Label>
				<Textarea
					id="description"
					{...register('description')}
					placeholder="Briefly describe this technology or concept"
					className="min-h-[100px]"
					required
				/>
			</div>

			<div className="flex justify-end gap-2">
				<Button
					type="button"
					variant="outline"
					onClick={() => onOpenChange?.(false)}
				>
					Cancel
				</Button>
				<Button type="submit">
					{technology ? 'Update' : 'Add'} Technology
				</Button>
			</div>
		</form>
	);
};

export default TechnologyForm;
