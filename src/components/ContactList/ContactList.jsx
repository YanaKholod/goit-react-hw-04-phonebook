import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './StyleContactList';

const ContactList = ({ contacts, delContact }) => {
  return (
    <Styled.List>
      {contacts.map(contact => {
        return (
          <Styled.Item key={contact.id}>
            <span>{contact.name}:</span>
            <Styled.Number> {contact.number}</Styled.Number>
            <Styled.Button
              type="button"
              onClick={() => {
                delContact(contact.id);
              }}
            >
              Delete
            </Styled.Button>
          </Styled.Item>
        );
      })}
    </Styled.List>
  );
};

ContactList.propTypes = {
  delContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
