import { useMemo } from 'react';

import { ColumnsFilms } from 'constants/colunm';

import Table from 'components/Table';

import movies, { MoviesProps } from './data';
import * as S from './styles';

type SelectedProps = {
  selectedRows: MoviesProps;
};

const Home = () => {
  const columns = useMemo(() => ColumnsFilms, []);

  const handleSelectItem = ({ selectedRows }: SelectedProps) => {
    console.log(selectedRows);
  };

  return (
    <S.Container>
      <Table
        columns={columns}
        data={movies}
        handleSelectItem={handleSelectItem}
      />
    </S.Container>
  );
};

export default Home;
