"use client";

import { AlignJustify, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import GroupTable from "@/components/features/dashboard/groups/GroupTable";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { GroupType } from "@/types/Group";
import { formatNumber } from "@/lib/utils";

type Props = {
  schoolId: string;
  group: GroupType;
};

export default function GroupDetails({ schoolId, group }: Props) {
  const memberCount = formatNumber(group._count.members);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-blue-800/10 text-blue-800 hover:bg-blue-800/15"
          size="sm"
          variant="outline"
        >
          <AlignJustify size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[60rem]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            {group.name}{" "}
            <Badge variant="outline" className="text-sm">
              <Users className="text-primary" />
              {memberCount} <span>member(s)</span>
            </Badge>
          </DialogTitle>
        </DialogHeader>
        <div className="w-full overflow-scroll p-1">
          <GroupTable schoolId={schoolId} group={group} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
