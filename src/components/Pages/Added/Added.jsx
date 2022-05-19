import './Added.css'
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

const Added = () => {
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
            <section className="addeds">
                <div className="container">
                    <div className="div-box"><h4>Добавить ученика</h4> <Button   className='dobovit-btn  active-effect'> <SaveIcon className='saveicon'/> <span className='dobo-span'>Добавить</span> </Button></div>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Профиль" {...a11yProps(0)} />
                        <Tab label="Экстренные контакты" {...a11yProps(1)} />
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
                               <div className="form-box">
                                <h4 className='titles'>Контакты</h4>
                                <Box sx={{width: 400, maxWidth: '100%',}}>
                                  <TextField fullWidth label="Номер телефона" id="fullWidth" />
                                  <TextField fullWidth label="Второй номер" id="fullWidth" />
                                  <TextField fullWidth label="Email адресс" id="fullWidth" />
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
                                        <InputLabel id="demo-multiple-name-label">Класс</InputLabel>
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
                                    </Box>
                                    </div>
                                    <div className="forms-small-div1">
                                        <Box sx={{ width: 400, maxWidth: '100%',}}>
                                            <TextField  fullWidth label="Фамилия *" id="fullWidth" />
                                            <TextField fullWidth label="Дата рождения *" id="fullWidth" />
                                            <TextField  fullWidth label=" Национальность *" id="fullWidth" />
                                        </Box>
                                   </div>
                                </div>
                                <div className="adress-box">
                                    <h4>Адрес</h4>
                                    <Box sx={{width: 760,maxWidth: '100%',}}>
                                        <TextField fullWidth label="Адресс (строка1):" id="fullWidth" defaultValue="Текст адресной строки 1 с подробностями"  />
                                        <TextField fullWidth label="Адресс (строка2):" id="fullWidth" disabled defaultValue="Текст адресной строки 2 с подробностями"  />
                                    </Box>
                                </div>
                               
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                       <div className="contacti-big-box">
                            <div className="contact-box1">
                                <h4>Контакты родителей</h4>
                                <Box sx={{ width: 380, maxWidth: '100%',}}>
                                    <TextField  fullWidth label="Имя родителя" id="fullWidth" />
                                    <TextField fullWidth label="Номер телефона" id="fullWidth" />
                                    <TextField  fullWidth label=" Email адресс" id="fullWidth" />
                                </Box>
                            </div>
                            <div className="contact-box2">
                                <Box sx={{ width: 380, maxWidth: '100%',}}>
                                    <TextField  fullWidth label="Имя родителя" id="fullWidth" />
                                    <TextField fullWidth label="Номер телефона" id="fullWidth" />
                                    <TextField  fullWidth label=" Email адресс" id="fullWidth" />
                                </Box>
                            </div>
                       </div>
                       <div className="contact-box3">
                                 <h4>Экстренные  контакты</h4>
                                <Box sx={{ width: 380, maxWidth: '100%',}}>
                                    <TextField  fullWidth label="Фамилия *" id="fullWidth" />
                                    <TextField fullWidth label="Дата рождения *" id="fullWidth" />
                                </Box>
                            </div>
                    </TabPanel>
                
                </div>
            </section>
        </>
    );
}

export default Added;
