import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface InputCheckboxProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
  text: string;
  register: UseFormRegister<TFormValues>;
  required: boolean;
}

export default function RegisterLabCheckboxInput<
  TFormValues extends FieldValues
>({ name, text, register, required }: InputCheckboxProps<TFormValues>) {
  return (
    <div className="flex gap-2 items-center font-semibold">
      <input
        type="checkbox"
        className="appearance-none border-[1px] h-4 w-4 border-blueMedium rounded-[4px] checked:bg-blueMedium cursor-pointer"
        {...register(name, { required })}
      />
      <label>{text}</label>
    </div>
  );
}
