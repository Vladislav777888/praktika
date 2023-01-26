import { useState } from 'react';
import { PageHeaderInnerForm, Form, FormInput } from './SearchForm.styled';

import sprite from '../../images/svg/symbol-defs.svg';
import { toast } from 'react-toastify';

export const SearchForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeInput = evt => {
    const { value } = evt.target;

    setSearchValue(value.trim());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchValue.length === 0) {
      toast.error('You entered the empty string');
      return;
    }

    onSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <PageHeaderInnerForm>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="search"
          placeholder="Movie search"
          value={searchValue}
          onChange={handleChangeInput}
        />
        <button type="submit">
          <svg width="12" height="12">
            <use xlinkHref={sprite + '#icon-search'}></use>
          </svg>
        </button>
      </Form>
    </PageHeaderInnerForm>
  );
};
