import style from "./PrimaryBtn.module.css";
function PrimaryBtn(probs) {
    return(
        <>
            <button className={style.btn}> {probs.text}</button>
        </>
    )
}

export default PrimaryBtn;