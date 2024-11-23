import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex h-screen bg-gray-900 p-5">
      <div className="container mx-auto px-8 lg:flex">
        <div className="flex flex-col items-center justify-center lg:w-1/2">
          <h1 className=" text-xl font-bold leading-none text-white">
            Soy un Programador Filósofo de Gatos y{" "}
            <span className="text-xl text-green-500">Pepinos</span>
          </h1>
          <p className="my-12 font-light text-white">
            Mejorando el mundo un pepino a la vez, mientras resuelvo bugs y
            reflexiono sobre la naturaleza del ser
          </p>
          <div className="flex justify-center space-x-5">
            <a
              href="https://github.com/MarianoVilla"
              target="_blank"
              className="inline-flex items-center py-4 px-12 nes-btn is-success"
            >
              Mira mi código de gatos
              <i className="ml-2 nes-icon github is-medium"></i>
            </a>
            <a
              href="https://www.youtube.com/@DotDager"
              target="_blank"
              className="inline-flex items-center py-4 px-12 nes-btn"
            >
              Suscríbete para más filosofía en YouTube
              <i className="ml-2 nes-icon youtube is-medium"></i>
            </a>
          </div>
        </div>
        <div className="lg:flex lg:w-1/2 items-center justify-end">
          <Image
            src={"/profile.png"}
            alt="profile"
            width={500}
            height={500}
            className="md:size-96 size-72 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
