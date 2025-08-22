'use client';

import { useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '~/components/ui/card';
import type { User } from '~/types/User.type';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '../ui/table';

type UserListProps = {
	users: User[];
};

export function UserList({ users }: UserListProps) {
	const router = useRouter();
	const redirectToUser = (id: string) => {
		router.push(`/admin/user/${id}`);
	};

	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>Users</CardTitle>
					<CardDescription>Manage user roadmaps</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Email</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{users.map((user) => (
								<TableRow key={user.id}>
									<TableCell>{user.email}</TableCell>
									<TableCell>
										<Button
											variant="outline"
											size="sm"
											onClick={() => redirectToUser(user.id)}
										>
											View Roadmap
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
