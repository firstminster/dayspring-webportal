import React, { useState } from "react";
// MUI
import { TableBody, TableCell, TableRow } from "@mui/material";
// Components
import TableInnerRow from "./TableInnerRow.jsx";
// import TablePaginate from "./TablePaginate.jsx";
// import { rows } from "../../data/TableData";

const TableDetails = ({ rows, page, rowsPerPage, emptyRows }) => {
  return (
    <TableBody>
      {(rowsPerPage > 0
        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : rows
      ).map((row) => {
        return <TableInnerRow key={row.id} rowData={row} />;
      })}

      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={8} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default TableDetails;
