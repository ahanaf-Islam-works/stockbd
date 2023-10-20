import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const Page = () => {
  return (
    <>
      <section className="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
        <div className="container">
          <div className="flex flex-wrap -mx-4 lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="block mb-4 text-base font-semibold text-primary">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="text-base leading-relaxed mb-9 text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eius tempor incididunt ut labore e dolore magna aliqua. Ut
                  enim adiqua minim veniam quis nostrud exercitation ullamco
                </p>

                <ul>
                  <li>
                    <div className="flex items-center mb-6">
                      <Phone size={24} className="text-primary" />
                      <span className="ml-4 text-body-color">
                        +1 234 567 890
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center mb-6">
                      <MapPin size={24} className="text-primary" />
                      <span className="ml-4 text-body-color">
                        123 Dhaka, Bangladesh
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <Mail size={24} className="text-primary" />
                      <span className="ml-4 text-body-color">
                        info@mail.com
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative p-8 bg-white rounded-lg shadow-lg sm:p-12">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row={6}
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full p-3 text-white transition border rounded border-primary bg-primary hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

interface ContactTextAreaProps {
  row: number;
  placeholder: string;
  name: string;
  defaultValue: string;
}

const ContactTextArea = ({
  row,
  placeholder,
  name,
  defaultValue,
}: ContactTextAreaProps) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

type ContactInputBoxProps = {
  type: string;
  placeholder: string;
  name: string;
};

const ContactInputBox = ({ type, placeholder, name }: ContactInputBoxProps) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
    </>
  );
};
