"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import GroupDetails from "@/components/features/dashboard/groups/GroupDetails";
import EditGroup from "@/components/features/dashboard/groups/EditGroup";
import DeleteGroup from "@/components/features/dashboard/groups/DeleteGroup";
import { Button } from "@/components/ui/button";

import { GroupType } from "@/types/Group";

type Props = {
  schoolId: string;
  group: GroupType;
  groups: GroupType[];
};

export function GroupActionsMenu({ schoolId, group, groups }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-4 max-w-20">
        <GroupDetails schoolId={schoolId} group={group} />
        <EditGroup schoolId={schoolId} group={group} groups={groups} />
        <DeleteGroup schoolId={schoolId} group={group} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
