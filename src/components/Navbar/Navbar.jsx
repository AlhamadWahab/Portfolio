import { FaCodepen, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <a href="/" aria-label="Home">
          <h2
            style={{ fontFamily: "La Belle Aurore" }}
            className="pb-2 text-4xl tracking-tighter lg:text-8xl"
          >
            Wahab Alhamad
          </h2>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/Alhamadwahab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          {" "}
          <FaGithub />
        </a>
        <a
          className="code-pen"
          target="_blank"
          rel="noreferrer"
          href="https://codepen.io/dev70"
          aria-label="Code Pen"
        >
          <FaCodepen />
        </a>
        <a
          className="code-pen"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/wahab-alhamad/"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          className="code-pen"
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/<Telefonnummer>"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          className="code-pen"
          target="_blank"
          rel="noreferrer"
          href="mailto:dev70tec@gmail.com"
          aria-label="E-Mail"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
