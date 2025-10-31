import AddAssignment from "@/components/features/subject/tabs/documents/AddAssignment";
import { StudentAssignmentCard } from "./StudentAssignmentCard";
import { TeacherAssignmentCard } from "./TeacherAssignmentCard";
import { NotebookText } from "lucide-react";

import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import axios from "@/lib/axiosInstance";
import { SchoolUserType } from "@/types/SchoolUser";
import { AssignmentType } from "@/types/AssignmentType";
import { StatusPlaceholder } from "@/components/shared/StatusPlaceholder";

type Props = {
  schoolId: string;
  subjectId: number;
  user: SchoolUserType;
};

async function getAssignments(schoolId: string, subjectId: number) {
  const token = await getCookie("token", { cookies });
  const res = await axios.get(
    `/school/${schoolId}/subject/${subjectId}/assignment`,
    {
      headers: { Authorization: token },
    },
  );
  return res.data;
}

export default async function AssignmentTabContent({
  schoolId,
  subjectId,
  user,
}: Props) {
  let isError = false;
  let assignments: AssignmentType[] = [];
  const isStudent = user.role === "STUDENT";

  try {
    assignments = await getAssignments(schoolId, subjectId);
  } catch {
    isError = true;
  }

  return (
    <>
      <div className="mt-5 flex w-full items-center justify-between">
        <h1 className="text-primary text-3xl font-bold">Assignments</h1>
        {!isStudent && assignments.length !== 0 && (
          <AddAssignment schoolId={schoolId} subjectId={subjectId} />
        )}
      </div>

      {isError && (
        <StatusPlaceholder
          title="Couldn't Fetch Assignments"
          description="Something went wrong and we could not get the assignments, please refresh or try again later."
          icon={<NotebookText />}
          variant="destructive"
        />
      )}
      {assignments.length == 0 && !isError ? (
        <StatusPlaceholder
          title="No Assignments Added"
          description={
            isStudent
              ? "There are currently no assignments available. Please check back later or wait for your teacher to post one."
              : "You haven’t created any assignments. Click below to add a new one for your students."
          }
          action={
            !isStudent && (
              <AddAssignment schoolId={schoolId} subjectId={subjectId} />
            )
          }
          icon={<NotebookText />}
        />
      ) : (
        <section className="relative mt-6 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {assignments.map((assignment) =>
            isStudent ? (
              <StudentAssignmentCard
                key={assignment.id}
                schoolId={schoolId}
                subjectId={subjectId}
                assignment={assignment}
              />
            ) : (
              <TeacherAssignmentCard
                key={assignment.id}
                schoolId={schoolId}
                subjectId={subjectId}
                assignment={assignment}
              />
            ),
          )}
        </section>
      )}
    </>
  );
}
