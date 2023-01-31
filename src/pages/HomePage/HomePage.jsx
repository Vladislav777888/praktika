import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm';
import HomePageInner from 'components/HomePageInner/HomePageInner';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const updateQuery = value => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchForm onSubmit={updateQuery} />
      <HomePageInner query={query} />
    </>
  );
};

export default HomePage;
