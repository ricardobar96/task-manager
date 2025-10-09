import type { FC, ReactElement } from "react";

export const Tasks: FC = (): ReactElement => {
    return (
        <section className="flex flex-row w-full p-4 gap-8">
            <section className="flex basis-2/3 justify-center">
                <div className="flex flex-col w-4/5">
                    <h1 className="text-white font-bold text-2xl mb-8">
                        #1 Task - 9 October, 2025
                    </h1>
                    <div className="flex justify-around">
                        <p className="text-white">Counter 1</p>
                        <p className="text-white">Counter 2</p>
                        <p className="text-white">Counter 3</p>
                    </div>
                </div>
            </section>
            <section className="flex basis-1/3 bg-blue-300">
                Create tasks
            </section>
        </section>
    );
}