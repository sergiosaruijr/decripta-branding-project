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
import FooterDecripta from "@/components/common/footer";
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
      href: "/sobre",
      imageUrl: "/image/decriptaTexto.svg",
      title: "Conheça a Decripta",
      description:
        "Na Decripta, cada marca é tratada como um ativo estratégico. Decodificamos essência, estruturamos posicionamento e transformamos percepção em valor de mercado.",
      objectFit: "contain",
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
      imageUrl: "/image/decriptaTexto2.svg",
      title: "Metodologia",
      description:
        "Nossa metodologia organiza significado antes de materializar forma.",
      objectFit: "contain",
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
      <main
        className="scroll-smooth relative min-h-screen"
        style={{
          backgroundImage: "url('/image/bgnovo.png')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
        }}
      >
        <section id="inicio">
          {/* <div className="relative h-screen w-full mb-30"> */}
          <div className="relative h-screen w-full z-10">
            {/* <Navbar /> */}
            <div className="px-10 py-12">{/* <NavigationMenuHome /> */}</div>

            {/* <Image
              src="/image/bg1.png"
              alt="Imagem de fundo"
              fill
              className="object-cover"
            /> */}

            <div
              className="absolute inset-0 z-0 pointer-events-none"
              // style={{
              //   background:
              //     "linear-gradient(to bottom, transparent 60%, #00322A 100%)",
              // }}
            >
              {/* <video
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                className="w-full h-full object-cover pointer-events-none"
              >
                <source src="/video/videoBg2.mp4" type="video/mp4" />
              </video> */}
              {/* <Image
                src="/image/bgnovo.png"
                alt="Imagem de fundo"
                fill
                className="object-cover object-top"
              /> */}
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
              src="/image/logoSVG.svg"
              alt="Logo"
              width={469}
              height={138}
              className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 px-10 sm:px-0"
            />
          </div>
        </section>

        <div className="max-w-[1900px] mx-auto w-full px-6 space-y-20 pt-60">
          <section id="quem-somos" className="max-w-ful mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center xl:gap-20">
              {aboutCards.map((proj) => (
                <AboutCard
                  key={proj.href}
                  {...proj}
                  objectFit={proj.objectFit as "cover" | "contain"}
                />
              ))}
            </div>
          </section>
          <div id="contato">
            <FormDecripta />
          </div>
        </div>

        <FooterDecripta />
      </main>
    </>
  );
}
