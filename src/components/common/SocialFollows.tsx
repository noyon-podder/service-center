import { Facebook, Instagram, Youtube } from "lucide-react";

const SocialFollows = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Label */}
      <span className="text-text font-semibold uppercase text-sm">
        Follow Us:
      </span>

      {/* Icons */}
      <a href="#" className="text-base hover:text-heading text-lg">
        <Facebook />
      </a>
      <a href="#" className="text-base hover:text-heading text-lg">
        <Youtube />
      </a>
      <a href="#" className="text-base hover:text-heading text-lg">
        <Instagram />
      </a>
    </div>
  );
};

export default SocialFollows;
