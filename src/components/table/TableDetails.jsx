import React from "react";
// MUI
import TableBody from "@mui/material/TableBody";
// Components
import TableInnerRow from "./TableInnerRow.jsx";
// Components
import { rows } from "../../data/TableData";

const TableDetails = () => {
  return (
    <TableBody>
      {rows.map((row) => {
        return <TableInnerRow key={row.id} rowData={row} />;
      })}
    </TableBody>
  );
};

export default TableDetails;
