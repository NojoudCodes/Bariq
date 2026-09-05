import Titles from "../components/ui/Titles";

import { FaUserDoctor } from "react-icons/fa6";
import { RiToothLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { LuShieldPlus, LuClock4 } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";

export default function OurServices() {
  const services = [
    {
      id: 1,
      icon: <FaUserDoctor size={25} className="text-terracotta" />,
      name: "فحص وتنظيف",
      description: "فحص دوري شامل وتنظيف احترافي لإزالة الجير والترسبات، مع تقييم صحة اللثة.",
      price: "تبدأ من ٢٥٠ ر.س"
    },
    {
      id: 2,
      icon: <RiToothLine size={25} className="text-terracotta" />,
      name: "تبييض الأسنان",
      description: "جلسة تبييض واحدة بنتائج ملحوظة وآمنة على مينا الأسنان باستخدام تقنية معتمدة.",
      price: "تبدأ من ٦٠٠ ر.س"
    },
    {
      id: 3,
      icon: <SlCalender size={25} className="text-terracotta" />,
      name: "تقويم الأسنان",
      description: "تقويم شفاف أو معدني مع متابعة دورية حتى الوصول للنتيجة النهائية المطلوبة.",
      price: "تبدأ من ٦٬٠٠٠ ر.س"
    },
    {
      id: 4,
      icon: <LuShieldPlus size={25} className="text-terracotta" />,
      name: "زراعة الأسنان",
      description: "راعة رقمية دقيقة لتعويض الأسنان المفقودة بثبات طويل الأمد.",
      price: "تبدأ من ٣٬٥٠٠ ر.س / زرعة"
    },
    {
      id: 5,
      icon: <LuClock4 size={25} className="text-terracotta" />,
      name: "علاج العصب",
      description: "علاج جذور دقيق وخالٍ من الألم بأحدث تقنيات التخدير الموضعي.",
      price: " تبدأ من ٨٠٠ ر.س"
    },
    {
      id: 6,
      icon: <FaUser size={25} className="text-terracotta" />,
      name: "طب أسنان الأطفال",
      description: "رعاية متخصصة للأطفال في بيئة مريحة تقلل من قلق زيارة العيادة.",
      price: " تبدأ من ٨٠٠ ر.س"
    },
    {
      id: 7,
      icon: <IoShieldOutline size={25} className="text-terracotta" />,
      name: "طوارئ الأسنان",
      description: "استقبال حالات الألم المفاجئ والكسور خلال نفس اليوم.",
      price: "حسب الحالة"
    },
    {
      id: 8,
      icon: <BsBag size={25} className="text-terracotta" />,
      name: "تركيبات وتيجان",
      description: "تيجان وجسور خزفية عالية الجودة تعيد شكل ووظيفة الأسنان.",
      price: "تبدأ من ١٬٢٠٠ ر.س / وحدة"
    },

  ]

  return (
    <section>
      <div className="bg-cream-primay px-10 lg:px-15 py-32">
        <Titles
          subtitle="خدماتنا"
          SubtitleStyles="text-sm text-terracotta"
          title="خدمات طب الأسنان الشاملة"
          titleStyles="font-bold text-ink text-xl lg:text-3xl mt-4"
        />
        <p className="mt-4 text-sm text-gray-700">خطط علاج مصممة حسب حالتك، بأحدث الأجهزة التشخيصية والعلاجية، وبأسعار واضحة من أول استشارة.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 bg-cream-secondary px-15 py-32">
        {services.map((service) => (
          <div className="bg-white border border-gray-200 p-8" key={service.id}>
            {service.icon}
            <h4 className="font-bold text-xl text-ink my-4">{service.name}</h4>
            <p className="text-sm text-gray-500">{service.description}</p>
            <hr className="text-gray-300 line-dashed my-4" />
            <p className="text-sm text-terracotta font-semibold">
             {service.price}            
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
