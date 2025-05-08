import { Clock, MapPin, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "@/assets/logo12.png";
import { Link, useLocation } from "react-router-dom";

interface MenuSidebarProps {
  setIsOpen: (isOpen: boolean) => void;
}

const MenuSidebar = ({ setIsOpen }: MenuSidebarProps) => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Trigger slide-in after mount
    setTimeout(() => setVisible(true), 10);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setIsOpen(false), 200); // Wait for animation to complete
  };

  const menus = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About Us", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 5, name: "Gallery", link: "/gallery" },
    { id: 4, name: "Contact Us", link: "/contact" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={handleClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-200 ease-in-out overflow-y-scroll ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-0 right-0 p-2 bg-red-600 text-white "
        >
          <X size={26} />
        </button>
        <div className="pl-5 pt-3">
          <div className="w-[130px]  h-auto py-3 ">
            <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
          </div>

          <nav className="mt-8">
            <ul className="flex  flex-col space-y-4">
              {menus.map((menu) => (
                <li>
                  <Link
                    to={menu.link}
                    className={`font-medium  hover:text-base transition-all duration-300 ${
                      pathname === menu.link ? "text-base" : "text-heading"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 pb-10">
            {/* Content */}
            <h2 className="text-heading capitalize font-xl font-semibold mb-4">
              Others Information
            </h2>
            <div className="flex  flex-col space-y-6 z-10 ">
              {/* Location */}
              <div className="flex items-center space-x-2">
                <MapPin className="text-base" />
                <div>
                  <div className="text-xs font-normal uppercase">
                    Our Location
                  </div>
                  <div className="text-sm font-semibold">Uttora, Dhaka</div>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-center space-x-2">
                <Phone className="text-base" />
                <div>
                  <div className="text-xs font-normal uppercase">Call Us</div>
                  <div className="text-sm font-semibold">+880 177555555</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="text-base" />
                <div>
                  <div className="text-xs font-normal uppercase">
                    Sunday - Friday
                  </div>
                  <div className="text-sm font-semibold">9 am - 8 pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSidebar;
