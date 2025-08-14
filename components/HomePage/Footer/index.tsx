import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";

// Define your links outside JSX
const footerLinks = [
  {
    title: "Shop",
    links: [
      "Clifton Merchandise",
      "Brewing Equipment",
      "Clifton Hot Chocolate",
      "Clifton Tea",
      "Gift Card",
    ],
  },
  {
    title: "Coffee",
    links: [
      "All Coffee",
      "House Coffees",
      "Single Origin",
      "Clifton Capsules",
      "Unparalleled Series",
    ],
  },
  {
    title: "Our Ethos",
    links: [
      "About Us",
      "Resources",
      "Origin Films",
      "Careers",
      "HQ Virtual Tour",
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        title: "sales@cliftoncoffee.co.uk",
        href: "#",
        icon: <Mail className="w-4 h-4 inline-block mr-2" />,
      },
      {
        title: "+44 (0) 1179 820 252",
        href: "#",
        icon: <Phone className="w-4 h-4 inline-block mr-2" />,
      },
      {
        title: " Write address here..",
        href: "#",
        icon: <MapPin className="w-4 h-4 inline-block mr-2" />,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-8">
        <div className="flex flex-col items-start gap-4">
          <a href="/">
            <img src="/HomePage/Footer/logo-footer.png" alt="footer logo" />
          </a>
          <div className="ml-3 flex justify-center items-center gap-4">
            <Facebook
              fill="currentColor"
            strokeWidth={0.5}
              className="w-5 h-5 "
            />
            <Instagram className="w-5 h-5 " />
            <Youtube className="w-6 h-6" />
          </div>
        </div>

        {footerLinks.map((col) => (
          <div key={col.title} className="flex flex-col gap-2">
            <h4 className="font-medium text-base">{col.title}</h4>
            {col.links.map((link) =>
              typeof link === "string" ? (
                <a
                  key={link}
                  href="#"
                  className="hover:underline text-sm font-light  transition"
                >
                  {link}
                </a>
              ) : (
                <a
                  key={link.title}
                  href={link.href}
                  className="hover:underline text-sm font-light transition flex items-center"
                >
                  {link.icon}
                  {link.title}
                </a>
              )
            )}
          </div>
        ))}
      </div>
      {/* Feedback icon + copyright */}
      <div className="w-full relative flex items-center justify-center text-sm  pt-4">
        {/* Copyright text centered */}
        <span className="leading-none">
          © 2025 YourCompany. All rights reserved.
        </span>

        {/* Feedback button floating on the right */}
        <Button
          variant="default"
          className="absolute right-10 -top-10 w-15 h-15 rounded-full flex items-center justify-center bg-[#D9D9D9] text-black hover:bg-gray-300 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-message-dots"
            style={{ width: "38px", height: "38px" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 11v.01" />
            <path d="M8 11v.01" />
            <path d="M16 11v.01" />
            <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" />
          </svg>
        </Button>
      </div>
    </footer>
  );
}
