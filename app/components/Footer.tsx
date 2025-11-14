import Socmed from "./Socmed";

const Footer = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row space-y-5 justify-between bordered-footer pt-5 mt-10">
      <div>
        <p className="text-xs text-center opacity-80">
          © 2025 Zulfikar — crafted with curiosity & caffeine.
        </p>
        <div className="text-[10px] opacity-60 italic text-center sm:text-left">
          Built with Next.js & Tailwind CSS
        </div>
      </div>
      <Socmed />
    </div>
  );
};

export default Footer;
