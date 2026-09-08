import { clinicInfo } from "../../data/clinicInfo"

export default function TopNav() {
  const { phone, email, workingHours } = clinicInfo
  const { days, hours } = workingHours[0]

  return (
    <div className="hidden lg:flex justify-around items-center py-2 px-15 bg-cream-secondary">
        <p className="font-bold text-xs" dir="ltr">
          📞 {phone}
        </p>
        <p className="font-bold text-xs">
          {`${days} - ${hours}`}
        </p>
        <p className="font-bold text-xs">
          {email}
        </p>
    </div>
  )
}
