"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";

// import Navbar from "@/components/bar/navbar";
import CardPost from "@/components/common/card-post";
// import { NavigationMenuHome } from "@/components/bar/navmenu";
import { NavigationMenuHome2 } from "@/components/bar/navmenu2";
import { ChevronDown, Mail } from "lucide-react";
import { SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import { CustomSelect } from "@/components/contact/CustomSelect";
import AboutCard from "@/components/common/about-card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../components/ui/select";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nome é obrigatório" })
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  inquiryType: z.string().min(1, { message: "Escolha o tipo de assunto" }),
  message: z
    .string()
    .min(1, { message: "Mensagem é obrigatória" })
    .min(10, { message: "Mensagem deve ter no mínimo 10 caracteres" }),
});

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  label: string;
  options: Option[];
  placeholder: string;
  onChange: (value: string) => void;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      inquiryType: "",
      message: "",
    },
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso para a Decripta!");
        reset();
      } else {
        alert("Ops, algo deu errado no envio.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // retirar datas
  const aboutCards = [
    {
      href: "/conheca",
      imageUrl: "/image/decriptaTexto.png",
      title: "Conheça a Decripta",
      description:
        "Na Decripta, cada marca é tratada como um ativo estratégico. Decodificamos essência, estruturamos posicionamento e transformamos percepção em valor de mercado.",
    },
    {
      href: "/abordagem",
      imageUrl: "/image/CARTAO.png",
      title: "Nossa abordagem",
      description:
        "Não começamos pelo visual. Começamos pela estrutura. Investigamos território, percepção e intenção estratégica antes de qualquer decisão estética.",
    },
    {
      href: "/metodologia",
      imageUrl: "/image/cartaoBranding2.png",
      title: "Metodologia",
      description:
        "Nossa metodologia organiza significado antes de materializar forma.",
    },
  ];

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
      imageUrl: "/image/OUTDOOR2.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
    {
      href: "/cases+2",
      imageUrl: "/image/FLYER.png",
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
      imageUrl: "/image/decriptaTexto.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
    {
      href: "/cases+5",
      imageUrl: "/image/cartaoBranding2.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
  ];

  return (
    <>
      <main>
        <section id="inicio1">
          <div className="relative h-screen w-full mb-30">
            {/* <Navbar /> */}
            <div className="px-10 py-12">
              {/* <NavigationMenuHome /> */}
              <NavigationMenuHome2 />
            </div>

            <Image
              src="/image/bg1.png"
              alt="Imagem de fundo"
              fill
              className="object-cover"
            />

            {/* <Image
              src="/image/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            /> */}
            <Image
              src="/image/logo.png"
              alt="Logo"
              width={469}
              height={138}
              className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            {/* <div className="h-9 w-full bg-white absolute bottom-0 flex items-center justity-between">
              <p className="text-black text-sm font-amifer tracking-wider pl-14">
                decripta.branding@gmail.com
              </p>
              <p className="text-black text-sm font-amifer tracking-wider pl-24">
                +55 43 99999-9999
              </p>
            </div> */}
          </div>
        </section>
        {/* <section id="inicio2">
          <div className="relative h-screen w-full mb-8">
            <Navbar />
            <Image
              src="/image/Layout2.png"
              alt="Imagem de fundo"
              fill
              className="object-cover"
            />
          </div>
        </section> */}
        {/* Projetos */}
        {/* <section id="projetos">
          <div className="grid grid-cols-1 gap-8 p-2 sm:grid-cols-2 sm:p-6 md:grid-cols-3 xl:grid-cols-4 ">
            {projects.map((proj) => (
              <CardPost key={proj.href} {...proj} />
            ))}
          </div>
        </section> */}
        <div className="max-w-[1900px] mx-auto w-full px-6 space-y-20">
          {/* Quem Somos */}
          {/* Voltar apos arrumar contato */}
          <section id="quem-somos" className="max-w-ful mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center xl:gap-20">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-38 w-full"> */}
              {/* caso prefica partindo do mesmo ponto, mas com espaçamento maior */}
              {aboutCards.map((proj) => (
                <AboutCard key={proj.href} {...proj} />
              ))}
            </div>
          </section>
          {/* <section
          id="quem-somos"
          className="min-h-screen flex items-center justify-center bg-background px-6 py-20"
        >
          <h3>Decripta Branding</h3>
          <p>
            Decripta Branding é uma agência de branding e design que cria
            identidades visuais para empresas e marcas.
          </p>
        </section> */}

          {/* Contato 2 teste*/}
          <section
            id="contato2"
            className="min-h-screen flex items-center justify-center bg-background px-8 py-20"
          >
            <div className="max-w-8xl w-full grid md:grid-cols-2 gap-32 overflow-hidden">
              {/* Lado esquerdo */}
              <div className=" flex flex-col  max-w-4xl w-full">
                <p className="text-[#131313] text-sm font-manrope font-semibold tracking-[0.2em] mb-5.5">
                  INÍCIO DE PROJETO
                </p>
                <h2 className="text-5xl md:text-6xl font-space font-bold text-[#131313] mb-10 w-fit pr-10">
                  VAMOS
                  <br />
                  DECODIFICAR
                  <br />
                  SUA MARCA.
                </h2>
                <h4 className="text-lg max-w-[450px] font-manrope">
                  Se você busca clareza estratégica, posicionamento sólido e
                  construção de valor de longo prazo, estamos prontos para
                  iniciar a conversa.
                  {/* <br /> */}
                </h4>

                <div className="border-t border-[#131313] max-w-[450px] my-12"></div>

                <div className="space-y-4 max-w-[450px] ">
                  <a
                    href="mailto:decriptabranding@gmail.com"
                    className="text-#00322A text-sm font-manrope hover:opacity-90 hover:text-[#6fb14a] transition-opacity text-center w-fit flex gap-5"
                  >
                    <Mail size={20} /> DECRIPTABRANDING@GMAIL.COM
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex  text-#00322A text-sm font-manrope hover:opacity-90 hover:text-[#6fb14a] transition-opacity text-center w-fit gap-5"
                  >
                    <SiX size={20} /> TWITTER (X)
                  </a>
                  <a
                    href="https://www.linkedin.com/company/decripta-branding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex  text-#00322A text-sm font-manrope hover:opacity-90 hover:text-[#c8f135] transition-opacity text-center w-fit gap-5"
                  >
                    <FaLinkedin size={20} /> LINKEDIN
                  </a>
                </div>
              </div>

              {/* Lado direito */}
              <div className="bg-[#131313] p-12 flex flex-col justify-center rounded-sm">
                {/* <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 leading-tight">
                HAVE QUESTIONS?
                <br />
                GET IN TOUCH!
              </h3> */}

                <form className="space-y-12 " onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                    <div className="flex flex-col">
                      <label
                        htmlFor="nome"
                        className="text-white/60 text-[10px] tracking-[0.2em] mb-2 uppercase font-manrope"
                      >
                        NOME COMPLETO
                      </label>
                      <input
                        type="text"
                        id="nome"
                        className="bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors font-manrope"
                        placeholder="Como devemos te chamar?"
                        {...register("name")}
                      />

                      {errors.name?.message && (
                        <p className="text-red-500 text-xs">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="text-white/60 text-[10px]  tracking-[0.2em] mb-2 uppercase font-manrope"
                      >
                        EMAIL
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors font-manrope"
                        placeholder="seuemail@email.com"
                        {...register("email")}
                      />

                      {errors.name?.message && (
                        <p className="text-red-500 text-xs">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    {/* teste empresa e  cargo */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="nome"
                        className="text-white/60 text-[10px] tracking-[0.2em] mb-2 uppercase font-manrope"
                      >
                        EMPRESA
                      </label>
                      <input
                        type="text"
                        id="nome"
                        className="bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors font-manrope"
                        placeholder="Nome da sua organizacao"
                        {...register("name")}
                      />

                      {errors.name?.message && (
                        <p className="text-red-500 text-xs">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="text-white/60 text-[10px]  tracking-[0.2em] mb-2 uppercase font-manrope"
                      >
                        CARGO
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors font-manrope"
                        placeholder="Ex: Diretor de Marketing"
                        {...register("email")}
                      />

                      {errors.name?.message && (
                        <p className="text-red-500 text-xs">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    {/* teste Tipo projeto e Estagio marca */}
                    {/* TIPO DE PROJETO (Select) */}
                    <div className="flex flex-col relative font-manrope">
                      <CustomSelect
                        label="TIPO DE PROJETO"
                        placeholder="Selecione uma opção"
                        options={[
                          { label: "Geral", value: "geral" },
                          { label: "Novo Projeto", value: "projeto" },
                        ]}
                        onChange={(val) => setValue("inquiryType", val)}
                      />
                    </div>
                    <div className="flex flex-col relative font-manrope">
                      <CustomSelect
                        label="ESTÁGIO DA MARCA"
                        placeholder="Selecione o momento atual"
                        options={[
                          { label: "Teste1", value: "teste1" },
                          { label: "Teste2", value: "teste2" },
                        ]}
                        onChange={(val) => setValue("inquiryType", val)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col relative font-manrope">
                    <CustomSelect
                      label="INVESTIMENTO ESTIMADO"
                      placeholder="Qual a faixa de investimento?"
                      options={[
                        { label: "Teste1", value: "teste1 " },
                        { label: "Teste2", value: "teste2" },
                      ]}
                      onChange={(val) => setValue("inquiryType", val)}
                    />
                  </div>

                  {/* <div>
                  <label
                    htmlFor="tipo"
                    className="text-white/60 text-[10px]  tracking-[0.2em] mb-2 uppercase font-manrope"
                  >
                    INQUIRY TYPE
                  </label>
                  <select
                    id="tipo"
                    className="w-full px-6 py-4 rounded-xl bg-contact-blue border-2 border-white/30 text-white/50 focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                    {...register("inquiryType")}
                  >
                    <option value="">Select the topic</option>
                    <option
                      value="geral"
                      className="bg-contact-blue text-white"
                    >
                      Geral
                    </option>
                    <option
                      value="projeto"
                      className="bg-contact-blue text-white"
                    >
                      Novo Projeto
                    </option>
                    <option
                      value="suporte"
                      className="bg-contact-blue text-white"
                    >
                      Suporte
                    </option>
                  </select>

                  {errors.name?.message && (
                    <p className="text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div> */}

                  {/* Teste investimento */}
                  {/* <div>
                  <label
                    htmlFor="tipo"
                    className="text-white/60 text-[10px] tracking-[0.2em] mb-2 uppercase font-manrope"
                  >
                    INVESTIMENTO ESTIMADO
                  </label>
                  <select
                    id="tipo"
                    className="w-full px-6 py-4 rounded-xl bg-contact-blue border-2 border-white/30 text-white/50 focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                    {...register("inquiryType")}
                  >
                    <option value="">Qual a faixa de investimento?</option>
                    <option
                      value="geral"
                      className="bg-contact-blue text-[#131313]"
                    >
                      Geral
                    </option>
                    <option
                      value="projeto"
                      className="bg-contact-blue text-[#131313]"
                    >
                      Novo Projeto
                    </option>
                    <option
                      value="suporte"
                      className="bg-contact-blue text-[#131313]"
                    >
                      Suporte
                    </option>
                  </select>

                  {errors.name?.message && (
                    <p className="text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div> */}

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="text-white/60 text-[10px]  tracking-[0.2em] mb-2 uppercase font-manrope"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      className="w-full px-6 py-4 rounded-xl bg-contact-blue border-2 border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors resize-none"
                      placeholder="How can we help you?"
                      {...register("message")}
                    />

                    {errors.name?.message && (
                      <p className="text-red-500 text-xs">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C5FE00] border-2 text-[#131313] py-4 rounded-full text-sm font-bold tracking-wider hover:bg-white hover:text-contact-blue transition-all duration-300"
                  >
                    SEND A MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        {/* Contato */}

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
                  href="mailto:decriptabranding@gmail.com"
                  className="block bg-[#89aa29] text-white px-8 py-4 rounded-full text-lg font-amifer hover:opacity-90 transition-opacity text-center"
                >
                  DECRIPTABRANDING@GMAIL.COM
                </a>

                <div className="flex gap-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#89aa29] text-white px-6 py-4 rounded-full text-lg font-amifer hover:opacity-90 transition-opacity text-center"
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

              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("name")}
                  />

                  {errors.name?.message && (
                    <p className="text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
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
                    {...register("email")}
                  />

                  {errors.name?.message && (
                    <p className="text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="tipo"
                    className="block text-black text-xs font-bold tracking-wider mb-2"
                  >
                    INQUIRY TYPE
                  </label>
                  <select
                    id="tipo"
                    className="w-full px-6 py-4 rounded-xl bg-contact-blue border-2 border-white/30 text-white/50 focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                    {...register("inquiryType")}
                  >
                    <option value="">Select the topic</option>
                    <option
                      value="geral"
                      className="bg-contact-blue text-white"
                    >
                      Geral
                    </option>
                    <option
                      value="projeto"
                      className="bg-contact-blue text-white"
                    >
                      Novo Projeto
                    </option>
                    <option
                      value="suporte"
                      className="bg-contact-blue text-white"
                    >
                      Suporte
                    </option>
                  </select>

                  {errors.name?.message && (
                    <p className="text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
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
                    {...register("message")}
                  />

                  {errors.name?.message && (
                    <p className="text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
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
