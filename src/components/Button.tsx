import { useState } from "react"
import { Resend } from "resend";


export const ButtonClick = () => {
    const [form,setForm] = useState(false)
    const resend = new Resend("re_UWmPJZGN_5NKtLf3wtGYfVEGxnS7JY7Pc");

    if(form==true){
        resend.emails.send({
        from: "onboarding@resend.dev",
        to: "odranoel.leonardo98@gmail.com",
        subject: "Hola panqueque",
        html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });
    }


    return (
        <div>
            <h1>{form}</h1>
            <button onClick={()=>setForm(true)}>click</button>
        </div>
    )
}