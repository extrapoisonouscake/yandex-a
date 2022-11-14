import styles from './index.module.css'
export function Summary({data}){
    console.log(data)
    return(
        <div className={styles.main}>
            {data.map(book => (
                <p>{book.title} x {book.count}</p>
            ))}
        </div>
    )
}