//Label que identifica o título de um campo de formulário
export default function RegisterLabLabel({ title }: { title: string }) {
  return (
    <label className="text-black font-light text-lg md:whitespace-nowrap  max-sm320:text-[12px] select-none">
      {title}
    </label>
  );
}
