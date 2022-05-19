import './Homework.css'
import attachIcon from '../../../img/attach-2.png'


import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import GroupsIcon from '@mui/icons-material/Groups';
import Link from '@mui/material/Link';

const homeworkObj = [
    {home1:'Домашняя работа', home2:'Выполнить упражнения с 1 по 5 на странице 8', home3:' 04.10.2021 09:00 | На уроке', home4:'Complete Exercises 1 - 5'},
    {home1:'Классная работа', home2:'Выполнить упражнения с 1 по 5 на странице 8', home3:' 04.10.2021 09:00 | На уроке', home4:'Complete Exercises 1 - 5'},
    {home1:'Тест', home2:'Выполнить упражнения с 1 по 5 на странице 8', home3:' 04.10.2021 09:00 | На уроке', home4:'Complete Exercises 1 - 5'}
]

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

const Homework = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <>
            <section className="homework">
                <div className="container">
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Домашние задания" {...a11yProps(0)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                           <div className="homework-big-box">
                               <ul className="homework-list">
                                   {homeworkObj.map(home => (
                                        <li>
                                        <div className="homework-heading-box">
                                                <div className="homework-title-box">
                                                    <div className="homeworkIcon-box">
                                                        <HomeWorkIcon className='hwork-icon'/>
                                                    </div>
                                                    <div className="homework-text">
                                                    <h4>{home.home1}</h4>
                                                    <p>{home.home4}</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <p className='homework-flex-text homework-bold-text'><ErrorOutlineIcon className='homework-color-icon'/> <span>{home.home2}</span></p>
                                                <p className='homework-flex-text'><WatchLaterIcon  className='homework-color-icon'/><span className="homework-bold-text homework-margin">Срок сдачи:  </span>{home.home3}</p>
                                                <Link href='#' className='homework-flex-text homework-link-text'> <img className='homework-color-icon' src={attachIcon} alt="" />  <span>Grammar May Might.pdf</span></Link>
                                        </div>
                                        <div className="homework-icon-box">
                                            <div className="home-group-icon">
                                                <GroupsIcon className='homework-group-icon'/>
                                            </div>
                                             <p>Все <br /> Ученики</p>
                                        </div>
                                   </li>
                                   ))}
                               </ul>
                           </div>
                        </TabPanel>
                    </Box>
                </div>
            </section>
        </>
    );
}

export default Homework;
