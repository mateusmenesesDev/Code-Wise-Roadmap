import Header from "./Header";
// import RatingBoard from "../components/rating/RatingBoard";
// import RoadmapView from "../components/roadmap/RoadmapView";
// import { useRoadmap } from "../context/RoadmapContext";

export default function UserDashboard() {
  // const { generatedRoadmap } = useRoadmap();
  // const [activeTab, setActiveTab] = useState(
  //   generatedRoadmap.length > 0 ? "roadmap" : "rate"
  // );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Developer Roadmap</h1>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList>
            <TabsTrigger value="rate">Rate Your Skills</TabsTrigger>
            <TabsTrigger
              value="roadmap"
              disabled={generatedRoadmap.length === 0}
            >
              Your Roadmap
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rate" className="animate-in">
            <RatingBoard />
          </TabsContent>

          <TabsContent value="roadmap" className="animate-in">
            <RoadmapView />
          </TabsContent>
        </Tabs>
      </div> */}
    </div>
  );
}
