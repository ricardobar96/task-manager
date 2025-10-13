import { Input } from "@/components/ui/input";

export const CreateTaskForm = () => {
   return (
    <div>
      <h2 className="text-xl mb-4">Create task</h2>
      <form>
        <div className="py-2">
          <Input type="text" placeholder="Title" />
        </div>
      </form>
    </div>
   );
};