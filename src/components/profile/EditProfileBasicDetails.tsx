import { Form } from "@components/ui/form";
import {
  GenderSelectField,
  InputField,
  PhoneNumberField,
} from "@components/ui/formItems";
import { profileEditSchema, TProfileEditSchema } from "@schema/profileSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { editProfile } from "apiCalls";

interface data {
  user: {
    _id: string;
    fullName: string;
    profileImage: string;
    username: string;
    gender: string;
    email: string;
    role: string;
    isVerified: boolean;
    dob: string;
    type: string;
    phone: string;
    image: string;
    lastLogin: string;
    state: string;
  };
}

type Props = {
  data: data | undefined;
};
const EditProfileBasicDetails = ({ data }: Props) => {
  const form = useForm<TProfileEditSchema>({
    resolver: zodResolver(profileEditSchema),
    defaultValues: {
      email: data?.user?.email,
      username: data?.user?.username,
      fullName: data?.user?.fullName,
      gender: data?.user?.gender,
      phone: data?.user?.phone,
    },
  });

  const editProfileMutation = useMutation({
    mutationKey: ["edit-profile"],
    mutationFn: async (data: TProfileEditSchema) => {
      const response = await editProfile(data);
      return response.json();
    },
  });

  const onsubmit = (data: TProfileEditSchema) => {
    editProfileMutation.mutate(data);
  };

  return (
    <div className="bg-primary-bg dark:bg-dark-primary-bg p-5 rounded-[20px] flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
        Account Settings
      </h2>
      <p>Here you can change user account information</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <InputField
              control={form.control}
              name="email"
              label="Email"
              formItemClassName="col-span-2"
              disabled
            />
            <InputField
              control={form.control}
              name="username"
              label="Username"
            />
            <InputField
              control={form.control}
              name="fullName"
              label="Full Name"
            />

            <GenderSelectField
              control={form.control}
              name="gender"
              label="Gender"
            />

            <PhoneNumberField
              control={form.control}
              name="phone"
              label="Phone Number"
            />
          </div>

          <Button type="submit" variant={"ghost"} className="w-full mt-5">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditProfileBasicDetails;
