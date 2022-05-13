import sampleProfile from "assets/images/sampleImg.png";
import Typist from "react-typist";

const HomeComponent = () => {
  return (
    <section className="w-full h-screen bg-primary flex justify-center items-center">
      <div className="">
        <div className="h-48 w-48 rounded-full">
          <img src={sampleProfile} alt="profile" className="h-full w-full" />
        </div>
        <div className="text-center mt-4">
          <Typist>
            <span className="my-custom-class"> First Sentence </span>
            <br />
            <div className="container">
              <p> This will be animated after first sentence is complete </p>
              {/* <MyComponent prop1="val1"> More text. </MyComponent> */}
            </div>
            Final sentence
          </Typist>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
