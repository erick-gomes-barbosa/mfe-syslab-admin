import SearchbarMain from "../components/searchbar/search-bar-main";
import CardLabs from "../components/card/card-labs";
import { MockLabs } from "../mockData/labs-mock";
import { CardLabsType } from "../types/card-labs-type";
import AddLabButton from "../components/buttons/add-lab-button";
import { useState } from "react";
import RegisterLabModal from "../components/modals/register-lab-modal";

export default function LaboratoriesPage() {
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(true);

  return (
    <>
      <div className="relative mt-28">
        <div className="flex flex-col max-w-7xl mx-auto max-md:items-end md:flex-row justify-center gap-6">
          <div className="flex justify-center max-md:mx-auto w-10/12 md:w-7/12">
            <SearchbarMain />
          </div>
          <AddLabButton onClickAdd={() => setShowRegisterModal(true)} />
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="grid justify-items-center min-[1200px]:grid-cols-3 min-[768px]:grid-cols-2  max-md:w-full gap-16  max-w-7xl max-md:overflow-y-auto my-7 py-3">
            {MockLabs.map((lab: CardLabsType) => {
              return (
                <CardLabs
                  key={lab.enviroment}
                  enviroment={lab.enviroment}
                  name={lab.name}
                  opening_time={lab.opening_time}
                  closing_time={lab.closing_time}
                />
              );
            })}
          </div>
        </div>
      </div>
      <RegisterLabModal
        isOpen={showRegisterModal}
        onClickClose={() => setShowRegisterModal(false)}
      />
    </>
  );
}
