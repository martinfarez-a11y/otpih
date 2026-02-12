import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col min-h-screen">
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
          <div className="bg-[#F7D877] text-center  text-sm  lg:text-base px-2 py-1 lg:py-2">
            En menos de 2 minutos, encontraremos una oferta más barata que se adapte a tus necesidades, <strong>100% GRATIS - SIN COMPROMISO</strong>
          </div>
          <div className=" bg-home flex flex-col items-center justify-between min-h-[85vh]">
            <div className=" flex flex-col gap-3 lg:gap-8 pt-10 lg:pt-[80px]">
              <h1 className=" font-bold text-3xl lg:text-[56px] leading-10 lg:leading-normal text-center mx-2 lg:bg-white lg:px-4">
                <span className=" bg-white px-1 inline-block mt-1">Tu Seguro de Salud completo desde 19,90€</span>
              </h1>
              <h2 className=" text-lg text-center lg:text-[32px] text-white px-3 lg:px-0">
                Rellena el formulario y recibe un presupuesto gratuito en sólo 3 pasos
              </h2>
            </div>

            <div className="bg-white rounded-xl my-16 lg:my-24 px-8 pb-12 shadow-wrap mx-auto w-[350px] lg:w-[605px]">
              <div className="w-fit -mt-12 mb-10 lg:-ml-16 lg:-mt-8 lg:mb-0">
                <p className="bg-[#F7D877] rounded-xl text-lg lg:text-2xl font-bold p-3 w-fit shadow-lg ">¿Qué edad tienes?</p>
                <p className="w-[26px] h-[13px] block m-auto bg-[#F7D877]"></p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <button
                  type="button"
                  className="  hover:scale-105 
  shadow-answer font-semibold transition-all duration-300 ease-in-out  
  text-[var(--color-answer)] border-[1px] hover:border-[4px] border-[var(--border-answer)]  
  rounded-[var(--rounded-answer)]  hover:border-[var(--border-answer-hover)] 
  hover:bg-[var(--bg-answer-hover)] flex items-center h-10 lg:h-[50px] l justify-between    hover:border-2 hover:border-[var(--border-answer-hover)]"
                >
                  <div className="flex gap-2 lg:gap-0  lg:flex-col items-center lg:justify-center  lg:w-full px-3 py-3 lg:py-0 lg:px-0">
                    <span className="px-2">Menor de 30 años</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className=" lg:hidden h-8 w-8 mr-3">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="  hover:scale-105 
  shadow-answer font-semibold transition-all duration-300 ease-in-out  
  text-[var(--color-answer)] border-[1px] hover:border-[4px] border-[var(--border-answer)]  
  rounded-[var(--rounded-answer)]  hover:border-[var(--border-answer-hover)] 
  hover:bg-[var(--bg-answer-hover)] flex items-center h-10 lg:h-[50px] l justify-between    hover:border-2 hover:border-[var(--border-answer-hover)]"
                >
                  <div className="flex gap-2 lg:gap-0  lg:flex-col items-center lg:justify-center  lg:w-full px-3 py-3 lg:py-0 lg:px-0">
                    <span className="px-2">De 31 a 54 años</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className=" lg:hidden h-8 w-8 mr-3">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="  hover:scale-105 
  shadow-answer font-semibold transition-all duration-300 ease-in-out  
  text-[var(--color-answer)] border-[1px] hover:border-[4px] border-[var(--border-answer)]  
  rounded-[var(--rounded-answer)]  hover:border-[var(--border-answer-hover)] 
  hover:bg-[var(--bg-answer-hover)] flex items-center h-10 lg:h-[50px] l justify-between    hover:border-2 hover:border-[var(--border-answer-hover)]"
                >
                  <div className="flex gap-2 lg:gap-0  lg:flex-col items-center lg:justify-center  lg:w-full px-3 py-3 lg:py-0 lg:px-0">
                    <span className="px-2">De 55 a 65 años</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className=" lg:hidden h-8 w-8 mr-3">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="  hover:scale-105 
  shadow-answer font-semibold transition-all duration-300 ease-in-out  
  text-[var(--color-answer)] border-[1px] hover:border-[4px] border-[var(--border-answer)]  
  rounded-[var(--rounded-answer)]  hover:border-[var(--border-answer-hover)] 
  hover:bg-[var(--bg-answer-hover)] flex items-center h-10 lg:h-[50px] l justify-between    hover:border-2 hover:border-[var(--border-answer-hover)]"
                >
                  <div className="flex gap-2 lg:gap-0  lg:flex-col items-center lg:justify-center  lg:w-full px-3 py-3 lg:py-0 lg:px-0">
                    <span className="px-2">Más de 65 años</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className=" lg:hidden h-8 w-8 mr-3">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-row w-full justify-center gap-4 lg:gap-16 lg:-mb-10 -mb-6">
                <img src="/oferta-seguro-salud/envelope1.svg" alt="plusieurs icones fibre" className="w-10 lg:w-20" />
                <img src="/oferta-seguro-salud/firstAid1.svg" alt="plusieurs icones fibre" className="w-10 lg:w-20" />
                <img src="/oferta-seguro-salud/bowl1.svg" alt="plusieurs icones fibre" className="w-10 lg:w-20" />
              </div>
              <div className="flex flex-row w-full justify-center gap-4 lg:gap-16 lg:-mb-10 -mb-6">
                <img src="/oferta-seguro-salud/envelope2.svg" alt="plusieurs icones fibre" className="w-10 lg:w-20" />
                <img src="/oferta-seguro-salud/firstAid2.svg" alt="plusieurs icones fibre" className="w-10 lg:w-20" />
                <img src="/oferta-seguro-salud/bowl2.svg" alt="plusieurs icones fibre" className="w-10 lg:w-20" />
              </div>
            </div>
          </div>
          <div className="bg-vide"></div>
        </div>

        <footer className="flex flex-col lg:flex-row text-center lg:px-[64px] lg:min-h-[108px] text-[#061626] w-full lg:mt-0 pt-3 pb-1 pl-3 text-sm font-source-sans-pro lg:font-normal mt-10">
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

export default App;
