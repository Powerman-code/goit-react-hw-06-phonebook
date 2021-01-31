import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import s from './ContactList.module.css';

function ContactList({ onDeleteContact, visibleContacts }) {
  const filteredContacts = visibleContacts;
  return (
    <ul>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name} {number}
            </p>
            <button
              type="button"
              id={id}
              onClick={() => onDeleteContact(id)}
              className={s.button}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

const getVisibleContacts = (allContacts, filter) => {
  // const { filter, contacts } = this.state;

  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { filter, items } = state.phoneBook;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = getVisibleContacts(items, filter);
  // items.filter(item => item.name.toLowerCase().includes(normalizedFilter));

  return {
    // contacts: state.phoneBook.items,
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phoneBookActions.deleteContact(id)),
});

ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
  onGetVisibleContacts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
