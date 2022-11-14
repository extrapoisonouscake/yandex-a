/*тут отображение структуры и страницы с книгами, потом и страницы с отзывами на книгу.*/

import { Layout } from "./components/Layout/Layout.jsx";
import { BookshelfPage } from "./pages/BookshelfPage/BookshelfPage.jsx";
import { bookshelfs } from "./constants/mock.js";
import { ReviewsPage } from "./pages/ReviewsPage/ReviewsPage.jsx";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Bookshelf } from "./components/Bookshelf/Bookshelf.jsx";
import { CartPage } from "./pages/CartPage/CartPage.jsx";

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<BookshelfPage />} />

            <Route path="/reviews/:id" element={<ReviewsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>

      {/*отображение страницы с жанрами и книгами выбранного жанра*/}
      {/*<BookshelfPage  />*/}

      {/*отображение страницы с выбранной книгой, отзывами и аннотацией
	<ReviewsPage bookshelfs={bookshelfs} />*/}
    </Provider>
  );
}
