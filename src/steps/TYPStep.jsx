import React from "react";

export default function TYPStep({ consentPhone, consentMarketing }) {
  const showAdeslas = consentPhone === true;
  const showGeneric = consentPhone === false && consentMarketing === true;
  const showNoOffer = consentPhone === false && consentMarketing === false;

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {showAdeslas && (
          <>
            <h1 className="text-center text-4xl font-extrabold leading-tight text-black">
              Después de analizar tus necesidades, la oferta de{" "}
              <span className="text-blue-600">Adeslas</span>
              <br />
              es la que mejor se adapta a tus necesidades
            </h1>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-12">
              <img
                src="/oferta-seguro-salud/adeslas.png"
                alt="Adeslas"
                className="w-[420px] max-w-[85vw]"
              />

              <div className="text-[88px] font-bold text-blue-500 leading-none">→</div>

              <div className="flex max-w-md items-start gap-4">
                <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-black">
                  <li>Precio justo y transparente: desde 20 €/mes. Sin copagos.</li>
                  <li>Acceso directo a médicos especialistas sin pasar por el médico de cabecera.</li>
                  <li>Red médica Adeslas con miles de profesionales en toda España.</li>
                </ul>
              </div>
            </div>
          </>
        )}

        {showGeneric && (
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-xl lg:text-2xl font-bold leading-relaxed text-black">
              En breves un asesor te contactará para comunicarte la mejor oferta.
            </p>
          </div>
        )}

        {showNoOffer && (
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-xl lg:text-2xl font-bold leading-relaxed text-black">
              No tenemos una oferta disponible en este momento.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

