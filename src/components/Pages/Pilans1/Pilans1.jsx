import * as React from 'react';
import './Pilans1.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
/* tables array coding */
const tables = [
  {id: '1', name: 'Общая нагрузка в неделю', number1: '45',number2: '45', number3: '45', number4: '45', number5: '45', number6: '45', number7: '45', number8: '45', number9: '45', number10: '45',number11: '45', number12: '45', number13: '45', number14:'540'},

  {id: '2', name: 'Учебная нагрузка по учебному плану', number1: '28',number2: '28', number3: '28', number4: '32', number5: '32', number6: '34', number7: '34', number8: '34', number9: '33.5', number10: '33.5',number11: '34.5', number12: '34.5', number13: '386', number14: '13124'},

  {id: '', name: 'Изымаемые часы*', number1: '',number2: '', number3: '', number4: '1', number5: '1', number6: '1', number7: '1', number8: '1', number9: '1.5', number10: '1.5',number11: '1.5', number12: '1.5', number13: '11', number14: '374'},

  {id: '2*1', name: 'Учебная нагрузка по учебному плану', number1: '28',number2: '28', number3: '28', number4: '31', number5: '31', number6: '33', number7: '33', number8: '33', number9: '32.0', number10: '32.0',number11: '33.0', number12: '33.0', number13: '375', number14: ''},

  {id: '3', name: 'Математика', number1: '2',number2: '2', number3: '2', number4: '2', number5: '2', number6: '2', number7: '2', number8: '2', number9: '2.0', number10: '2.0',number11: '1.0', number12: '1.0', number13: '22', number14: '748'},

  {id: '4', name: 'Английский язык', number1: '3',number2: '3', number3: '3', number4: '3', number5: '3', number6: '3', number7: '3', number8: '3', number9: '3.0', number10: '3.0',number11: '3.0', number12: '3.0', number13: '36', number14: '1224'},

  {id: '5', name: 'Сайнс', number1: '2',number2: '2', number3: '2', number4: '1', number5: '1', number6: '1', number7: '1', number8: '1', number9: '1.0', number10: '1.0',number11: '1.0', number12: '1.0', number13: '15', number14: '510'},

  {id: '6', name: 'Информатика', number1: '1',number2: '1', number3: '1', number4: '1', number5: '1', number6: '1', number7: '1', number8: '1', number9: '1.0', number10: '1.0',number11: '', number12: '', number13: '10', number14: '340'},

  {id: '7', name: '', number1: '',number2: '', number3: '', number4: '', number5: '', number6: '', number7: '', number8: '', number9: '', number10: '',number11: '', number12: '', number13: '', number14: '0'},

  {id: '8', name: '', number1: '',number2: '', number3: '', number4: '', number5: '', number6: '', number7: '', number8: '', number9: '', number10: '',number11: '', number12: '', number13: '0', number14: '0'},

  {id: '', name: 'Всего допы', number1: '8',number2: '8', number3: '8', number4: '7', number5: '7', number6: '7', number7: '7', number8: '7', number9: '7.0', number10: '7.045',number11: '5.0', number12: '5.0', number13: '83', number14: '2822'},

  {id: '10', name: 'Самоподготовка', number1: '5',number2: '5', number3: '5', number4: '3', number5: '3', number6: '1', number7: '1', number8: '1', number9: '2', number10: '2',number11: '3', number12: '3', number13: '34', number14: '1156'},

  {id: '', name: 'ИТОГО', number1: '41',number2: '41', number3: '41', number4: '41', number5: '41', number6: '41', number7: '41', number8: '41', number9: '41', number10: '41.0',number11: '41.0', number12: '41.0', number13: '492', number14: '16728'},
]
console.log(tables);
/* tables array coding end */


const Pilans1 = () => {
  /* tabs coding start */
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /* tabs coding end */
    return (
        <>
            <section className="pilans1">
                <div className="container">
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="Учебный план" {...a11yProps(0)} />
                    </Tabs>
                  </Box>
                  <TabPanel className='pilans1-tabpanels' value={value} index={0}>
                  <div className="pilans1-table-box">
                    <table className='pilans1-table'>
                      <tr>
                        <th className='pilans1-th'>П/д</th>
                        <th className='pilans1-th' colspan='2'>Учебная нагрузка</th>
                        <th className='pilans1-th'>5А</th>
                        <th className='pilans1-th'>5Б</th>
                        <th className='pilans1-th'>5В</th>
                        <th className='pilans1-th'>6А</th>
                        <th className='pilans1-th'>6Б</th>
                        <th className='pilans1-th'>7А</th>
                        <th className='pilans1-th'>7Б</th>
                        <th className='pilans1-th'>7В</th>
                        <th className='pilans1-th'>8А</th>
                        <th className='pilans1-th'>8Б</th>
                        <th className='pilans1-th'>9А</th>
                        <th className='pilans1-th'>9Б</th>
                        <th className='pilans1-th'>5-9 Всего</th>
                        <th className='pilans1-th'>В год</th>
                      </tr>
                      {tables.map(table => (
                           <tr>
                            <td className='pilans1-td'>{table.id}</td>
                            <td className='pilans1-td' colspan='2'>{table.name}</td>
                            <td className='pilans1-td'>{table.number1}</td>
                            <td className='pilans1-td'>{table.number2}</td>
                            <td className='pilans1-td'>{table.number3}</td>
                            <td className='pilans1-td'>{table.number4}</td>
                            <td className='pilans1-td'>{table.number5}</td>
                            <td className='pilans1-td'>{table.number6}</td>
                            <td className='pilans1-td'>{table.number7}</td>
                            <td className='pilans1-td'>{table.number8}</td>
                            <td className='pilans1-td'>{table.number9}</td>
                            <td className='pilans1-td'>{table.number10}</td>
                            <td className='pilans1-td'>{table.number11}</td>
                            <td className='pilans1-td'>{table.number12}</td>
                            <td className='pilans1-td'>{table.number13}</td>
                            <td className='pilans1-td'>{table.number14}</td>
                         </tr>
                      ))}
                     
                    </table>
                     <p className='pilans1-p'><i class='bx pilans1-icons bx-cloud-upload'></i> <a href="#" className='pilans1-link'>Загрузить сетку часов</a></p>
                   </div>
                  </TabPanel>
                </Box>
                </div>
            </section>
        </>
    );
}

export default Pilans1;
