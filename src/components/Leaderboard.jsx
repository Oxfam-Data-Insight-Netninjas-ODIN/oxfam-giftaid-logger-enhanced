import React, { useState, useEffect } from "react";
import "./styleComponents.css";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import GlobalUserData from './globalUserData.json'
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get } from "firebase/database";
import firebaseConfig from "./FirebaseConfig";
import { writeUserData } from "./firebaseFunct.js";

const app = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase());

// Fetch and filter data from server
const fetchData = () => {
  return new Promise((resolve, reject) => {
    get(child(dbRef, `users/`)).then((snapshot) => {
      let storageData = snapshot.val();
      let historyData = [];
      Object.keys(storageData).forEach((key) => {
        const newObject = storageData[key];
        Object.values(newObject).forEach((nestedValue) => {
          historyData.unshift(nestedValue);
        });
      });
      const filteredData = historyData.filter(
        (obj) => !Object.keys(obj).includes("password")
      );
      // add procentage to database array
      filteredData.forEach((item) => {
        item.proc = Math.round((item.gAid * 100) / (item.gAid + item.noGAid)) || 0;
      });
      // Sort filteredData in descending order based on the 'proc' key
      filteredData.sort((a, b) => b.proc - a.proc);

      resolve(filteredData);
    }).catch((error) => {
      reject(error);
    });

  });
};

// Usage
fetchData().then((filteredData) => {
  console.log("no errors"); // Access filteredData here
}).catch((error) => {
  console.error(error);
});

function TopScores() {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setFilteredData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Directly style the header cell
const HeaderCell = styled(TableCell)(({ theme }) => ({
  color: 'white',
  fontSize: '1.2rem',
}));

const BodyCell = styled(TableCell)(({ theme }) => ({
  fontSize: '1rem',
}));

const BodyTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  // Styles the row for the top 3 positions
  '&:nth-of-type(1)': {
    backgroundColor: '#FFC30B',
  },

  '&:nth-of-type(2)': {
    backgroundColor: '#C0C0C0',
  },

  '&:nth-of-type(3)': {
    backgroundColor: '#CD7F32',
  },
}));

  return (
    <div>
    <div id="localScores">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead id='header'>
            <TableRow>
              <HeaderCell>User Code</HeaderCell>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Gift Aid</HeaderCell>
              <HeaderCell>No Gift Aid</HeaderCell>
              <HeaderCell>Percentage</HeaderCell>
              <HeaderCell>Signups</HeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item, index) => (
              <BodyTableRow key={index}>
                <BodyCell>{item.username}</BodyCell>
                <BodyCell>{item.name}</BodyCell>
                <BodyCell>{item.gAid}</BodyCell>
                <BodyCell>{item.noGAid}</BodyCell>
                <BodyCell>{Math.round((item.gAid * 100) / (item.gAid + item.noGAid))}%</BodyCell>
                <BodyCell>Signups</BodyCell>
              </BodyTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    {/* Prints the table using the browser's print function */}
    <div id="btnFlex"> 
    <button className="btn" onClick={() => window.print()}>Print Table</button>
    </div>
  </div>
  );
}

export default TopScores;
