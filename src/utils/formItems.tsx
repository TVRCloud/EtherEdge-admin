import "./utils.scss";

type FieldsetProps = {
  legend: string;
  children: React.ReactNode;
};

export const Fieldset = ({ legend, children }: FieldsetProps) => (
  <fieldset className="Fieldset">
    <legend>{legend}</legend>
    {children}
  </fieldset>
);

type InputItemProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value?: string | number;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const InputField = ({
  label,
  placeholder,
  type = "text",
  value,
  name,
  onChange,
}: InputItemProps) => {
  return (
    <div className="InputField">
      <label>{label}</label>
      <div className="inputContainer">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

type TextAreaProps = {
  label: string;
  placeholder: string;
  type?: string;
  value?: string | number;
  name: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const TextArea = ({
  label,
  placeholder,
  value,
  name,
  onChange,
}: TextAreaProps) => {
  return (
    <div className="TextArea">
      <label>{label}</label>
      <div className="textAreaContainer">
        <textarea
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

export const Button = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) => (
  <button
    className={`FormButton ${className}`}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);
