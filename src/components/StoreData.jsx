import React from "react";
import LocalUserData from "./localUserData.json";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Directly style the header cell
const HeaderCell = styled(TableCell)(({ theme }) => ({
  color: 'white',
  fontSize: '1.2rem',
}));

const BodyCell = styled(TableCell)(({ theme }) => ({
  fontSize: '1rem',
}));

function LocalScores() {
  return (
    <div>
    <div className="localScores">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead id='header'>
            <TableRow>
              <HeaderCell>User Code</HeaderCell>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Gift Aid</HeaderCell>
              <HeaderCell>No Gift Aid</HeaderCell>
              <HeaderCell>Percentage</HeaderCell>
              <HeaderCell>Date</HeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {LocalUserData.map((item, index) => (
              <TableRow key={index}>
                <BodyCell>{item.userCode}</BodyCell>
                <BodyCell>{item.firstName}</BodyCell>
                <BodyCell>{item.giftAid}</BodyCell>
                <BodyCell>{item.nogiftAid}</BodyCell>
                <BodyCell>{item.percentage}%</BodyCell>
                <BodyCell>{item.date}</BodyCell>
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
