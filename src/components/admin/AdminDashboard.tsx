import { technologies } from "~/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TechnologiesList from "./TechnologiesList";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="mb-12 font-bold text-3xl">Admin Dashboard</h1>
      <Tabs defaultValue="technologies">
        <TabsList className="mb-6">
          <TabsTrigger value="technologies">Technologies</TabsTrigger>
          <TabsTrigger value="users" disabled>
            Users
          </TabsTrigger>
          <TabsTrigger value="settings" disabled>
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="technologies" className="animate-in">
          <TechnologiesList technologies={technologies} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
