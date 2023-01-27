import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm';
import HomePageInner from 'components/HomePageInner/HomePageInner';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  // console.log(query);

  return (
    <>
      <SearchForm />
      <HomePageInner query={query} />
    </>
  );
};

export default HomePage;
