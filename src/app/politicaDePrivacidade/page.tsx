import FooterDecripta from "@/components/common/footer";

export default function PoliticaPrivacidade() {
  return (
    <main className="">
      <div className="px-5">
        <h1 className="text-8xl font-semibold font-inter pt-35 px-12 pb-24">
          Política de privacidade
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 px-12">
          {/* coluna esquerda */}
          <div className="flex flex-col gap-8">
            <p className="text-3xl  font-light font-inter">
              A <strong>Decripta</strong> respeita a sua privacidade e está
              comprometida com a proteção dos dados pessoais coletados em seu
              site.
            </p>

            <div>
              <h2 className="text-3xl font-semibold font-inter mb-6 mt-4">
                Coleta de informações
              </h2>
              <p className="text-3xl font-light font-inter mb-2">
                Coletamos dados fornecidos por você através do formulário de
                contato, como:
              </p>
              <ul className="list-disc list-inside text-2xl font-light font-inter space-y-1 mt-4">
                <li>Nome</li>
                <li>Email</li>
                <li>Empresa</li>
                <li>Cargo</li>
                <li>Informações sobre o projeto</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold font-inter mb-6 mt-4">
                Uso das informações
              </h2>
              <p className="text-3xl font-light font-inter mb-2">
                Os dados coletados são utilizados para:
              </p>
              <ul className="list-disc list-inside text-2xl font-light font-inter space-y-1 mt-4">
                <li>Entrar em contato com você</li>
                <li>Entender suas necessidades</li>
                <li>Apresentar propostas comerciais</li>
              </ul>
            </div>
          </div>

          {/* coluna direita */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-semibold font-inter mb-6">
                Compartilhamento de dados
              </h2>
              <p className="text-3xl font-light font-inter mb-2">
                A Decripta não compartilha seus dados pessoais com terceiros,
                exceto quando necessário para operação do site ou por obrigação
                legal.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold font-inter mb-6">
                Armazenamento e segurança
              </h2>
              <p className="text-3xl font-light font-inter mb-2">
                Seus dados são armazenados de forma segura e utilizados apenas
                pelo tempo necessário para cumprir as finalidades descritas.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold font-inter mb-6">
                Seus direitos
              </h2>
              <p className="text-3xl font-light font-inter mb-2">
                Você pode solicitar acesso, correção ou exclusão dos seus dados
                a qualquer momento.
              </p>
            </div>
          </div>
        </div>
        <p className="font-inter font-light text-3xl px-12 pt-14">
          Para qualquer solicitação relacionada aos seus dados, <br />
          entre em contato pelo email{" "}
          <a href="" className="font-semibold">
            [decriptabranding@gmail.com]
          </a>
        </p>
        <p className="font-inter font-light text-3xl px-12 pt-14">
          O tratamento de dados é realizado com base no consentimento <br />
          do usuário ao enviar suas informações pelo site.
        </p>
        <p className="font-inter font-medium text-3xl px-12 pt-14 pb-18">
          | Última atualização: Abril de 2026.
        </p>
      </div>
      <FooterDecripta />
    </main>
  );
}
