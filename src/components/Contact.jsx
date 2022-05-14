import { useState } from "react";

const Contact = () => {
  const [inputtedInformation, setInputtedInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputtedInfo({
      ...inputtedInformation,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputtedInformation);
    setInputtedInfo({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-primary">
      <div className="customContainer">
        <div className="text-center text-white font-rubik">
          <h2 className="text-5xl font-bold underline py-20">Contact</h2>
          <p className="text-xl font-semibold">I'd love to hear from you.</p>
          <p className="text-xl font-semibold">
            | If you have some questions for me. Feel free to ask! |
          </p>
        </div>
        <form className="font-rubik text-white py-20" onSubmit={handleSubmit}>
          <div className="w-95 md:w-70 lg:w-60 m-auto">
            <label htmlFor="first-name" className="block text-lg font-medium ">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="py-3 px-4 block w-full shadow-sm text-secondary focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-95 md:w-70 lg:w-60 m-auto">
            <label htmlFor="first-name" className="block text-lg font-medium ">
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="given-name"
                className="py-3 px-4 block w-full shadow-sm text-secondary focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-95 md:w-70 lg:w-60 m-auto">
            <label htmlFor="first-name" className="block text-lg font-medium ">
              Subject
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="subject"
                id="subject"
                autoComplete="given-name"
                className="py-3 px-4 block w-full shadow-sm text-secondary focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-95 md:w-70 lg:w-60 m-auto">
            <label htmlFor="first-name" className="block text-lg font-medium ">
              Message
            </label>
            <div className="mt-1">
              <textarea
                type="text"
                name="message"
                id="message"
                autoComplete="given-name"
                className="py-3 px-4 block w-full shadow-sm text-secondary focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-center pt-12">
            <button
              type="submit"
              className="py-2 px-8 border border-secondary rounded-3xl bg-secondary  text-white font-bold hover:text-secondary hover:bg-transparent transform hover:scale-110 duration-500 font-rubik"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
