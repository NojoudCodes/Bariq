import Titles from "../components/ui/Titles";

import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";

export default function Faq() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "هل تتعاملون مع شركات التأمين؟",
      answer: "نعم، نتعامل مباشرة مع أغلب شركات التأمين الطبي الكبرى في السعودية (بوبا، ميدغلف، التعاونية، ولاء). تواصل مع الاستقبال للتأكد من تغطية بوليصتك قبل الموعد."
    },
    {
      id: 2,
      question: "كم تستغرق جلسة التبييض؟",
      answer: "جلسة التبييض الاحترافية تستغرق من ٤٥ إلى ٦٠ دقيقة، وتظهر النتيجة مباشرة بعد الجلسة."
    },
    {
      id: 3,
      question: "هل يوجد تخدير أثناء زراعة الأسنان؟",
      answer: "نعم، تتم عملية الزراعة تحت تخدير موضعي مع إمكانية التخدير الواعي للحالات التي تحتاج ذلك، بإشراف طبيب تخدير مختص."
    },
    {
      id: 4,
      question: "هل يمكن حجز موعد لطفل؟",
      answer: "بالتأكيد، لدينا أطباء متخصصون في طب أسنان الأطفال، ويمكنكم الحجز مباشرة عبر الموقع أو الاتصال بالعيادة."
    },
    {
      id: 5,
      question: "هل تقدّمون خطط تقسيط للعلاجات الكبرى؟",
      answer: "نعم، نوفر خطط دفع مرنة للعلاجات مثل التقويم والزراعة، تُناقش بالتفصيل مع منسق العلاج خلال أول زيارة."
    },
    {
      id: 6,
      question: "ماذا أفعل في حال ألم مفاجئ خارج ساعات الدوام؟",
      answer: "نوفر خط طوارئ عبر واتساب لتقييم الحالة وتحديد إن كانت تستدعي زيارة فورية أو يمكن الانتظار لأقرب موعد متاح."
    },
    {
      id: 7,
      question: "كم مرة يُنصح بزيارة طبيب الأسنان؟",
      answer: "يُنصح بزيارة دورية كل ٦ أشهر للفحص والتنظيف الوقائي، حتى دون وجود ألم أو مشكلة ظاهرة."
    },
  ]

  return (
    <section>
      <div className="bg-cream-primay px-10 lg:px-15 py-15">
        <Titles
          subtitle="الأسئلة الشائعة"
          SubtitleStyles="text-sm text-terracotta"
          title="أسئلة يسألها مرضانا كثيرًا"
          titleStyles="font-bold text-ink text-xl lg:text-3xl mt-4"
        />
        <p className="mt-4 text-sm text-gray-700">ما لقيتي إجابة سؤالك هنا؟ تواصلي معنا مباشرة وبنرد عليك بأقرب وقت.</p>
      </div>
      <div className="bg-cream-secondary px-10 lg:px-15 py-15">
        <div className="flex flex-col gap-6 lg:w-3xl">
          {faqs.map((faq) => {
            const openId = isOpen === faq.id
            return(
            <div className="flex justify-between gap-5 lg:gap-0 border-b border-b-gold/30 pb-5" key={faq.id}>
              <div>
                <h3 className="font-bold text-ink">{faq.question}</h3>
                <div className={`${openId ? "flex" : "hidden"} mt-3 lg:w-xl`}>
                  <p className="text-sm text-gray-500">{faq.answer}</p>
                </div>
              </div>
              <div>
                  {openId ? (
                    <FiMinus
                      size={20}
                      className="text-terracotta cursor-pointer"
                      onClick={() => setIsOpen(null)}
                    />
                  ) : (
                    <IoIosAdd
                      size={20}
                      className="text-terracotta cursor-pointer"
                      onClick={() => setIsOpen(faq.id)}
                    />
                  )}
                </div>
            </div>
            )
            })}
        </div>
      </div>
    </section>
  )
}
