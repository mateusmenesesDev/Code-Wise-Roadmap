interface RatingProgressProps {
	ratedCount: number;
	totalCount: number;
}

export function RatingProgress({
	ratedCount,
	totalCount
}: RatingProgressProps) {
	const progressPercentage = Math.floor((ratedCount / totalCount) * 100);

	return (
		<div className="mt-4 flex items-center gap-2">
			<div className="h-2 flex-1 rounded-full bg-muted">
				<div
					className="h-full rounded-full bg-primary transition-all duration-300 ease-in-out"
					style={{
						width: `${progressPercentage}%`
					}}
				/>
			</div>
			<span className="text-muted-foreground text-sm">
				{ratedCount}/{totalCount} rated
			</span>
		</div>
	);
}
