import Image from "next/image";

const Skills = () => {
  return (
    <div className="flex h-screen bg-gray-900 p-5 text-white">
      <div className="container mx-auto px-2.5 lg:flex">
        <div className="lg:w-1/2 justify-center flex flex-col lists">
          <h1 className="font-bold">Mis habilidades</h1>
          <ul className="nes-list is-disc">
            <li className="my-5">C# (afinando el código en tono mayor)</li>
            <li className="my-5">Tocar guitarra y depurar simultáneamente</li>
            <li className="my-5">
              Filosofar en JavaScript (¿Qué es un undefined realmente?)
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center lg:w-1/2">
          <Image
            src={"/skills.jpg"}
            alt="skills"
            width={500}
            height={500}
            className="rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
