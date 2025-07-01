import style from "./SuccessBtn.module.css";
function SuccessBtn(probs) {

    return(
        <>
            <button className={style.btn}> {probs.text}</button>
        </>
    )
}

export default SuccessBtn;