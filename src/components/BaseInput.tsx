import { cn } from "~/utils";

export default function BaseInput(props: React.ComponentPropsWithoutRef<"input">) {
  return (
    <input
      {...props}
      className={cn(
        "rounded-md border-2 border-gray-300 px-3 py-1 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",
        props.className
      )}
    ></input>
  );
}
