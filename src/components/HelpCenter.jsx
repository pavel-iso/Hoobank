import styles from "../style";
import {Helpgif} from "../assets";
import FAQlink from "./FAQlink";
const HelpCenter = () => {
  return (
  <>
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Help<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Center</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts always at your service 24x7. Feel free to Contact Us for resolving your problems. Or you could look at the FAQ section to find solution for common questions and problems.
        </p>
        <div className="ss:flex hidden md:mr-4 mr-0">
            <FAQlink />
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={Helpgif} alt="billing" className="w-[100%] h-[100%] relative z-[10] rounded-full" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[90%] h-[90%] rounded-full white__gradient bottom-20 t" />
        <div className="absolute z-[0] w-[60%] h-[60%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <FAQlink />
      </div>
      
    </section>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Contact Us
        </h1>
      </div>
      <form className="w-full h-full md:w-[50%] md:h-[50%] font-poppins flex flex-col items-stretch">
        <div className="mb-6">
          <label for="email" className="block text-xl  text-white">Your email</label>
          <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john@gmail.com" required/>
        </div>
        <div className="mb-6">
          <label for="Dp" className="block text-xl text-white">Describe your Problem</label>
          <textarea type="text" id="Dp" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full h-[200px] p-1.5" placeholder="Write your problem in brief..." required/>
        </div>
        <button type="submit" className="text-black bg-cyan-300 bg-opacity-90 border-solid border-2 border-cyan-900 hover:bg-cyan-300 hover:bg-opacity-100 hover:border-cyan-400 focus:ring-4 focus:outline-none focus:ring-blue-300 text-xl rounded-lg font-semibold w-full sm:w-auto px-5 py-2.5 text-center md:w-[30%]">Submit</button>
      </form>
    </div>
  </>
  );
};

export default HelpCenter;