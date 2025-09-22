import React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  className,
}) => {
  return (
    <div
      role="separator"
      className={cn(
        "bg-secondary-dark",
        orientation === "horizontal" ? "w-1/2 h-px my-4" : "h-full w-px mx-4",
        className
      )}
    />
  );
};

export default Separator;
