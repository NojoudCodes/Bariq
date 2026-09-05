import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-ink text-gray-300 px-15 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <p className="text-sm">نتعامل مباشرة مع شركات التأمين الطبي التالية:</p>
        <div className="flex gap-4 mt-3 lg:mt-0">
          <p className="text-xs lg:text-sm border border-gray-600 p-1.5 lg:p-2.5">
            بوبا العربية  
          </p>
          <p className="text-xs lg:text-sm border border-gray-600 p-1.5 lg:p-2.5">
            ميدغلف
          </p>
          <p className="text-xs lg:text-sm border border-gray-600 p-1.5 lg:p-2.5">
            التعاونية
          </p>
          <p className="text-xs lg:text-sm border border-gray-600 p-1.5 lg:p-2.5">
            ولاء للتأمين  
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-15 gap-4 lg:gap-0">
        <div className="flex flex-col">
          <h4 className="font-semibold text-xl text-white">
            بريق 
            <span className="text-terracotta"> لطب الأسنان </span>
          </h4>
          <p className="text-sm text-gray-300 leading-normal mt-3">
            عيادة أسنان مرخّصة من وزارة الصحة السعودية، <br />
            تخدم أهالي جدة منذ عام ٢٠١٢. سجل تجاري رقم <br />
            ٤٠٣٠١٢٢٢١١.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h6 className="text-white">العيادة</h6>
          <Link to="/" className="text-sm text-gray-300 hover:text-white">من نحن</Link>
          <Link to="/doctors" className="text-sm text-gray-300 hover:text-white">أطباؤنا</Link>
          <Link to="/" className="text-sm text-gray-300 hover:text-white">الوظائف</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h6 className="text-white">الخدمات</h6>
          <Link to="/services" className="text-sm text-gray-300 hover:text-white">جميع الخدمات</Link>
          <Link to="/" className="text-sm text-gray-300 hover:text-white">التأمين الطبي</Link>
          <Link to="/faq" className="text-sm text-gray-300 hover:text-white">الأسئلة الشائعة</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h6 className="text-white">تواصل</h6>
          <a className="text-sm text-gray-300 hover:text-white">+966 12 600 1234</a>
          <a className="text-sm text-gray-300 hover:text-white">info@bariqdental.sa</a>
          <Link to="/contact" className="text-sm text-gray-300 hover:text-white">الموقع على الخريطة</Link>
        </div>
      </div>
      <div className="border-t border-t-gray-600 my-7"></div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 lg:gap-0">
        <p className="text-sm text-gray-400 hover:text-white">
          © ٢٠٢٦ عيادة بريق لطب الأسنان. جميع الحقوق محفوظة.
        </p>
        <p className="text-sm text-gray-400 hover:text-white">
          مشروع تجريبي ضمن بورتفوليو تصميم
        </p>
      </div>
    </footer>
  )
}
