"use client";

// import RatingBoard from "../components/rating/RatingBoard";
// import RoadmapView from "../components/roadmap/RoadmapView";
// import { useRoadmap } from "../context/RoadmapContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import { useState } from "react";
import { RateBoard } from "./roadmap/rate/RateBoard";

export default function UserDashboard() {
  // const { generatedRoadmap } = useRoadmap();
  const [activeTab, setActiveTab] = useState("rate");
  const roadmap = [];

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
            <TabsTrigger value="roadmap" disabled={roadmap.length === 0}>
              Your Roadmap
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rate" className="animate-in">
            <RateBoard />
          </TabsContent>

          <TabsContent value="roadmap" className="animate-in">
            {/* <RoadmapView /> */}
            <div>Roadmap</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
