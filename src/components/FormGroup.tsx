import React from "react";
import { cn } from "~/utils/cn";

const FormGroup = (props: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div {...props} className={cn("flex flex-col gap-y-1", props.className)}>
      {props.children}
    </div>
  );
};

export default FormGroup;
