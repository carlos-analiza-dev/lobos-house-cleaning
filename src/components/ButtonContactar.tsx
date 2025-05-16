interface Props {
  openWhatsApp: () => void;
}

const ButtonContactar = ({ openWhatsApp }: Props) => {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 self-start flex items-center cursor-pointer"
      onClick={openWhatsApp}
    >
      Contactar ahora
      <svg
        className="w-5 h-5 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </button>
  );
};

export default ButtonContactar;
