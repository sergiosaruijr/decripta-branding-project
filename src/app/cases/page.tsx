import Image from "next/image";

function Cases() {
  return (
    <main className="w-full">
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/image/OUTDOOR2.png"
          alt="Imagem de fundo"
          fill
          priority
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Um Café com Satoshi
          </h1>
        </div>
      </section>

      {/* teste alteracao de breakpoint */}
      <section className="relative z-10 bg-white p-10">
        <h2 className="mb-4 text-3xl font-semibold">Conteúdo da página</h2>
        <p className="leading-relaxed text-gray-700">
          Aqui começa o conteúdo que só aparece quando você dá scroll para
          baixo. Agora o conteúdo não fica atrás da imagem, e sim depois dela.
        </p>
        <div className="bg-red-500 sm:bg-green-500">Teste de sm</div>
      </section>
    </main>
  );
}

export default Cases;
