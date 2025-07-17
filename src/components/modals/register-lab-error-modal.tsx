import iconError from "../../assets/image/icon-error.svg";
export default function RegisterLabErrorModal({
  text,
  isOpen,
}: {
  text: string;
  isOpen: boolean;
}) {
  if (isOpen) {
    return (
      <div className="fixed inset-0  flex items-center justify-center bg-white bg-opacity-35">
        <div className="flex justify-center items-center px-12 py-12 bg-white gap-2 rounded-[2rem] shadow-lg shadow-[#00000040] animate-fade-up animate-duration-[500ms] animate-delay-200 animate-ease-out">
          <img src={iconError} alt="icon-error" />
          <p className="whitespace-nowrap text-lg">{text}</p>
        </div>
      </div>
    );
  }

  return null;
}
