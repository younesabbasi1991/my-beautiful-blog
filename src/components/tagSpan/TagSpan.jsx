import style from "./TagSpan.module.css";

function TagSpan(probs) {
    return(
        <>
            <span className={style.tagSpan}> {probs.text}   </span>
        </>
    )
}

export default TagSpan;