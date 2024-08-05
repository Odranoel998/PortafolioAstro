
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { useState } from "react";

const text = {
  nuestraMision: "Es la de poder plasmar cada una de sus ideas, con una experiencia simple y intuitiva para un producto amigable con el usuario",
  nosotros: "Somos una empresa fundada por Matias Guevara, CEO de Migrate Solutions, contamos con un equipo dedicado a la gestión y producción de software de alta calidad.",
  trabajos: "Nuestros productos abarcan desde el desarrollo web, aplicaciones moviles, además contamos con asesoria en grupos de trabajo, y migraciones de productos a nuevas tecnologías."
}


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

export const TabsComponent = ({titles,text}:any) => {

  const [selected, setSelected] = useState("1");
  const handleChange = (value: string) => {
    setSelected(value);
  };

  return(
    <div className="mx-6 md:mx-10 sm:px-6 lg:px-8 font-sans leading-loose text-wrap text-white text-justify">
    <div className="flex sm:flex-row md:flex-row flex-col justify-center border-b-2 border-white p-4">
      <button
        className={selected === "1" ? " xl:px-8 sm:mx-10 md:mx-2 sm:px-3 sm:py-2 bg-gray-800 rounded-[20px]  text-white" : " xl:px-8 sm:mx-10 md:mx-2 sm:px-3 sm:py-2"}
        onClick={(e) => {
          e.preventDefault();
          handleChange("1");
        }}
      >
        {titles[0]}
      </button>
      <button
        className={selected === "2" ? " xl:px-8 sm:mx-10 md:mx-2 sm:px-3 sm:py-2 bg-gray-800 rounded-[20px] text-white" : " xl:px-8 sm:mx-10 md:mx-2 sm:px-3 sm:py-2"}
        onClick={(e) => {
          e.preventDefault();
          handleChange("2");
        }}
      >
        {titles[1]}
      </button>
      <button
        className={selected === "3" ? " xl:px-8 sm:mx-10 md:mx-2 sm:px-3 sm:py-2 bg-gray-800 rounded-[20px] text-white" : " xl:px-8 sm:mx-10 md:mx-2 sm:px-3 sm:py-2"}
        onClick={(e) => {
          e.preventDefault();
          handleChange("3");
        }}
      >
        {titles[2]}
      </button>
    </div>
    <div>
    {selected==="1"?
      <div className="mx-6 md:mx-10 sm:px-6 lg:px-8 font-sans leading-loose text-wrap text-white text-justify">
        <h1>{titles[0]}</h1>
        <p className="text-sm ">{text.nuestraMision}</p>
      </div>  
      :selected==="2"?
      <div className="mx-6 md:mx-10 sm:px-6 lg:px-8 font-sans leading-loose text-wrap text-white text-justify">
        <h1>{titles[1]}</h1>
        <p className="text-sm ">{text.nosotros}</p>
      </div>:
      <div className="mx-6 md:mx-10 sm:px-6 lg:px-8 font-sans leading-loose text-wrap text-white text-justify" >
        <h1>{titles[2]}</h1>
        <p className="text-sm ">{text.trabajos}</p>
      </div>
    }
    </div>
  </div>

  )
}

