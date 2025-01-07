"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // New state for tracking loader
  const text = "Connect with me.....";

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the native form submission
    setError(false);
    setSuccess(false);
    setLoading(true); // Start loading
    if (form.current) {
      try {
        // First email sending
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY!
        );
        console.log(result.text);

        // Auto-reply email sending
        const replyResult = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_AUTO_REPLY_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY!
        );
        console.log(replyResult.text);

        setSuccess(true);
        form.current.reset(); // Reset form after successful submission
      } catch (error: any) {
        console.error(error.text || error.message);
        setError(true);
      } finally {
        setLoading(false); // Stop loader
      }
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
          className="h-1/2 mb-20 lg:h-[70vh] lg:w-1/2 lg:p-15  rounded-xl text-xl flex flex-col gap-8 justify-center p-2 lg:p-10 mt-10"
        >
          <span>Your email address is* </span>
          <input
            name="user_email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            required
          />
          <span className="lg:block md:block">Write your message here</span>
          <textarea
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <button
            type="submit"
            className={`bg-purple-300 rounded p-4 ${
              loading ? "cursor-not-allowed opacity-50" : "hover:bg-purple-200"
            }`}
            disabled={loading} // Disable button when loading
          >
            {loading ? "Sending..." : "Send"} {/* Show loader text */}
          </button>
          {success && (
            <span className="text-green-600 font-normal">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-normal">
              Please enter a valid email ID .
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
