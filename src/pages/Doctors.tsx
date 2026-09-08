import Titles from "../components/ui/Titles";
import { doctors } from "../data/clinicInfo";

export default function Doctors() {
  return (
    <section>
      <div className="bg-cream-primay px-10 lg:px-15 py-32">
        <Titles
          subtitle="فريقنا الطبي"
          subtitleStyles="text-sm text-terracotta"
          title="أطباء مرخّصون وذوو خبرة"
          titleStyles="font-bold text-ink text-xl lg:text-3xl mt-4"
        />
        <p className="mt-4 text-sm text-gray-700">فريق من ٦ أطباء أسنان متخصصين، بإشراف مباشر من مديرة العيادة الطبية.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-cream-secondary px-15 py-32">
        {doctors.map((doctor) => (
          <div className="bg-white border border-gray-200 p-8" key={doctor.id}>
            <div className="flex justify-center items-center bg-gold w-10 h-10 rounded-xl">
              <p className="text-white font-bold">
                {doctor.name.slice(2, 4)}
              </p>
            </div>
            <h4 className="font-bold text-xl text-ink mt-4 mb-2">{doctor.name}</h4>
            <p className="text-sm text-terracotta">{doctor.jobTitle}</p>
            <p className="text-sm text-gray-500 mt-3">{doctor.info}</p>
            <hr className="text-gray-300 line-dashed my-4" />
            <p className="text-sm text-gray-500">
              {doctor.license}            
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
