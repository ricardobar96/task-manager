import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { ITask } from "@/types/task.interface";
import type { FC, ReactElement } from "react";
    
export const Task: FC<ITask> = (props: ITask): ReactElement => {
  const {title, description, status, priority, dueDate} = props;
  let formattedDate = new Date(dueDate).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })

  return (
    <Card className="w-full mb-8">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="basis-2/3 leading-8">
          {title}
        </CardTitle>
        <div>
          <Badge className="mr-2" variant="outline">
            {formattedDate}
          </Badge>
          {priority === "medium" && (
            <Badge className="bg-yellow-800" variant="outline">
              {priority}
            </Badge>
          )}
          {priority === "high" && (
            <Badge className="bg-red-800" variant="outline">
              {priority}
            </Badge>
          )}
          {priority === "low" && (
            <Badge className="bg-blue-800" variant="outline">
              {priority}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-row items-center">
          <Switch id="in-progress" checked={status === "inProgress"? true : false}/>
          <Label className="ml-4" htmlFor="in-progress">
            In Progress
          </Label>
        </div>
        <Button>Completed</Button>
      </CardFooter>
    </Card>
  );
}