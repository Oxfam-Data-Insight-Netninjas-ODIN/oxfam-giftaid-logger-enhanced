import React from "react";
import "./styleComponents.css";
import LocalUserData from "./localUserData.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function LocalScores() {
  return (
    <div>
    <div className="localScores">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Code</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gift Aid</TableCell>
              <TableCell>No Gift Aid</TableCell>
              <TableCell>Percentage</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {LocalUserData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.userCode}</TableCell>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.giftAid}</TableCell>
                <TableCell>{item.nogiftAid}</TableCell>
                <TableCell>{item.percentage}%</TableCell>
                <TableCell>{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  </div>
  );
}

export default LocalScores;
