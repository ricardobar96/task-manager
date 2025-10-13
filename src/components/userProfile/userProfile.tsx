import type { FC, ReactElement } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const UserProfile: FC<{ firstName: string, lastName: string }> = (props): ReactElement => {
  const { firstName = "Ricardo", lastName = "Baloira" } = props;

  return (
    <div className="flex flex-col w-full py-8 items-center">
      <Avatar className={`mb-4 ${cn("h-24", "w-24")}`}>
        <AvatarFallback
          className={`text-2xl font-semibold ${cn(
            "bg-sky-600",
            "dark:bg-sky-600"
          )}`}
        >
          {firstName.slice(0, 1)}{lastName.slice(0, 1)}
        </AvatarFallback>
      </Avatar>
      <h4>{firstName} {lastName}</h4>
    </div>
  );
};