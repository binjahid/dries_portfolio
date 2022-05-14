import AboutComponent from "components/AboutComponent";
import Contact from "components/Contact";
import CVComponents from "components/CVComponents";
import HomeComponent from "components/HomeComponent";
import ProjectComponent from "components/ProjectComponent";

const Home = () => {
  return (
    <main>
      <HomeComponent />
      <AboutComponent />
      <ProjectComponent />
      {/* <Contact /> */}
      <CVComponents />
    </main>
  );
};

export default Home;
