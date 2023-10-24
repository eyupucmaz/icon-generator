import { cn } from "~/utils";

export default function FormGroup(props: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} className={cn("flex flex-col gap-y-1", props.className)}>
      {props.children}
    </div>
  );
}
