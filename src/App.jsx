import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./App.css";

function Card({ title, titleClassName = "", children }) {
  return (
    <div className="bg-white rounded-xl my-16 lg:my-24 px-8 pb-12 shadow-wrap mx-auto w-full lg:w-[605px]">
      <div className="w-fit -mt-12 mb-10 lg:-ml-16 lg:-mt-8 lg:mb-0">
        <p className="bg-[#F7D877] text-black rounded-xl text-lg lg:text-2xl font-bold p-3 w-fit shadow-lg ${titleClassName}">
          {title}
        </p>

        <p className="w-[26px] h-[13px] block m-auto bg-[#F7D877]"></p>
      </div>
      {children}
    </div>
  );
}

export default function App() {
  const [step, setStep] = useState(0);
  const [sociosOpen, setSociosOpen] = useState(false);
  const [touched, setTouched] = useState({
    zipcode: false,
    email: false,
    phone: false,
  });
  const [submitted, setSubmitted] = useState({
    zipcode: false,
    contact: false,
  });
  const [formData, setFormData] = useState({
    age: null,
    insurer: null,
    zipcode: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consentPhone: false,
    consentMarketing: false,
  });

  const validateSpanishZip = (raw) => {
    const s = String(raw ?? "").trim();
    if (!/^\d{5}$/.test(s)) return false;
    const n = Number.parseInt(s, 10);
    return n >= 1001 && n <= 52999; // 01001 -> 1001, 52999 -> 52999
  };

  const normalizeSpanishPhone = (raw) => {
    const s = String(raw ?? "").trim().replace(/[()\s.-]/g, "");
    if (s.startsWith("+34")) return s.slice(3);
    if (s.startsWith("0034")) return s.slice(4);
    return s;
  };

  const validateSpanishPhone = (raw) => {
    const n = normalizeSpanishPhone(raw);
    if (!/^\d{9}$/.test(n)) return false;
    return /^[6789]\d{8}$/.test(n);
  };

  const validateEmail = (raw) => {
    const s = String(raw ?? "").trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
  };

  const zipIsValid = validateSpanishZip(formData.zipcode);
  const phoneIsValid = validateSpanishPhone(formData.phone);
  const emailIsValid = validateEmail(formData.email);

  const goNext = () => setStep((s) => s + 1);
  const goBack = () => setStep((s) => Math.max(0, s - 1));

  // Fake loading step (démo)
  useEffect(() => {
    if (step === 4) {
      const t = setTimeout(() => setStep(5), 1500);
      return () => clearTimeout(t);
    }
  }, [step]);

  useEffect(() => {
    if (!sociosOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSociosOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [sociosOpen]);

  const pickAge = (value) => {
    setFormData((d) => ({ ...d, age: value }));
    setStep(1);
  };

  const pickInsurer = (value) => {
    setFormData((d) => ({ ...d, insurer: value }));
    setStep(2); // ✅ direct next
  };

  const submitZip = () => {
    setSubmitted((s) => ({ ...s, zipcode: true }));
    if (!validateSpanishZip(formData.zipcode)) return;
    setStep(3);
  };

  const submitContact = () => {
    // validation light pour démo
    setSubmitted((s) => ({ ...s, contact: true }));
    if (!validateEmail(formData.email) || !validateSpanishPhone(formData.phone)) return;
    setStep(4); // loading
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col min-h-screen">
        {/* HEADER (inchangé) */}
        <div className="bg-white font-semibold text-[10px] h-[40px] lg:px-10 md:text-base flex black items-center justify-between px-1 py-4">
          <div className="flex items-center gap-1 lg:gap-2">
            <img src="/oferta-seguro-salud/Shield.svg" alt="" className=" md:h-6 md:w-6 h-3 w-3 " />
            <p>Formulario Seguro</p>
          </div>
          <div className="relative lg:inline-block mt-0 ml-2 flex justify-center">
            <div className="h-[28px] absolute w-[153px] lg:inset-0  bg-[#2092B8] rounded-full translate-x-1 translate-y-1"></div>
            <button type="button" className="bg-[#9BD8F7] text-[#2092B8] font-semibold py-1 px-4 rounded-full relative z-10 text-sm">
              Mi seguro de <span className="font-bold text-white">Salud</span>
            </button>
          </div>
          <p>Simulación Gratuita</p>
        </div>

        <div>
          <div className="bg-[#F7D877] text-center text-sm lg:text-base px-2 py-1 lg:py-2 text-black">
            En menos de 2 minutos, encontraremos una oferta más barata que se adapte a tus necesidades, <strong>100% GRATIS - SIN COMPROMISO</strong>
          </div>

          <div className="bg-home flex flex-col items-center justify-between min-h-[85vh]">
            <div className="flex flex-col gap-3 lg:gap-8 pt-10 lg:pt-[80px]">
              <h1 className="font-bold text-3xl lg:text-[56px] leading-10 lg:leading-normal text-center mx-2 lg:bg-white lg:px-4">
                <span className="bg-white px-1 inline-block mt-1 text-black">Tu Seguro de Salud completo desde 19,90€</span>
              </h1>
              <h2 className="text-lg text-center lg:text-[32px] text-white px-3 lg:px-0">
                Rellena el formulario y recibe un presupuesto gratuito en sólo 3 pasos
              </h2>
            </div>

            {/* ========= STEPS ========= */}
            {step === 0 && (
              <Card title="¿Qué edad tienes?" titleClassName="text-black">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {[
                    ["lt30", "Menor de 30 años"],
                    ["31_54", "De 31 a 54 años"],
                    ["55_65", "De 55 a 65 años"],
                    ["gt65", "Más de 65 años"],
                  ].map(([val, label]) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => pickAge(val)}
                      className="hover:scale-105 shadow-answer font-semibold transition-all duration-300 ease-in-out
                        text-[var(--color-answer)] border-[1px] hover:border-[4px] border-[var(--border-answer)]
                        rounded-[var(--rounded-answer)] hover:border-[var(--border-answer-hover)]
                        hover:bg-[var(--bg-answer-hover)] flex items-center h-10 lg:h-[50px] justify-between"
                    >
                      <span className="px-5">{label}</span>
                      <span className="mr-5 text-2xl text-black">›</span>
                    </button>
                  ))}
                </div>
              </Card>
            )}

            {step === 1 && (
              <Card title="¿Puedes decirme quién es tu aseguradora actual?" titleClassName="text-black">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {["DKV", "AXA", "Adeslas", "Nara", "Asisa", "Aegon", "Otro", "No tengo seguro aún"].map((label) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => pickInsurer(label)}
                      className="hover:scale-105 shadow-answer font-semibold transition-all duration-300 ease-in-out
                        text-[var(--color-answer)] border-[1px] hover:border-[4px] border-[var(--border-answer)]
                        rounded-[var(--rounded-answer)] hover:border-[var(--border-answer-hover)]
                        hover:bg-[var(--bg-answer-hover)] flex items-center justify-between h-14 px-4"
                    >
                      <span>{label}</span>
                      <span className="text-2xl text-black">›</span>
                    </button>
                  ))}
                </div>

                <div className="mt-6">
                  <button type="button" onClick={goBack} className="underline text-sm text-black">
                    ← Volver
                  </button>
                </div>
              </Card>
            )}

            {step === 2 && (
              <Card title="¿Cuál es tu código postal?" titleClassName="text-black">
                <div className="flex flex-col gap-4">
                  <input
                    className="input w-full border-2 border-black !text-black"
                    type="text"
                    inputMode="numeric"
                    maxLength={5}
                    placeholder="Ej: 28001"
                    value={formData.zipcode}
                    onChange={(e) => setFormData((d) => ({ ...d, zipcode: e.target.value }))}
                    onBlur={() => setTouched((t) => ({ ...t, zipcode: true }))}
                  />
                  {(touched.zipcode || submitted.zipcode) && !zipIsValid && (
                    <p className="text-red-600 text-xs -mt-2">Introduce un código postal válido</p>
                  )}

                  <div className="flex justify-between items-center">
                    <button type="button" onClick={goBack} className="underline text-sm text-black">
                      ← Volver
                    </button>

                    <button
                      type="button"
                      onClick={submitZip}
                      className="px-6 py-2 rounded-md bg-[#F7D877] font-bold text-black"
                      disabled={!zipIsValid}
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              </Card>
            )}

            {step === 3 && (
              <Card title="Tus datos de contacto" titleClassName="text-black">
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <input
                      className="input w-full border-2 border-black !text-black"
                      placeholder="Nombre"
                      value={formData.firstName}
                      onChange={(e) => setFormData((d) => ({ ...d, firstName: e.target.value }))}
                    />
                    <input
                      className="input w-full border-2 border-black !text-black"
                      placeholder="Apellidos"
                      value={formData.lastName}
                      onChange={(e) => setFormData((d) => ({ ...d, lastName: e.target.value }))}
                    />
                  </div>

                  <input
                    className="input w-full border-2 border-black !text-black"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                    onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  />
                  {(touched.email || submitted.contact) && !emailIsValid && (
                    <p className="text-red-600 text-xs -mt-2">Introduce un email válido</p>
                  )}

                  <input
                    className="input w-full border-2 border-black !text-black"
                    type="tel"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))}
                    onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                  />
                  {(touched.phone || submitted.contact) && !phoneIsValid && (
                    <p className="text-red-600 text-xs -mt-2">Introduce un teléfono válido</p>
                  )}

                  <div className="flex flex-col gap-3 text-sm text-black">
                    <label className="flex gap-3 items-start cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consentPhone}
                        onChange={(e) => setFormData((d) => ({ ...d, consentPhone: e.target.checked }))}
                        className="mt-1 h-4 w-4 border-2 border-black bg-white rounded shrink-0"
                      />
                      <span>
                        Al validar, usted autoriza expresamente a los{" "}
                        <button
                          type="button"
                          className="inline bg-transparent border-0 p-0 m-0 align-baseline underline font-semibold text-black hover:text-black hover:bg-transparent hover:border-0 focus:outline-none focus:ring-0"
                          onMouseDown={(e) => {
                            // Important: avoid toggling the checkbox when clicking inside the label
                            e.preventDefault();
                            e.stopPropagation();
                            setSociosOpen(true);
                          }}
                        >
                          socios
                        </button>{" "}
                        comerciales de WEEDEV SAS a ponerse en contacto con usted por teléfono con el fin de presentarle ofertas de seguros de salud.
                      </span>
                    </label>
                    <label className="flex gap-3 items-start cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consentMarketing}
                        onChange={(e) => setFormData((d) => ({ ...d, consentMarketing: e.target.checked }))}
                        className="mt-1 h-4 w-4 border-2 border-black bg-white rounded shrink-0"
                      />
                      <span>
                        Usted acepta que WEEDEV SAS pueda ponerse en contacto con usted por correo electrónico, SMS o WhatsApp con fines de prospección comercial para recibir otras ofertas promocionales.
                      </span>
                    </label>
                  </div>

                  <p className="text-xs text-gray-600">
                    Para más información sobre cómo se recogen y tratan sus datos y sobre el ejercicio de sus derechos, incluido el derecho a retirar su consentimiento en cualquier momento, puede consultar nuestra{' '}
                    <a href="https://misegurodesalud.co/esp/donnees-personnelles.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      política de privacidad
                    </a>
                    . Si está inscrito en la Lista Robinson, el consentimiento expreso otorgado al validar el formulario prevalece sobre dicha inscripción y autoriza exclusivamente las llamadas de los socios comerciales de WEEDEV SAS para presentarle ofertas de seguros de salud. WEEDEV SAS está inscrita en el registro francés ORIAS con el número 22006381, lo que certifica su autorización oficial como intermediario en seguros, banca y finanzas en Francia.
                  </p>

                  <div className="flex justify-between items-center">
                    <button type="button" onClick={goBack} className="underline text-sm text-black">
                      ← Volver
                    </button>

                    <button
                      type="button"
                      onClick={submitContact}
                      className="px-6 py-2 rounded-md bg-[#F7D877] font-bold text-black"
                      disabled={!formData.email || !formData.phone || !emailIsValid || !phoneIsValid}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </Card>
            )}

            {/* Popup "socios" */}
            {sociosOpen &&
              createPortal(
                <div
                  className="fixed inset-0 z-[9999] bg-black/60"
                  role="dialog"
                  aria-modal="true"
                  onClick={() => setSociosOpen(false)}
                >
                  <div className="flex min-h-screen items-center justify-center px-4 py-10">
                    <div
                      className="relative w-full max-w-[560px] overflow-hidden rounded-2xl bg-white shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        aria-label="Cerrar"
                        onClick={() => setSociosOpen(false)}
                        className="absolute right-4 top-4 h-9 w-9 rounded-md border-0 bg-transparent p-0 text-2xl leading-none text-black hover:bg-black/5 hover:border-0 focus:outline-none focus:ring-2 focus:ring-black/30"
                      >
                        ×
                      </button>

                      <div className="bg-gray-100 px-6 py-5 pr-14">
                        <h3 className="text-lg lg:text-xl font-extrabold text-black">
                          Marcando esta casilla acepto la política de privacidad de:
                        </h3>
                      </div>

                      <div className="px-6 py-6">
                        <div className="flex flex-col gap-6 text-base text-black">
                          {["Adeslas", "AXA", "Seguros Generales"].map((name) => (
                            <label key={name} className="flex items-start gap-4">
                              <input
                                type="checkbox"
                                className="mt-1 h-5 w-5 border-2 border-black bg-white rounded-sm shrink-0"
                              />
                              <span>
                                {name}. Más información acerca de la{" "}
                                <span className="underline">política de privacidad</span>.
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>,
                document.body
              )}

            {step === 4 && (
              <Card title="Buscando la mejor oferta...">
                <div className="flex flex-col items-center justify-center py-10 gap-4">
                  <div className="animate-spin h-10 w-10 rounded-full border-4 border-gray-200 border-t-black" />
                  <p className="text-sm opacity-70">Un momento por favor…</p>
                </div>
              </Card>
            )}

            {step === 5 && (
              <div className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-6 py-14">
                  <h1 className="text-center text-4xl font-extrabold leading-tight text-black">
                    Después de analizar tus necesidades, la oferta de{" "}
                    <span className="text-blue-600">Adeslas</span>
                    <br />
                    es la que mejor se adapta a tus necesidades
                  </h1>

                  <div className="mt-14 flex flex-wrap items-center justify-center gap-12">
                    {/* Logo assureur */}
                    <img
                      src="/oferta-seguro-salud/adeslas.png"
                      alt="Adeslas"
                      className="w-[420px] max-w-[85vw]"
                    />


                    {/* Flèche */}
                    <div className="text-[88px] font-bold text-blue-500 leading-none">→</div>

                    {/* Avatar + bullets */}
                    <div className="flex max-w-md items-start gap-4">
                    
                      <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-black">
                        <li>Precio justo y transparente: desde 20 €/mes. Sin copagos.</li>
                        <li>
                          Acceso directo a médicos especialistas sin pasar por el médico de cabecera.
                        </li>
                        <li>Red médica Adeslas con miles de profesionales en toda España.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ========= END STEPS ========= */}

            {/* Tes icônes bottom (inchangées) */}
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-row w-full justify-center gap-4 lg:gap-16 lg:-mb-10 -mb-6">
                <img src="/oferta-seguro-salud/envelope1.svg" alt="" className="w-10 lg:w-20" />
                <img src="/oferta-seguro-salud/firstAid1.svg" alt="" className="w-10 lg:w-20" />
                <img src="/oferta-seguro-salud/bowl1.svg" alt="" className="w-10 lg:w-20" />
              </div>
              <div className="flex flex-row w-full justify-center gap-4 lg:gap-16 lg:-mb-10 -mb-6">
                <img src="/oferta-seguro-salud/envelope2.svg" alt="" className="w-10 lg:w-20" />
                <img src="/oferta-seguro-salud/firstAid2.svg" alt="" className="w-10 lg:w-20" />
                <img src="/oferta-seguro-salud/bowl2.svg" alt="" className="w-10 lg:w-20" />
              </div>
            </div>
          </div>

          <div className="bg-vide"></div>
        </div>

        {/* FOOTER inchangé */}
        <footer className="bg-white !bg-white flex flex-col lg:flex-row text-center lg:px-[64px] lg:min-h-[108px] text-[#061626] w-full lg:mt-0 pt-3 pb-1 pl-3 text-sm font-source-sans-pro lg:font-normal mt-10">
          <div className="pb-[10px] lg:flex lg:pb-0  lg:items-center ">
            <div className="lg:flex lg:justify-center lg:w-screen">
              <span className="font-normal mr-2 ">© Mi Seguro de Salud 2026</span>
              <p className="lg:mr-3">
                <a target="_blank" rel="noopener noreferrer" href="https://misegurodesalud.co/esp/donnees-personnelles.html">- Política de Privacidad y Protección de Datos</a>
              </p>
              <p className="lg:mr-3">
                <a target="_blank" rel="noopener noreferrer" href="https://misegurodesalud.co/esp/cgu.html">- Términos y condiciones de uso</a>
              </p>
              <p className="lg:mr-3">
                <a target="_blank" rel="noopener noreferrer" href="https://misegurodesalud.co/esp/cookies.html">- Política de gestión de cookies</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
