import CreateAttendanceCredential from "@/components/features/dashboard/attendance/createAttendanceCredential";
import DeleteCredential from "@/components/features/dashboard/attendance/DeleteCredential";
import { StatusPlaceholder } from "@/components/shared/StatusPlaceholder";
import { Fingerprint } from "lucide-react";

import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import axios from "@/lib/axiosInstance";

export type CredentialType = {
  id: number;
  credentialId: string;
  createdAt: string;
  updatedAt: string;
};

export default async function AttendancePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const schoolId = (await params).id;
  const token = await getCookie("token", { cookies });
  let credentials: CredentialType[] = [];
  let isError = false;

  try {
    const res = await axios.get(`/schol/${schoolId}/device`, {
      headers: { Authorization: token },
    });
    credentials = res.data;
  } catch {
    isError = true;
  }

  return (
    <div className="relative flex h-full w-full flex-col gap-8 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-primary text-3xl font-semibold">Attendance</h1>
        {credentials.length !== 0 && (
          <CreateAttendanceCredential schoolId={schoolId} />
        )}
      </div>

      {isError && (
        <StatusPlaceholder
          title="Couldn't Fetch Credentials"
          description="something went wrong and we could not get the credentials, please refresh or try again later."
          icon={<Fingerprint />}
          variant="destructive"
        />
      )}

      {credentials.length === 0 && !isError ? (
        <StatusPlaceholder
          title="No Credentials Created yet"
          description="You haven't created any credential yet. Set up your attendance devices by creating your first credential."
          icon={<Fingerprint />}
          action={<CreateAttendanceCredential schoolId={schoolId} />}
        />
      ) : (
        <div className="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-3 lg:grid-cols-4">
          {credentials.map((credential) => (
            <div
              key={credential.id}
              className="flex items-center justify-between gap-4 rounded-md border p-4"
            >
              <div>
                <h1 className="mb-2 text-sm font-semibold">
                  <span className="text-muted-foreground font-normal">
                    Credential ID:{" "}
                  </span>
                  {credential.credentialId}
                </h1>
                <span className="text-muted-foreground mt-2 text-xs">
                  Created at: {new Date(credential.createdAt).toLocaleString()}
                </span>
              </div>
              <DeleteCredential schoolId={schoolId} credential={credential} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
