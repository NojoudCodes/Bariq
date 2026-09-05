type TitleProprs = {
  subtitle: string;
  title: string;
  SubtitleStyles: string;
  titleStyles: string;
}

export default function Titles({ subtitle, title, SubtitleStyles, titleStyles }: TitleProprs) {
  return (
    <div>
      <h6 className={SubtitleStyles}>— {subtitle}</h6>
      <h2 className={titleStyles}>{title}</h2>
    </div>
  )
}