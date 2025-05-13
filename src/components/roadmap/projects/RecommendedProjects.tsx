import { BookOpen, Code2, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function RecommendedProjects() {
  return (
    <div className="mt-8 space-y-4 border-border border-t pt-8">
      <h3 className="font-medium text-xl">Recommended Projects</h3>
      <p className="mb-4 text-muted-foreground">
        These projects will help you improve the skills you need to work on:
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="relative overflow-hidden border-dashed">
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="text-center">
              <Rocket className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="font-medium">Coming Soon</p>
            </div>
          </div>
          <CardHeader>
            <CardTitle>Personal Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Code2 className="h-4 w-4" />
                <span className="text-sm">HTML, CSS, JavaScript</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Build your own portfolio website to showcase your skills and
                projects.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm">Beginner Level</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-dashed">
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="text-center">
              <Rocket className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="font-medium">Coming Soon</p>
            </div>
          </div>
          <CardHeader>
            <CardTitle>Todo List App</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Code2 className="h-4 w-4" />
                <span className="text-sm">React, TypeScript</span>
              </div>
              <p className='text-muted-foreground text-sm'>
                Create a full-featured todo list application with CRUD
                operations.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm">Intermediate Level</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-dashed">
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="text-center">
              <Rocket className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="font-medium">Coming Soon</p>
            </div>
          </div>
          <CardHeader>
            <CardTitle>Weather Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Code2 className="h-4 w-4" />
                <span className="text-sm">React, APIs, Tailwind</span>
              </div>
              <p className='text-muted-foreground text-sm'>
                Build a weather dashboard that shows current weather and
                forecast data.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm">Advanced Level</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
