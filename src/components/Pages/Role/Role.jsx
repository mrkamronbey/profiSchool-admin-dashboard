import './Role.css'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


/* modal styles */
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  p: 3,
};
/* =========================== */

/* tabs coding start */
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
/* tabs coding end */

/* tables coding start */
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

  function createData( name, dataStart, dataEnd) {
    return { name, dataStart, dataEnd };
  }
  
  const rows = [
    createData('Администратор', '09.09.2010 11:30', '09.02.2020 11:30'),
    createData('Учитель', '09.09.2010 11:30', '09.02.2020 11:30'),
    createData('Доктор', '09.09.2010 11:30', '09.02.2020 11:30'),
    createData('Приемная', '09.09.2010 11:30', '09.02.2020 11:30'),
  ];
/* tables coding end */

const Role = () => {
    /* tabs coding start */
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    /* tabs coding end */
      /* modal coding start */
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      /* modal coding end */
       
      /* select coding start */
      const [age, setAge] = React.useState('');

      const handleChangeSelect = (event) => {
        setAge(event.target.value);
      };
      /* select coding end */
    return (
        <>
            <section className="role">
                <div className="container">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Роли" {...a11yProps(0)} />
                        </Tabs>
                    </Box>
                    <TabPanel className='role-tabpanels' value={value} index={0}>
                    <TableContainer className='role-tablecontainer' component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell className='role-tablecell'>Название
                                    <IconButton className='filters-icons'><FilterListIcon className='filter-icons'/></IconButton>
                                </StyledTableCell>
                                <StyledTableCell className='role-tablecell' align="right">Дата создания
                                    <IconButton className='filters-icons'><FilterListIcon className='filter-icons'/></IconButton>
                                </StyledTableCell>
                                <StyledTableCell className='role-tablecell' align="right">Дата модификации
                                    <IconButton className='filters-icons'><FilterListIcon className='filter-icons'/></IconButton>
                                </StyledTableCell>
                                <StyledTableCell className='role-tablecell' align="right">Действия</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                <StyledTableCell className='role-tablescell' component="th" scope="row">
                                    {row.name} 
                                </StyledTableCell>
                                <StyledTableCell className='role-tablescell' align="right">{row.dataStart}</StyledTableCell>
                                <StyledTableCell className='role-tablescell' align="right">{row.dataEnd}</StyledTableCell>
                                <StyledTableCell className='role-tablescell' align="right">
                                    <Link className='added' to='/roleedit'>
                                        <IconButton className='active-effect'> <i class='bx icon-box bx-edit-alt'></i></IconButton>
                                    </Link>
                                    <IconButton onClick={handleOpen} className='active-effect'> <i class='bx icon-box bx-trash-alt'></i></IconButton>
                                  {/* modal coding start */}
                                  <Modal
                                      open={open}
                                      aria-labelledby="modal-modal-title"
                                      aria-describedby="modal-modal-description"
                                    >
                                      <Box sx={style}>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                          <div className="modal-title-box">
                                            <h2 className="role-modal-title">
                                              Добавить роль
                                            </h2>
                                            <IconButton className='modal-close-btn'  onClick={handleClose}><i class='bx bx-x'></i></IconButton>
                                          </div>
                                          <Box
                                            sx={{
                                              width: 550,
                                              maxWidth: '100%',
                                            }}
                                          >
                                            <TextField fullWidth label="Название" id="fullWidth" />
                                          </Box>
                                          <Box className='role-modal-select' sx={{ ml: 1, mt:2, minWidth: 150 }}>
                                            <FormControl fullWidth>
                                              <InputLabel id="demo-simple-select-label">Статус</InputLabel>
                                              <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
                                                onChange={handleChangeSelect}
                                              >
                                                <MenuItem value={10}>Активный</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                              </Select>
                                            </FormControl>
                                          </Box>
                                           <div className="role-modals-btns">
                                           <Button className='role-btn' variant="contained"  color="error"    size="small">
                                            Добавить
                                          </Button>
                                           </div>
                                        </Typography>
                                        
                                      </Box>
                                    </Modal>
                                  {/* modal codng end */}
                                </StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </TabPanel>
                    </Box>
                </div>
            </section>
        </>
    );
}

export default Role;
