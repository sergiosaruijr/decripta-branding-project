import Image from "next/image";

import Navbar from "@/components/bar/navbar";
import CardPost from "@/components/common/card-post";
// import FluidGlass from "@/components/FluidGlass";

export default function Home() {
  const projects = [
    {
      href: "/cases",
      imageUrl: "/image/CARTAO.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
    {
      href: "/cases+1",
      imageUrl: "/image/Outdoor2.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
    {
      href: "/cases+2",
      imageUrl: "/image/Flyer.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
    {
      href: "/cases+3",
      imageUrl: "/image/CARTAO.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
    {
      href: "/cases+4",
      imageUrl: "/image/Flyer.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
    {
      href: "/cases+5",
      imageUrl: "/image/CARTAO.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        <section id="inicio">
          <div className="relative h-screen w-full mb-8">
            {/* <FluidGlass mode="bar" /> */}
            <Navbar />
            <Image
              src="/image/Outdoor2.png"
              alt="Imagem de fundo"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section id="projetos">
          <div className="grid grid-cols-1 gap-8 p-2 sm:grid-cols-2 sm:p-6 md:grid-cols-3 xl:grid-cols-4 ">
            {projects.map((proj) => (
              <CardPost key={proj.href} {...proj} />
            ))}
          </div>
        </section>

        {/* Contato Section */}
        <section
          id="contato"
          className="min-h-screen flex items-center justify-center bg-background px-6 py-20"
        >
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            {/* Lado esquerdo */}
            <div className="bg-gray-600 p-12 flex flex-col justify-center">
              <p className="text-[#89aa29] text-sm font-amifer tracking-wider mb-4">
                [CONTACT US]
              </p>
              <h2 className="text-5xl md:text-6xl font-amifer text-[#89aa29] mb-12 leading-tight">
                CONNECT
                <br />
                WITH US
              </h2>

              <div className="space-y-4">
                <a
                  href="mailto:itconf@gmail.com"
                  className="block bg-[#89aa29] text-white px-8 py-4 rounded-full text-lg font-amifer hover:opacity-90 transition-opacity text-center"
                >
                  ITCONF@GMAIL.COM
                </a>

                <div className="flex gap-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#89aa29] text-neutral-900 px-6 py-4 rounded-full text-lg font-amifer hover:opacity-90 transition-opacity text-center"
                  >
                    TWITTER (X)
                  </a>
                  <a
                    href="https://www.linkedin.com/company/decripta-branding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#89aa29] text-white px-6 py-4 rounded-full text-lg font-amifer hover:opacity-90 transition-opacity text-center"
                  >
                    LINKEDIN
                  </a>
                </div>
              </div>
            </div>

            {/* Lado direito */}
            <div className="bg-[#89aa29] p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 leading-tight">
                HAVE QUESTIONS?
                <br />
                GET IN TOUCH!
              </h3>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-neutral-900 text-xs font-bold tracking-wider mb-2"
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="nome"
                    className="w-full px-6 py-4 rounded-xl bg-contact-blue border-2 border-neutral-900/30 text-neutral-900 placeholder:text-neutral-900/50 focus:outline-none focus:border-neutral-900 transition-colors"
                    placeholder="William Brown"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-neutral-900 text-xs font-bold tracking-wider mb-2"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-6 py-4 rounded-xl bg-contact-blue border-2 border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                    placeholder="willbrown@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tipo"
                    className="block text-white text-xs font-bold tracking-wider mb-2"
                  >
                    INQUIRY TYPE
                  </label>
                  <select
                    id="tipo"
                    className="w-full px-6 py-4 rounded-xl bg-contact-blue border-2 border-white/30 text-white/50 focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select the topic</option>
                    <option value="geral">Geral</option>
                    <option value="projeto">Novo Projeto</option>
                    <option value="suporte">Suporte</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-white text-xs font-bold tracking-wider mb-2"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="mensagem"
                    rows={4}
                    className="w-full px-6 py-4 rounded-xl bg-contact-blue border-2 border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-transparent border-2 border-white text-white py-4 rounded-full text-sm font-bold tracking-wider hover:bg-white hover:text-contact-blue transition-all duration-300"
                >
                  SEND A MESSAGE
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
