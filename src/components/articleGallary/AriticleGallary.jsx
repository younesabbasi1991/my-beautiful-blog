import style from "./ArticleGallary.module.css"

function ArticleGallary({children, title, shortTitle}){
    return(
        <section className={style.articleGallary}>
            <h2>{title}</h2>
            <span>{shortTitle}</span>
            <div className={style.articleGallaryWrapper}>{children}</div>
        </section>
        
    )
}

export default ArticleGallary;  