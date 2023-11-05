import React, { useCallback, memo, useRef, useEffect } from 'react';
import { CLICK_CELL } from './TicTacToe';

const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  console.log('td rendered');

  const ref = useRef([]);
	useEffect(() => {
    ref.current = [rowIndex, cellIndex, dispatch, cellData];
    console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3]);
    console.log(cellData, ref.current[3]);
	}, [rowIndex, cellIndex, dispatch, cellData]);

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      return;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return (
    <td onClick={onClickTd}>{cellData}</td>
  )
});
Td.displayName = 'Td';

export default Td;
