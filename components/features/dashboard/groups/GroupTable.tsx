"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { DataTable } from "@/components/shared/DataTable";
import { GetColumns } from "@/components/shared/columns";
import AssignGroup from "@/components/shared/AssignGroup";
import UnassignGroup from "@/components/shared/UnassignGroup";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Users } from "lucide-react";
import { LoaderCircle as SpinnerIcon } from "lucide-react";

import { getMembers } from "@/fetches/member-client";
import { GroupType } from "@/types/Group";
import { MemberType } from "@/types/member";
import { StatusPlaceholder } from "@/components/shared/StatusPlaceholder";

type Props = {
  schoolId: string;
  group: GroupType;
};

export default function GroupTable({ group, schoolId }: Props) {
  const [selectedMemberIds, setSelectedMemberIds] = useState<number[]>([]);
  const { data, isLoading, isError } = useQuery<MemberType[]>({
    queryKey: ["members"],
    queryFn: () => getMembers(schoolId),
  });

  const columns = GetColumns((member) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <div className="flex w-full flex-col">
          <AssignGroup
            schoolId={schoolId}
            selectedMemberIds={[member.id]}
            assignGroupMode="multiple"
            className="bg-card hover:bg-secondary justify-start shadow-none"
          />
          <UnassignGroup
            schoolId={schoolId}
            selectedMemberIds={[member.id]}
            className="bg-card hover:bg-secondary w-full justify-start shadow-none"
            unassignGroupMode="multiple"
          />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(member.email)}
        >
          Copy member email
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ));

  if (isLoading) {
    return (
      <SpinnerIcon className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" />
    );
  }
  if (isError) {
    return (
      <StatusPlaceholder
        title="Couldn't Fetch Members"
        description="Something went wrong and we could not get the members, please refresh or try again later."
        icon={<Users />}
        variant="destructive"
      />
    );
  }
  return (
    data && (
      <DataTable
        setSelectedMemberIds={setSelectedMemberIds}
        columns={columns}
        data={data}
        defaultFilteredGroupIds={[group.id]}
        schoolId={schoolId}
      >
        <>
          <AssignGroup
            schoolId={schoolId}
            selectedMemberIds={selectedMemberIds}
            assignGroupMode="single"
            groupId={group.id}
          />
          <UnassignGroup
            schoolId={schoolId}
            selectedMemberIds={selectedMemberIds}
            unassignGroupMode="single"
            groupId={group.id}
          />
        </>
      </DataTable>
    )
  );
}
