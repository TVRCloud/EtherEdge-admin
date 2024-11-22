import { Form } from "@components/ui/form";
import { InputField } from "@components/ui/formItems";
import { useForm } from "react-hook-form";

const EditProfileImage = () => {
  const form = useForm();

  return (
    <div>
      <Form {...form}>
        <form>
          <InputField control={form.control} name="name" />
        </form>
      </Form>
    </div>
  );
};

export default EditProfileImage;
