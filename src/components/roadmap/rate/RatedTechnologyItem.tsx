import { MoveHorizontal } from "lucide-react";
import { useRef } from "react";
import { useDrag } from "react-dnd";
import { Card, CardContent } from "~/components/ui/card";
import type { Technology } from "~/types/Technology.type";
import { getTechnologyGroupColor } from "~/utils/technology";

interface RatedTechnologyItemProps {
  technology: Technology;
}

export function RatedTechnologyItem({ technology }: RatedTechnologyItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag({
    type: "rated-technology",
    item: { name: technology.name, type: "rated-technology" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  drag(ref);

  return (
    <div
      ref={ref}
      className={`${isDragging ? "opacity-50" : "opacity-100"} group`}
    >
      <Card
        className={`tech-card ${getTechnologyGroupColor(
          technology.category
        )} relative cursor-grab active:cursor-grabbing`}
      >
        <CardContent className="p-3">
          <div className="font-medium">{technology.name}</div>
          <div className="text-muted-foreground text-xs capitalize">
            {technology.category}
          </div>
          <div className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
            <MoveHorizontal className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
