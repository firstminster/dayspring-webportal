import React, { useState } from "react";
// MUI
import { Paper, Table, TableContainer } from "@mui/material";
import { TableCell, TableRow } from "@mui/material";
// Compontents
import TableHeader from "./TableHeader";
import TableDetails from "./TableDetails";
import TablePaginate from "./TablePaginate";
import { rows } from "../../data/TableData";

const TableMain = () => {
  // Initiate pagination state variables
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // console.log("here", rows);
  return (
    <div className="mt-10">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 700 }}>
          <Table
            sx={{ minWidth: 500 }}
            stickyHeader
            aria-label="dayspring-custom-table"
          >
            <TableHeader />
            <TableDetails
              rows={rows}
              page={page}
              rowsPerPage={rowsPerPage}
              emptyRows={emptyRows}
            />
          </Table>
        </TableContainer>
        <Table>
          <TablePaginate
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            rowsPerPage={rowsPerPage}
            page={page}
            data={rows}
          />
        </Table>
      </Paper>
    </div>
  );
};

export default TableMain;
