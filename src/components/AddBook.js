import React from 'react';

const AddBook = () => (
  <div>
    <h1>ADD NEW BOOK</h1>
    <form>
      <input type="text" required placeholder="Book title" />
      <input type="text" required placeholder="Book author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
