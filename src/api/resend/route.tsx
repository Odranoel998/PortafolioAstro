import { Resend } from "resend";

const resend = new Resend("re_UWmPJZGN_5NKtLf3wtGYfVEGxnS7JY7Pc");

export async function POST() {
    try{
        const data= await resend.emails.send({
              from: "onboarding@resend.dev",
              to: "odranoel.leonardo98@gmail.com",
              subject: `Feching de resend`,
              html: "<p>Cosas</p>",
            });
        console.log(data)
    }catch(error){
        console.log(error)
    }
  }

