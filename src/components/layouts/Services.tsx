import { Link } from "react-router";
import Titles from "../ui/Titles";

import { FaUserDoctor } from "react-icons/fa6";
import { RiToothLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { LuShieldPlus } from "react-icons/lu";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Services() {
  return (
    <section className="bg-cream-secondary px-10 lg:px-15 py-32">
      <div>
        <Titles
          subtitle="خدماتنا"
          SubtitleStyles="text-sm text-terracotta"
          title="أهم ما نقدّمه"
          titleStyles="font-bold text-ink text-xl lg:text-3xl mt-4"
        />
        <p className="text-sm text-gray-700 mt-3">نظرة سريعة على خدماتنا — للتفاصيل الكاملة والأسعار زوروا صفحة الخدمات.</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 mt-8">
        <div className="flex flex-col justify-center bg-white border border-gray-300 hover:border-terracotta rounded-lg w-full h-40 px-5">
          <FaUserDoctor size={20} className="text-terracotta" />
          <h4 className="font-bold text-lg my-2">فحص وتنظيف</h4>
          <p className="text-sm text-gray-500">فحص دوري شامل وتنظيف احترافي.</p>
          <div className="flex items-center cursor-pointer text-terracotta mt-3">
            <Link to="/services" className="font-semibold text-sm">التفاصيل</Link>
            <IoIosArrowRoundBack size={20} />
          </div>
        </div>
        <div className="flex flex-col justify-center bg-white border border-gray-300 hover:border-terracotta rounded-lg w-full h-40 px-5">
          <RiToothLine size={20} className="text-terracotta" />
          <h4 className="font-bold text-lg my-2">تبييض الأسنان</h4>
          <p className="text-sm text-gray-500">نتائج ملحوظة خلال جلسة واحدة.</p>
          <div className="flex items-center cursor-pointer text-terracotta mt-3">
            <Link to="/services" className="font-semibold text-sm">التفاصيل</Link>
            <IoIosArrowRoundBack size={20} />
          </div>
        </div>
        <div className="flex flex-col justify-center bg-white border border-gray-300 hover:border-terracotta rounded-lg w-full h-40 px-5">
          <SlCalender size={20} className="text-terracotta" />
          <h4 className="font-bold text-lg my-2">تقويم الأسنان</h4>
          <p className="text-sm text-gray-500">تقويم شفاف أو معدني مع متابعة دورية.</p>
          <div className="flex items-center cursor-pointer text-terracotta mt-3">
            <Link to="/services" className="font-semibold text-sm">التفاصيل</Link>
            <IoIosArrowRoundBack size={20} />
          </div>
        </div>
        <div className="flex flex-col justify-center bg-white border border-gray-300 hover:border-terracotta rounded-lg w-full h-40 px-5">
          <LuShieldPlus size={20} className="text-terracotta" />
          <h4 className="font-bold text-lg my-2">زراعة الأسنان</h4>
          <p className="text-sm text-gray-500">زراعة رقمية دقيقة وطويلة الأمد.</p>
          <div className="flex items-center cursor-pointer text-terracotta mt-3">
            <Link to="/services" className="font-semibold text-sm">التفاصيل</Link>
            <IoIosArrowRoundBack size={20} />
          </div>
        </div>
      </div>
    </section>
  )
}
