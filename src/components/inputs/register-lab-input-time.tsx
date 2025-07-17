import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface InputTimeProps<TFormValues extends FieldValues> {
  register: UseFormRegister<TFormValues>;
  name: Path<TFormValues>;
  required: boolean;
}

export default function RegisterLabInputTime<TFormValues extends FieldValues>({
  register,
  name,
  required,
}: InputTimeProps<TFormValues>) {
  return (
    <input
      className="rounded-lg px-3 h-7 w-full border-2 border-blueMedium text-sm bg-white select-none"
      type="time"
      {...register(name, { required })}
    />
  );
}
