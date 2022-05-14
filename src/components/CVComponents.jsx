import Ratting from "common/Ratting";

const CVComponents = () => {
  return (
    <section className="my-40">
      <h2 className="text-center text-primary font-rubik text-4xl font-bold underline py-20">
        CV
      </h2>
      <div className="customContainer bg-primary shadow-2xl rounded-lg text-white font-rubik p-8">
        <div>
          <h2>Dries Van Dessel</h2>
          <p>Student</p>
          <p>Kampenhout</p>
          <p>0468/43.86.27</p>
        </div>
        <p className="py-8">
          As a chiro member I have already gained experience in the organization
          of the beach party during which I worked for a number of days on the
          construction and dismantling of this major event . I have also done
          the serving / clearing on eating days several times. Working together
          in a team has no secrets for me.
        </p>
        <div className="pb-4">
          <h2 className="text-xl underline pb-4">PERSONAL INFORMATION</h2>
          <p>
            <span>Address:</span>Balkestraat 48, Kampenhout,
          </p>
          <p>
            <span>Date of birth:</span>23/08/2005 Mechelen
          </p>
          <p>
            <span>Nationality:</span>Belgian Driver's
          </p>
          <p>
            <span>license:</span>none
          </p>
          <p>
            <span>Hobbies:</span>Football (U17) Sporting Kampenhout Chiro
            Kampenhout
          </p>
        </div>
        <div>
          <h2 className="text-xl underline pb-2">LANGUAGES</h2>
          <Ratting title={"Ducth"} star={5} />
          <Ratting title={"French"} star={2} />
          <Ratting title={"English"} star={3} />
        </div>
        <div>
          <h2 className="text-xl underline pb-2">SKILLS</h2>
          <Ratting title={"Collaboration"} star={4} />
          <Ratting title={"Learning ability"} star={4.5} />
          <Ratting title={"Flexibility"} star={4} />
          <Ratting title={"Marketing"} star={4.5} />
          <Ratting title={"Creativity"} star={5} />
        </div>
        <div className="pb-4">
          <h2 className="text-xl underline pb-2">WORK EXPERIENCE</h2>
          <p>Assistance set up and breakdown party at Chiro Kampenhout,</p>
        </div>
        <div>
          <h2 className="text-xl underline pb-2">TRAINING</h2>
          <p>
            * September 2018 – June 2021 :{" "}
            <span>Don Bosco , Haacht Economy</span>
          </p>
          <p>
            * September 2021 – June 2022 :{" "}
            <span>Tsm Mechelen, Mechelen Multimedia</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CVComponents;
