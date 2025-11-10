// function About() {
//   return <h2>Pagina Quem Somos</h2>;
// }

// export default About;
function About() {
  return (
    <main>
      <nav className="backdrop-filter backdrop-blur-md/30 bg-red-500/60">
        <div className="relative h-[100px] p-6 ">
          <ul className="flex flex-row justify-around items-center gap-4">
            <li className="text-white text-2xl font-bold">inicio</li>
            <li className="text-white text-2xl font-bold">quem somos</li>
            <li className="text-white text-2xl font-bold">cases</li>
            <li className="text-white text-2xl font-bold">fale conosco</li>
          </ul>
        </div>
      </nav>
    </main>
  );
}

export default About;
