import React from 'react';
import css from './Contact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContactsArray } from 'redux/selectors';

export const Contact = ({ name, number, id }) => {
  const { isLoading } = useSelector(selectContactsArray);

  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <div>
        <h2 className={css.title}>{name}</h2>
        <h2 className={css.number}>{number}</h2>
      </div>
      <button
        className={css.delete}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
        type="button"
        disabled={isLoading}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
};
