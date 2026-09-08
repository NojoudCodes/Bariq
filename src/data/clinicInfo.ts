import { createElement } from "react";

import { FaUserDoctor, FaUser } from "react-icons/fa6";
import { IoLocationOutline, IoShieldOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiToothLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { LuShieldPlus, LuClock4 } from "react-icons/lu";
import { BsBag } from "react-icons/bs";

export const clinicInfo = {

  neighborhood: "حي الروضة، جدة",
  street: "شارع الأمير سلطان، مبنى ١٤",
  phone: "+966 12 600 1234",
  email: "info@bariqdental.sa",
  workingHours: [
    { id: 1, days: "السبت – الأربعاء", hours: "٩:٠٠ ص – ٩:٠٠ م" },
    { id: 2, days: "الخميس", hours: "٩:٠٠ ص – ٥:٠٠ م" },
    { id: 3, days: "الجمعة", hours: "مغلق" },
  ],
};

export const fullAddress = `${clinicInfo.neighborhood}، ${clinicInfo.street}`;

export const contactItems = [
  { id: "address", icon: IoLocationOutline, label: "العنوان", value: fullAddress },
  { id: "phone", icon: FaPhoneAlt, label: "الهاتف", value: clinicInfo.phone },
  { id: "email", icon: MdOutlineEmail, label: "البريد الإلكتروني", value: clinicInfo.email },
];

export const services = [
  {
    id: 1,
    icon: createElement(FaUserDoctor, { size: 25, className: "text-terracotta" }),
    name: "فحص وتنظيف",
    description: "فحص دوري شامل وتنظيف احترافي لإزالة الجير والترسبات، مع تقييم صحة اللثة.",
    featured: "فحص دوري شامل وتنظيف احترافي.",
    price: "تبدأ من ٢٥٠ ر.س"
  },
  {
    id: 2,
    icon: createElement(RiToothLine, { size: 25, className: "text-terracotta" }),
    name: "تبييض الأسنان",
    description: "جلسة تبييض واحدة بنتائج ملحوظة وآمنة على مينا الأسنان باستخدام تقنية معتمدة.",
    featured: "نتائج ملحوظة خلال جلسة واحدة.",
    price: "تبدأ من ٦٠٠ ر.س"
  },
  {
    id: 3,
    icon: createElement(SlCalender, { size: 25, className: "text-terracotta" }),
    name: "تقويم الأسنان",
    description: "تقويم شفاف أو معدني مع متابعة دورية حتى الوصول للنتيجة النهائية المطلوبة.",
    featured: "تقويم شفاف أو معدني مع متابعة دورية.",
    price: "تبدأ من ٦٬٠٠٠ ر.س"
  },
  {
    id: 4,
    icon: createElement(LuShieldPlus, { size: 25, className: "text-terracotta" }),
    name: "زراعة الأسنان",
    description: "راعة رقمية دقيقة لتعويض الأسنان المفقودة بثبات طويل الأمد.",
    featured: "زراعة رقمية دقيقة وطويلة الأمد.",
    price: "تبدأ من ٣٬٥٠٠ ر.س / زرعة"
  },
  {
    id: 5,
    icon: createElement(LuClock4, { size: 25, className: "text-terracotta" }),
    name: "علاج العصب",
    description: "علاج جذور دقيق وخالٍ من الألم بأحدث تقنيات التخدير الموضعي.",
    price: " تبدأ من ٨٠٠ ر.س"
  },
  {
    id: 6,
    icon: createElement(FaUser, { size: 25, className: "text-terracotta" }),
    name: "طب أسنان الأطفال",
    description: "رعاية متخصصة للأطفال في بيئة مريحة تقلل من قلق زيارة العيادة.",
    price: " تبدأ من ٨٠٠ ر.س"
  },
  {
    id: 7,
    icon: createElement(IoShieldOutline, { size: 25, className: "text-terracotta" }),
    name: "طوارئ الأسنان",
    description: "استقبال حالات الألم المفاجئ والكسور خلال نفس اليوم.",
    price: "حسب الحالة"
  },
  {
    id: 8,
    icon: createElement(BsBag, { size: 25, className: "text-terracotta" }),
    name: "تركيبات وتيجان",
    description: "تيجان وجسور خزفية عالية الجودة تعيد شكل ووظيفة الأسنان.",
    price: "تبدأ من ١٬٢٠٠ ر.س / وحدة"
  },
];

export const doctors = [
  {
    id: 1,
    name: "د. لمى العنزي",
    jobTitle: "استشارية تقويم الأسنان",
    info: "بكالوريوس طب أسنان — جامعة الملك عبدالعزيز. خبرة ١٢ عامًا في تقويم الأسنان للبالغين والأطفال.",
    license: "رخصة هيئة التخصصات الصحية: ٢٤١٨٩٠",
  },
  {
    id: 2,
    name: "د. فيصل السبيعي",
    jobTitle: "أخصائي زراعة الأسنان",
    info: "ماجستير جراحة الفم والزراعة — جامعة الملك سعود. متخصص في الزراعة الرقمية بدقة عالية.",
    license: "رخصة هيئة التخصصات الصحية: ٢٢٧٧٤١",
  },
  {
    id: 3,
    name: "د. نوف المالكي",
    jobTitle: "أخصائية تجميل الأسنان",
    info: "دبلوم عالي في تجميل الأسنان — جامعة الملك فيصل. خبيرة في ابتسامة هوليوود والتبييض التجميلي.",
    license: "رخصة هيئة التخصصات الصحية: ٢٥٦٦٠٣",
  },
  {
    id: 4,
    name: "د. عمر المطيري",
    jobTitle: "أخصائي علاج العصب",
    info: "بكالوريوس طب أسنان — جامعة أم القرى. خبرة ٩ سنوات في علاجات الجذور الدقيقة.",
    license: "رخصة هيئة التخصصات الصحية: ٢٦٠١١٢",
  },
  {
    id: 5,
    name: "د. هدى الشهري",
    jobTitle: "أخصائية طب أسنان الأطفال",
    info: "دبلوم طب أسنان الأطفال — جامعة الملك عبدالعزيز. خبرة ٧ سنوات في التعامل مع المرضى الصغار.",
    license: "رخصة هيئة التخصصات الصحية: ٢٦٥٥٢٠",
  },
  {
    id: 6,
    name: "د. ياسر القحطاني",
    jobTitle: "أخصائي تركيبات وتيجان",
    info: "بكالوريوس طب أسنان — جامعة الملك خالد. خبرة ١٠ سنوات في التركيبات الخزفية والجسور.",
    license: "رخصة هيئة التخصصات الصحية: ٢٣٩٩٤٤",
  },
];

export const faqs = [
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
];