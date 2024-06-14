"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./textarea";
import { LuSend } from "react-icons/lu";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { emailJsSend } from "@/services/actions/emailJsSend";

const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(5),
  message: z.string().min(5),
});

const ContactForm = () => {
  // const formRef = useRef<string | HTMLFormElement>();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };
    // console.log(templateParams);
    try {
      const res = await emailjs.sendForm(
        "service_gr5i6oo",
        "template_fj4yy5p",
        JSON.stringify(templateParams),
        { publicKey: "lJzEwIdVoxi-GChks" }
      );
      //       EMAILJS_SERVICEID=service_gr5i6oo
      // EMAILJS_TEMPLATEID=template_fj4yy5p
      // EMAILJS_PUBLIC_KEY=lJzEwIdVoxi-GChks
      if (res) {
        console.log(res);
      }
    } catch (error: any) {
      console.log(error);
      alert(error.message || "Something went wrong !!");
    }
    // emailjs
    //   .sendForm(
    //     process.env.EMAILJS_SERVICEID as string,
    //     process.env.EMAILJS_TEMPLATEID as string,
    //     formRef.current,
    //     process.env.EMAILJS_PUBLIC_KEY as string
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result);
    //       toast.success("Success your email send. Thanks!");
    //     },
    //     (error) => {
    //       console.log(error);
    //       toast.error(error.text);
    //     }
    //   );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 overflow-hidden"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Name"
                  className="border-none text-base rounded-none focus:outline-none focus:ring-0 focus-visible:ring-0 b ring-offset-0 bg-purple-100 py-7 px-4 shadow-sm placeholder:text-gray-400"
                  data-aos="fade-left"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Email"
                  className="border-none text-base rounded-none focus:outline-none focus:ring-0 focus-visible:ring-0 b ring-offset-0 bg-purple-100 py-7 px-4 shadow-sm placeholder:text-gray-400"
                  data-aos="fade-left"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Subject"
                  className="border-none text-base rounded-none focus:outline-none focus:ring-0 focus-visible:ring-0 b ring-offset-0 bg-purple-100 py-7 px-4 shadow-sm placeholder:text-gray-400"
                  data-aos="fade-left"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Message"
                  rows={4}
                  className="border-none text-base rounded-none focus:outline-none focus:ring-0 focus-visible:ring-0 b ring-offset-0 bg-purple-100 py-4 px-4 shadow-sm placeholder:text-gray-400"
                  data-aos="fade-left"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="rounded-sm bg-blue-500 hover:bg-blue-500 text-slate-100 space-x-2 w-full"
          data-aos="fade-left"
        >
          <LuSend />
          <span>Send Message</span>
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
