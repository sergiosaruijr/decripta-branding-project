import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CustomSelect } from "./CustomSelect";
import { FaLinkedin } from "react-icons/fa6";
import { SiX } from "react-icons/si";
import { AtSign, Mail, Phone } from "lucide-react";

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

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-8 py-20">
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
          <h4 className="text-lg max-w-[450px] font-manrope mb-5">
            Se você busca clareza estratégica, posicionamento sólido e
            construção de valor de longo prazo, estamos prontos para iniciar a
            conversa.
            {/* <br /> */}
          </h4>

          <div className="border-t border-[#131313] max-w-[450px] my-15"></div>

          <div className="space-y-4 max-w-[450px] ">
            <a
              href="mailto:decriptabranding@gmail.com"
              className="text-#00322A text-sm font-manrope hover:opacity-90 hover:text-[#6fb14a] transition-opacity  w-fit flex gap-5 mb-8"
            >
              <AtSign size={20} />
              <div className="flex flex-col items-start">
                <p className="text-sm font-manrope uppercase">
                  decripta.branding
                </p>
                <p className="text-md font-manrope">
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
              href="mailto:decriptabranding@gmail.com"
              className="text-#00322A text-sm font-manrope hover:opacity-90 hover:text-[#6fb14a] transition-opacity  w-fit flex gap-5 mb-8"
            >
              <Phone size={20} />
              <div className="flex flex-col items-start">
                <p className="text-sm font-manrope uppercase">Fale conosco</p>
                <p className="text-md font-manrope">+55 43 98850-7817</p>
              </div>
            </a>
          </div>
        </div>

        {/* Lado direito */}
        <div className="bg-[#131313] p-12 flex flex-col justify-center rounded-sm">
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
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
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
                  className="bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors font-manrope"
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
                  className="bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors font-manrope"
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
                className="bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors font-manrope"
                placeholder="Conte-nos um pouco sobre o que você deseja alcançar...?"
                {...register("message")}
              />

              {errors.message?.message && (
                <p className="text-red-500 text-xs">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#c7fe00d0] text-[#131313] py-4 rounded-[2px] text-sm font-bold tracking-wider hover:bg-[#C5FE00] hover:text-contact-blue transition-all duration-300 uppercase"
            >
              Enviar mensagem
            </button>

            <div className="text-[#ADAAAA] text-[12px] flex flex-col justify-center items-center font-manrope uppercase ">
              <p>
                Ao enviar este formulário, você concorda com nossa{" "}
                <a href="" className="font-extrabold">
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
