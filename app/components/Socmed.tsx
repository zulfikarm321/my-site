import { Dribbble, Github, Instagram } from "lucide-react";

const Socmed = () => {
  return (
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
  );
};

export default Socmed;
