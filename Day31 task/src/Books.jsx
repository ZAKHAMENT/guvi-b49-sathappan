import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import './App.css'; // Import the CSS file

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = '*Required';
  } else if (values.title.length > 50) {
    errors.title = 'Must be 50 characters or less';
  }

  if (!values.author) {
    errors.author = '*Required';
  } else if (values.author.length > 50) {
    errors.author = 'Must be 50 characters or less';
  }

  if (!values.isbn) {
    errors.isbn = '*Required';
  }

  if (!values.publicationDate) {
    errors.publicationDate = '*Required';
  }

  return errors;
};

const Books = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
      publicationDate: '',
    },
    validate,
    onSubmit: values => {
      setBooks([...books, values]);
      formik.resetForm();
    },
  });

  const [books, setBooks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
    formik.setValues(books[index]);
  };

  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  const handleSubmitEdit = () => {
    if (editIndex !== null) {
      const updatedBooks = [...books];
      updatedBooks[editIndex] = formik.values;
      setBooks(updatedBooks);
      setEditIndex(null);
      formik.resetForm();
    }
  };

  useEffect(() => {
    // Initialize with 5 default entries
    const defaultEntries = [
      {
        title: 'One Piece',
        author: 'Oda',
        isbn: '3498483912',
        publicationDate: '01/09/1999',
      },
      {
        title: 'Naruto',
        author: 'Kishimoto',
        isbn: '4783938312',
        publicationDate: '02/01/2001',
      },
      {
        title: 'Rapidex',
        author: 'R.Gupta',
        isbn: '3456789012',
        publicationDate: '03/01/2022',
      },
      {
        title: 'Fox Tails',
        author: 'Albert ',
        isbn: '4567890123',
        publicationDate: '04/01/2003',
      },
      {
        title: 'Living Things',
        author: 'Gabriel',
        isbn: '5678901234',
        publicationDate: '25/06/2013',
      },
    ];

    setBooks(defaultEntries);
  }, []);

  return (
    <div>
      <h1>Book Management</h1>
      <h3>Add Book ⬇️</h3>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title ? <div>{formik.errors.title}</div> : null}

        <label htmlFor="author">Author</label>
        <input
          id="author"
          name="author"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
        {formik.errors.author ? <div>{formik.errors.author}</div> : null}

        <label htmlFor="isbn">ISBN Number</label>
        <input
          id="isbn"
          name="isbn"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.isbn}
        />
        {formik.errors.isbn ? <div>{formik.errors.isbn}</div> : null}

        <label htmlFor="publicationDate">Publication Date</label>
        <input
          id="publicationDate"
          name="publicationDate"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.publicationDate}
        />
        {formik.errors.publicationDate ? <div>{formik.errors.publicationDate}</div> : null}

        <button className='submit-btn' type="submit">Submit</button>
        {/* <button type="button" onClick={handleSubmitEdit}>
          {editIndex !== null ? 'Save Edit' : 'Edit'}
        </button> */}
      </form>
      <h2>Want to see Author records ? Go to our Author navbar to see more</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN Number</th>
            <th>Publication Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <span
                  onClick={() => onAuthorClick(book.author)}
                  className="./Author.jsx"
                >
                  {book.author}
                </span>
              <td>{book.isbn}</td>
              <td>{book.publicationDate}</td>
              <td>
                <button className='edit-btn' onClick={() => handleEdit(index)}>Edit</button>
                <button className='del-btn' onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
