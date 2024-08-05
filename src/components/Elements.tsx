
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { useState } from "react";

const english : any= {
  title1 : "IT Management",
  description1:`
  We oversee and manage technological resources to ensure their 
  efficient and effective use. This includes software management, 
  mentoring, training, agile planning, and execution in IT 
  environments aligned with your company's objectives.
  `,
  title2 : "Marketing Strategy",
  description2:`
  We develop personalized action plans to effectively promote and 
  sell your products and/or services. A good marketing strategy 
  will help you reach and attract your target audience, differentiate 
  from the competition, and achieve your sales and growth goals.
  `,
  title3 : "IT Consultancy",
  description3:`
  We offer team recruitment services. Our experts, with extensive
  experience and precise candidate analysis, enable us to find 
  the best talent in the market for your company.
  `,
  title4 : "Cloud Computing",
  description4:  `
  We provide DevOps infrastructure for deploying your apps, with 
  no preference for any specific provider, seeking the best fit 
  for your product. We have a forward-looking approach, with most 
  of our projects being Infrastructure as Software (IaS), and our 
  best ally is Terraform.`,
  title5 : "Software Development",
  description5:`
    Our team has extensive experience in application 
    development, ranging from native mobile apps for 
    Android and iOS systems to web applications with 
    specialized frontend and backend teams. We have a 
    culture of excellence and commitment to our clients, which 
    drives us to undertake complex tasks such as project migrations.
  `,
}

export const Cards = () => {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card 
        className="bg-[url('images/services/gestion.png')] text-transparent
          bg-cover bg-center bg-clip-content col-span-12 sm:col-span-4 
          h-[300px] bg-opacity-30 hover:shadow-2xl transition duration-500 hover:shadow-black hover:mt-[-20px] shadow-white"
      >
        <CardHeader 
          className="flex justify-items-center absolute z-10 top-1 flex-col !items-start">
          <div className="text-center text-white mt-1">
            <div className="p-4 rounded-[20px] bg-[#003D69] bg-opacity-80 w-full">
              <h1 className="text-tiny font-bold text-[15px]">{english.title1}</h1>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="absolute hover:h-[100%] bottom-0 z-10">
        <div>
        <p className=" text-[70%]   p-2 hover:text-white transition duration-500 hover:bg-[#003D69] mt-10 rounded-[20px] bg-transparent w-full">
          {english.description1}
        </p>
        </div>
      </CardFooter>
      </Card>
      <Card className="bg-[url('images/services/marketing.png')] 
        bg-cover bg-center bg-clip-content col-span-12 sm:col-span-4 
        h-[300px] bg-[#003D69] bg-opacity-30 hover:shadow-2xl transition duration-500 hover:shadow-black hover:mt-[-20px] shadow-white">
        <CardHeader className="flex absolute z-10 top-1 flex-col !items-start">
          <div className="text-center text-white mt-1">
          <div className="p-4 rounded-[20px] bg-[#003D69] bg-opacity-80 ">
              <h1 className="text-tiny font-bold text-[15px]">{english.title2}</h1>
            </div>
            <p className=" text-[70%]   p-2 hover:text-white transition duration-500 hover:bg-[#003D69] mt-5 rounded-[20px] text-transparent bg-transparent w-full">
              {english.description2}
            </p>
          </div>
         </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-3.jpeg"
        />
      </Card>
      <Card className="bg-[url('images/services/servicios-de-consultoria.png')] 
        bg-cover bg-center bg-clip-content col-span-12 sm:col-span-4 
        h-[300px] bg-opacity-30 hover:shadow-2xl transition duration-500 hover:shadow-black hover:mt-[-20px] shadow-white">
        <CardHeader className="flex absolute z-10 top-1 flex-col !items-start">
          <div className="text-center text-white mt-1">
          <div className="p-4 rounded-[20px] bg-[#003D69] bg-opacity-80 w-full">
              <h1 className="text-tiny font-bold text-[15px]">{english.title3}</h1>
            </div>
            <p className=" text-[70%]   p-2 hover:text-white transition duration-500 hover:bg-[#003D69] mt-5 rounded-[20px] text-transparent bg-transparent w-full">
              {english.description3}
            </p>
          </div>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-2.jpeg"
        />
      </Card>
      <Card isFooterBlurred className="bg-[url('images/services/nube.png')] bg-cover bg-center bg-clip-content w-full h-[300px] col-span-12 sm:col-span-5 bg-[#003D69] bg-opacity-30 hover:shadow-2xl transition duration-500 hover:shadow-black hover:mt-[-20px] shadow-white">
        <CardHeader className="flex absolute z-10 top-1 flex-col items-start">
          <div className="text-center text-white mt-1">
          <div className="p-4 rounded-[20px] bg-[#003D69] bg-opacity-80 w-full">
              <h1 className="text-tiny font-bold text-[15px]">{english.title4}</h1>
            </div>
            <p className=" text-[70%]   p-2 hover:text-white transition duration-500 hover:bg-[#003D69] mt-5 rounded-[20px] text-transparent bg-transparent w-full">
              {english.description4}
            </p>
          </div>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://nextui.org/images/card-example-6.jpeg"
        />
      </Card>
      <Card isFooterBlurred 
        className="bg-[url('images/services/desarrollo-movil.png')] bg-cover bg-center bg-clip-content w-full h-[300px] col-span-12 sm:col-span-7 bg-opacity-30 hover:shadow-2xl transition duration-500 hover:shadow-black hover:mt-[-20px] shadow-white">
        <CardHeader className="flex absolute z-10 top-1 flex-col items-start">
          <div className="text-center text-white mt-1">
          <div className="p-4 rounded-[20px] bg-[#003D69] bg-opacity-80 w-full">
              <h1 className="text-tiny font-bold text-[15px]">{english.title5}</h1>
            </div>
            <p className=" text-[10px] hover:p-4 hover:text-white transition duration-500 hover:bg-[#003D69] mt-5 rounded-[20px] text-transparent bg-transparent w-full">
              {english.description5}
            </p>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}

