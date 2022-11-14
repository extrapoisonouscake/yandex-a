/*тут отображение содержимого одного отзыва*/
import styles from './Review.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectReviewById } from '../../store/reviews/selectors.js';

export const Review = ({user,text,rating}) => {
	// const dispatch = useDispatch()

	return <div className="review_card">
		<p className="review_title">{user.name} <span>Оценка: {rating}</span></p> 
		<p>{text}</p>
	</div>
}