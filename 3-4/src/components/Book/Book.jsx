/*тут отображение каждой книги в одном разделе, которая есть в массиве*/
import styles from './Book.css';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { selectBookById } from '../../store/book/selectors.js';
import { selectBookCount } from '../../store/cart/selectors.js';
import { cartSlice } from '../../store/cart';

export const Book = ({id,name,genre,autors,rating,annotation,price}) => {
	const dispatch = useDispatch()
	const count = useSelector(state => selectBookCount(state, id));
	return <div className="book_card">
		<Link to={`/reviews/${id}`}><div>
			<p className="book_title">{name}</p>
			<p className="book_text">{autors}</p>
			<p className="book_text">{genre}</p>
			<p className="book_text">Оценка: {rating}</p>
			{price  !== undefined ? <p className="book_price">{price}₽</p> : <p>Нет в наличии</p>}
		</div></Link>

		<span>
		<button className="book__button" onClick={() => dispatch(cartSlice.actions.removeBook(id)) } disabled={count === 0}>-</button> 
		<span className="button__text">{count || 0}</span> 
		<button className="book__button" onClick={() => dispatch(cartSlice.actions.addBook(id))}>+</button>
		</span>
	</div>
}