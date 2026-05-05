// // function About() {
// //   return <h2>Pagina Quem Somos</h2>;
// // }

import Image from "next/image";
import Link from "next/link";

// import Image from "next/image";

// // export default About;
// function About() {
//   return (
//     <main>
//       {/* <nav className="backdrop-filter backdrop-blur-md/30 bg-red-500/60">
//         <div className="relative h-[100px] p-6 ">
//           <ul className="flex flex-row justify-around items-center gap-4">
//             <li className="text-white text-2xl font-bold">inicio</li>
//             <li className="text-white text-2xl font-bold">quem somos</li>
//             <li className="text-white text-2xl font-bold">cases</li>
//             <li className="text-white text-2xl font-bold">fale conosco</li>
//           </ul>
//         </div>
//       </nav> */}
//       <body>
//         <div className="relative bg-[#00322A] w-full h-screen">
//           <div className="absolute w-full h-[120px] md:h-[80px] overflow-hidden">
//             <Image
//               alt="Grafismo decorativo"
//               src="/image/bgSobre.png"
//               fill
//               priority
//               className="object-cover object-top"
//             />
//           </div>
//           <div>algo</div>
//         </div>
//         <div className="mx-auto w-full bg-[#A0D81D] max-w-[1900px] flex flex-cols justify-center">
//           <div className="flex flex-cols mx-120 my-50">
//             <h1 className="text-8xl ">Pronto para decifrar sua marca?</h1>
//           </div>
//         </div>
//       </body>
//     </main>
//   );
// }

// export default About;

export default function DecriptaPageAbout() {
  return (
    <div className="bg-[#00322A] text-[#f5f5f0] min-h-screen font-sans">
      {/* <Image
          alt="Grafismo decorativo"
          src="/image/bgSobre.png"
          fill
          priority
          className="object-cover object-top"
        /> */}
      {/* <div>
          <Image
            src="/image/logo.png"
            alt="Logo"
            width={200}
            height={80}
            className=""
          />
        </div> */}

      <section className="px-44 pt-45 pb-15">
        {/* <p className="text-[#a8e038] text-xs uppercase tracking-widest mb-6">
          Estratégia de marca
        </p> */}
        <h1 className="text-[75px] leading-tight max-w-4xl font-space mb-10">
          <span className="block text-[#E2E2E2]">Decodificando </span>
          <span className="block text-white">marcas para construir</span>
          <span className="text-[#a8e038] text-8xl font-bold">
            relevância real.
          </span>
        </h1>
        <p className="mt-6 text-[#C0C8C4] text-4xl leading-relaxed max-w-6xl font-light">
          A Decripta nasce da necessidade de ir além do visual… <br />
          transformamos confusão em clareza, e clareza em valor.
        </p>
      </section>

      <section className="px-44 pb-25">
        <div className="w-12 h-0.5 bg-[#a8e038] mb-8" />
        <h1 className="text-[75px] leading-tight max-w-4xl font-space mb-5 font-semibold">
          {/* mudar para inter a font */}
          Para quem é a Decripta?
        </h1>
        <p className="text-[#C0C8C4] text-4xl leading-relaxed max-w-3xl font-light">
          Fundadores visionários que sentem que sua marca está além do valor que
          entregam.
        </p>
      </section>

      <section className="bg-[#a8e038] px-8 py-40 text-center">
        <h2 className="text-6xl font-regular text-[#00322A] mb-15">
          {/* mudar para font inter */}
          Pronto para decifrar <br />
          sua marca?
        </h2>
        <a
          href="#"
          className="inline-block bg-[#0d2818] text-[#f5f5f0] text-sm font-semibold px-8 py-3 font-inter rounded-4xl hover:text-[#C5FE00]"
        >
          Iniciar Consultoria Estratégica
        </a>
      </section>

      <footer>
        <div className="w-full h-[260px] bg-black flex justify-between items-center border-0">
          {/* esquerda */}
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
        <div className="bg-black pt-80 w-full overflow-hidden">
          <Image
            src="/image/logoFooter.svg"
            alt="Logo"
            width={1980}
            height={500}
            // className="object-contain"
          />
        </div>
      </footer>
    </div>
  );
}
