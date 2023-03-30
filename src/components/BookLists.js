import React from 'react';

const books = [
  {
    title: 'Invaluabe',
    author: 'Maya Grossman',
    id: 1,
  },
  {
    title: 'Turn the ship Around',
    author: 'L. David Marquet',
    id: 2,
  },
  {
    title: 'Dare to Lead,',
    author: 'Brené Brown',
    id: 3,
  },
  {
    title: 'Invaluabe',
    author: 'Maya Grossman',
    id: 4,
  },
];

const BookLists = () => (
  <div>
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <span>
            {book.title}
            {' '}
            -
            {book.author}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default BookLists;
