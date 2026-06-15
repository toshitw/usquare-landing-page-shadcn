import { cn } from "@/lib/utils";

type BorderGlowProps = {
  className?: string;
  children: React.ReactNode;
};

export function BorderGlow({ className, children }: BorderGlowProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-cyan-300/20 shadow-[0_0_40px_rgba(17,183,233,0.12)] before:pointer-events-none before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-cyan-200/70 before:to-transparent",
        className
      )}
    >
      <div className="relative">{children}</div>
    </div>
  );
}
