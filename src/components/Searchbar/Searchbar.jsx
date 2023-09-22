import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit, onChange, value, inputValue }) => {

  return (
    <header className={css.Searchbar}>
      <form onSubmit={onSubmit} value={value} className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="inputValue"
          value={inputValue}
          onChange={onChange}
        />
      </form>
    </header>
  )
};