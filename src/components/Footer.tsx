import { Divider, Image, Link } from "@nextui-org/react";
import { useState } from 'react';
import Modal from 'react-modal';
import { ModalComponent } from "./Modal";

Modal.setAppElement('#root');


export default function Footer() {
  const [value,setValue]= useState ('')
  const onChange = (e:any) => setValue(e.target.value)

  return (
    <div className="mx-6 md: md:mx-10 py-3 md:py-4 z-20  grid place-items-center tracking-wide space-y-4 bg-[#009CA3] rounded-b-3xl shadow-2xl shadow-gray-400 mb-10">
      <Divider className=" w-11/12 bg-white rounded-lg" />
      <div className="w-10/12 flex flex-row justify-between space-x-16 md:space-x-96 text-xs md:text-base text-white text-center font-sans ml-[-5%] max-[560px]:ml-[-10%]">
      <div className="space-y-2 text-[100%] w-[180px] max-[330px]:ml-[20%]">
          <h1>Our Social Media:</h1>
          <div className="flex flex-row gap-4 justify-center">
            <Link href="">
              <Image
                radius="none"
                src="/images/icono-X.webp"
                alt="Twitter/'X' Profile"
                id="X"
                className="size-6 md:size-8"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/migrate-solutions/about/?viewAsMember=true">
              <Image
                radius="none"
                src="/images/linkedin.webp"
                alt="LinkedIn Profile"
                id="LinkedIn"
                className="size-6 md:size-8"
              />
            </Link>
          </div>
        </div>
        <div className="space-y-1 items-center justify-center">
        <ModalComponent />
        </div>
      </div>
    </div>
  );
}
