import { cn } from "@/lib/utils";
import { Reveal } from "@/src/components/motion/Reveal";

type SectionContainerProps = {
  id?: string;
  label?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function SectionContainer({
  id,
  label,
  title,
  description,
  align = "center",
  inverse = false,
  className,
  children,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <div className="container">
        {(label || title || description) && (
          <Reveal
            className={cn(
              "mb-10 max-w-3xl lg:mb-12",
              align === "center" && "mx-auto text-center",
              align === "left" && "text-left"
            )}
          >
            {label && (
              <p
                className={cn(
                  "mb-4 text-sm font-bold uppercase tracking-[0.22em]",
                  inverse ? "text-cyan-200" : "text-primary"
                )}
              >
                {label}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
                  inverse && "text-white"
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "mt-5 text-base leading-7",
                  inverse ? "text-slate-300" : "text-muted-foreground"
                )}
              >
                {description}
              </p>
            )}
          </Reveal>
        )}
        <Reveal delay={90}>{children}</Reveal>
      </div>
    </section>
  );
}
