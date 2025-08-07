import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaCircleUp,
} from "react-icons/fa6";
import { socialLinks } from "../../../data/socialLinks";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#1E1E1E] text-white px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
          Send me a <span className="text-primary">message</span>, I will be in touch with you shortly.
        </h2>

        {/* Formulario */}
        <form className="grid md:grid-cols-3 gap-6">
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
              className="bg-primary text-white px-6 py-2 flex items-center gap-2 hover:bg-primary-shadow transition"
            >
              <FaEnvelope /> Send Message
            </button>
          </div>
        </form>

        {/* Íconos sociales */}   
         <div className="flex flex-row  justify-center mt-8 gap-2 text-3xl text-white dark:text-white">
              {socialLinks.map(({ icon: Icon, url, name }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-3xl hover:bg-primary hover:text-secondary  transition duration-300 hover:-translate-y-1 hover:scale-110 "
                  aria-label={name}
                >
                  <Icon />
                </a>
              ))}
            </div>

        {/* Email y Teléfono */}
        <div className="flex justify-center gap-8 text-sm mt-6 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>sicaji22@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>+57 300 8023 042</span>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-10">
          Copyright ©2025 <span className="font-semibold text-white">Jissy Merlano </span> All right reserved.!
        </p>
      </div>
    </section>
  );
}