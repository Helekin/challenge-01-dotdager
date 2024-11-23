const Projects = () => {
  return (
    <div className="flex p-5">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          Proyectos
        </h1>

        <div className="flex justify-center rounded-lg shadow-lg">
          <iframe
            title="Lumber Jack Game"
            src="https://tbot.xyz/lumber/"
            width="600"
            height="1200"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Projects;
