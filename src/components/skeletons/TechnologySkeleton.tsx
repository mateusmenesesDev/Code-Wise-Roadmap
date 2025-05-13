export function TechnologySkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((category) => (
        <div key={category} className="space-y-4">
          <div className="h-7 w-32 animate-pulse rounded bg-muted" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="animate-pulse rounded-lg border bg-card p-3"
              >
                <div className="h-5 w-24 rounded bg-muted" />
                <div className="mt-2 h-4 w-16 rounded bg-muted" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
