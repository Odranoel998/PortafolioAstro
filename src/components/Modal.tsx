import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image} from "@nextui-org/react";
import {FormContact} from "./Formulario"

export const ModalComponent= () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="p-4">
    <div className="flex flex-col border-2 border-transparent">
        <p>Contact Us:</p>
        <Button onPress={onOpen} className="bg-transparent">
        <Image
           radius="none"
           src="/images/icono-mensaje.webp"
           alt="Contact Us"
           id="Email Form"
           className="size-8 md:size-10"
           width={"50px"}
           height={"35px"}
           loading="lazy"  
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
              <div className="min-[600px]:bg-[url('/images/Contact/Contact-800.webp')] bg-cover min-[1550px]:bg-center bg-right h-[100%] w-[100%] p-8"></div>
              <div className=" h-[100%] w-[50%]" ></div>
              <FormContact/>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
