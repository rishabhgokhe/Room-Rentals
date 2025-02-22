import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="Decorative" />
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="my-20 min-h-96 w-full px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Room Rentals
          </p>

          <AnimatedTitle
            title="Find your <b>p</b>erfect <br /> home with <br /> e<b>a</b>se t<b>o</b>day."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="Register Now" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Contact;