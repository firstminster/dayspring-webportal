import React from "react";
// MUI
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// Components
import { rows, studentsTableTitle } from "../../data/TableData";

const TableHeader = () => {
  // console.log(rows);
  // console.log(studentsTableTitle);
  return (
    <TableHead>
      <TableRow>
        {studentsTableTitle.map((title) => {
          const { _id, name, align } = title;
          return (
            <TableCell
              key={_id}
              align={align}
              sx={{
                backgroundColor: "#107bc4",
                color: "#fff",
                fontSize: "14px",
              }}
              style={{ minWidth: 100 }}
            >
              {name}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
