import { Statuses } from '../../constants/statuses';


export const selectBookModule = (state) => state.book;


//селектор, который возвращает наши книги
export const selectBooks = (state) => selectBookModule(state).entities;


export const selectBooksByGenre = (state,genre) => selectBookModule(state).entities.filter(book => book.genre === genre);
export const selectBookById = (state, bookId) => selectBookModule(state).entities.find(book => book.id === Number(bookId));

export const selectIsBooksLoading = (state) => selectBookModule(state).status === Statuses.inProgress;