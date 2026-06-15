import { cn } from "@/lib/utils";

type AnimatedCardProps = {
  className?: string;
  children: React.ReactNode;
};

export function AnimatedCard({ className, children }: AnimatedCardProps) {
  return (
    <div
      className={cn(
        "h-full motion-safe:transition motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
