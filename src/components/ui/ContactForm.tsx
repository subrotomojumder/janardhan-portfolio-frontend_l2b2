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
// import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(5),
  message: z.string().min(5),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
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
                  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"

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
