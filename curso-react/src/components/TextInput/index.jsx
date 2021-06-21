import P from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  // eslint-disable-next-line prettier/prettier
  return (
    <input
      className="text-input"
      type="search"
      onChange={handleChange}
      value={searchValue}
      placeholder="Type your search"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
