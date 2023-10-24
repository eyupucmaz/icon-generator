import { cn } from "~/utils";

export default function BaseButton(props: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-md bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-600 active:bg-blue-800",
        props.className
      )}
    ></button>
  );
}
