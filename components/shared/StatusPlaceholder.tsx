import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  action?: React.ReactNode;
  variant?: "default" | "destructive" | "warning";
};

const VARIANT_COLORS = {
  default: "primary",
  destructive: "destructive",
  warning: "amber-700",
} as const;

export function StatusPlaceholder({
  title,
  description,
  icon,
  action,
  variant = "default",
}: Props) {
  return (
    <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
      <Empty>
        <EmptyHeader>
          <EmptyMedia
            variant="icon"
            className={`bg-${VARIANT_COLORS[variant]}/15 text-${VARIANT_COLORS[variant]} h-14 w-14`}
          >
            {icon}
          </EmptyMedia>
          <EmptyTitle className={`text-${VARIANT_COLORS[variant]} text-2xl`}>
            {title}
          </EmptyTitle>
          <EmptyDescription>{description}</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>{action}</EmptyContent>
      </Empty>
    </div>
  );
}
