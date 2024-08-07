import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image} from "@nextui-org/react";
import {FormContact} from "./Formulario"

export const ModalComponent= () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div>
    <div className="flex flex-col w-[120%] text-white text-[100%] h-full max-[330px]:ml-[-90%]">
        <p>Contact Us:</p>
        <Button onPress={onOpen} className="bg-transparent">
        <Image
           radius="none"
           src="/images/icono-mensaje.webp"
           alt="Contact Us"
           id="Email Form"
           className="size-8 md:size-10"  
          />
      </Button>
    </div>
      <Modal 
        size='3xl' 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        isDismissable={false} 
        isKeyboardDismissDisabled={true} 
        className="relative w-full border-5 border-[#00375F] p-11 h-[85%]">
        <ModalContent>
          {(onClose) => (
            <ModalBody  className="items-center justify-center flex flex-row"> 
              <div className="min-[600px]:bg-[url('/images/pexels-olly-789822.jpg')] bg-cover min-[1550px]:bg-center bg-right h-[100%] w-[100%] p-8"></div>
              <div className=" h-[100%] w-[50%]" ></div>
              <FormContact/>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
