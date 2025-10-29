import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  action?: React.ReactNode;
  variant?: "default" | "destructive" | "warning";
};

export function EmptyState({
  title,
  description,
  icon,
  action,
  variant = "default",
}: Props) {
  const variantColors = {
    default: "primary",
    destructive: "destructive",
    warning: "amber-600",
  };
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Empty>
        <EmptyHeader>
          <EmptyMedia
            variant="icon"
            className={clsx(
              `bg-${variantColors[variant]}/15 text-${variantColors[variant]} h-14 w-14`,
            )}
          >
            {icon}
          </EmptyMedia>
          <EmptyTitle className={`text-${variantColors[variant]} text-2xl`}>
            {title}
          </EmptyTitle>
          <EmptyDescription>{description}</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>{action}</EmptyContent>
      </Empty>
    </div>
  );
}
