import ContactSections from "../../components/ContactSections/ContactSections";
import { useLocation } from "react-router-dom";


const Contact = () => {
 

 

  

  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className="flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full md:px-4 px-8">
              <ContactSections></ContactSections>
          </div>
      </div>
    </div>
  )
}

export default Contact;
