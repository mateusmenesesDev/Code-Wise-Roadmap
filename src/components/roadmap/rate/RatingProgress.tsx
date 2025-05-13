interface RatingProgressProps {
  ratedCount: number;
  totalCount: number;
}

export function RatingProgress({
  ratedCount,
  totalCount,
}: RatingProgressProps) {
  return (
    <div className="mt-4 flex items-center gap-2">
      <div className="h-2 flex-1 rounded-full bg-primary">
        <div
          className="h-full rounded-full bg-primary"
          style={{
            width: `${Math.floor((ratedCount / totalCount) * 100)}%`,
          }}
        />
      </div>
      <span className="text-muted-foreground text-sm">
        {ratedCount}/{totalCount} rated
      </span>
    </div>
  );
}
