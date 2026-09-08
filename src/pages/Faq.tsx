import Titles from "../components/ui/Titles";
import { faqs } from "../data/clinicInfo";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";

export default function Faq() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  return (
    <section>
      <div className="bg-cream-primay px-10 lg:px-15 py-15">
        <Titles
          subtitle="الأسئلة الشائعة"
          subtitleStyles="text-sm text-terracotta"
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
