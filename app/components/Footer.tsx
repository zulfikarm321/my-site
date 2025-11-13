import { Github, Twitter, Linkedin, Instagram, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row space-y-5 justify-between bordered-footer pt-5 mt-10">
      <div>
        <p className="text-xs text-center opacity-80">
          © {new Date().getFullYear()} Zulfikar — crafted with curiosity &
          caffeine.
        </p>
        <div className="text-[10px] opacity-60 italic text-center sm:text-left">
          Built with Next.js & Tailwind CSS
        </div>
      </div>

      <ul className="flex space-x-3">
        <a
          href="https://github.com/zulfikarm321"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
          <Github size={24} />
        </a>

        <a
          href="https://dribbble.com/zulfikar123"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
          <Dribbble size={24} />
        </a>
        <a
          href="https://www.instagram.com/zulfikar_muhamad_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
          <Instagram size={24} />
        </a>
      </ul>
    </div>
  );
};

export default Footer;
