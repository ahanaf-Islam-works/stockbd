import Image from "next/image";
import {
  Phone,
  Facebook,
  Youtube,
  Github,
  Twitch,
  Twitter,
} from "lucide-react";
const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="w-full mb-10">
                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                  <Image
                    src="/logo_black.svg"
                    alt="logo"
                    width={160}
                    height={40}
                    className="max-w-full"
                  />
                </a>
                <p className="text-base mb-7 text-body-color">
                  Sed ut perspiciatis undmnis is iste natus error sit amet
                  voluptatem totam rem aperiam.
                </p>
                <p className="flex items-center text-sm font-medium text-dark">
                  <Phone size={16} className="mr-2" />
                  <span>+012 (345) 678 99</span>
                </p>
              </div>
            </div>

            <LinkGroup header="Resources">
              <NavLink link="/#" label="SaaS Development" />
              <NavLink link="/#" label="Our Products" />
              <NavLink link="/#" label="User Flow" />
              <NavLink link="/#" label="User Strategy" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/#" label="About StockBD" />
              <NavLink link="/#" label="Contact & Support" />
              <NavLink link="/#" label="Success History" />
              <NavLink link="/#" label="Setting & Privacy" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/#" label="Premium Support" />
              <NavLink link="/#" label="Our Services" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Download App" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="w-full mb-10">
                <h4 className="text-lg font-semibold mb-9 text-right">
                  Follow Us
                </h4>
                <ul className="flex justify-between">
                  <li>
                    <a
                      href="https://www.facebook.com/StockBD-103010278783654"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Facebook size={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC5kDh0q6UJ8vJ8XJ8X6l0jQ"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Youtube size={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC5kDh0q6UJ8vJ8XJ8X6l0jQ"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC5kDh0q6UJ8vJ8XJ8X6l0jQ"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Twitter size={24} />
                    </a>
                  </li>
                </ul>
              </div>
              <p className="text-base text-body-color mt-5 text-right">
                © {new Date().getFullYear()} StockBd{" "}
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </footer>
    </>
  );
};

export default Footer;

interface LinkGroupProps {
  header: string;
  children: React.ReactNode;
}

const LinkGroup = ({ children, header }: LinkGroupProps) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="w-full mb-10">
          <h4 className="text-lg font-semibold mb-9 text-dark"> {header} </h4>
          <ul>{children}</ul>
        </div>
      </div>
    </>
  );
};

interface NavLinkProps {
  link: string;
  label: string;
}

const NavLink = ({ link, label }: NavLinkProps) => {
  return (
    <div>
      <li>
        <a
          href={link}
          className={`inline-block mb-2 text-base leading-loose text-body-color hover:text-primary`}
        >
          {label}
        </a>
      </li>
    </div>
  );
};
