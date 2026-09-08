type TitleProprs = {
  subtitle: string;
  title: string;
  subtitleStyles: string;
  titleStyles: string;
}

export default function Titles({ subtitle, title, subtitleStyles, titleStyles }: TitleProprs) {
  return (
    <div>
      <h6 className={subtitleStyles}>— {subtitle}</h6>
      <h2 className={titleStyles}>{title}</h2>
    </div>
  )
}