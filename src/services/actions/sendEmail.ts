"use server";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

type TData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export const sendEmail = async (data: TData) => {
  const res = await resend.emails.send({
    from: `From: ${data.email} | <onboarding@resend.dev>`,
    to: "janardhan.md03@gmail.com",
    subject: data.subject,
    reply_to: data.email,
    text: data.message,
  });
  return res;
};
