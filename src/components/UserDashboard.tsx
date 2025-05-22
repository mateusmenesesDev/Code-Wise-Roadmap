'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

import { useAuth } from '~/hooks/useAuth';
import { useTabs } from '~/hooks/useTabs';
import { api } from '~/trpc/react';
import { RoadmapView } from './roadmap/RoadmapView';
import { RateBoard } from './roadmap/rate/RateBoard';

type UserDashboardProps = {
	userId?: string;
};

export default function UserDashboard({ userId }: UserDashboardProps) {
	const { user } = useAuth();

	const userHasRated = api.skillRate.userHasRated.useQuery(
		{
			userId: userId || user?.id || ''
		},
		{
			enabled: !!userId || !!user?.id
		}
	);

	const { activeTab, setActiveTab } = useTabs();

	return (
		<div className="bg-background">
			<div className="container mx-auto px-4 py-8">
				<h1 className="mb-6 font-bold text-3xl">Developer Roadmap</h1>

				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className="space-y-6"
				>
					<TabsList>
						<TabsTrigger value="rate">Rate Your Skills</TabsTrigger>
						<TabsTrigger value="roadmap" disabled={!userHasRated.data}>
							Your Roadmap
						</TabsTrigger>
					</TabsList>

					<TabsContent value="rate" className="animate-in">
						<RateBoard userId={userId} />
					</TabsContent>

					<TabsContent value="roadmap" className="animate-in">
						<RoadmapView userId={userId} />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
