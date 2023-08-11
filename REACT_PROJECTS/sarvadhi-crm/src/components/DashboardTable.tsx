import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';


const data = [
  {
    name: 'Item 1',
    progress: 75,
    type: 'Type A',
    amount: '$100',
    contact: 'John Doe',
    created: '2023-08-01',
    lastModified: '2023-08-05',
  },
  {
    name: 'Item 2',
    progress: 45,
    type: 'Type B',
    amount: '$200',
    contact: 'Jane Smith',
    created: '2023-07-15',
    lastModified: '2023-08-10',
  },
  {
    name: 'Item 3',
    progress: 90,
    type: 'Type C',
    amount: '$50',
    contact: 'Alice Johnson',
    created: '2023-08-02',
    lastModified: '2023-08-05',
  },
  {
    name: 'Item 4',
    progress: 20,
    type: 'Type A',
    amount: '$300',
    contact: 'Bob Anderson',
    created: '2023-08-03',
    lastModified: '2023-08-06',
  },
  {
    name: 'Item 5',
    progress: 60,
    type: 'Type B',
    amount: '$150',
    contact: 'Eve White',
    created: '2023-08-04',
    lastModified: '2023-08-07',
  },
];

  

export const DashboardTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="data table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Progress</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Last Modified</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.progress}%</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.contact}</TableCell>
              <TableCell>{row.created}</TableCell>
              <TableCell>{row.lastModified}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
