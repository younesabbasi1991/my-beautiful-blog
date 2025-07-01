import Style from "./Header.module.css";
import {Link} from "react-router-dom";
import Logo from "../logo/Logo";
import { BsSearch } from "react-icons/bs";  

function Header() {
  return (
    <>
      <div className={Style.header}>
        <div className={Style.headerBox}>
            <div className={Style.headerLogo}>
                <Logo />
            </div>
            <div className={Style.headerNav}>
                <ul>
                    <Link to="/">صفحه اصلی </Link>
                    <Link to="/articles">دل نوشته های من</Link>
                    <Link to="/about">صفحه درباره من</Link>
                    <Link to="/contact">ارتباط با من</Link>

                </ul>
            </div>
            <div className={Style.headerAdminBar}>
                <BsSearch color="black" size={30}/>
            </div>
        
        </div>
      </div>
    </>
  );
}
export default Header;
