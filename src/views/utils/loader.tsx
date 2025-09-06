import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

export const LoadingSpinner = ({ center = false }) => (
  <Loader className={cn("animate-spin", { "w-full mx-auto": center })} />
);
