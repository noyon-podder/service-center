import { MapPin, Menu, Phone } from "lucide-react";
import Logo from "../assets/logo12.png";
import Container from "@/components/common/Container";
import { Link, useLocation } from "react-router-dom";
import SocialFollows from "@/components/common/SocialFollows";
import MenuSidebar from "@/components/common/MenuSidebar";
import { useState } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About Us", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 5, name: "Gallery", link: "/gallery" },
    { id: 4, name: "Contact Us", link: "/contact" },
  ];
  return (
    <div className="">
      <Container>
        <div className="flex items-center justify-between relative border-b border-border ">
          {/* Logo Section */}
          <div className="w-[150px] md:w-[130px] h-auto py-3 mx-auto md:mx-0 md:py-0">
            <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
          </div>

          {/* Contact Info Section */}
          <div className="hidden  relative bg-base text-white px-10 py-5 md:flex items-center space-x-8 overflow-hidden">
            {/* Angled Left Shape */}
            <div className="absolute inset-y-0 left-0 w-6 bg-white z-0 [clip-path:polygon(0_0,100%_0,0_100%)]" />

            {/* Content */}
            <div className="flex items-center space-x-8 z-10">
              {/* Location */}
              <div className="flex items-center space-x-2">
                <MapPin className="text-white" />
                <div>
                  <div className="text-xs font-bold uppercase">
                    Our Location
                  </div>
                  <div className="text-sm">Uttra, Dhaka</div>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-center space-x-2">
                <Phone className="text-white" />
                <div>
                  <div className="text-xs font-bold uppercase">Call Us</div>
                  <div className="text-sm">+880 177555555</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-[12px] md:py-4">
          <div
            className="cursor-pointer md:hidden px-3 py-[6px] rounded-sm bg-base flex items-center justify-center"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="text-white" size={25} />
          </div>
          {isOpen && <MenuSidebar setIsOpen={setIsOpen} />}
          {/* navbar */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {menus.map((menu) => (
                <li>
                  <Link
                    to={menu.link}
                    className={`font-semibold  hover:text-base transition-all duration-300 ${
                      pathname === menu.link ? "text-base" : "text-heading"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Follow section */}
          <SocialFollows />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
