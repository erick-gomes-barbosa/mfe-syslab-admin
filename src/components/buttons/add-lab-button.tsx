import IconAdd from "../../assets/image/icon-add.svg";

export default function AddLabButton({
  onClickAdd,
}: {
  onClickAdd: () => void;
}) {
  return (
    <button
      className="flex items-center justify-center px-4 py-2 w-44 rounded-lg gap-2 border-[3px] border-blueMedium max-md:mr-5"
      onClick={onClickAdd}
    >
      <img src={IconAdd} alt="icon-add" className="w-6" />
      <p className="font-extrabold text-blueMedium whitespace-nowrap">
        Adicionar Novo
      </p>
    </button>
  );
}
