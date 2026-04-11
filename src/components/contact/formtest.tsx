import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Informe o nome"),
  email: z.string().email("E-mail inválido"),
  inquiryType: z.string().min(1, "Selecione o tipo de contato"),
  message: z.string().min(1, "Informe a mensagem"),
});

export function FormTest() {
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

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
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
                <p className="text-red-500 text-xs">{errors.name.message}</p>
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

              {errors.email?.message && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
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
                <option value="geral" className="bg-contact-blue text-white">
                  Geral
                </option>
                <option value="projeto" className="bg-contact-blue text-white">
                  Novo Projeto
                </option>
                <option value="suporte" className="bg-contact-blue text-white">
                  Suporte
                </option>
              </select>

              {errors.inquiryType?.message && (
                <p className="text-red-500 text-xs">
                  {errors.inquiryType.message}
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

              {errors.message?.message && (
                <p className="text-red-500 text-xs">{errors.message.message}</p>
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
  );
}
