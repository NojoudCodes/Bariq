import Titles from "../components/ui/Titles";
import { FaLocationPin } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { clinicInfo, services  } from "../data/clinicInfo";
import { useForm, type SubmitHandler } from "react-hook-form";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Button from "../components/ui/Button";

type Inputs = {
  fullname: string;
  phone: string;
  chosenService: string;
  chosenDate: string;
  message: string;
}

export default function Contact() {
  const { neighborhood, street, phone, email, workingHours } = clinicInfo
  const { register, handleSubmit, formState: {errors}} = useForm<Inputs>()
  const [ submissionMessage, setSubmissionMessage ] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    setSubmissionMessage(true)
  }

  return (
    <section>
      <div className="bg-cream-secondary px-10 lg:px-15 py-32">
        <Titles
          subtitle="الموقع والتواصل"
          subtitleStyles="text-sm text-terracotta"
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
                  <p className="text-sm text-gray-500">{street} - {neighborhood}</p>
                </div>
              </div>
              <div className="flex gap-3.5">
                <FaPhoneAlt size={15} className="text-terracotta" />
                <div>
                  <h3 className="font-bold text-sm text-ink">الهاتف</h3>
                  <p className="text-sm text-gray-500">{phone}</p>
                </div>
              </div>
              <div className="flex gap-3.5">
                <MdOutlineEmail size={15} className="text-terracotta" />
                <div>
                  <h3 className="font-bold text-sm text-ink">البريد الإلكتروني</h3>
                  <p className="text-sm text-gray-500">{email}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {workingHours.map((workingHour) => (
                <div className="flex justify-between items-center" key={workingHour.id}>
                  <p className="text-ink font-semibold">{workingHour.days}</p>
                  <p className="text-sm text-gray-500">{workingHour.hours}</p>
                </div>
              ))}
            </div>
            <div className="relative bg-cream-secondary border border-gold/30 w-full py-32 mt-4">
              <FaLocationPin size={40} className="absolute top-1/3 left-2/4 text-terracotta" />
            </div>
          </div>
        </div>
        <div className="bg-cream-secondary border border-gold/30 p-10">
          <h4 className="font-bold text-xl text-ink">احجز موعدًا</h4>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <div className="flex flex-col lg:flex-row  justify-between items-center gap-5">
              <div className="w-full">
                <input 
                  type="text" 
                  id="fullname" 
                  placeholder="الاسم الكامل"
                  className="bg-white p-2.5 w-full border border-gold/30 rounded-md"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && <span className="text-red-400">الحقل مطلوب</span>}
              </div>
              <div className="w-full">
                <input 
                  type="text" 
                  id="phonenumber" 
                  placeholder="رقم الجوال"
                  className="bg-white p-2.5 w-full border border-gold/30 rounded-md"
                  {...register("phone", { required: true })}
                />
                {errors.phone && <span className="text-red-400">الحقل مطلوب</span>}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5 mt-4">
              <div className="w-full">
                <select 
                  className="bg-white p-2.5 w-full border border-gold/30 rounded-md text-sm"
                  {...register("chosenService", { required: true })}
                >
                  <option value="">اختر الخدمة</option>
                  {services.map((service) => (
                    <option key={service.id}>{service.name}</option>
                  ))}
                </select>
                {errors.chosenService && <span className="text-red-400">الحقل مطلوب</span>}
              </div>
              <div className="w-full">
                <input 
                  type="date"
                  id="date" 
                  className="bg-white p-2.5 w-full border border-gold/30 rounded-md text-sm"
                  {...register("chosenDate", { required: true })}
                />
                {errors.chosenDate && <span className="text-red-400">الحقل مطلوب</span>}
              </div>
            </div>
            <div className="mt-4">
              <textarea 
                id="message" 
                rows={10}
                cols={10}
                placeholder="ملاحظات إضافية (اختياري)"
                className="bg-white w-full border border-gold/30 p-2.5 text-sm"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && <span className="text-red-400">الحقل مطلوب</span>}
            </div>
            <button type="submit" className="bg-terracotta text-white w-full h-12 text-sm mt-3.5"> إرسال طلب الحجز</button>
          </form>
          <p className="text-sm text-gray-500 mt-3">سيتم التواصل معك خلال ساعات العمل لتأكيد الموعد.</p>
        </div>

        <AnimatePresence>
        {submissionMessage && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="fixed inset-0 z-10 flex flex-col justify-center items-center w-full h-screen bg-cream-primary"
          >
            <motion.p
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="font-semibold text-lg lg:text-2xl text-black w-96 lg:w-full text-center"
            >
              تم إرسال البريد الإلكتروني، شكرًا لتواصلك معنا.
            </motion.p>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="mt-9 cursor-pointer"
              onClick={() => setSubmissionMessage(false)}
            >
              <Button
                path="/"
                styles="bg-paper-primary text-black py-3 px-5 shadow-black/10 shadow-md rounded-lg"
                text="العودة للرئيسية"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </section>
  )
}