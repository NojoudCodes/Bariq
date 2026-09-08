import { Link } from "react-router";
import TopNav from "./TopNav";
import Button from "../ui/Button";

import { RiMenu4Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    {
      id: 1,
      linkLabel: "الرئيسية",
      path: "/"
    },
    {
      id: 2,
      linkLabel: "الخدمات",
      path: "/services"
    },
    {
      id: 3,
      linkLabel: "الأطباء",
      path: "/doctors"
    },
    {
      id: 4,
      linkLabel: "الأسئلة الشائعة",
      path: "/faq"
    },
    {
      id: 5,
      linkLabel: "الموقع والتواصل",
      path: "/contact"
    },
  ]

  return (
    <>
      <TopNav />
      <nav className="relative flex justify-between lg:justify-around items-center bg-cream-primary py-5 px-10 lg:px-15 shadow-sm">
        <div>
          <Link to="/" className="font-bold text-xl text-ink">
            بريق
            <span className="text-terracotta"> لطب الأسنان</span>
          </Link>
        </div>
        <div className="hidden lg:flex gap-4">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path} 
              className="font-semibold text-sm text-ink hover:text-terracotta"
            >{link.linkLabel}</Link>
          ))}
        </div>
        <div 
          className={`absolute top-0 left-0 ${isOpen ? "flex" : "hidden"} flex-col w-56 bg-cream-secondary 
          h-screen shadow-md`}
        >
          <IoCloseOutline 
            size={20} 
            className="mr-7 mt-5" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="flex flex-col items-center gap-4 mt-10">
            {links.map((link) => (
              <Link 
                key={link.id}
                to={link.path} 
                className="font-semibold text-sm text-ink"
                onClick={() => setIsOpen(false)} 
              >{link.linkLabel}</Link>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <RiMenu4Fill size={20} onClick={() => setIsOpen(true) } />
        </div>
        <div className="hidden lg:block">
          <Button
            path="/contact"
            text="احجز موعدًا"
            styles="bg-terracotta text-sm text-white py-2 px-4"
          />
        </div>
      </nav>
    </>
  )
}
