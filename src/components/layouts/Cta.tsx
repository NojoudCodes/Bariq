import { CiLocationOn, CiClock2, CiPhone} from "react-icons/ci";

export default function Cta() {
  return (
    <section className="lg:px-15">
      <div className="grid grid-cols-1 lg:grid-cols-3 border-y border-gray-200">
        <div className="flex items-center lg:justify-center gap-3 p-6">
          <CiLocationOn size={20} className="text-terracotta" />
          <div className="text-right">
            <h4 className="font-semibold text-lg text-ink">
              حي الروضة، جدة
            </h4>
            <p className="text-sm text-gray-400">
              شارع الأمير سلطان، مبنى ١٤
            </p>
          </div>
        </div>
        <div className="flex items-center lg:justify-center gap-3 p-6 border-x border-gray-200">
          <CiClock2 size={20} className="text-terracotta" />
          <div className="text-right">
            <h4 className="font-semibold text-lg text-ink">
              السبت - الخميس
            </h4>
            <p className="text-sm text-gray-400">
              ٩:٠٠ ص - ٩:٠٠ م
            </p>
          </div>
        </div>
        <div className="flex items-center lg:justify-center gap-3 p-6">
          <CiPhone size={20} className="text-terracotta" />
          <div className="text-right">
            <h4 className="font-semibold text-lg text-ink">
              1234 600 12 966+
            </h4>
            <p className="text-sm text-gray-400">
              احجز مباشرة أو عبر واتساب
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
