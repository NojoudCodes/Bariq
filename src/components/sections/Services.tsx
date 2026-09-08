import { Link } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";
import Titles from "../ui/Titles";
import { services } from "../../data/clinicInfo";

export default function Services() {
  return (
    <section className="bg-cream-secondary px-10 lg:px-15 py-32">
      <div>
        <Titles
          subtitle="خدماتنا"
          subtitleStyles="text-sm text-terracotta"
          title="أهم ما نقدّمه"
          titleStyles="font-bold text-ink text-xl lg:text-3xl mt-4"
        />

        <p className="text-sm text-gray-700 mt-3">
          نظرة سريعة على خدماتنا — للتفاصيل الكاملة والأسعار زوروا صفحة الخدمات.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 mt-8">
        {services.slice(0, 4).map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-center bg-white border border-gray-300 hover:border-terracotta rounded-lg w-full h-40 px-5"
          >
            {service.icon}
            <h4 className="font-bold text-lg my-2"> {service.name} </h4>
            <p className="text-sm text-gray-500">{service.featured}</p>
            <div className="flex items-center text-terracotta mt-3">
              <Link to="/services" className="font-semibold text-sm">
                التفاصيل
              </Link>
              <IoIosArrowRoundBack size={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}