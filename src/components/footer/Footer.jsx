import style from "./Footer.module.css";
import Logo from "../logo/Logo";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import TagSpan from "../tagSpan/TagSpan";
function Footer() {
  return (
    <>
      <div className={style.footerContainerFluid}>
        <div className={style.footerContainer}>
          <div className={style.footerTop}>
            <Logo />
            <div>
              <p>کتاب زندگی به سبک آرامش</p>
              <PrimaryBtn text={"دانلود کنید"} />
            </div>
          </div>
          <div className={style.footerMiddle}>
            <div className={style.about}>
              <h3>حامل رویاهای بی قرار</h3>
              <p>
                من کلمه‌ها را مثل پنجرههایی میبینم که رو به آسمانِ دل باز میشوند.
                گاهی مینویسم تا سنگینیِ ستارههای نگفته را سبک کنم، گاهی فقط برای
                این که اثری از بودنم باقی بماند؛ مثل برگهایی که پاییز روی زمین
                میریزد، بیصدا اما پر از معنا. اینجا، قلمم نفس میکشد و کاغذها،
                آینهی روحم هستند. هر نوشته، قطعهای از من است: گاهی از عشق، گاهی
                از تنهایی، گاهی از پروانههایی که در تاریکی به دنبال نور میگردند.
                خوشحالم که شما هم همراه من هستید؛
              </p>
            </div>
            <div className={style.quickLink}>
              <h3>ته ته دل من </h3>
              <ul>
                <li>تو را خط خطی کردم</li>
                <li>من و سکوت دیوارها</li>
                <li>در جستجوی آرامش</li>
                <li>من و سکوت دیوارها</li>
                <li>عشق روی کاغذ کاهی</li>
              </ul>
            </div>
            <div className={style.tagCloud}>
              <TagSpan text="کلمات تنهایی من"/>
              <TagSpan text="قلم و کاغذ"/>
              <TagSpan text="سطرهای بی صدا"/>
              <TagSpan text="واژه های گمشده"/>
              <TagSpan text="دفترچه خاطرات دیجیتال"/>
              <TagSpan text="قلب کاغذی"/>
              <TagSpan text="دنیای درونی"/>
            </div>
          </div>
          <div className={style.footerBottom}></div>
        </div>
      </div>
    </>
  );
}
export default Footer;
