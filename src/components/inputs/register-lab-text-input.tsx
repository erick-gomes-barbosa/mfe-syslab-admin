import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface InputTextProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
  type: "text" | "email" | "password" | "number";
  valueAsNumber?: boolean;
}

export default function RegisterLabTextInput<T extends FieldValues>({
  name,
  register,
  required,
  type,
  valueAsNumber = false,
}: InputTextProps<T>) {
  return (
    <input
      type={type}
      defaultValue={null}
      className="rounded-lg px-3 h-7 sm400:w-40 md:w-50 border-2 border-blueMedium text-sm bg-white select-none"
      {...register(name, {
        required,
        valueAsNumber,
      })}
    />
  );
}
