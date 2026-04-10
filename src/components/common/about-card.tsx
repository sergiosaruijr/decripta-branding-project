import Image from "next/image";
import Link from "next/link";

type CardPostProps = {
  href: string;
  imageUrl: string;
  title: string;
  description: string;
};

const AboutCard = ({ href, imageUrl, title, description }: CardPostProps) => {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg bg-transparent"
    >
      <div className="relative mb-2 aspect-[0.8] w-[full] overflow-hidden rounded-[60px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 space-y-2 rounded-2xl p-4 pt-5 transition-colors duration-300 group-hover:bg-[hsla(0,0%,80%,0.5)] bg-[#D9D9D9]/20">
        <h1
          // style={{ fontFamily: "var(--font-hagrid)" }}
          // className="group-hover:text-primary !font-hagrid text-gray-700 text-2xl font-bold"
          className="group-hover:text-primary !font-fagun text-black text-2xl font-bold "
        >
          {title}
        </h1>
        <p className="!font-fagun text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default AboutCard;
