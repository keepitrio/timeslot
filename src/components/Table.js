import React from 'react';
import ActionButtons from './ActionButtons';
import { TableContainer, TableHeader, TableBody, TableBodyRowContainer, CellContainer } from "./styled";

const HEADERS = ['Event Name', 'Date', 'Start Time', 'End Time', '# of Guests', 'Actions'];

const actions = (id, dispatch, data, setShowForm) => {
  return (
    <CellContainer>
      <ActionButtons id={id} dispatch={dispatch} data={data} setShowForm={setShowForm} />
    </CellContainer>
  );
};

const createRow = ({data = null, forBody = false, dispatch = () => {}, setShowForm = () => {}}) => {
  if (!data) console.warn("data is null");
  let tableData = {};
  if (data.constructor !== Array) {
    for (let info in data) {
      if (info !== "id") {
        tableData[info] = data[info];
      }
    }
  }

  const objectValue = Object.values(tableData);
  const values = data.constructor === Array ? data : objectValue.slice(0, objectValue.length);
  const newStuff = values.map((cellData, idx) => {
    return <CellContainer key={`cell-container-${idx}`}>{cellData}</CellContainer>;
  });

  if (forBody) {
    newStuff.push(actions(data.id, dispatch, data, setShowForm));
  }

  return newStuff;
};

const createBody = ({ data = null, dispatch, setShowForm }) => {
  if (!data.length) return console.warn('data is null');
  return data.map((timeSlotData, id) => {
    return <TableBodyRowContainer key={`table-row-${id}`}>{createRow({ data: timeSlotData, forBody: true, dispatch, setShowForm })}</TableBodyRowContainer>;
  })
};

const Table = ({ data, dispatch, setShowForm }) => {
  return (
    <TableContainer>
      {/* header */}
      <TableHeader>{createRow({ data: HEADERS, dispatch })}</TableHeader>
      {/* slots */}
      <TableBody>{createBody({ data, dispatch, setShowForm })}</TableBody>
    </TableContainer>
  );
};

export default Table;