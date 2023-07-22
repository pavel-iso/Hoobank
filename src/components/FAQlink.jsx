import styles from "../style";
import { arrowUp } from "../assets";

const FAQlink = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[1px] cursor-pointer m-5 `}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[95%] h-[95%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[24px] leading-[23.4px]">
          <span className="text-gradient">FAQ</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
    </div>
  </div>
);

export default FAQlink;