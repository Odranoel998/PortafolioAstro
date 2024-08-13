import { Divider, Image, Link } from "@nextui-org/react";
import { useState } from 'react';
import Modal from 'react-modal';
import { ModalComponent } from "./Modal";

Modal.setAppElement('#root');


export default function Footer() {
  const [value,setValue]= useState ('')
  const onChange = (e:any) => setValue(e.target.value)

  return (
      <div className="flex flex-row justify-between  border-t-2 border-t-white m-2">
      <div className=" p-4 border-2 border-transparent">
          <p>Our Social Media:</p>
          <div className="flex flex-row  justify-center border-2 border-transparent ">
            <Link href="">
              <Image
                radius="none"
                src="/images/icono-X.webp"
                alt="Twitter/'X' Profile"
                id="X"
                className="size-6 md:size-8 mr-1"
                
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
        <ModalComponent />
      </div>
  );
}
