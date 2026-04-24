import { ArrowRight, LampIcon, LayersIcon, TargetIcon } from "lucide-react";

export default function DecriptaPageApproach() {
  return (
    <div className="bg-[#00322A] text-[#f5f5f0] min-h-screen font-sans">
      <div className="absolute w-full h-[120px] md:h-[80px] overflow-hidden bg-[#a8e038] flex justify-center">
        <h1 className="font-space font-bold text-7xl pt-1">D</h1>
        <h1 className="font-space font-bold text-5xl pt-4">E</h1>
        <h1 className="font-space font-bold text-4xl pt-5">C</h1>
        <h1 className="font-space font-bold text-5xl pt-2">R</h1>
        <h1 className="font-space font-bold text-6xl pt-2">I</h1>
        <h1 className="font-space font-bold text-4xl pt-5">P</h1>
        <h1 className="font-space font-bold text-5xl pt-4">T</h1>
        <h1 className="font-space font-bold text-6xl pt-2">A</h1>
      </div>

      <section className="px-44 pt-45 pb-15">
        {/* <p className="text-[#a8e038] text-xs uppercase tracking-widest mb-6">
          Estratégia de marca
        </p> */}
        <h1 className="text-[75px] leading-tight max-w-4xl font-space mb-10">
          <span className="block text-[#E2E2E2]">Antes de parecer, </span>
          <span className="block text-[#E2E2E2]">sua marca precisa</span>
          <span className="text-[#a8e038] text-[120px] font-bold">
            fazer sentido.
          </span>
        </h1>
        <p className="mt-6 text-[#C0C8C4] text-3xl leading-relaxed max-w-6xl font-light">
          Na Decripta, a gente não começa pelo design. Começamos <br />
          pelo entendimento. Deciframos o DNA estratégico para <br />
          construir visualidade com propósito.
        </p>
      </section>

      <section className="md:px-20 lg:px-44 px-4 w-full">
        <div className="flex flex-row w-full min-h-[400px]">
          <div className="flex-1 bg-[#1B1B1B] p-12 flex flex-col">
            <LampIcon className="mb-10 text-[#a8e038]" />
            {/* colocar inter */}
            <h1 className="font-space text-4xl text-[#E2E2E2] mb-6">Clareza</h1>
            <p className=" text-lg text-[#C0C8C4]">
              Eliminamos o ruído para encontrar a essência da sua proposta de
              valor. Sem clareza, não há conexão.
            </p>
          </div>

          <div className="flex-1 bg-[#1F1F1F] p-12 flex flex-col">
            <TargetIcon className="mb-10 text-[#a8e038]" />
            {/* colocar inter */}
            <h1 className="font-space text-4xl text-[#E2E2E2] mb-6 ">
              Posicionamento
            </h1>
            <p className=" text-lg text-[#C0C8C4]">
              Definimos onde sua marca se senta à mesa. Criamos diferenciação
              real em mercados saturados.
            </p>
          </div>

          <div className="flex-1 bg-[#2A2A2A] p-12 flex flex-col">
            <LayersIcon className="mb-10 text-[#a8e038]" />
            {/* colocar inter */}
            <h1 className="font-space text-4xl text-[#E2E2E2] mb-6">
              Consistência
            </h1>
            <p className=" text-lg text-[#C0C8C4]">
              Transformamos a estratégia em um sistema visual rigoroso que
              funciona em todos os pontos de contato.
            </p>
          </div>
        </div>
      </section>

      <section className="px-44 pt-45 pb-15">
        <h1 className="text-7xl leading-tight max-w-6xl font-space mb-15">
          O Processo de Decriptação
        </h1>

        <div className="flex flex-col gap-20">
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <span className="bg-[#a8e038] text-[#0d2818] text-2xl font-bold px-2 py-1 rounded-sm">
                01
              </span>
              <div className="w-px flex-1 bg-[#a8e038]/30 mt-2" />
            </div>
            <div className="pb-4 pl-32">
              <h3 className="text-[#a8e038] text-5xl font-semibold mb-8 mt-[-6]">
                Imersão
              </h3>
              <p className="text-[#C0C8C4] text-3xl leading-relaxed max-w-5xl">
                Mergulhamos no seu negócio, ouvimos os stakeholders e entendemos
                o ecossistema.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <span className="bg-[#a8e038] text-[#0d2818] text-2xl font-bold px-2 py-1 rounded-sm">
                02
              </span>
              <div className="w-px flex-1 bg-[#a8e038]/30 mt-2" />
            </div>
            <div className="pb-4 pl-32">
              <h3 className="text-[#a8e038] text-5xl font-semibold mb-8 mt-[-6]">
                Diagnóstico
              </h3>
              <p className="text-[#C0C8C4] text-3xl leading-relaxed max-w-5xl">
                Cruzamos os dados da imersão com inteligência de mercado.
                Identificamos as fraquezas e as oportunidades de diferenciação.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <span className="bg-[#a8e038] text-[#0d2818] text-2xl font-bold px-2 py-1 rounded-sm">
                03
              </span>
            </div>
            <div className="pl-32">
              <h3 className="text-[#a8e038] text-5xl font-semibold mb-8 mt-[-6]">
                Direcionamento
              </h3>
              <p className="text-[#C0C8C4] text-3xl leading-relaxed max-w-5xl">
                A entrega final: o mapa estratégico que guiará toda a expressão
                visual e verbal da sua marca daqui em diante.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#a8e038] px-8 py-40 text-center">
        <h2 className="text-6xl font-regular text-[#00322A] mb-15">
          {/* mudar para font inter */}
          Pronto para decifrar o <br />
          verdadeiro potencial da sua <br />
          marca?
        </h2>
        <div>
          <a
            href="#"
            className="inline-flex items-center bg-[#0d2818] text-[#A0D81D] text-sm font-semibold px-8 py-3 "
          >
            <p className="pr-2">SOLICITAR DIAGNÓSTICO</p>
            <ArrowRight className="text-[#A0D81D]" />
          </a>
        </div>
      </section>

      <footer>
        <div className="w-full h-[220px] bg-black flex justify-between items-center">
          <div className="flex flex-col ml-12">
            <h3 className="uppercase text-[#F3FFCD] text-bold text-2xl">
              DECRIPTA
            </h3>
            <p className="text-[12px] text-[#ADAAAA] uppercase font-manrope font-light">
              © 2024 Strategic Branding Studio All Rights Reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 mr-12 uppercase gap-x-15 gap-y-5 font-bold text-[12px] !font-hagrid">
            <a href="/legal" className="text-[#C5FE00] hover:text-[#ADAAAA]">
              Legal
            </a>
            <a href="/social" className="text-[#C5FE00] hover:text-[#ADAAAA]">
              Social
            </a>
            <a
              href="/privacyPolicy"
              className="text-[#ADAAAA] hover:text-[#C5FE00]"
            >
              Privacy Policy
            </a>
            <a
              href="/linkedln"
              className="text-[#ADAAAA] hover:text-[#C5FE00] "
            >
              Linkedln
            </a>
            <a
              href="/termsOfService"
              className="text-[#ADAAAA] hover:text-[#C5FE00]"
            >
              Terms of service
            </a>
            <a
              href="/instagram"
              className="text-[#ADAAAA] hover:text-[#C5FE00]"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
