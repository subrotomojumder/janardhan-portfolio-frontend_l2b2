import { TBlog } from "@/types/blog.type";
import { MessageCircle, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Blogs = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/blogs?limit=6`, {
    next: { revalidate: 30 },
  });
  const { data: blogs } = await res.json();
  return (
    <div
      id="blog"
      className="min-h-screen flex flex-col justify-center py-32 lg:py-40 px-8 md:px-20 space-y-16 relative"
    >
      <div className="space-y-3">
        <p className="text-xs text-slate-400 font-mono">READ</p>
        <h5
          className="text-lg md:text-xl font-medium font-serif text-slate-600"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-center"
        >
          RECENT BLOG
        </h5>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-24 ">
        {blogs.map((blog: TBlog, index: number) => (
          <Link href={`blogs/${blog._id}`} key={blog._id}>
            <div
              data-aos="fade-right"
              data-aos-delay={`${index.toString().slice(-1)}00`}
              className="group space-y-5 border border-white hover:border-blue-500 transition-all px-2 pt-2 pb-4"
            >
              {blog.images && (
                <div className="w-full overflow-hidden">
                  <Image
                    src={blog.images[0]}
                    alt="Image"
                    width={800}
                    height={800}
                    className="object-cover w-full h-full group-hover:scale-110 duration-300"
                  />
                </div>
              )}
              <p className="text-[11px] tracking-widest text-slate-400">
                {new Date(blog.createdAt).toDateString()} | {blog.subTitle} |{" "}
                <MessageSquare size={12} className="inline" /> 4
              </p>
              <h1 className="text-lg uppercase line-clamp-2 h-14">
                {blog.title}
              </h1>
              <p className="text-sm text-slate-600 leading-6 line-clamp-6 text-justify">
                {blog.des}
              </p>
              {/* <ul className="space-y-1 list-disc text-sm font-medium text-gray-700 pl-2">
                {blog.desBullet?.map((bullet: string, inx: number) => (
                  <li key={inx}>{bullet}</li>
                ))}
              </ul> */}
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Link href={`blogs`}>
          <Button variant="link">See All...</Button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
