import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"] });

const HomeSection1 = () => {
  return (
    <div className="z-10 relative w-full max-w-full">
      <div className="block md:hidden h-[600px] bg-cover bg-[url('/home-page/section1/section_1_xs.jpeg')] custom-sm:bg-[url('/home-page/section1/section_1_sm.jpeg')] bg-black bg-no-repeat z-10" />
      <div className="hidden md:block md:h-screen bg-center bg-[url('/home-page/section1/section_1.jpeg')]  bg-black xl:bg-black bg-no-repeat z-20" />

      <div className="absolute left-5 top-10 md:top-20 md:left-20 flex-col z-50">
        <h1
          className={`${dancingScript.className} text-4xl md:text-6xl text-rose-300`}
        >
          Makeup By Kopal
        </h1>
        <h5 className="md:text-xl text-amber-500">Your Bridal Beauty Expert</h5>
      </div>
    </div>
  );
};

export default HomeSection1;
