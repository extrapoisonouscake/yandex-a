import cn from "classnames";
/*тут отображение страницы с выбором разделов и книгами из каждого раздела*/

import { Books } from "../../components/Books/Books.jsx";
import { useState } from "react";
import styles from "./BookshelfPage.css";
import { useSelector } from "react-redux";
import { bookshelfs } from "../../constants/mock.js";
import { selectBookshelfs } from "../../store/cinema/selectors";
import { NavLink, Outlet, isActive } from "react-router-dom";

import classnames from "classnames";

export const BookshelfPage = () => {
  const bookshelfs = useSelector(selectBookshelfs);
  const [currentBookshelfId, setCurrentBookshelfId] = useState(
    bookshelfs[0].id
  );
  {
    /*выбор жанра литературы*/
  }

  return (
    <div className="bookshelf_container">
      <div className="bookshelf">
        <div className="choice_genre">
          {bookshelfs.length > 0 &&
            bookshelfs.map((bookshelf) => (
              <p
                key={bookshelf.id}
                className={({ isActive }) =>
                  cn("genre", { genre_bold: isActive })
                }
                onClick={() => setCurrentBookshelfId(bookshelf.id)}
              >
                {bookshelf.name}
              </p>
            ))}
        </div>

        {/*конец выбора*/}
        {/*{activeBookshelf &&	<Bookshelf bookshelf={activeBookshelf}/>}*/}
        {/* <Outlet /> */}
      </div>

      <Books bookshelfId={currentBookshelfId} />
    </div>
  );
};
