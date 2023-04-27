import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Styled } from './StyleContactForm';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInput = evt => {
    const { name, value } = evt.currentTarget;

    name === 'name' ? setName(value) : setNumber(value);
  };

  return (
    <>
      <Styled.Form
        onSubmit={e => {
          e.preventDefault();
          addContact({ name, number });
          setName('');
          setNumber('');
        }}
      >
        <Styled.Label>
          Name
          <br />
          <Styled.Input
            onChange={onChangeInput}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Styled.Label>
        <br />
        <label htmlFor="">
          Number
          <br />
          <Styled.Input
            onChange={onChangeInput}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <Styled.Button type="submit">Add contact</Styled.Button>
      </Styled.Form>
    </>
  );
};
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
