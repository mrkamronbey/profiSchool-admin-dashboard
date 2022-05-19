import './Stuff.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'

/* =======Table Function ========== */
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
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, roles, years, lessonName, language) {
    return { name, roles, years, lessonName, language };
  }
  
  const rows = [
    createData('Admin Adminov', 'Женский','09.09.1994', 'Преподователь', 'Математика'),
    createData('Тарасов Пётр', 'Мужской', '09.09.2004', 'Преподователь','Английский язык'),
    createData('Чернова Анастасия', 'Женский', '09.09.2003', 'Преподователь', 'Химия'),
    createData('Тарасов Пётр', 'Мужской', '09.09.2004', 'Садовник'),
    createData('Чернова Анастасия', 'Женский', '09.09.2003', 'Повар'),
    createData('Тарасов Пётр', 'Мужской', '09.09.2004', 'Психолог'),
    createData('Чернова Анастасия', 'Женский', '09.09.2003', 'Доктор'),
    createData('Тарасов Пётр', 'Мужской', '09.09.2004', 'Преподователь','Труд'),
    createData('Чернова Анастасия', 'Женский', '09.09.2003', 'Преподователь', 'Русский язык'),
    createData('Тарасов Пётр', 'Мужской', '09.09.2004', 'Преподователь','Правовединие'),
    createData('Чернова Анастасия', 'Женский', '09.09.2003', 'Преподователь', 'Анатомия'),
  ];
  
/* ================================ */

const Stuff = () => {
    return (
        <>
          <section className="employees">
              <div className="container">
                 {/* Table Codes */}
                 <TableContainer className='employes-table-container' component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell className='employes-table-title'>Имя
                            <IconButton className='filters-icons'><FilterListIcon className='filter-icons'/></IconButton>
                            </StyledTableCell>
                            <StyledTableCell className='employes-table-title' align="right">Пол/Возраст</StyledTableCell>
                            <StyledTableCell className='employes-table-title' align="right">Статус/Класс
                            <IconButton className='filters-icons'><FilterListIcon className='filter-icons'/></IconButton>
                            </StyledTableCell>
                            <StyledTableCell className='employes-table-title employes-table-title-end' align="right">Действи  я</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                            <StyledTableCell className='employes-table-text' component="th" scope="row">
                            <div className="div"></div> <span className="table-map-bold table-map-padding">{row.name}</span>
                            </StyledTableCell>
                            <StyledTableCell className='employes-table-text' align="right"><span className="table-map-bold table-map-bolds">{row.roles}</span> <br />
                            <span className="table-map-small">{row.years}</span>
                            </StyledTableCell>
                            <StyledTableCell className='employes-table-text' align="right"><span className="table-map-bold table-map-bolds">{row.lessonName}</span>  <br />
                            <span className="table-map-small">{row.language}</span>
                            </StyledTableCell>
                            <StyledTableCell  className='employes-table-end'align="right">
                                <IconButton  className='active-effect'><i class='bx icon-box bx-message-rounded-dots'></i>
                                </IconButton>
                                <Link to='stuffEdit'>
                                  <IconButton className='active-effect'> <i class='bx icon-box bx-edit-alt'></i></IconButton>
                                </Link>
                                <IconButton className='active-effect'> <i class='bx icon-box bx-trash-alt'></i></IconButton>
                            </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                 {/* =========== */}
              </div>
          </section>
        </>
    );
}

export default Stuff;
