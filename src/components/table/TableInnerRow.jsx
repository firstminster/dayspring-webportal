import React from "react";
import { Link } from "react-router-dom";
// MUI
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
// Icons
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
// Images
import { appleImg } from "../../assets/importAssets";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TableInnerRow = ({ rowData }) => {
  const { id, name, grade, level, gender, branch, contact } = rowData;
  return (
    <StyledTableRow>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell style={{ width: 200 }} align="left">
        <Link to="/admin/student-details/1 " className="flex items-center">
          <img src={appleImg} alt="" className="rounded-full h-10 w-10 " />
          <p className="pl-2 font-medium hover:text-blue-primary transition-all duration-300 ease-out">
            {name}
          </p>
        </Link>
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {grade}
      </TableCell>
      <TableCell style={{ width: 160 }} align="left">
        {level}
      </TableCell>
      <TableCell style={{ width: 160 }} align="left">
        {gender}
      </TableCell>
      <TableCell style={{ width: 160 }} align="left">
        {branch}
      </TableCell>
      <TableCell style={{ width: 160 }} align="left">
        {contact}
      </TableCell>
      <TableCell style={{ width: 10 }} align="center">
        <div className="flex justify-center items-center">
          <span className="bg-honeydew p-1 mr-3 rounded">
            <Link to="/admin/edit-student/1">
              {/* <FaEdit size={20} className="text-green-pantone" /> */}
              <MdEdit size={20} className="text-green-pantone" />
            </Link>
          </span>
          <button className="bg-outrageous-orange p-1 rounded">
            <MdDelete size={20} className="text-white" />
          </button>
        </div>
        <span className=""></span>
      </TableCell>
    </StyledTableRow>
  );
};

export default TableInnerRow;
