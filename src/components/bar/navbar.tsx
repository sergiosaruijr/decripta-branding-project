const Navbar = () => {
  return (
    // backdrop-blur-md/30 bg-red-500/60
    <nav className="absolute backdrop-filter z-50 top-6 left-1/2 -translate-x-1/2 right-0 backdrop-blur-md/30 bg-red-500/60 rounded-full">
      <div className=" px-6 py-3 flex items-center justify-center">
        <ul className="flex flex-row justify-around items-center gap-30">
          <li className="text-white text-xl font-bold">inicio</li>
          <li className="text-white text-xl font-bold">quem somos</li>
          <li className="text-white text-xl font-bold">cases</li>
          <li className="text-white text-xl font-bold">fale conosco</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
