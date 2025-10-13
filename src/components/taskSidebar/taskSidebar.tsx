import type { FC, ReactElement } from "react";
import { Card } from "@/components/ui/card";
import { UserProfile } from "../userProfile/userProfile";
import { CreateTaskForm } from "../createTaskForm/createTaskForm";
import { Logout } from "../logout/logout";

export const TaskSidebar: FC = (): ReactElement => {
  return (
    <section>
      <Card>
        <UserProfile />
        <CreateTaskForm />
        <Logout />
      </Card>
    </section>
  );
};