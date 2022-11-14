import { Summary } from '../../components/Summary'
import {useSelector} from 'react-redux'
import { selectCartModule } from '../../store/cart/selectors'
import {selectBooks} from 'store/book/selectors'
export const CartPage = () => {
    const cart = useSelector(selectCartModule)
    const books = useSelector(selectBooks);
    console.log(books)
    const dataToRender = Object.entries(cart).map(prop => {
        console.log(prop[0])
        const book = books.find(b => b.id === Number(prop[0]));
        console.log(book)
        return {...book,count:prop[1]}
    })
    console.log(dataToRender)
    if(Object.values(cart).length === 0) return <p>Ничего не добавлено.</p>
	return(
        <>
            <Summary data={dataToRender}/>
        </>
    )
}