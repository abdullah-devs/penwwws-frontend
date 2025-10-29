import AddSubject from "@/components/features/dashboard/subjects/AddSubject";
import { LibraryBig } from "lucide-react";
import { EmptyState } from "@/components/shared/StatusPlaceholder";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import axios from "@/lib/axiosInstance";
import { SubjectType } from "@/types/Subject";
import SubjectCard from "@/components/features/dashboard/subjects/SubjectCard";

export default async function SubjectsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const schoolId = (await params).id;

  const token = await getCookie("token", { cookies });

  let subjects: SubjectType[] = [];
  let isError = false;

  try {
    const res = await axios.get(`/school/${schoolId}/subject`, {
      headers: { Authorization: token },
    });

    if (res.status === 200) {
      subjects = res.data;
    }
  } catch {
    isError = true;
  }

  return (
    <div className="relative flex h-full w-full flex-col gap-8 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-primary text-3xl font-semibold">Subjects</h1>
        {subjects.length !== 0 && <AddSubject schoolId={schoolId} />}
      </div>

      {isError && (
        <EmptyState
          title="Couldn't Fetch Subjects"
          description="something went wrong and we could not get the subjects, please refresh or try again later"
          icon={<LibraryBig />}
          variant="destructive"
        />
      )}

      {subjects.length === 0 && !isError ? (
        <EmptyState
          title="No subjects yet"
          description="You haven't created any subjects yet. Get started by creating your first subject."
          action={<AddSubject schoolId={schoolId} />}
          icon={<LibraryBig />}
        />
      ) : (
        <div className="grid w-full grid-cols-1 items-start gap-2 md:grid-cols-3 lg:grid-cols-4">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              schoolId={schoolId}
            />
          ))}
        </div>
      )}
    </div>
  );
}
