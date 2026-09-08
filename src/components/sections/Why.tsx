import Titles from "../ui/Titles";

import { MdOutlineDone } from "react-icons/md";

export default function Why() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:place-content-center px-5 lg:px-15 py-32">
      <div className="lg:w-md">
        <Titles
          subtitle="لماذا عيادة بريق"
          subtitleStyles="text-sm text-terracotta"
          title="نهتم بأدق التفاصيل، من الاستقبال حتى ما بعد العلاج"
          titleStyles="font-bold text-ink text-xl lg:text-3xl mt-4"
        />
        <div className="flex flex-col mt-4">
          <div className="flex gap-3 mt-5">
            <div className="flex justify-center items-center bg-green-800/25 rounded-lg w-8 h-8">
              <MdOutlineDone
                size={15}
                className="text-green-950 text-2xl"
              />
            </div>
            <div>
              <h4 className="font-semibold text-lg">أطباء مرخّصون من وزارة الصحة</h4>
              <p className="text-sm">جميع أطبائنا حاصلون على تراخيص سارية ويخضعون لتدريب مستمر.</p>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <div className="flex justify-center items-center bg-green-800/25 rounded-lg w-8 h-8">
              <MdOutlineDone
                size={15}
                className="text-green-950 text-2xl"
              />
            </div>
            <div>
              <h4 className="font-semibold text-lg">تعقيم وفق معايير عالمية</h4>
              <p className="text-sm">بروتوكولات تعقيم صارمة لكل غرفة علاج وأداة قبل كل مريض.</p>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <div className="flex justify-center items-center bg-green-800/25 rounded-lg w-8 h-8">
              <MdOutlineDone
                size={15}
                className="text-green-950 text-2xl"
              />
            </div>
            <div>
              <h4 className="font-semibold text-lg">خطط دفع مرنة</h4>
              <p className="text-sm">تقسيط للعلاجات الكبرى، وتنسيق مباشر مع شركات التأمين المعتمدة.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-md mt-8 lg:mt-0">
        <div className="flex flex-col gap-6 p-10 bg-white lg:w-lg border border-gray-200 rounded-2xl">
          <div className="flex justify-between items-center border-b border-b-gray-300 pb-4">
            <h3 className="font-semibold text-terracotta text-2xl">
              ٩٠٠٠+
            </h3>
            <p className="text-gray-500 text-sm">
              مريض تمت معالجته
            </p>
          </div>
          <div className="flex justify-between items-center border-b border-b-gray-300 pb-4">
            <h3 className="font-semibold text-terracotta text-2xl">
              ١٤ سنة
            </h3>
            <p className="text-gray-500 text-sm">
             في خدمة أهالي جدة
            </p>
          </div>
          <div className="flex justify-between items-center border-b border-b-gray-300 pb-4">
            <h3 className="font-semibold text-terracotta text-2xl">
              ٦
            </h3>
            <p className="text-gray-500 text-sm">
              أطباء أسنان مرخّصون
            </p>
          </div>
          <div className="flex justify-between items-center pb-4">
            <h3 className="font-semibold text-terracotta text-2xl">
              ٤٫٨/٥
            </h3>
            <p className="text-gray-500 text-sm">
             تقييم Google (٦١٠ تقييم)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
