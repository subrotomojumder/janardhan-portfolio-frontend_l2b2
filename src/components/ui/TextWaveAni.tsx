import Typewriter from "typewriter-effect";
import "@/styles/textAnimation.module.css"


export const Wave1 = ({ text }: { text: string }) => (
  <div>
    <Typewriter
      options={{
        strings: [text],
        autoStart: true,
        deleteSpeed: 200,
        loop: true,
      }}
    />
  </div>
);
