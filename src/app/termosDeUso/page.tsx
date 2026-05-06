import FooterDecripta from "@/components/common/footer";

export default function PoliticaPrivacidade() {
  return (
    <main className="">
      <div className="px-5">
        <h1 className="text-8xl font-semibold font-inter pt-35 px-12 pb-24">
          Termos de Uso
        </h1>

        <div className="flex flex-col md:grid-cols-2 gap-x-16 gap-y-8 px-12">
          {/* coluna esquerda */}
          <div className="flex flex-col gap-8">
            <p className="text-3xl  font-light font-inter">
              Ao acessar este site, você concorda com os presentes Termos de
              Uso.
            </p>

            <div>
              <h2 className="text-3xl font-semibold font-inter mb-6 mt-4">
                Sobre o site
              </h2>
              <p className="text-3xl font-light font-inter mb-2">
                O site da Decripta tem caráter informativo e institucional, com
                o objetivo de apresentar seus serviços de branding estratégico.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold font-inter mb-6 mt-4">
                Uso das informações
              </h2>
              <p className="text-3xl font-light font-inter mb-2">
                O usuário se compromete a utilizar as informações do site de
                forma ética e legal, não violando direitos da Decripta ou de
                terceiros.{" "}
              </p>
            </div>
          </div>

          {/* coluna direita */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-semibold font-inter mb-6">
                Propriedade intelectual
              </h2>
              <p className="text-3xl font-light font-inter mb-2">
                Todo o conteúdo presente neste site, incluindo textos,
                identidade visual, elementos gráficos e estratégias
                apresentadas, é de propriedade da Decripta e não pode ser
                reproduzido sem autorização prévia.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold font-inter mb-6">
                Limitação de responsabilidade
              </h2>
              <p className="text-3xl font-light font-inter mb-2">
                A Decripta não se responsabiliza por decisões tomadas com base
                nas informações disponibilizadas no site.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold font-inter mb-6">
                Links externos{" "}
              </h2>
              <p className="text-3xl font-light font-inter mb-2">
                O site pode conter links para terceiros, pelos quais a Decripta
                não se responsabiliza.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold font-inter mb-6">
                Modificações{" "}
              </h2>
              <p className="text-3xl font-light font-inter mb-2">
                A Decripta reserva-se o direito de atualizar estes Termos de Uso
                a qualquer momento, mediante publicação da versão atualizada
                neste site.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold font-inter mb-6">
                Serviços{" "}
              </h2>
              <p className="text-3xl font-light font-inter mb-2">
                Os serviços oferecidos pela Decripta são contratados mediante
                proposta comercial específica, podendo variar conforme a
                necessidade de cada projeto.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold font-inter mb-6">
                Contato{" "}
              </h2>
              <p className="text-3xl font-light font-inter mb-2">
                Para dúvidas, entre em contato pelo email: <br />
                <a href="" className="font-semibold">
                  [decriptabranding@gmail.com]
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <p className="font-inter font-medium text-3xl px-12 pt-14 pb-18">
            | Última atualização: Abril de 2026.
          </p>
          <div className="flex flex-col">
            <p className="font-semibold">Jurisdição</p>
            <p>Estes Termos são regidos pelas leis do Brasil.</p>
          </div>
        </div>
      </div>
      <FooterDecripta />
    </main>
  );
}
