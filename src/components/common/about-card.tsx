import Image from "next/image";
import Link from "next/link";

type CardPostProps = {
  href: string;
  imageUrl: string;
  title: string;
  description: string;
  objectFit?: "cover" | "contain";
};

const AboutCard = ({
  href,
  imageUrl,
  title,
  description,
  objectFit = "cover",
}: CardPostProps) => {
  return (
    <Link
      href={href}
      className="group flex flex-col h-full w-full max-w-[480px] overflow-hidden rounded-lg bg-transparent  "
    >
      <div className="relative mb-2 aspect-[0.8] w-[full] overflow-hidden rounded-[60px] bg-[#00322A] ">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={`transition-transform duration-300 group-hover:scale-105 ${
            objectFit === "contain" ? "object-contain p-20" : "object-cover"
          }`}
        />
      </div>
      <div className="flex flex-col flex-grow space-y-2 rounded-3xl p-8 pt-10 transition-colors duration-300 group-hover:bg-[hsla(0,0%,80%,0.5)] bg-[#D9D9D9]/20">
        {/* O pt-10 (padding-top) garante que todos os títulos comecem exatamente na mesma altura */}
        <h1 className="group-hover:text-primary !font-fagun text-black text-2xl font-bold leading-tight">
          {title}
        </h1>
        <p className="!font-fagun text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default AboutCard;
