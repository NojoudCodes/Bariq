import Titles from "../components/ui/Titles";
import { FaLocationPin } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Doctors() {
  return (
    <section>
      <div className="bg-cream-secondary px-10 lg:px-15 py-32">
        <Titles
          subtitle="الموقع والتواصل"
          SubtitleStyles="text-sm text-terracotta"
          title="احجز موعدك أو زُرنا مباشرة"
          titleStyles="font-bold text-ink text-xl lg:text-3xl mt-4"
        />
        <p className="mt-4 text-sm text-gray-700">عبّي نموذج الحجز وبنتواصل معك لتأكيد الموعد، أو مرّي علينا مباشرة خلال ساعات الدوام.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center px-10 lg:px-15 py-32">
        <div className="bg-white border border-gold/30 p-10">
          <h4 className="font-bold text-xl text-ink">معلومات العيادة</h4>
          <div className="flex flex-col gap-6 mt-4">
            <div className="flex flex-col gap-6">
              <div className="flex gap-3.5">
                <IoLocationOutline size={15} className="text-terracotta" />
                <div>
                  <h3 className="font-bold text-sm text-ink">العنوان</h3>
                  <p className="text-sm text-gray-500">حي الروضة، شارع الأمير سلطان، مبنى ١٤، جدة</p>
                </div>
              </div>
              <div className="flex gap-3.5">
                <FaPhoneAlt size={15} className="text-terracotta" />
                <div>
                  <h3 className="font-bold text-sm text-ink">الهاتف</h3>
                  <p className="text-sm text-gray-500">+966 12 600 1234</p>
                </div>
              </div>
              <div className="flex gap-3.5">
                <MdOutlineEmail size={15} className="text-terracotta" />
                <div>
                  <h3 className="font-bold text-sm text-ink">البريد الإلكتروني</h3>
                  <p className="text-sm text-gray-500">info@bariqdental.sa</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-ink font-semibold">السبت – الأربعاء</p>
                <p className="text-sm text-gray-500">٩:٠٠ ص – ٩:٠٠ م</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-ink font-semibold">الخميس</p>
                <p className="text-sm text-gray-500">٩:٠٠ ص – ٥:٠٠ م</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-ink font-semibold">الجمعة</p>
                <p className="text-sm text-gray-500">مغلق</p>
              </div>
              <div></div>
              <div></div>
            </div>
            <div className="relative bg-cream-secondary border border-gold/30 w-full py-32 mt-4">
              <FaLocationPin size={40} className="absolute top-1/3 left-2/4 text-terracotta" />
            </div>
          </div>
        </div>
        <div className="bg-cream-secondary border border-gold/30 p-10">
          <h4 className="font-bold text-xl text-ink">احجز موعدًا</h4>
          <form className="mt-5">
            <div className="flex flex-col lg:flex-row  justify-between items-center gap-5">
              <input 
                type="text" 
                name="fullname" 
                id="fullname" 
                placeholder="الاسم الكامل"
                className="bg-white p-2.5 w-full border border-gold/30 rounded-md"
              />
              <input 
                type="text" 
                name="phonenumber" 
                id="phonenumber" 
                placeholder="رقم الجوال"
                className="bg-white p-2.5 w-full border border-gold/30 rounded-md"
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5 mt-4">
              <select className="bg-white p-2.5 w-full border border-gold/30 rounded-md text-sm">
                <option value="">اختر الخدمة</option>
                <option value="">فحص وتنظيف</option>
                <option value="">تبييض الأسنان</option>
                <option value="">تقويم الأسنان</option>
                <option value="">زراعة الأسنان</option>
                <option value="">علاج العصب</option>
                <option value="">طب أسنان الأطفال</option>
              </select>
              <input 
                type="date" 
                name="date" 
                id="date" 
                className="bg-white p-2.5 w-full border border-gold/30 rounded-md text-sm"
              />
            </div>
            <div className="mt-4">
              <textarea 
                name="message" 
                id="message" 
                rows={10}
                cols={10}
                placeholder="ملاحظات إضافية (اختياري)"
                className="bg-white w-full border border-gold/30 p-2.5 text-sm"
              ></textarea>
            </div>
            <button type="submit" className="bg-terracotta text-white w-full h-12 text-sm mt-3.5"> إرسال طلب الحجز</button>
          </form>
          <p className="text-sm text-gray-500 mt-3">سيتم التواصل معك خلال ساعات العمل لتأكيد الموعد.</p>
        </div>
      </div>
    </section>
  )
}
