import { cn, trackResumeDownload } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  download,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:shadow-lg hover:shadow-accent-blue/25",
    outline:
      "border-2 border-accent-blue/50 text-heading hover:bg-accent-blue/10 hover:border-accent-blue",
    ghost: "text-muted hover:text-heading hover:bg-card",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-base",
    md: "px-5 py-2.5 text-[length:var(--font-size-body)]",
    lg: "px-6 py-3 text-[length:var(--font-size-body)]",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        download={download || undefined}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        onClick={download ? trackResumeDownload : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
