import Image from "next/image";
import React from "react";
import natureImg from "../../assets/Altja_jõgi_Lahemaal.jpg";

const page = () => {
  return (
    <div>
      <Image
        width={200}
        height={200}
        alt="picture"
        src={
          "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
        }
      />
      <Image width={200} height={200} alt="picture" src={natureImg} />
    </div>
  );
};

export default page;
