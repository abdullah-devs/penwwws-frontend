"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoaderCircle as SpinnerIcon, Pencil } from "lucide-react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import GroupFormFields from "@/components/features/dashboard/groups/GroupFormFields";

import axios from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { GroupFormData, groupSchema } from "@/lib/validations";
import { getCookie } from "cookies-next";
import { GroupType } from "@/types/Group";

type Props = {
  schoolId: string;
  group: GroupType;
  groups: GroupType[];
};

export default function EditGroup({ schoolId, group, groups }: Props) {
  const { toast } = useToast();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const flattenGroups = (groups: GroupType[]): GroupType[] =>
    groups.flatMap((g) => [g, ...flattenGroups(g.children ?? [])]);

  const flatGroups = groups ? flattenGroups(groups) : [];
  const groupNameMap = new Map(flatGroups.map((g) => [g.id, g.name]));

  const form = useForm<GroupFormData>({
    resolver: zodResolver(groupSchema),
    defaultValues: {
      name: group.name,
      parentId: group.parentId,
    },
  });

  useEffect(() => {
    if (isModalOpen) {
      form.reset({
        name: group.name,
        parentId: group.parentId,
      });
    }
  }, [group, isModalOpen, form]);

  async function onSubmit(data: GroupFormData) {
    const token = await getCookie("token");
    try {
      await axios.put(`/school/${schoolId}/group/${group.id}`, data, {
        headers: { Authorization: token },
      });
      router.refresh();
      setIsModalOpen(false);
      toast({
        title: "Group Edited",
        description: `The group ${data.name} has been edited.`,
      });
    } catch (err) {
      const error = err as AxiosError;
      console.error("Error Editing group:", error.response?.data);
      toast({
        title: "Group Edit Failed",
        description:
          (error.response?.data as string) || "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full justify-start font-normal">
          <Pencil />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Edit Group</DialogTitle>
              <DialogDescription>
                Edit the group name. Optionally, select a parent group to make
                it a subgroup.
              </DialogDescription>
            </DialogHeader>
            <GroupFormFields
              groupNameMap={groupNameMap}
              form={form}
              groups={groups}
            />
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              size="sm"
              className="w-full font-semibold"
            >
              {form.formState.isSubmitting ? (
                <SpinnerIcon className="animate-spin" />
              ) : (
                "Edit Group"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
