/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { IDataTableColumn } from 'react-data-table-component';
import { FaSort } from 'react-icons/fa';

import * as S from './styles';

export interface TableProps {
  columns: IDataTableColumn<unknown>[];
  data: unknown[];
  selectableRows?: boolean;
  pagination?: boolean;
  msgTableVazia?: string;
  handleSelectItem?: (selectedRows: object) => void;
}

const Table = ({
  columns,
  data,
  selectableRows = true,
  msgTableVazia,
  pagination = true,
  handleSelectItem,
  ...rest
}: TableProps) => {
  const msgTable = msgTableVazia;

  const itensSelectionados = {
    singular: 'item',
    plural: 'itens',
    message: 'selecionado'
  };

  const paginacaoOptions = {
    rowsPerPageText: 'Resultados por página:',
    rangeSeparatorText: 'of',
    noRowsPerPage: false,
    selectAllRowsItem: false,
    selectAllRowsItemText: 'Todos'
  };

  // Pega o item que foi clicado, nao precisa ser no checkbox
  function handleRowClicked(item: any) {
    console.log(item);
  }

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
        backgroundColor: '#eee'
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px'
      }
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px'
      }
    }
  };

  const paginacaoPorPagina = [10, 20, 30, 40];
  return (
    <S.Container id="id-table-content">
      <S.DataContainer
        noHeader={true}
        columns={columns}
        data={data}
        defaultSortField="title"
        sortIcon={<FaSort />}
        pagination={pagination}
        contextMessage={itensSelectionados}
        paginationComponentOptions={paginacaoOptions}
        onSelectedRowsChange={handleSelectItem}
        paginationRowsPerPageOptions={paginacaoPorPagina}
        selectableRows={selectableRows}
        striped
        noDataComponent={msgTable} // Mensagem exibida quando a table esta vazia
        selectableRowsNoSelectAll // Nao exibe opcao para selecionar todas as linhas
        pointerOnHover
        selectableRowsHighlight
        customStyles={customStyles}
        onRowClicked={handleRowClicked}
        // conditionalRowStyles={conditionalRowStyles}
        {...rest}
      />
    </S.Container>
  );
};

export default Table;
