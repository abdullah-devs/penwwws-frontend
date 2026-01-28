import axios from "@/lib/axiosInstance";
import { MemberType } from "@/types/member";
import { getCookie } from "cookies-next";

export async function getMembers(schoolId: string) {
  const token = await getCookie("token");
  const res = await axios.get<MemberType[]>(`/school/${schoolId}/member`, {
    headers: { Authorization: token },
  });
  return res.data;
}
