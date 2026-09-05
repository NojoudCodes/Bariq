import Titles from "../components/ui/Titles";

export default function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "د. لمى العنزي",
      jobTitle: "استشارية تقويم الأسنان",
      info: "بكالوريوس طب أسنان — جامعة الملك عبدالعزيز. خبرة ١٢ عامًا في تقويم الأسنان للبالغين والأطفال.",
      license: "رخصة هيئة التخصصات الصحية: ٢٤١٨٩٠"
    },
    {
      id: 2,
      name: "د. فيصل السبيعي",
      jobTitle: "أخصائي زراعة الأسنان",
      info: "ماجستير جراحة الفم والزراعة — جامعة الملك سعود. متخصص في الزراعة الرقمية بدقة عالية.",
      license: "رخصة هيئة التخصصات الصحية: ٢٢٧٧٤١"
    },
    {
      id: 3,
      name: "د. نوف المالكي",
      jobTitle: "أخصائية تجميل الأسنان",
      info: "دبلوم عالي في تجميل الأسنان — جامعة الملك فيصل. خبيرة في ابتسامة هوليوود والتبييض التجميلي.",
      license: "رخصة هيئة التخصصات الصحية: ٢٥٦٦٠٣"
    },
    {
      id: 4,
      name: "د. عمر المطيري",
      jobTitle: "أخصائي علاج العصب",
      info: "بكالوريوس طب أسنان — جامعة أم القرى. خبرة ٩ سنوات في علاجات الجذور الدقيقة.",
      license: "رخصة هيئة التخصصات الصحية: ٢٦٠١١٢"
    },
    {
      id: 5,
      name: "د. هدى الشهري",
      jobTitle: "أخصائية طب أسنان الأطفال",
      info: "دبلوم طب أسنان الأطفال — جامعة الملك عبدالعزيز. خبرة ٧ سنوات في التعامل مع المرضى الصغار.",
      license: "رخصة هيئة التخصصات الصحية: ٢٦٥٥٢٠"
    },
    {
      id: 6,
      name: "د. ياسر القحطاني",
      jobTitle: "أخصائي تركيبات وتيجان",
      info: "بكالوريوس طب أسنان — جامعة الملك خالد. خبرة ١٠ سنوات في التركيبات الخزفية والجسور.",
      license: "رخصة هيئة التخصصات الصحية: ٢٣٩٩٤٤"
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
