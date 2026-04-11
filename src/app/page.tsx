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
import { FormDecripta } from "@/components/contact/formDecripta";
import { FormTest } from "@/components/contact/formtest";
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
            <div className="px-10 py-12">{/* <NavigationMenuHome /> */}</div>

            {/* <Image
              src="/image/bg1.png"
              alt="Imagem de fundo"
              fill
              className="object-cover"
            /> */}

            <div className="absolute inset-0 z-0 pointer-events-none">
              <video
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                className="w-full h-full object-cover pointer-events-none"
              >
                <source src="/video/videoBg2.mp4" type="video/mp4" />
              </video>
              {/* Escudo invisível para o Lucid Mode do Opera */}
              <div className="absolute inset-0 bg-transparent pointer-events-none z-10" />
            </div>
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
              className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 "
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
          <FormDecripta />
        </div>

        {/* Contato */}
        {/* <FormTest /> */}

        <footer>
          <div className="w-full h-[260px] bg-black flex justify-between items-center">
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
              <a href="" className="text-[#C5FE00] hover:text-[#ADAAAA]">
                Legal
              </a>
              <a href="" className="text-[#C5FE00] hover:text-[#ADAAAA]">
                Social
              </a>
              <a href="" className="text-[#ADAAAA] hover:text-[#C5FE00]">
                Privacy Policy
              </a>
              <a href="" className="text-[#ADAAAA] hover:text-[#C5FE00] ">
                Linkedln
              </a>
              <a href="" className="text-[#ADAAAA] hover:text-[#C5FE00]">
                Terms of service
              </a>
              <a href="" className="text-[#ADAAAA] hover:text-[#C5FE00]">
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
