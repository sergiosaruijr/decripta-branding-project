import Image from "next/image";

import CardPost from "@/components/common/card-post";

export default function Home() {
  const projects = [
    {
      href: "/cases",
      imageUrl: "/image/CARTAO.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
    {
      href: "/cases+1",
      imageUrl: "/image/Outdoor2.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
    {
      href: "/cases+2",
      imageUrl: "/image/Flyer.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
    {
      href: "/cases+3",
      imageUrl: "/image/CARTAO.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
    {
      href: "/cases+4",
      imageUrl: "/image/Flyer.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
    {
      href: "/cases+5",
      imageUrl: "/image/CARTAO.png",
      title: "Latas de alumínio pelo planeta",
      description:
        "Lorem ipsum dolor sit amet. Et laudantium dolorum id natus doloremque ut voluptates perspiciatis aut repellat voluptatum et illo nisi et blanditiis dolores! Et dolor ducimus a ratione deserunt At voluptatem debitis quo harum earum qui enim fuga aut animi facere qui voluptatem facere?",
      date: "2025-08-20T03:00:00.000Z",
    },
  ];

  return (
    <main>
      <div className="relative h-screen w-full mb-8">
        <Image
          src="/image/Outdoor2.png"
          alt="Imagem de fundo"
          fill
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 p-2 sm:grid-cols-2 sm:p-6 md:grid-cols-3 xl:grid-cols-4 ">
        {projects.map((proj) => (
          <CardPost key={proj.href} {...proj} />
        ))}
      </div>
    </main>
  );
}
