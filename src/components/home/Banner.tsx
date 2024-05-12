import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="h-screen max-h-[600px] flex flex-col justify-center">
      <div className="px-20 space-y-4">
        <h1 className="text-6xl font-semibold leading-tight font-serif">
          Hi! <br />
          I&rsquo;m Janardhan!
        </h1>
        <p className="max-w-[50ch]">
          Passionate web developer skilled in creating dynamic, user-friendly
          websites with innovative design and seamless functionality. Web
          Developer.
        </p>
        <Button variant={"outline"}>Download CV</Button>
      </div>
    </div>
  );
};

export default Banner;
