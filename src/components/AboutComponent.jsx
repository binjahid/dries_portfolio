import sampleProfile from "assets/images/sampleImg.png";
import ProgressBar from "common/ProgressBar";

const AboutComponent = () => {
  return (
    <section className="customContainer py-20 font-rubik text-primary">
      <h2 className="text-5xl text-center font-bold pt-8 pb-20">About Me</h2>
      <div className="grid md:grid-cols-aboutLg grid-cols-1">
        <div className="flex justify-center flex-col items-center">
          <div className="h-48 w-48 rounded-full">
            <img src={sampleProfile} alt="profile" className="h-full w-full" />
          </div>
          <h2 className="font-rubik text-primary text-2xl font-semibold pt-4">
            Dries Van Dessel
          </h2>
        </div>
        <div className="aboutInfoContainer relative shadow-2xl rounded-xl bg-white w-full p-8 flex items-center ">
          <div className="text-primary grid md:grid-cols-2 grid-cols-1 gap-4 font-rubik">
            <div>
              <h2 className="">
                I'm Dries Van Dessel. I'm 16 years old , and i am following a
                graphic design course. I also like to go on holiday abroad
              </h2>
              <div className="pt-4">
                <p>
                  {" "}
                  <span className="font-bold">Fullname</span> : Van Dessel Dries{" "}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Birth date</span> : 23/08/2005{" "}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Job</span> : Student{" "}
                </p>
              </div>
            </div>
            <div className="">
              <ProgressBar
                title={"Designing"}
                width={"95%"}
                color="bg-secondary"
              />
              <ProgressBar
                title={"Understanding"}
                width={"85%"}
                color="bg-twitter"
              />
              <ProgressBar
                title={"Developing"}
                width={"75%"}
                color="bg-instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
