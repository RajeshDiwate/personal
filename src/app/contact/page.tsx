"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Connect with me.....";

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the native form submission
    setError(false);
    setSuccess(false);
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY!
        )
        .then(
          (result) => {
            console.log(result.text);
            emailjs
              .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID!, // Same Service ID
                process.env.NEXT_PUBLIC_AUTO_REPLY_TEMPLATE_ID!, // Auto-reply template ID
                form.current!,
                process.env.NEXT_PUBLIC_PUBLIC_KEY!
              )
              .then(
                (replyResult) => {
                  console.log(replyResult.text); // Handle auto-reply result
                  setSuccess(true);
                  form.current!.reset();
                  // alert(
                  //   "Your message has been sent. You will receive an auto-reply shortly."
                  // );
                },
                (replyError) => {
                  console.error(replyError.text); // Handle auto-reply error
                  setError(true);
                  console.log(replyError);
                }
              );
          },
          (error) => {
            console.error(error.text);
            setError(true);
            console.log(error);
          }
        );
    }
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 mb-20 lg:h-[70vh] border-2 border-black lg:w-1/2 lg:p-15  rounded-xl text-xl flex flex-col gap-8 justify-center p-2 lg:p-10 mt-10"
        >
          <span>Your email address is* </span>
          <input
            name="user_email"
            className="bg-transparent border-b-2  border-b-black outline-none"
          />
          <span className="lg:block md:block">Write your message here</span>
          <textarea
            className="bg-transparent border-b-2  lg:block md:block border-b-black outline-none resize-none "
            name="user_message"
          />

          {/* <span>Regards</span>
          <span>Rajesh</span> */}
          <button type="submit" className="bg-purple-300 rounded  p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-normal">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-normal">
              Please enter valid email Id Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
