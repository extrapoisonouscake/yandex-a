export const selectBookshelfModule = (state) => state.bookshelf;

//селектор, который возвращает наши жанры 
export const selectBookshelfs = (state) => selectBookshelfModule(state).entities.bookshelfs;

// export const selectBookshelfs = (state, bookshelfId) => selectBookshelfModule(state).entities.bookshelfs;

export const selectReviewById = (state, reviewId) => selectBookshelfModule(state).entities[reviewId];


export const selectBookshelfsBooks = (state, bookshelfId) => selectBookshelfModule(state).entities.bookshelfs.find(b => b.id === bookshelfId).books;
