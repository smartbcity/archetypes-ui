import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import {Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Checkbox } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    table: {
        minWidth: 650,
    },
  }),
);

export type Row = {
    name: string;
    type: string;
    defaultValue:string;
    required:boolean;
    description:string;
}

interface TableProps {
    rows:Row[];
}

const DocsTable = (props: TableProps) => {
    const {rows} = props;
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Default Value</TableCell>
              <TableCell align="center">Required</TableCell>
              <TableCell align="center">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell style={{border:"1px solid rgba(224, 224, 224, 1)"}} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell style={{border:"1px solid rgba(224, 224, 224, 1)"}} align="left">{row.type}</TableCell>
                <TableCell style={{border:"1px solid rgba(224, 224, 224, 1)"}} align="center">{row.defaultValue}</TableCell>
                <TableCell style={{border:"1px solid rgba(224, 224, 224, 1)"}} align="center"><Checkbox checked={row.required} /></TableCell>
                <TableCell style={{border:"1px solid rgba(224, 224, 224, 1)"}} align="left">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default DocsTable;