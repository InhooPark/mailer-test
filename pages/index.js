import Head from "next/head";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Home() {
  const form = useRef();
  const btnClick = (e) => {
    e.preventDefault();
    const t = e.target;
    const payload = { email: t.email.value, title: t.title.value, message: t.message.value };
    console.log(payload);

    // emailjs.sendForm(process.env.MAIL_SERVER_KEY, process.env.MAIL_TEMPLATE_KEY, payload, process.env.MAIL_PUBLIC_KEY).then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    try {
      emailjs.sendForm(process.env.MAIL_SERVER_KEY, process.env.MAIL_TEMPLATE_KEY, form.current, process.env.MAIL_PUBLIC_KEY);
      console.log("success");
    } catch (error) {
      console.log(error);
    }
    t.reset();
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form ref={form} onSubmit={btnClick}>
          <p>
            <input type="email" name="email" placeholder="enter your email"></input>
            <input type="text" name="title" placeholder="enter your title"></input>
            <textarea name="message"></textarea>
            <input type="submit" value="전송"></input>
          </p>
        </form>
      </main>
    </>
  );
}
