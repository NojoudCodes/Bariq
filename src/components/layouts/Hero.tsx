import Button from "../ui/Button";
import Titles from "../ui/Titles";


export default function Hero() {
  return (
    <header className="flex flex-col lg:flex-row justify-center lg:justify-around items-center h-96 lg:h-screen px-15">
      <div className="lg:flex-1">
        <Titles 
          subtitle="عيادة أسنان مرخّصة — حي الروضة، جدة"
          SubtitleStyles="text-sm text-terracotta"
          title="رعاية أسنان موثوقة، لكل أفراد العائلة"
          titleStyles="font-bold text-2xl lg:text-6xl text-ink mt-3 leading-snug"
        />
        <p className="text-light text-sm lg:text-lg mt-2 lg:w-xl">
          عيادة بريق لطب الأسنان تقدم خدمات شاملة من الفحص الدوري إلى علاجات التجميل والزراعة، بإشراف فريق طبي مرخّص من وزارة الصحة.
        </p>
        <div className="flex gap-2 mt-8">
          <Button
            path="/contact"
            text="احجز موعدك الآن"
            styles="bg-terracotta border border-terracotta-dark hover:bg-terracotta-dark text-white py-3 px-4"
          />
          <Button
            path="/services"
            text="استعرض الخدمات"
            styles="bg-white border border-ink hover:border-terracotta-dark text-ink hover:text-terracotta-dark py-3 px-4"
          />
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-1">
        <div className="relative bg-terracotta-dark-gradient w-full h-96 rounded-2xl">
          <div className="absolute bottom-6 right-6">
            <h5 className="font-semibold text-lg text-white">عيادة بريق — حي الروضة</h5>
            <p className="text-sm text-gray-200 mt-1">فريق من ٦ أطباء أسنان مرخّصين</p>
          </div>
        </div>
      </div>
    </header>
  )
}
