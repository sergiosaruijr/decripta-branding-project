"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CustomSelect } from "./CustomSelect";
import { FaLinkedin } from "react-icons/fa6";
import { SiX } from "react-icons/si";
import { AtSign, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, "Informe o nome"),
  email: z.string().email("E-mail inválido"),
  company: z.string().min(1, "Informe o nome da sua organização"),
  position: z.string().min(1, "Informe o seu cargo"),
  projectType: z.string().min(1, "Selecione uma opção"),
  brandStatus: z.string().min(1, "Selecione o momento atual"),
  estimatedInvestment: z.string().min(1, "Selecione a faixa de investimento"),
  // inquiryType: z.string().min(1, "Selecione o tipo de contato"),
  message: z.string().min(1, "Informe a mensagem"),
});

export function FormDecripta() {
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
      company: "",
      position: "",
      projectType: "",
      brandStatus: "",
      estimatedInvestment: "",
      message: "",
    },
  });

  const [formKey, setFormKey] = useState(0);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // console.log(data);
    const promise = fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(async (res) => {
      if (!res.ok) throw new Error("Erro no servidor");
      return res;
    });

    toast.promise(promise, {
      loading: "Enviando sua mensagem...",
      success: () => {
        reset();
        setFormKey((k) => k + 1);
        return "Mensagem enviada com sucesso!";
      },
      error: (err) => {
        console.error(err);
        return "Ops, algo deu errado ao enviar.";
      },
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6 py-12 md:py-20">
      <div className="max-w-[1920px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 overflow-hidden">
        {/* Lado esquerdo */}
        <div className="flex flex-col w-full">
          <p className="text-[#131313] text-[10px] sm:text-sm font-manrope font-semibold tracking-[0.2em] mb-4">
            INÍCIO DE PROJETO
          </p>
          <h2 className="text-[12vw] leading-[1.1] sm:text-6xl font-space font-bold text-[#131313] mb-8 uppercase">
            VAMOS
            <br />
            DECODIFICAR
            <br />
            SUA MARCA.
          </h2>
          <h4 className="text-base sm:text-lg max-w-full md:max-w-[450px] font-manrope mb-5 text-[#131313]/80">
            Se você busca clareza estratégica, posicionamento sólido e
            construção de valor de longo prazo, estamos prontos para iniciar a
            conversa.
          </h4>

          {/* <br /> */}

          <div className="border-t border-[#131313] max-w-[450px] md:my-15 my-10"></div>

          <div className="space-y-4 max-w-[450px] ">
            <a
              href="mailto:decriptabranding@gmail.com"
              className="text-#00322A text-sm font-manrope hover:opacity-90 hover:text-[#6fb14a] transition-opacity  w-fit flex gap-5 mb-8"
            >
              <AtSign size={20} />
              <div className="flex flex-col items-start ">
                <p className="text-xs font-manrope uppercase sm:text-sm">
                  decripta.branding
                </p>
                <p className="text-md font-manrope text-sm sm:text-md">
                  decriptabranding@gmail.com
                </p>
              </div>
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex  text-#00322A text-sm font-manrope hover:opacity-90 hover:text-[#6fb14a] transition-opacity text-center w-fit gap-5"
            >
              <SiX size={20} /> TWITTER (X)
            </a> */}
            <a
              href="https://wa.me/5543988507817"
              target="_blank"
              rel="noopener noreferrer"
              className="text-#00322A text-sm font-manrope hover:opacity-90 hover:text-[#6fb14a] transition-opacity  w-fit flex gap-5 mb-8"
            >
              <Phone size={20} />
              <div className="flex flex-col items-start">
                <p className="text-xs font-manrope uppercase sm:text-md">
                  Fale conosco
                </p>
                <p className="text-md font-manrope text-xs sm:text-sm">
                  +55 43 98850-7817
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Lado direito */}
        <div className="bg-[#131313] p-12 flex flex-col justify-center rounded-sm">
          <form
            className="space-y-12 "
            onSubmit={handleSubmit(onSubmit)}
            key={formKey}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
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
                  className="bg-transparent text-sm sm:text-md border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors font-manrope"
                  placeholder="Como devemos te chamar?"
                  {...register("name")}
                />

                {errors.name?.message && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-white/60 text-[10px] tracking-[0.2em] mb-2 uppercase font-manrope "
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-transparent border-b text-sm sm:text-md border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors font-manrope"
                  placeholder="seuemail@email.com"
                  {...register("email")}
                />

                {errors.email?.message && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
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
                  id="empresa"
                  className="bg-transparent border-b text-sm sm:text-md border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors font-manrope"
                  placeholder="Nome da sua organizacao"
                  {...register("company")}
                />

                {errors.company?.message && (
                  <p className="text-red-500 text-xs">
                    {errors.company.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="cargo"
                  className="text-white/60 text-[10px] tracking-[0.2em] mb-2 uppercase font-manrope"
                >
                  CARGO
                </label>
                <input
                  type="text"
                  id="cargo"
                  className="bg-transparent border-b text-sm sm:text-md border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors font-manrope"
                  placeholder="Ex: Diretor de Marketing"
                  {...register("position")}
                />

                {errors.position?.message && (
                  <p className="text-red-500 text-xs">
                    {errors.position.message}
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
                    { label: "Brand Strategy", value: "brandStrategy" },
                    {
                      label: "Experiência da Marca",
                      value: "experienciaDaMarca",
                    },
                    {
                      label: "Lançamento de Marca",
                      value: "lancamentoDaMarca",
                    },
                  ]}
                  onChange={(val) => setValue("projectType", val)}
                />
              </div>
              <div className="flex flex-col relative font-manrope">
                <CustomSelect
                  label="ESTÁGIO DA MARCA"
                  placeholder="Selecione o momento atual"
                  options={[
                    {
                      label: "Marca em fase de lançamento",
                      value: "lancamento",
                    },
                    {
                      label:
                        "Marca  já consolidada, mas sem estratégia definida",
                      value: "semEstrategia",
                    },
                    {
                      label: "Marca em processo de reposicionamento",
                      value: "reposicionamento",
                    },
                  ]}
                  onChange={(val) => setValue("brandStatus", val)}
                />
              </div>
            </div>
            <div className="flex flex-col relative font-manrope">
              <CustomSelect
                label="INVESTIMENTO ESTIMADO"
                placeholder="Qual a faixa de investimento?"
                options={[
                  { label: "até 3 mil", value: "ate3mil" },
                  { label: "de 3 mil a 10 mil", value: "entre3a10" },
                  { label: "de 10 mil a 20 mil", value: "entre10a20" },
                ]}
                onChange={(val) => setValue("estimatedInvestment", val)}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="nome"
                className="text-white/60 text-[10px] tracking-[0.2em] mb-2 uppercase font-manrope"
              >
                DESCREVA SEU DESAFIO
              </label>
              <textarea
                id="mensagem"
                rows={4}
                className="bg-transparent border-b text-sm sm:text-md border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors font-manrope"
                placeholder="Conte-nos um pouco sobre o que você deseja alcançar...?"
                {...register("message")}
              />

              {errors.message?.message && (
                <p className="text-red-500 text-xs">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#c7fe00d0] text-[#131313] py-4 rounded-[2px] text-sm sm:text-md font-bold tracking-wider hover:bg-[#C5FE00] hover:text-contact-blue transition-all duration-300 uppercase"
            >
              Enviar mensagem
            </button>

            <div className="text-[#ADAAAA] text-[9px] sm:text-[10px] text-center font-manrope uppercase ">
              {/* <p>
                Ao enviar, você concorda com nossa{" "}
                <a href="/politicaDePrivacidade" className="font-extrabold">
                  Política de Privacidade.
                </a>
              </p>
              <p>Respeitamos a confidencialidade do seu projeto.</p>
              <p>Responderemos em até 48h úteis.</p> */}
              <p>
                Ao enviar este formulário, você concorda com nossa{" "}
                <a href="/politicaDePrivacidade" className="font-extrabold">
                  Política de Privacidade.
                </a>
              </p>
              <p>
                Respeitamos a confidencialidade do seu projeto. Responderemos em
                até 48h úteis.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
