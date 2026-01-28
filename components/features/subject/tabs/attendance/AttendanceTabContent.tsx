import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import axios from "@/lib/axiosInstance";
import AddSession from "@/components/features/subject/tabs/attendance/AddSession";
import SessionsList from "@/components/features/subject/tabs/attendance/SessionsList";
import { SessionType } from "@/types/session";
import { SchoolUserType } from "@/types/SchoolUser";
import { StatusPlaceholder } from "@/components/shared/StatusPlaceholder";
import { NotebookPen } from "lucide-react";

type Props = {
  schoolId: string;
  subjectId: number;
  user: SchoolUserType;
};

async function getSessions(schoolId: string, subjectId: number) {
  const token = await getCookie("token", { cookies });
  const res = await axios.get(
    `/school/${schoolId}/subject/${subjectId}/session`,
    {
      headers: { Authorization: token },
    },
  );
  return res.data;
}

export default async function AttendanceTabContent({
  schoolId,
  subjectId,
  user,
}: Props) {
  let sessions: SessionType[] = [];
  let isError = false;

  try {
    sessions = await getSessions(schoolId, subjectId);
  } catch {
    isError = true;
  }

  return (
    <>
      <div className="mt-5 flex w-full items-center justify-between">
        <h1 className="text-primary text-3xl font-bold">Sessions</h1>
        {user.role !== "STUDENT" && sessions.length !== 0 && (
          <AddSession schoolId={schoolId} subjectId={subjectId} />
        )}
      </div>

      {isError && (
        <StatusPlaceholder
          title="Couldn't Fetch Assignments"
          description="Something went wrong and we could not get the attendance sessions, please refresh or try again later."
          icon={<NotebookPen />}
          variant="destructive"
        />
      )}

      {sessions.length === 0 && !isError ? (
        <StatusPlaceholder
          title={
            user.role === "STUDENT"
              ? "No Attendance Sessions Available"
              : "No Sessions Created"
          }
          description={
            user.role === "STUDENT"
              ? "There are currently no active attendance sessions. Please wait for your teacher to create one."
              : "You have not created any attendance sessions. Click below to start a new session for your students."
          }
          action={
            user.role !== "STUDENT" && (
              <AddSession schoolId={schoolId} subjectId={subjectId} />
            )
          }
          icon={<NotebookPen />}
        />
      ) : (
        <SessionsList
          sessions={sessions}
          schoolId={schoolId}
          subjectId={subjectId}
          user={user}
        />
      )}
    </>
  );
}
