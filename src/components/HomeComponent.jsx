import { useTypewriter, Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiTwotonePhone } from "react-icons/ai";

import sampleProfile from "assets/images/sampleImg.png";
import SocialLink from "common/SocialLink";

const HomeComponent = () => {
  const { text } = useTypewriter({
    words: ["Graphic designer", "Student"],
    loop: 0,
    cursorStyle: "_",
  });

  return (
    <section className="w-full h-screen bg-homeBg bg-no-repeat bg-center bg-cover flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="h-48 w-48 rounded-full">
          <img src={sampleProfile} alt="profile" className="h-full w-full" />
        </div>
        <div className="text-center mt-16">
          <h2 className="text-white font-bahnschrift lg:text-6xl md:text-5xl text-3xl ">
            <span className="block ">I'm Dries Van Dessel </span>

            <span className="text-secondary">
              <Typewriter
                words={["Graphic designer", "Student"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={700}
              />
            </span>
          </h2>
        </div>
        <div className="flex items-center py-16">
          <SocialLink
            icon={<FaFacebook />}
            link="https://www.facebook.com/dries.vandessel"
            color={`hover:text-facebook`}
          />
          <SocialLink
            icon={<FaInstagram />}
            link="https://www.instagram.com/driesvandessel/"
            color={`hover:text-instagram`}
          />
          <SocialLink
            icon={<FaTwitter />}
            link="https://twitter.com/driesvandessel"
            color={`hover:text-twitter`}
          />
          <SocialLink
            icon={<SiGmail />}
            link="mailto:youmail@gmail.com"
            color={"hover:text-gmail"}
          />
          <SocialLink
            icon={<AiTwotonePhone />}
            link="tel:+316-837-8982"
            color={"hover:text-green-500"}
          />
        </div>
        <button className="py-2 px-8 border border-secondary rounded-3xl bg-secondary  text-white font-bold hover:text-secondary hover:bg-transparent transform hover:scale-110 duration-500 font-bellMt">
          More About Me
        </button>
      </div>
    </section>
  );
};

export default HomeComponent;
