import { ArrowRight } from "lucide-react";

export default function DecriptaPageApproach() {
  return (
    <div className="bg-[#00322A] text-[#f5f5f0] min-h-screen font-sans">
      <section className="px-30 pt-36 pb-20">
        <h1 className="text-5xl font-bold leading-tight max-w-3xl">
          Um processo claro para <br />
          <span className="text-[#a8e038]">construir marcas consistentes.</span>
        </h1>
        <p className="mt-6 text-[#a0b89a] text-xl leading-relaxed max-w-3xl">
          Nossa metodologia foi criada para trazer estrutura ao <br />
          que normalmente é feito no improviso.
        </p>
      </section>

      <section className="px-30 pb-30 pt-15">
        <div className="flex flex-col md:flex-row gap-px">
          <div className="flex-1  p-10 flex flex-col border-[#A0D81D] border-t-2 border-r-2">
            <h3 className="text-[#a8e038] text-xl font-semibold mb-4">
              Decodificação
            </h3>
            <p className="text-[#a0b89a] text-sm leading-relaxed">
              Um mergulho profundo no DNA do negócio. Analisamos mercado,
              comportamento e discurso para encontrar o núcleo do valor da sua
              marca.
            </p>
          </div>

          <div className="flex-1  p-10 flex flex-col border-[#A0D81D] border-t-2 border-r-2">
            <h3 className="text-[#a8e038] text-xl font-semibold mb-4">
              Direção
            </h3>
            <p className="text-[#a0b89a] text-sm leading-relaxed">
              Transformamos dados e descobertas em estrutura real. Definimos o
              posicionamento, a voz e a ambição competitiva onde sua marca vai
              dominar.
            </p>
          </div>

          <div className="flex-1 p-10 flex flex-col border-[#A0D81D] border-t-2">
            <h3 className="text-[#a8e038] text-xl font-semibold mb-4">
              Materialização
            </h3>
            <p className="text-[#a0b89a] text-sm leading-relaxed">
              A estratégia ganha forma. Criamos a identidade visual e os pontos
              de contato que traduzem a nova inteligência da marca em impacto
              tangível.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-20 bg-[#a8e038] overflow-hidden flex items-center">
        <p className="text-[#0d2818] text-5xl font-black tracking-tight whitespace-nowrap opacity-20 select-none">
          DECRIPTA · DECRIPTA · DECRIPTA · DECRIPTA · DECRIPTA · DECRIPTA ·
          DECRIPTA · DECRIPTA · DECRIPTA · DECRIPTA ·{/* deixar nao clicavel */}
        </p>
      </div>

      <section className="bg-[#a8e038] px-8 py-20 text-center">
        <h2 className="text-4xl font-space text-[#0d2818] mb-8">
          Pronto para decifrar o <br />
          verdadeiro potencial da sua <br />
          marca?
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#0d2818] text-[#a8e038] text-sm font-semibold px-8 py-3"
        >
          SOLICITAR DIAGNÓSTICO
          <ArrowRight size={16} />
        </a>
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
