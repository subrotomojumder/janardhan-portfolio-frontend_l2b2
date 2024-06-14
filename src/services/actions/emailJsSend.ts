"use server";

import emailjs from "@emailjs/browser";

export const emailJsSend = async (data) => {
  const templateParams = data;
  const res = await emailjs.sendForm(
    process.env.EMAILJS_SERVICEID as string,
    process.env.EMAILJS_TEMPLATEID as string,
    templateParams,
    { publicKey: process.env.EMAILJS_PUBLIC_KEY as string }
  );
  return res;
};
