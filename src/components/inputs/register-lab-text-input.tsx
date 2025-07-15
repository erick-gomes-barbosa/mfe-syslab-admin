import { useForm } from "react-hook-form";

interface InputTextProps {
  name: string;
  register: ReturnType<typeof useForm>["register"];
  required: boolean;
  type: "text" | "email" | "password" | "number";
  valueAsNumber?: boolean;
}
export default function RegisterLabTextInput({
  name,
  register,
  required,
  type,
  valueAsNumber = false,
}: InputTextProps) {
  return (
    <input
      type={type}
      defaultValue={null}
      className={`rounded-lg px-3 h-7 sm400:w-40 md:w-50 border-2 border-blueMedium text-sm bg-white select-none`}
      {...register(name, {
        required: required,
        valueAsNumber: valueAsNumber,
      })}
    />
  );
}
