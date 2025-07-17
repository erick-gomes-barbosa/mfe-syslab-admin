import ButtonClose from "../../assets/image/button-close.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterLabLabel from "../labels/register-lab-label";
import RegisterLabTextInput from "../inputs/register-lab-text-input";
import RegisterFieldsContainer from "../container/register-fields-container";
import RegisterLabInputTime from "../inputs/register-lab-input-time";
import RegisterLabCheckboxInput from "../inputs/register-lab-checkbox-input";
import { InsertLabType } from "../../types/insert-labs-type";
import { InsertLabSchema } from "../../schemas/insert-lab-schemas";
import { useState } from "react";
import RegisterLabErrorModal from "./register-lab-error-modal";
import RegisterLabSucessModal from "./register-lab-sucess-modal";

export default function EditLabModal({
  isOpen,
  onClickClose,
  defaultValues,
}: {
  isOpen: boolean;
  onClickClose: () => void;
  defaultValues: InsertLabType;
}) {
  const [showRegisterLabErrorModal, setShowRegisterLabErrorModal] =
    useState<boolean>(false);
  const [showRegisterLabSucessModal, setShowRegisterLabSucessModal] =
    useState<boolean>(false);

  const { register, reset, handleSubmit, clearErrors } = useForm<InsertLabType>(
    {
      shouldFocusError: false,
      resolver: zodResolver(InsertLabSchema),
      defaultValues,
    }
  );
  const submitForm: SubmitHandler<InsertLabType> = (data) => {
    onClickClose();
    setShowRegisterLabSucessModal(true);
    reset();
    setTimeout(() => {
      setShowRegisterLabSucessModal(false);
    }, 2000);
  };

  const onError = (errors) => {
    onClickClose();
    clearErrors();
    setShowRegisterLabErrorModal(true);
    reset();
    setTimeout(() => {
      setShowRegisterLabErrorModal(false);
    }, 2000);
  };

  if (isOpen) {
    return (
      <div className="fixed inset-0  flex items-center justify-center bg-white bg-opacity-35">
        <form
          onSubmit={handleSubmit(submitForm, onError)}
          className="flex flex-col sm400:w-[400px] max-w-[500px] md:w-full justify-center px-4 md:px-12 py-12 bg-white gap-2 rounded-[2rem] shadow-lg shadow-[#00000040] animate-fade-up animate-duration-[500ms] animate-delay-200 animate-ease-out"
        >
          <div className="flex w-full justify-end ">
            <button
              onClick={() => {
                onClickClose();
                clearErrors();
                reset();
              }}
            >
              <img
                src={ButtonClose}
                alt="button-close"
                className="w-7 cursor-pointer hover:scale-110"
              />
            </button>
          </div>
          <div className="flex w-full justify-center">
            <h1 className="font-bold text-2xl mb-10">Editar Laboratório</h1>
          </div>
          <div className="flex flex-col gap-4">
            <RegisterFieldsContainer>
              <RegisterLabLabel title="Nome do laboratório:" />
              <RegisterLabTextInput
                name="lab_name"
                register={register}
                required={true}
                type="text"
              />
            </RegisterFieldsContainer>
            <RegisterFieldsContainer>
              <RegisterLabLabel title="Identificador do ambiente:" />
              <RegisterLabTextInput
                name="enviroment_id"
                register={register}
                required={true}
                type="text"
              />
            </RegisterFieldsContainer>

            <RegisterFieldsContainer>
              <RegisterLabLabel title="Quantidade de computadores:" />
              <RegisterLabTextInput
                name="qty_computers"
                register={register}
                required={true}
                type="text"
                valueAsNumber={true}
              />
            </RegisterFieldsContainer>

            <RegisterFieldsContainer>
              <RegisterLabLabel title="Quantidade de cadeiras:" />
              <RegisterLabTextInput
                name="qty_chairs"
                register={register}
                required={true}
                type="text"
                valueAsNumber={true}
              />
            </RegisterFieldsContainer>
            <div className="flex justify-between">
              <div className="w-[47.5%] flex flex-col ustify-between">
                <RegisterLabLabel title="Abertura:" />
                <RegisterLabInputTime
                  name="opening_time"
                  required={true}
                  register={register}
                />
              </div>
              <div className="w-[47.5%] flex flex-col ustify-between">
                <RegisterLabLabel title="Fechamento:" />
                <RegisterLabInputTime
                  name="closing_time"
                  required={true}
                  register={register}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <RegisterLabCheckboxInput
                name="television"
                register={register}
                required={false}
                text="TV"
              />
              <RegisterLabCheckboxInput
                name="fan"
                register={register}
                required={false}
                text="Ventilador"
              />
              <RegisterLabCheckboxInput
                name="air_conditioner"
                register={register}
                required={false}
                text="Ar-Condicionado"
              />
            </div>
          </div>
          <div className="flex justify-between w-full mt-5 ">
            <button
              onClick={() => {
                onClickClose();
                clearErrors();
                reset();
              }}
              className="bg-blueLight border-2 border-blueMedium text-blueMedium w-32 h-8 rounded-lg"
              value="Cancelar"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blueMedium text-white w-32 h-8 rounded-lg"
            >
              Atualizar
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <>
      <RegisterLabErrorModal
        isOpen={showRegisterLabErrorModal}
        text="Erro ao atualizar laboratório"
      />
      <RegisterLabSucessModal
        isOpen={showRegisterLabSucessModal}
        text="Laboratório atualizado com sucesso"
      />
    </>
  );
}
