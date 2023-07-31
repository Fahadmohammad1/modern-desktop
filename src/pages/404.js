import Image from "next/image";
import React from "react";
import notFound from "/public/not-found.jpg";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Image src={notFound} width={500} height={500} alt="not found" />
    </div>
  );
};

export default NotFoundPage;
