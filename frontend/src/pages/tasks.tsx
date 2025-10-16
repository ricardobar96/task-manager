import { TasksCounter } from "@/components/tasksCounter/tasksCounter";
import type { FC, ReactElement } from "react";
import { Task } from "@/components/task/task";
import { TaskSidebar } from "@/components/taskSidebar/taskSidebar";
import { useFetchTasks } from "@/hooks/useFetchTasks.hook";
import type { ITask } from "@/types/task.interface";

export const Tasks: FC = (): ReactElement => {
    const { data, isError, isSuccess, isPending, error } = useFetchTasks();
    return (
        <section className="flex flex-row w-full p-4 gap-8">
            <section className="flex basis-2/3 justify-center">
                <div className="flex flex-col w-4/5">
                    <h1 className="text-white font-bold text-2xl mb-8">
                        Current tasks
                    </h1>
                    <div className="flex justify-around mb-12">
                        <TasksCounter
                            status="todo"
                            count={
                                data && data.meta && "todoTasks" in data.meta
                                ? (data.meta.todoTasks as number)
                                : 0
                            }
                            />
                            <TasksCounter
                            status="inProgress"
                            count={
                                data && data.meta && "inProgressTasks" in data.meta
                                ? (data.meta.inProgressTasks as number)
                                : 0
                            }
                            />
                            <TasksCounter
                            status="completed"
                            count={
                                data && data.meta && "completedTasks" in data.meta
                                ? (data.meta.completedTasks as number)
                                : 0
                            }
                            />
                    </div>
                        {data &&
                    Array.isArray(data.data) && data.data.every(
                    (item): item is ITask =>
                        "_id" in item &&
                        "title" in item &&
                        "description" in item &&
                        "status" in item &&
                        "priority" in item &&
                        "dueDate" in item
                    ) &&
                    data.data.map((task: ITask) => (
                    <Task
                        key={task["_id"]}
                        dueDate={task.dueDate}
                        description={task.description}
                        status={task.status}
                        priority={task.priority}
                        title={task.title}
                    />
                    ))}
                </div>
            </section>
            <section className="flex basis-1/3">
                <TaskSidebar/>
            </section>
        </section>
    );
}