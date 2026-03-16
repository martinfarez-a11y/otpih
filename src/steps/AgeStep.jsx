export default function AgeStep({ onNext }) {
  const options = [
    "Menor de 30 años",
    "De 31 a 54 años",
    "De 55 a 65 años",
    "Más de 65 años",
  ];

  return (
    <>
      <div className="w-fit -mt-12 mb-10 lg:-ml-16 lg:-mt-8 lg:mb-0">
        <p className="bg-[#F7D877] rounded-xl text-lg lg:text-2xl font-bold p-3 w-fit shadow-lg">
          ¿Qué edad tienes?
        </p>
        <p className="w-[26px] h-[13px] block m-auto bg-[#F7D877]"></p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {options.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => onNext(label)}
            className="hover:scale-105 shadow-answer font-semibold transition-all duration-300 ease-in-out
              text-[var(--color-answer)] border-[1px] hover:border-[4px] border-[var(--border-answer)]
              rounded-[var(--rounded-answer)] hover:border-[var(--border-answer-hover)]
              hover:bg-[var(--bg-answer-hover)] flex items-center h-10 lg:h-[50px] justify-between"
          >
            <span className="px-5">{label}</span>

            {/* chevron mobile */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="lg:hidden h-8 w-8 mr-3"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ))}
      </div>
    </>
  );
}
