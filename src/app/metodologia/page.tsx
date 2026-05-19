import FooterDecripta from "@/components/common/footer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function DecriptaPageApproach() {
  return (
    <div className="bg-[#00322A] text-[#f5f5f0] min-h-screen font-sans">
      <section className="sm:px-20 px-10 pt-36 pb-20">
        <h1 className="text-[6vw] sm:text-[5vw] 2xl:text-[4.5vw] font-bold leading-tight">
          Um processo claro para <br />
          <span className="text-[#a8e038] text-[7vw] sm:text-[6vw] 2xl:text-[5vw]">
            construir marcas consistentes.
          </span>
        </h1>
        <p className="mt-6 text-[#a0b89a] text-[4.5vw] sm:text-[2.5vw] md:text-[3vw] 2xl:text-[2.5vw] leading-relaxed ">
          Nossa metodologia foi criada para trazer estrutura ao que normalmente{" "}
          <br />é feito no improviso.
        </p>
      </section>

      <section className="sm:px-20 pb-30 px-10 ">
        <div className="flex flex-col md:flex-row gap-px">
          <div className="flex-1  p-10 flex flex-col border-[#A0D81D] border-t-2 border-r-2">
            <h3 className="text-[#a8e038] text-[5vw] sm:text-[2.5vw] 2xl:text-[3vw] font-semibold mb-4">
              Decodificação
            </h3>
            <p className="text-[#a0b89a] sm:text-[2.5vw] md:text-[2vw] 2xl:text-[1.5vw] text-[2.5vw]leading-relaxed">
              Um mergulho profundo no DNA do negócio. Analisamos mercado,
              comportamento e discurso para encontrar o núcleo do valor da sua
              marca.
            </p>
          </div>

          <div className="flex-1  p-10 flex flex-col border-[#A0D81D] border-t-2 border-r-2">
            <h3 className="text-[#a8e038] text-[5vw] sm:text-[2.5vw] 2xl:text-[3vw] font-semibold mb-4">
              Direção
            </h3>
            <p className="text-[#a0b89a] sm:text-[2.5vw] md:text-[2vw] 2xl:text-[1.5vw] text-[2.5vw] leading-relaxed">
              Transformamos dados e descobertas em estrutura real. Definimos o
              posicionamento, a voz e a ambição competitiva onde sua marca vai
              dominar.
            </p>
          </div>

          <div className="flex-1 p-10 flex flex-col border-[#A0D81D] border-t-2">
            <h3 className="text-[#a8e038] text-[5vw] sm:text-[2.5vw] 2xl:text-[3vw] font-semibold mb-4">
              Materialização
            </h3>
            <p className="text-[#a0b89a] sm:text-[2.5vw] md:text-[2vw] 2xl:text-[1.5vw] text-[2.5vw] leading-relaxed">
              A estratégia ganha forma. Criamos a identidade visual e os pontos
              de contato que traduzem a nova inteligência da marca em impacto
              tangível.
            </p>
          </div>
        </div>
      </section>

      {/* <div className="w-full h-20 bg-[#a8e038] overflow-hidden flex items-center"></div> */}

      <section className="bg-[#a8e038] px-8 py-32 text-center">
        <h2 className="md:text-[3.5vw] lg:text-[3vw] text-[5vw] font-space leading-tight text-[#0d2818] mb-8">
          Pronto para decifrar o <br />
          <strong>
            verdadeiro potencial da sua <br />
          </strong>
          <strong>da sua marca?</strong>
        </h2>
        <div className=" text-[#A0D81D] hover:text-[#f5f5f0]">
          <a
            href="#"
            className="inline-flex items-center bg-[#0d2818] text-sm font-semibold px-8 py-3 font-inter rounded-4xl"
          >
            <p className="pr-2">SOLICITAR DIAGNÓSTICO</p>
            <ArrowRight className="" />
          </a>
        </div>
      </section>

      <FooterDecripta />
    </div>
  );
}
