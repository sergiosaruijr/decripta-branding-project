import Image from "next/image";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full">
        <Image
          // src="/image/CARTAO.png"
          src="/image/Outdoor2.png"
          alt="Imagem de fundo"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0" />
        {/* <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Decripta Branding Project
          </h1>
        </div> */}
      </div>

      <div>
        <Card className="w-full max-w-md bg-red-500">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
