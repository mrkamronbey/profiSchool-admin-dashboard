import './Added1.css'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FilterListIcon from '@mui/icons-material/FilterList';

/* table coding start */
function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  
  const rows = [
    createData( 'Выберите классы', 'Выберите предметы', 'Часовая нагрузка', 'Добавить еще'),
  ];
/* table coding end */

/* tabs coding start */
const Input = styled('input')({
  display: 'none',
});


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
  /* ========== Select ============ */
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const gender = [
  'Женский',
  'Мужской',
];

const claass = [
    1,2,3,4,5,6,7,8,9,10
  ];
  function getStyless(claasss, personClass, clases) {
    return {
      fontWeight:
      personClass.indexOf(claasss) === -1
          ? clases.typography.fontWeightRegular
          : clases.typography.fontWeightMedium,
    };
  }

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
/* ========================================= */
/* tabs coding end */

const Added1 = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
/* ==============Select================= */
const clases = useTheme();
  const [personClass, setPersonClass] = React.useState([]);

  const handleChangee = (event) => {
    const {
      target: { value },
    } = event;
    setPersonClass(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChanges = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
/* ====================================== */
    return (
        <>
            <section className="added1">
                <div className="container">
                <div className="div-box"><h4>Добавить сотрудника</h4> <Button   className='dobovit-btn  active-effect'> <SaveIcon className='saveicon'/> <span className='dobo-span'>Добавить</span> </Button></div>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Профиль" {...a11yProps(0)} />
                        <Tab label="Занятия" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <div className="image-big-box">
                            <div className="image-box">
                               <h4 className='titles'>Фото</h4>
                               <div className="images">
                               <label htmlFor="icon-button-file">
                                  <Input accept="image/*" id="icon-button-file" type="file" />
                                  <IconButton  className='loading-btn' color="primary" aria-label="upload picture" component="span">
                                  <i class='bx loadicon bx-cloud-upload'></i> <span> Загрузить фото</span>
                                  </IconButton>
                                </label>
                               </div>
                               <div className="form-box added1-form-box">
                                <h4 className='titles'>Контакты</h4>
                                <Box sx={{width: 400, maxWidth: '100%',}}>
                                  <TextField fullWidth label="Номер телефона" id="fullWidth" />
                                  <TextField fullWidth label="Email адресс" id="fullWidth" />
                                </Box>
                            </div>
                            <div className="adress-box">
                                    <h4>Адрес</h4>
                                    <Box sx={{width: 400,maxWidth: '100%',}}>
                                        <TextField fullWidth label="Адресс (строка1):" id="fullWidth" defaultValue="Текст адресной строки 1 с подробностями"  />
                                        <TextField fullWidth label="Адресс (строка2):" id="fullWidth" defaultValue="Текст адресной строки 2 с подробностями"  />
                                    </Box>
                                </div>
                            </div>
                            <div className="forms-box">
                                <div className="form-small-box">
                                    <div className="forms-small-div">
                                    <h4 className='titles'>Личные данные</h4>
                                    <Box sx={{ width: 360, maxWidth: '100%',}}>
                                       <TextField fullWidth label="Имя *" id="fullWidth" />
                                       <TextField fullWidth label="Отчество *" id="fullWidth" />
                                       <FormControl sx={{ m: 1, width: 300 }}>
                                        <InputLabel id="demo-multiple-name-label">Пол *</InputLabel>
                                        <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        multiple
                                        value={personName}
                                        onChange={handleChanges}
                                        input={<OutlinedInput label="Name" />}
                                        MenuProps={MenuProps}
                                        >
                                        {gender.map((name) => (
                                            <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(name, personName, theme)}
                                            >
                                            {name}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ m: 1, width: 300 }}>
                                        <InputLabel id="demo-multiple-name-label">Образование</InputLabel>
                                        <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        multiple
                                        value={personClass}
                                        onChange={handleChangee}
                                        input={<OutlinedInput label="Name" />}
                                        MenuProps={MenuProps}
                                        >
                                        {claass.map((clas) => (
                                            <MenuItem
                                            key={clas}
                                            value={clas}
                                            style={getStyless(clas, personClass, clases)}
                                            >
                                            {clas}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ m: 1, width: 300 }}>
                                        <InputLabel id="demo-multiple-name-label">Должность</InputLabel>
                                        <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        multiple
                                        value={personClass}
                                        onChange={handleChangee}
                                        input={<OutlinedInput label="Name" />}
                                        MenuProps={MenuProps}
                                        >
                                        {claass.map((clas) => (
                                            <MenuItem
                                            key={clas}
                                            value={clas}
                                            style={getStyless(clas, personClass, clases)}
                                            >
                                            {clas}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ m: 1, width: 300 }}>
                                        <InputLabel id="demo-multiple-name-label">Категория</InputLabel>
                                        <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        multiple
                                        value={personClass}
                                        onChange={handleChangee}
                                        input={<OutlinedInput label="Name" />}
                                        MenuProps={MenuProps}
                                        >
                                        {claass.map((clas) => (
                                            <MenuItem
                                            key={clas}
                                            value={clas}
                                            style={getStyless(clas, personClass, clases)}
                                            >
                                            {clas}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                    <Box sx={{ width: 400, maxWidth: '100%',}}>
                                        <TextField  fullWidth label="Классный руководитель/руководительница" id="fullWidth" />
                                </Box>
                                    </Box>
                                    </div>
                                    <div className="forms-small-div1">
                                        <Box sx={{ width: 360, maxWidth: '100%',}}>
                                            <TextField  fullWidth label="Фамилия *" id="fullWidth" />
                                            <TextField fullWidth label="Дата рождения *" id="fullWidth" />
                                            <TextField  fullWidth label=" Национальность *" id="fullWidth" />
                                            <TextField fullWidth label="Специальность" id="fullWidth" />
                                            <TextField  fullWidth label=" Стаж" id="fullWidth" />
                                        </Box>
                                        <FormControl sx={{ m: 1, width: 300 }}>
                                                <InputLabel id="demo-multiple-name-label">Занятость</InputLabel>
                                                <Select
                                                labelId="demo-multiple-name-label"
                                                id="demo-multiple-name"
                                                multiple
                                                value={personClass}
                                                onChange={handleChangee}
                                                input={<OutlinedInput label="Name" />}
                                                MenuProps={MenuProps}
                                                >
                                                {claass.map((clas) => (
                                                    <MenuItem
                                                    key={clas}
                                                    value={clas}
                                                    style={getStyless(clas, personClass, clases)}
                                                    >
                                                    {clas}
                                                    </MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>
                                   </div>
                                </div>
                               
                               
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className='added1-tabpanel' value={value} index={1}>
                    <TableContainer className='added1-table-container' component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell className='added1-tablecell'>Класс <IconButton className='filters-icons'><FilterListIcon className='filter-icons'/></IconButton></TableCell>
                                <TableCell className='added1-tablecell' align="right">Предмет <IconButton className='filters-icons'><FilterListIcon className='filter-icons'/></IconButton></TableCell>
                                <TableCell className='added1-tablecell' align="right">Нагрузка по часам <IconButton className='filters-icons'><FilterListIcon className='filter-icons'/></IconButton></TableCell>
                                <TableCell className='added1-tablecell' align="right">Действия <IconButton className='filters-icons'><FilterListIcon className='filter-icons'/></IconButton></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell className='added1-tablescell' component="th" scope="row">
                                  <select className='tables-select'>
                                    <option value="1">8А</option>
                                    <option value="2">8Б</option>
                                    <option value="3">8В</option>
                                    <option value="4">9А</option>
                                    <option value="5">9Б</option>
                                  </select>
                                </TableCell>
                                <TableCell className='added1-tablescell' align="right">
                                    <select className='tables-select'>
                                      <option value="1">Математика</option>
                                      <option value="2">Алгебра</option>
                                      <option value="3">Геометрия</option>
                                      <option value="4">Химия</option>
                                      <option value="5">Физика</option>
                                  </select>
                                </TableCell>
                                <TableCell className='added1-tablescell' align="right">
                                   <input className='tables-select' type="text" placeholder={row.fat}/>
                                </TableCell>
                                <TableCell className='added1-tablescell' align="right">
                                    <Button disabled className='dobovit-btn  active-effect'><span className='added1-dobo-span'>{row.carbs}</span> </Button>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </TabPanel>
                </div>
            </section>
        </>
    );
}

export default Added1;
