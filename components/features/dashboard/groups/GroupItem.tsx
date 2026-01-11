import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users } from "lucide-react";

import { GroupType } from "@/types/Group";
import { GroupActionsMenu } from "@/components/features/dashboard/groups/GroupActionsMenu";

type Props = {
  group: GroupType;
  schoolId: string;
  groups: GroupType[];
};

export default function GroupItem({ group, schoolId, groups }: Props) {
  const hasChildren = group.children && group.children.length > 0;

  return (
    <>
      {hasChildren ? (
        <AccordionItem value={String(group.id)}>
          <div className="text-md group hover:bg-primary/5 ml-2 flex h-12 w-full items-center justify-start rounded-md px-4 font-medium">
            {" "}
            <AccordionTrigger className="md p-0">
              {" "}
              <div className="flex items-center gap-1">
                <Users className="text-primary size-4" />
                {group.name}
              </div>
            </AccordionTrigger>
            <div className="ml-auto flex items-center gap-2 lg:opacity-0 lg:group-hover:opacity-100">
              <>
                <GroupActionsMenu
                  schoolId={schoolId}
                  group={group}
                  groups={groups}
                />
              </>
            </div>
          </div>

          <AccordionContent className="border-primary/30 text-md ml-4 border-l">
            {group.children &&
              group.children.map((child) => (
                <GroupItem
                  key={child.id}
                  group={child}
                  schoolId={schoolId}
                  groups={groups}
                />
              ))}
          </AccordionContent>
        </AccordionItem>
      ) : (
        <div className="text-md group hover:bg-primary/5 ml-2 flex h-12 w-full cursor-default items-center justify-between rounded-md px-4 font-medium">
          <div className="flex items-center gap-1">
            <Users className="text-primary size-4" />
            {group.name}
          </div>
          <div className="flex items-center gap-2 lg:opacity-0 lg:group-hover:opacity-100">
            <GroupActionsMenu
              schoolId={schoolId}
              group={group}
              groups={groups}
            />
          </div>
        </div>
      )}
    </>
  );
}
