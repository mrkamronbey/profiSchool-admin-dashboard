import './Group.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'
import FilterListIcon from '@mui/icons-material/FilterList';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(name, manwoman, year, student, claas) {
    return { name, manwoman, year, student, claas };
  }
  
  const rows = [
    createData('Чернова Анастасия', 'Женский', '09.09.2003', 'Ученица', '10 класс'),
    createData('Тарасов Пётр', 'Мужской','09.09.2004','Ученик', '9 класс'),
    createData('Чернова Анастасия', 'Женский', '09.09.2003', 'Ученица', '10 класс'),
    createData('Тарасов Пётр', 'Мужской','09.09.2004','Ученик', '9 класс'),
    createData('Чернова Анастасия', 'Женский', '09.09.2003', 'Ученица', '10 класс'),
    createData('Тарасов Пётр', 'Мужской','09.09.2004','Ученик', '9 класс'),
    createData('Чернова Анастасия', 'Женский', '09.09.2003', 'Ученица', '10 класс'),
    createData('Тарасов Пётр', 'Мужской','09.09.2004','Ученик', '9 класс'),
    createData('Чернова Анастасия', 'Женский', '09.09.2003', 'Ученица', '10 класс'),
    createData('Тарасов Пётр', 'Мужской','09.09.2004','Ученик', '9 класс'),
    createData('Чернова Анастасия', 'Женский', '09.09.2003', 'Ученица', '10 класс'),
    createData('Тарасов Пётр', 'Мужской','09.09.2004','Ученик', '9 класс'),
  ];

const Group = () => {
    return (
        <>
        <section className="group">
            <div className="container">
            <TableContainer className='tanconta' component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow className='tablesrow'>
                        <StyledTableCell className='tablescel filter-table'>Имя  <IconButton className='filters-icons'><FilterListIcon className='filter-icons'/></IconButton></StyledTableCell>
                        <StyledTableCell className='tablescel' align="right">Пол/Возраст</StyledTableCell>
                        <StyledTableCell  className='tablescel filter-table' align="right"><IconButton className='filters-icons'><FilterListIcon className='filter-icons'/></IconButton>  Статус/Класс</StyledTableCell>
                        <StyledTableCell className='tablescel' align="right">Действия</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                     {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                       <StyledTableCell component="th" scope="row">
                            <div className="div"></div> <span className="name">{row.name}</span>
                        </StyledTableCell>
                        <StyledTableCell align="right"> <span className='rowman'>{row.manwoman}</span> <br /> <span className='rowyear'>{row.year}</span></StyledTableCell>
                        <StyledTableCell align="right"> <span className='rowman'>{row.student}</span> <br /> <span className='rowyear'>{row.claas}</span></StyledTableCell>
                        <StyledTableCell align="right">
                                <IconButton  className='active-effect'><i class='bx icon-box bx-message-rounded-dots'></i></IconButton>
                                <Link className='added' to='/edit'>
                                  <IconButton className='active-effect'> <i class='bx icon-box bx-edit-alt'></i></IconButton>
                                </Link>
                                <IconButton className='active-effect'> <i class='bx icon-box bx-trash-alt'></i></IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        </section>
        </>
    );
}

export default Group;
