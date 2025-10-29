import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SessionAttendersTable from "@/components/features/subject/tabs/attendance/SessionAttendanceTable";

import axios from "@/lib/axiosInstance";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { SessionType } from "@/types/session";

import { SessionAttenderType } from "@/types/SessionAttenderType";

export async function getAttenders(
  schoolId: string,
  subjectId: number,
  sessionId: number,
) {
  const token = await getCookie("token", { cookies });
  const res = await axios.get(
    `/school/${schoolId}/subject/${subjectId}/session/${sessionId}/attenders`,
    {
      headers: { Authorization: token },
    },
  );
  return res.data;
}
type Props = {
  schoolId: string;
  subjectId: number;
  session: SessionType;
};

export default async function AttendanceDetail({
  schoolId,
  subjectId,
  session,
}: Props) {
  const attenders: SessionAttenderType[] = await getAttenders(
    schoolId,
    subjectId,
    session.id,
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          {session._count.attenders} Attended
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[60rem]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            {session.name}
          </DialogTitle>
        </DialogHeader>

        <SessionAttendersTable
          session={session}
          subjectId={subjectId}
          schoolId={schoolId}
          data={attenders}
        />
      </DialogContent>
    </Dialog>
  );
}
