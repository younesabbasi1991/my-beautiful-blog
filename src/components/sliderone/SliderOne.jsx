import style from "./Sliderone.module.css";
import imageslider0001 from "../../assets/images/image-slider-0001.jpg";
import CatSpan from "../catspan/CatSpan";
import SuccessBtn from "../successBtn/SuccessBtn";
function SliderOne() {
  return (
    <>
      <div className={style.slider}>
        <div className={style.sliderRight}>
          <div>
            <CatSpan title="شکست‌های من" color="black" backColor="lightGreen" />
            <p>1404/04/12</p>
          </div>

          <div>
            <h2>درس‌هایی که شکست به من آموخت</h2>
            <p>
              {" "}
              در این مطلب سه شکست بزرگ زندگی‌ام و درسی که از هر کدام گرفتم را با
              شما به اشتراک می‌گذارم. شاید تجربیات من بتواند مسیر شما را هموارتر
              کند.
            </p>
            <SuccessBtn text="برای مطالعه کلیک کنید" />
          </div>
        </div>
        <div className={style.sliderLeft}>
          <img src={imageslider0001} />
        </div>
      </div>
    </>
  );
}

export default SliderOne;
