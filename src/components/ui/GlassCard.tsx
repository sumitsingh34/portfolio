import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  hover?: boolean;
  children: React.ReactNode;
}

export default function GlassCard({ className, hover = true, children }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl glass",
        hover && "glass-hover transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
