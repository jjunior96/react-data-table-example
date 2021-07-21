import DataTable from 'react-data-table-component';

import { shade } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    overflow: auto;
    white-space: nowrap;

    margin: 0 ${theme.spacings.small};
    max-width: 100%;
    /* max-width: 800px; */

    &::-webkit-scrollbar {
      width: 10px;
      background-color: ${theme.colors.green_100};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.green};
      border-radius: ${theme.border.radius};
    }
  `}
`;

export const DataContainer = styled(DataTable)`
  ${({ theme }) => css`
    .rdt_Table {
      width: 100%;
      height: 100%;

      /* Msg de table vazia */
      > div {
        color: ${theme.colors.red_300};
        font-size: ${theme.font.sizes.small};
      }
    }

    .rdt_TableBody {
      overflow-y: hidden;

      /* Calcula 100% da viewport e subtrai o tamanho da sidebar e das margens
         laterais;
      */
    }

    /* Linha da tabela */
    .rdt_TableRow {
      color: ${theme.colors.darkText};
      line-height: ${theme.font.sizes.small};
      min-height: ${theme.spacings.xlarge};
      transition: background-color 0.3s;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: ${theme.font.sizes.small};
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background-color: ${shade(0.14, theme.colors.white)};
      }

      /* Cor da borda da linha */
      &:not(:last-of-type) {
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: ${theme.colors.lightGray};
      }
    }

    .rdt_TableCol {
      background-color: ${theme.colors.gray_100};
    }

    .rdt_TableCol_Sortable {
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.darkText};
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.1, theme.colors.green)};
      }
    }

    .rdt_TableCell {
      border: 0;
    }

    .rdt_TableHeadRow {
      background-color: ${theme.colors.gray_100};
      border-bottom-style: none;

      /* Calcula 100% da viewport e subtrai o tamanho da sidebar e das margens
         laterais;
      */
    }

    .rdt_Pagination {
      background-color: red;
      span {
        font-size: ${theme.font.sizes.xsmall};
      }
    }

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background-color: ${theme.colors.green_100};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.green};
      border-radius: ${theme.border.radius};
    }

    .rdt_TableHeader {
    }
  `}
`;
