import React from 'react';
import { useFormik } from 'formik';

// A custom validation function. This must return an object
// whose keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 50) {
    errors.title = 'Must be 50 characters or less';
  }

  if (!values.author) {
    errors.author = 'Required';
  } else if (values.author.length > 50) {
    errors.author = 'Must be 50 characters or less';
  }

  if (!values.isbn) {
    errors.isbn = 'Required';
  }

  if (!values.publicationDate) {
    errors.publicationDate = 'Required';
  }

  return errors;
};

const BookForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
      publicationDate: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
