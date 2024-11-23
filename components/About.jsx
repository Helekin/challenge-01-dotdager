import Image from "next/image";

const About = () => {
  return (
    <div className="flex h-screen bg-white p-5">
      <div className="container mx-auto px-8 lg:flex">
        <div className="flex flex-col items-center justify-center lg:w-1/2">
          <Image
            src={"/about.jpg"}
            alt="about"
            width={500}
            height={500}
            className="rounded-sm"
          />
        </div>
        <div className="lg:w-1/2 justify-center flex flex-col lists">
          <h1 className="font-bold">Sobre Mí... ¿y sobre los gatos?</h1>
          <ul className="nes-list is-disc">
            <li className="my-5">
              Soy un programador autodidacta con una obsesión inexplicable por
              los pepinos.
            </li>
            <li className="my-5">
              Cuando no estoy escribiendo código, me puedes encontrar
              filosofando sobre la vida mientras toco guitarra para mi audiencia
              felina.
            </li>
            <li className="my-5">
              ¿Por qué pepinos? Porque, como el código, parecen simples, pero
              tienen profundidad.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
