import { companyName, FOOTER } from "@/app/constants/footer/contants";

const Footer = () => {
  companyName;
  return (
    <footer className="bg-slate-950 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href={FOOTER.socials1.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            {FOOTER.socials1.name}
          </a>
          <a
            href={FOOTER.socials2.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            {FOOTER.socials2.name}
          </a>
          <a
            href={FOOTER.socials3.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            {FOOTER.socials3.name}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
