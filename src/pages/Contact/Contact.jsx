import ContactSections from "../../components/ContactSections/ContactSections";
import { useLocation } from "react-router-dom";
import Footer from "../../components/sections/Footer";

const Contact = () => {
  return (
    <div id="contact" className="bg-primary w-full overflow-hidden">
      <div className="flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full md:px-4 px-8">
          <ContactSections></ContactSections>
        </div>
      </div>

      <div className="flex justify-center items-star">
        <div className="xl:max-w-[1280px] w-full  md:px-4 px-4">
          <Footer borderT="border-t-2" marginTop="mt-14"></Footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
