import React from "react";
// MUI
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
// Compontents
import TableHeader from "./TableHeader";
import TableDetails from "./TableDetails";

const TableMain = () => {
  return (
    <div className="mt-10">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="dayspring custom table">
          <TableHeader />
          <TableDetails />
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableMain;
