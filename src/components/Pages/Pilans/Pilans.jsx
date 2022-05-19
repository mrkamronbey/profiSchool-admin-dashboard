import * as React from 'react';
import './Pilans.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import PickersDay from '@mui/lab/PickersDay';
import DatePicker from '@mui/lab/DatePicker';
import CalendarPickerSkeleton from '@mui/lab/CalendarPickerSkeleton';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import Button from '@mui/material/Button';

/* Modal Style css */
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: 24,
    p: 2,
  };
  /* style css end */

  /* Data Coding start */
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  function fakeFetch(date, { signal }) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        const daysInMonth = getDaysInMonth(date);
        const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));
  
        resolve({ daysToHighlight });
      }, 500);
  
      signal.onabort = () => {
        clearTimeout(timeout);
        reject(new DOMException('aborted', 'AbortError'));
      };
    });
  }
  
  const initialValue = new Date();
  /* Data Coding end */


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

  function a11yPropss(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
/* tabs coding end */


/* Tables coding start */
const columns = [
    { id: 'name', label: 'Дата', minWidth: 170,  align: 'left' },
    { id: 'code', label: 'Класс', minWidth: 100,  align: 'left' },
    {
      id: 'population',
      label: 'Тема',
      minWidth: 170,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Домашние задания',
      minWidth: 170,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    }
  ];
  
  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }
  
  const rowtable = [
    createData('03.09.2021', 9, 'Натуральные числа', 'Позиционная система счисления'),
    createData('05.09.2021', 9, 'Натуральные числа', 'Позиционная система счисления'),
    createData('07.09.2021', 9, 'Натуральные числа', 'Решение задач на тему «Сложение и вычитание десятичных дробей» '),
    createData('05.09.2021', 9, 'Натуральные числа', 'Позиционная система счисления'),
    createData('06.09.2021', 9, 'Сложение и вычитание натуральных чисел', 'Позиционная система счисления'),
    createData('07.09.2021', 9, 'Натуральные числа', 'Решение задач на тему «Сложение и вычитание десятичных дробей» я'),
    createData('03.09.2021', 9, 'Натуральные числа', 'Позиционная система счисления'),
    createData('07.09.2021', 9, 'Сложение и вычитание натуральных чисел', 'Решение задач на тему «Сложение и вычитание десятичных дробей» '),
    createData('03.09.2021', 9, 'Натуральные числа', 'Позиционная система счисления'),
    createData('03.09.2021', 9, 'Натуральные числа', 'Решение задач на тему «Сложение и вычитание десятичных дробей» '),
    createData('06.09.2021', 9, 'Натуральные числа', 'Позиционная система счисления'),
    createData('03.09.2021', 9, 'Сложение и вычитание натуральных чисел', 'Позиционная система счисления'),
    createData('05.09.2021', 9, 'Натуральные числа', 'Позиционная система счисления'),
    createData('03.09.2021', 9, 'Натуральные числа', 'Позиционная система счисления'),
    createData('03.09.2021', 9, 'Натуральные числа', 'Решение задач на тему «Сложение и вычитание десятичных дробей» '),
  ];  
/* Tables Coding end */

