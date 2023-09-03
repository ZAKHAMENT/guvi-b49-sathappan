import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import './App.css';

const validate = values => {
  const errors = {};
  if (!values.authorName) {
    errors.authorName = '*Required';
  } else if (values.authorName.length > 50) {
    errors.authorName = 'Must be 50 characters or less';
  }

  if (!values.birthday) {
    errors.birthday = '*Required';
  }

  if (!values.biography) {
    errors.biography = '*Required';
  }

  return errors;
};

const Author = () => {
  const formik = useFormik({
    initialValues: {
      authorName: '',
      birthday: '',
      biography: '',
    },
    validate,
    onSubmit: values => {
      setAuthors([...authors, values]);
      formik.resetForm();
    },
  });

  const [authors, setAuthors] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
    formik.setValues(authors[index]);
  };

  const handleDelete = (index) => {
    const updatedAuthors = [...authors];
    updatedAuthors.splice(index, 1);
    setAuthors(updatedAuthors);
  };

  const handleSubmitEdit = () => {
    if (editIndex !== null) {
      const updatedAuthors = [...authors];
      updatedAuthors[editIndex] = formik.values;
      setAuthors(updatedAuthors);
      setEditIndex(null);
      formik.resetForm();
    }
  };

  useEffect(() => {
    // Initialize with 5 default entries
    const defaultEntries = [
      {
        authorName: 'Oda',
        birthday: '21/08/2000',
        biography: 'He written famous manga books. He also known as god of Manga'
      },
      {
        authorName: 'Kishimoto',
        birthday: '21/08/1971',
        biography: 'He written famous anime books. He also known as god of anime',
      },
      {
        authorName: 'R.Gupta',
        birthday: '2/01/1971',
        biography: 'He written famous literature books with lot of knowledge',
      },
      {
        authorName: 'Albert ',
        birthday: '11/11/1991',
        biography: 'He written famous fairy tales books. He also known as god of anime',
      },
      {
        authorName: 'Gabriel',
        birthday: '29/03/2000',
        biography: 'He written famous poetry books.',
      },
    ];

    setAuthors(defaultEntries);
  }, []);


  return (
    <div>
      <h1>Author Management</h1>
      <h3>Add your Author datails ⬇️</h3>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="authorName">Author Name</label>
        <input
          id="authorName"
          name="authorName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.authorName}
        />
        {formik.errors.authorName ? <div>{formik.errors.authorName}</div> : null}

        <label htmlFor="birthday">Birthday</label>
        <input
          id="birthday"
          name="birthday"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.birthday}
        />
        {formik.errors.birthday ? <div>{formik.errors.birthday}</div> : null}

        <label htmlFor="biography">Biography</label>
        <input
          id="biography"
          name="biography"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.biography}
        />
        {formik.errors.biography ? <div>{formik.errors.biography}</div> : null}

        <button className='submit-btn' type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Author Name</th>
            <th>Birthday</th>
            <th>Biography</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={index}>
              <td>{author.authorName}</td>
              <td>{author.birthday}</td>
              <td>{author.biography}</td>
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

export default Author;
