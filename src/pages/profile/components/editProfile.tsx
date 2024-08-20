import { z } from "zod";
import { Form } from "../../../utils/Form";
import { InputField, TextArea } from "../../../utils/formItems";

const profileEditSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  description: z.string().optional(),
});

type ProfileEditValues = z.infer<typeof profileEditSchema>;

const initialValues: ProfileEditValues = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  description: "",
};

const ProfileEditForm = () => {
  const handleSubmit = (values: ProfileEditValues) => {
    console.log("Form Submitted with values:", values);
  };

  return (
    <Form
      schema={profileEditSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ values, errors, onChange }) => (
        <>
          <InputField
            label="Username"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={onChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}

          <InputField
            label="Email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={onChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <InputField
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
            value={values.firstName}
            onChange={onChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}

          <InputField
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
            value={values.lastName}
            onChange={onChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}

          <TextArea
            label="Description"
            name="description"
            placeholder="Enter a description"
            value={values.description}
            onChange={onChange}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </>
      )}
    </Form>
  );
};

export default ProfileEditForm;
