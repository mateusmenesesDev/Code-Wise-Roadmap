"use client";

// import RatingBoard from "../components/rating/RatingBoard";
// import RoadmapView from "../components/roadmap/RoadmapView";
// import { useRoadmap } from "../context/RoadmapContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import { useState } from "react";
import { useAuth } from "~/hooks/useAuth";
import { api } from "~/trpc/react";
import { RoadmapView } from "./roadmap/RoadmapView";
import { RateBoard } from "./roadmap/rate/RateBoard";

export default function UserDashboard() {
  const { user } = useAuth();

  const userHasRated = api.skillRate.userHasRated.useQuery({
    userId: user?.id || "",
  });

  console.log(userHasRated.data);

  const [activeTab, setActiveTab] = useState("roadmap");

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
            <RateBoard />
          </TabsContent>

          <TabsContent value="roadmap" className="animate-in">
            <RoadmapView />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