const Pilans = () => {
    /* tables coding start */
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    /* tables coding end */
    /* tabs coding start */
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [values, setValues] = React.useState(0);

    const handleChanges = (event, newValue) => {
        setValues(newValue);
    };
    /* tabs coding end */

     /* Data Coding Start */
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  const [valueData, setValueData] = React.useState(initialValue);
  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };
  /* Data Coding End */

   /* Modal Coding start */
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
 
   const [age, setAge] = React.useState('');
 
   const handleSelectChange = (event) => {
     setAge(event.target.value);
   };
   /* Modal Coding end */
    return (
        <>
          <section className="pilans">
              <div className="container">
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Годовой тематический план" {...a11yProps(0)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                <div className="stuff-btn-box">
                    <Button onClick={handleOpen} className='stuff-btn' variant="contained">Добавить</Button>

                    {/* Modal Codes Start */}
                    <Modal className='stuff-modal' open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                           <div className="stuff-btn-modal-box">
                              <h3 className='stuff-modal-title'>Добавить тематический план</h3>
                              <button className='stuff-modal-btn' onClick={handleClose}><i class='bx bx-x'></i></button>
                           </div>
                           <Box className='stuff-margin-box' sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">Класс</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleSelectChange}
                              >
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                          <Box className='stuff-input' sx={{width: 490,maxWidth: '100%',}}>
                            <TextField fullWidth label="Тема" id="fullWidth" />
                          </Box>
                          <Box className='stuff-input' sx={{width: 490,maxWidth: '100%',}}>
                            <TextField fullWidth label="Домашнее задание" id="fullWidth" />
                          </Box>
                           <div className="stuf-datas-box">
                           <LocalizationProvider  dateAdapter={AdapterDateFns}>
                              <DatePicker 
                                value={valueData}
                                loading={isLoading}
                                onChange={(newValue) => {
                                  setValueData(newValue);
                                }}
                                onMonthChange={handleMonthChange}
                                renderInput={(params) => <TextField {...params} />}
                                renderLoading={() => <CalendarPickerSkeleton />}
                                renderDay={(day, _value, DayComponentProps) => {
                                  const isSelected = !DayComponentProps.outsideCurrentMonth && highlightedDays.indexOf(day.getDate()) > 0;

                                  return (
                                    <Badge
                                      key={day.toString()}
                                      overlap="circular"
                                    >
                                      <PickersDay {...DayComponentProps} />
                                    </Badge>
                                  );
                                }}
                              />
                            </LocalizationProvider>
                           </div>
                          <div className="stuff-data-btn-box">
                          <Button className='stuff-btn' variant="contained">Добавить</Button>
                          </div>
                        </Typography>
                      </Box>
                    </Modal>
                    {/* Modal Codes end */}
                  </div>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs value={values} onChange={handleChanges} aria-label="basic tabs example">
                        <Tab className='pilan-tabs' label="Математика" {...a11yPropss(0)} />
                        <Tab className='pilan-tabs' label="Английский" {...a11yPropss(1)} />
                        <Tab className='pilan-tabs' label="Химия" {...a11yPropss(3)} />
                        <Tab className='pilan-tabs' label="История" {...a11yPropss(4)} />
                        <Tab className='pilan-tabs' label="Биология" {...a11yPropss(5)} />
                        <Tab className='pilan-tabs' label="Литература" {...a11yPropss(6)} />
                        <Tab className='pilan-tabs' label="География" {...a11yPropss(7)} />
                        <Tab className='pilan-tabs' label="Физика" {...a11yPropss(8)} />
                      </Tabs>
                    </Box>
                    <TabPanel className='pilan-tab-panel' value={values} index={0}>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                              <TableRow>
                                {columns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rowtable
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                  return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                      {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                          <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                              ? column.format(value)
                                              : value}
                                          </TableCell>
                                        );
                                      })}
                                    </TableRow>
                                  );
                                })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 100]}
                          component="div"
                          count={rowtable.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </Paper>
                    </TabPanel>
                    <TabPanel className='pilan-tab-panel' value={values} index={1}> 
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                              <TableRow>
                                {columns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rowtable
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                  return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                      {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                          <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                              ? column.format(value)
                                              : value}
                                          </TableCell>
                                        );
                                      })}
                                    </TableRow>
                                  );
                                })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 100]}
                          component="div"
                          count={rowtable.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </Paper>
                    </TabPanel>
                    <TabPanel className='pilan-tab-panel' value={values} index={2}>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                              <TableRow>
                                {columns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rowtable
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                  return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                      {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                          <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                              ? column.format(value)
                                              : value}
                                          </TableCell>
                                        );
                                      })}
                                    </TableRow>
                                  );
                                })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 100]}
                          component="div"
                          count={rowtable.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </Paper>
                    </TabPanel>
                    <TabPanel className='pilan-tab-panel' value={values} index={3}>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                              <TableRow>
                                {columns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rowtable
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                  return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                      {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                          <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                              ? column.format(value)
                                              : value}
                                          </TableCell>
                                        );
                                      })}
                                    </TableRow>
                                  );
                                })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 100]}
                          component="div"
                          count={rowtable.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </Paper>
                    </TabPanel>
                    <TabPanel className='pilan-tab-panel' value={values} index={4}>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                              <TableRow>
                                {columns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rowtable
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                  return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                      {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                          <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                              ? column.format(value)
                                              : value}
                                          </TableCell>
                                        );
                                      })}
                                    </TableRow>
                                  );
                                })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 100]}
                          component="div"
                          count={rowtable.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </Paper>
                    </TabPanel>
                    <TabPanel className='pilan-tab-panel' value={values} index={5}>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                              <TableRow>
                                {columns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rowtable
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                  return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                      {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                          <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                              ? column.format(value)
                                              : value}
                                          </TableCell>
                                        );
                                      })}
                                    </TableRow>
                                  );
                                })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 100]}
                          component="div"
                          count={rowtable.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </Paper>
                    </TabPanel>
                    <TabPanel className='pilan-tab-panel' value={values} index={6}>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                              <TableRow>
                                {columns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rowtable
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                  return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                      {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                          <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                              ? column.format(value)
                                              : value}
                                          </TableCell>
                                        );
                                      })}
                                    </TableRow>
                                  );
                                })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 100]}
                          component="div"
                          count={rowtable.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </Paper>
                    </TabPanel>
                    <TabPanel className='pilan-tab-panel' value={values} index={7}>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                              <TableRow>
                                {columns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rowtable
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                  return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                      {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                          <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                              ? column.format(value)
                                              : value}
                                          </TableCell>
                                        );
                                      })}
                                    </TableRow>
                                  );
                                })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 100]}
                          component="div"
                          count={rowtable.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </Paper>
                    </TabPanel>
                  </Box>
                
                </TabPanel>
                </Box>
              
              </div>
            </section>  
        </>
    );
}

export default Pilans;
