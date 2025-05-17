import { getUserList } from "~/server/auth/authServerRequests";
import { api } from "~/trpc/server";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TechnologiesList from "./TechnologiesList";
import { UserList } from "./UserList";

export default async function AdminDashboard() {
  const technologies = await api.technology.getAll();
  const users = await getUserList();

  return (
    <div>
      <h1 className="mb-12 font-bold text-3xl">Admin Dashboard</h1>
      <Tabs defaultValue="technologies">
        <TabsList className="mb-6">
          <TabsTrigger value="technologies">Technologies</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="settings" disabled>
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="technologies" className="animate-in">
          <TechnologiesList initialData={technologies} />
        </TabsContent>
        <TabsContent value="users" className="animate-in">
          <UserList users={users} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
