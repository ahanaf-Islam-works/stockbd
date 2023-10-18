import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Map,
  Phone,
  Mail,
  Facebook,
  Twitch,
  Linkedin,
  Youtube,
} from "lucide-react";

const Icons = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/stockbdofficial",
  },
  {
    icon: Twitch,
    href: "https://www.twitch.tv/stockbdofficial",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/stockbdofficial",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/channel/UCp9QfJ9lZz6rR2Jg7jGz5Rw",
  },
];

const Address = [
  {
    icon: Map,
    text: "House 2, Road 10, Sector 6, Uttara, Dhaka 1230",
  },
  {
    icon: Phone,
    text: "+880 1234567890",
  },
  {
    icon: Mail,
    text: "info@mail.com",
  },
];

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer>
      <Wrapper dark>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10  font-light">
          <div className="text-center">
            <Link href="/">
              <Image
                // if Wrapper is dark then src="/logo_black.svg" else src="/logo_white.svg"
                src={false ? "/logo_black.svg" : "/logo_white.svg"}
                height={150}
                width={150}
                className="mt-2 mb-4"
                alt="logo"
              />
            </Link>
            <p className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus dolore soluta
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <input
              type="text"
              placeholder="youremail@mail.com"
              className="mt-2 mb-4 p-3 w-full rounded border border-slate-500 text-slate-950"
            />
            <input
              type="submit"
              value="Subscribe"
              className={buttonVariants({
                size: "lg",
                className: "w-full cursor-pointer border border-slate-500",
                variant: "default",
              })}
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            {Address.map((address) => (
              <div key={address.text} className="flex items-center mb-2">
                <address className="mr-2">
                  <address.icon size={20} />
                </address>
                <p>{address.text}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <div className="flex gap-1 justify-between">
              <ul>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg underline hover:text-gray-400"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <span className="w-[2px] bg-slate-500"></span>
              <ul>
                {Icons.map((icon) => (
                  <Link
                    href={icon.href}
                    key={icon.href}
                    className="flex items-center mb-2"
                  >
                    <icon.icon size={20} />
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
