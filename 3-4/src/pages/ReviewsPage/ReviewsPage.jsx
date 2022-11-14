import { Review } from "../../components/Review/Review.jsx";
import { useState } from "react";
import styles from "./ReviewsPage.css";
import { Book } from "../../components/Book/Book.jsx";
import { useSelector } from "react-redux";
import { selectReviewsByBookId } from "../../store/reviews/selectors.js";
import { Bookshelf } from "../../components/Bookshelf/Bookshelf.jsx";
import { NavLink, Outlet, isActive, useParams } from "react-router-dom";

export const ReviewsPage = () => {
  const { id: bookId } = useParams();

  // let activeBookshelf = props.bookshelf[0];
  // const [count, setCount] = useState(0);
  const reviews = useSelector((state) => selectReviewsByBookId(state,bookId));

  return (
    <div className="page__reviews">
      <span>
        {reviews.map((review) => (
          
            <Review {...review} />
        ))}
      </span>
      {/*отображение маленькой карточки*/}

      <section className="container">
        {/*??????на месте этого должен быть Outlet??????
	<div><Bookshelf bookshelf={activeBookshelf}/></div>*/}

        <div className="book_card1 small"></div>

        {/*<div className="book_card1 small">
				<div>
					<p className="book_title">{props.bookshelf[0].books[0].name}</p>
					<p className="book_text">{props.bookshelf[0].books[0].autors}</p>
					<p className="book_text">{props.bookshelf[0].books[0].genre}</p>
					<p className="book_text">Оценка: {props.bookshelf[0].books[0].rating}</p>
					<p className="book_price">{props.bookshelf[0].books[0].price}₽</p>
				</div>
				<span className="button_right">
		<button className="book__button" onClick={() => setCount(count - 1) } disabled={count === 0}>-</button> 
		<span className="button__text">{count}</span> 
		<button className="book__button" onClick={() => setCount(count + 1)}>+</button>
		</span>
			</div>*/}

        {/*отображение маленькой карточки-аннотации*/}
        <div className="book_card1 small">
          {/*<div>
					<p className="book_text black"><span className="ann__title">Аннотация</span>{props.bookshelf[0].books[0].annotation}</p>
				</div>*/}
        </div>
      </section>
    </div>
  );
};
