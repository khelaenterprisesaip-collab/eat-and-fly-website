import { Plane, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/outlets", label: "Our Outlets" },
    { href: "/contact", label: "Contact Us" },
  ];

  const locations = [
    "Amritsar Airport",
    "Ghaziabad Airport",
    "Jalandhar Airport",
    "Sahnewal Airport",
    "Jaisalmer Airport",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="">
                <img height={80} width={80} src="../../public/logor.png" />
              </div>
              <span className="text-xl font-bold">Eat&Fly</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium takeaway experience at India's major airports. Serving
              authentic flavors to travelers across the nation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Locations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Locations</h3>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li
                  key={location}
                  className="text-primary-foreground/80 text-sm flex items-center space-x-2"
                >
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  <span>{location}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  khelaenterprises.aip@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  +91 88721 94747
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Eat&Fly. All rights reserved. | Premium Airport
            Takeaway Experience
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
