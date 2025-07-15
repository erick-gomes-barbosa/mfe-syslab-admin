import { useForm } from "react-hook-form";
interface InputCheckboxProps {
  name: string;
  text: string;
  register: ReturnType<typeof useForm>["register"];
  required: boolean;
}

export default function RegisterLabCheckboxInput({
  name,
  text,
  register,
  required,
}: InputCheckboxProps) {
  return (
    <div className="flex gap-2 items-center font-semibold">
      <input
        type="checkbox"
        className="appearance-none border-[1px] h-4 w-4 border-blueMedium rounded-[4px] checked:bg-blueMedium cursor-pointer"
        {...register(name, {
          required: required,
        })}
      />
      <label className="">{text}</label>
    </div>
  );
}
