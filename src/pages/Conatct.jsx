import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("Send Message");
  const [errors, setErrors] = useState({}); // Track validation errors

  const validateForm = (formData) => {
    let newErrors = {};

    if (!formData.get("name")) {
      newErrors.name = "Name is required!";
    }

    if (!formData.get("email")) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
      newErrors.email = "Invalid email format!";
    }

    if (!formData.get("message")) {
      newErrors.message = "Message cannot be empty!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "12eec0f6-d7fa-4734-b292-79700e9fcfe0");

    if (!validateForm(formData)) {
      setResult("Send Message");
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setErrors({});
    } else {
      console.log("Error", data);
      setResult("Something went wrong! Try again.");
    }
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center px-6"
      id="contact"
    >
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-2xl w-full text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-tusker tracking-wide text-textColor">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-300 mb-8 font-montserat tracking-wide">
          Whether you have a question, a project idea, or just want to say hi,
          feel free to reach out!
        </p>

        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-left text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-left text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              name="message"
              className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none w-full"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-left  text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-textColor text-black px-6 py-3 rounded-xl text-lg font-montserat transition-all tracking-wide shadow-lg hover:shadow-2xl hover:scale-105 duration-300 border-2 border-transparent hover:border-white"
          >
            {result}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
