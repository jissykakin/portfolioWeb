import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaCircleUp,
} from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#1E1E1E] text-white px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
          Send me a <span className="text-red-500">message</span>, I will be in touch with you shortly.
        </h2>

        {/* Formulario */}
        <form className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border-b border-gray-500 focus:outline-none py-2 px-1 placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="bg-transparent border-b border-gray-500 focus:outline-none py-2 px-1 placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Your Subject"
            className="bg-transparent border-b border-gray-500 focus:outline-none py-2 px-1 placeholder-gray-400 col-span-2 md:col-span-1"
          />
          <textarea
            placeholder="Your Message"
            className="bg-transparent border-b border-gray-500 focus:outline-none py-2 px-1 placeholder-gray-400 col-span-2 h-24 resize-none"
          />

          {/* Botón */}
          <div className="col-span-2 md:col-start-2 flex justify-end">
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-red-600 transition"
            >
              <FaEnvelope /> Send Message
            </button>
          </div>
        </form>

        {/* Íconos sociales */}
        <div className="flex justify-center mt-10 gap-4 text-gray-300 text-xl">
          <FaDribbble />
          <FaCircleUp />
          <FaYoutube />
          <FaLinkedin />
          <FaGithub />
        </div>

        {/* Email y Teléfono */}
        <div className="flex justify-center gap-8 text-sm mt-6 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>Mahmood.fazile7005@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>+93 729 107 005</span>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-10">
          Created by <span className="font-semibold text-white">Zarror</span> | All Reserved!
        </p>
      </div>
    </section>
  );
}