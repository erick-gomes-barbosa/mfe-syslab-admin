import iconClock from "../../assets/image/icon-clock.svg";
import { CardLabsType } from "../../types/card-labs-type";

// Componente de card para listagem de laboratórios na página de laboratórios
export default function CardLabs({
  enviroment,
  name,
  closing_time,
  opening_time,
}: CardLabsType) {
  return (
    <div
      key={enviroment}
      className="flex items-center justify-between bg-blueLight w-10/12 min-w-[330px] rounded-3xl px-7 min-h-28 shadow-md shadow-[#00000040]"
    >
      <div>
        <label className="text-base font-bold ">{name}</label>

        <div className="flex items-center mt-2">
          <img src={iconClock} alt="icon-clock" className="w-5 h-5 mr-2" />
          <p className="">
            {opening_time} - {closing_time}
          </p>
        </div>
      </div>
      <button className="border-2 border-blueMedium px-5 py-1 rounded-xl text-blueMedium font-bold">
        Acessar
      </button>
    </div>
  );
}
