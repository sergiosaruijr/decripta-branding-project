import Image from "next/image";

//Verificar se todos foram trocados pelo novo footer

const FooterDecripta = () => {
  return (
    <footer>
      <div className="w-full sm:h-[260px] bg-black flex flex-col sm:justify-between sm:items-center border-0 sm:flex-row pt-15">
        {/* esquerda */}
        <div className="flex flex-col sm:ml-12 mx-6 pb-10">
          <h3 className="uppercase text-[#F3FFCD] text-bold text-2xl pb-2.5 font-manrope">
            DECRIPTA
          </h3>
          <p className="text-[12px] text-[#ADAAAA] uppercase font-manrope">
            © 2026 Decripta — Estúdio de Branding Estratégico. Todos os
            direitos reservados.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:mr-12 mx-6 uppercase gap-x-15 gap-y-5 font-bold sm:text-[14px] font-manrope text-[12px]  ">
          <a href="/legal" className="text-[#C5FE00] hover:text-[#ADAAAA]">
            Legal
          </a>
          <a href="/social" className="text-[#C5FE00] hover:text-[#ADAAAA]">
            Social
          </a>
          <a
            href="/politicaDePrivacidade"
            className="text-[#ADAAAA] hover:text-[#C5FE00]"
          >
            Política de Privacidade
          </a>
          <a href="/linkedln" className="text-[#ADAAAA] hover:text-[#C5FE00] ">
            Linkedln
          </a>
          <a
            href="/termosDeUso"
            className="text-[#ADAAAA] hover:text-[#C5FE00]"
          >
            termos de uso
          </a>
          <a href="/instagram" className="text-[#ADAAAA] hover:text-[#C5FE00]">
            Instagram
          </a>
        </div>
      </div>
      {/* Recorte teste para o logo gigante */}
      <div className="bg-black sm:pt-80 pt-40 w-full overflow-hidden border-0">
        <div className="relative w-full h-[200px] md:h-[350px] flex items-center justify-center">
          <div className="absolute bottom-[-15%] w-[110%]">
            <Image
              src="/image/logoFooter.svg"
              alt="Logo"
              width={1980}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDecripta;
