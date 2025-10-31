import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import axios from "@/lib/axiosInstance";
import { formatGroups } from "@/lib/utils";

import AddGroup from "@/components/features/dashboard/groups/AddGroup";
import GroupItem from "@/components/features/dashboard/groups/GroupItem";
import { StatusPlaceholder } from "@/components/shared/StatusPlaceholder";
import { Accordion } from "@/components/ui/accordion";
import { Users } from "lucide-react";

import { GroupType } from "@/types/Group";

export default async function GroupsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const schoolId = (await params).id;
  const token = await getCookie("token", { cookies });
  let groups: GroupType[] = [];
  let isError = false;

  try {
    const res = await axios.get(`/school/${schoolId}/group`, {
      headers: { Authorization: token },
    });
    groups = formatGroups(res.data);
  } catch {
    isError = true;
  }

  return (
    <div className="relative flex h-full w-full flex-col gap-8 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-primary text-3xl font-semibold">Groups</h1>
        {groups.length !== 0 && (
          <AddGroup groups={groups} schoolId={schoolId} />
        )}
      </div>

      {isError && (
        <StatusPlaceholder
          title="Couldn't Fetch Groups"
          description="Something went wrong and we could not get the groups, please refresh or try again later."
          icon={<Users />}
          variant="destructive"
        />
      )}

      {groups.length === 0 && !isError ? (
        <StatusPlaceholder
          title="No groups yet"
          description="You haven't created any groups yet. Get started by creating your first group."
          action={<AddGroup groups={groups} schoolId={schoolId} />}
          icon={<Users />}
        />
      ) : (
        <Accordion type="multiple">
          {groups.map((group) => (
            <GroupItem
              key={group.id}
              schoolId={schoolId}
              group={group}
              groups={groups}
            />
          ))}
        </Accordion>
      )}
    </div>
  );
}
