import sampleProfile from "assets/images/sampleImg.png";

const ProjectComponent = () => {
  const projectLinks = [
    {
      Name: "Project 1",
      Link: "#",
    },
    {
      Name: "Project 2",
      Link: "#",
    },
    {
      Name: "Project 3",
      Link: "#",
    },
  ];

  return (
    <section className="bg-projectBg3 pb-32 bg-no-repeat bg-center bg-cover">
      <div className="w-95 sm:w-98 m-auto lg:w-80 py-20 font-bellMt text-white">
        <div className="pb-20">
          <h2 className="text-5xl text-center font-bold pt-8 pb-8 font-bahnschrift underline">
            Project
          </h2>
          <p className="text-center text-lg">| Some of my projects |</p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          {projectLinks.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              {index === 1 && <div className="md:h-32 h-0"></div>}
              <div className="lg:h-96 lg:w-96 w-full h-full relative projectContainer cursor-pointer">
                <a href={project.Link}>
                  {" "}
                  <img src={sampleProfile} alt="" className="w-full h-full" />
                </a>
                <p className="projectHoverTitle absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl z-50">
                  {project.Name}
                </p>
                <div className="overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
