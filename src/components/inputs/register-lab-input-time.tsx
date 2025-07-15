import { useForm } from "react-hook-form";

interface InputTimeProps {
  register: ReturnType<typeof useForm>["register"];
  name: string;
  required: boolean;
}

export default function RegisterLabInputTime({
  register,
  name,
  required,
}: InputTimeProps) {
  return (
    <input
      className="rounded-lg px-3 h-7 w-full border-2 border-blueMedium text-sm bg-white select-none "
      type="time"
      {...register(name, { required })}
    />
  );
}
