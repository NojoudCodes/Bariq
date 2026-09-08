import Titles from "../components/ui/Titles";
import { services } from "../data/clinicInfo";

export default function OurServices() {
  return (
    <section>
      <div className="bg-cream-primay px-10 lg:px-15 py-32">
        <Titles
          subtitle="خدماتنا"
          subtitleStyles="text-sm text-terracotta"
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
