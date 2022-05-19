import './RoleEdit.css'
import * as React from 'react';
import Button from '@mui/material/Button';

const switchs = [
    {name:'Добавить платеж в счет'},
    {name:'Добавить платеж в счет'},
    {name:'Добавить платеж в счет'},
    {name:'Добавить платеж в счет'},
    {name:'Добавить платеж в счет'},
    {name:'Добавить платеж в счет'},
    {name:'Добавить платеж в счет'},
    {name:'Добавить платеж в счет'}
]
const RoleEdit = () => {
    return (
        <>
            <section className="role-edit">
                <div className="container">
                    <div className="roleEdit-boxs">
                        <div className="roleEdit-small-box">
                            <div className="roleEdit-name-box">
                                <h2>Администратор</h2>
                            </div>
                            <Button className='roleEdit-btn' variant="contained" color="error" size="small">
                                Сохранить
                              </Button>
                        </div>
                        <div className="roleEdit-scheyot-box">
                            <h2>Выставление счетов</h2>
                            <ul className="roleEdit-list">
                                {switchs.map(elem =>(
                                     <li>
                                     <p>{elem.name}</p>
                                     <label class="switch">
                                        <input type="checkbox"/>
                                        <span class="slider round"></span>
                                    </label>
                                 </li>
                                ))}
                            </ul>
                        </div>

                        <div className="roleEdit-scheyot-box">
                            <h2>Управление</h2>
                            <ul className="roleEdit-list">
                                {switchs.map(elem =>(
                                     <li>
                                     <p>{elem.name}</p>
                                     <label class="switch">
                                        <input type="checkbox"/>
                                        <span class="slider round"></span>
                                    </label>
                                 </li>
                                ))}
                            </ul>
                        </div>

                        <div className="roleEdit-scheyot-box">
                            <h2>Обмен сообщениями</h2>
                            <ul className="roleEdit-list">
                                {switchs.map(elem =>(
                                     <li>
                                     <p>{elem.name}</p>
                                     <label class="switch">
                                        <input type="checkbox"/>
                                        <span class="slider round"></span>
                                    </label>
                                 </li>
                                ))}
                            </ul>
                        </div>

                        <div className="roleEdit-scheyot-box">
                            <h2>Прочее</h2>
                            <ul className="roleEdit-list">
                                {switchs.map(elem =>(
                                     <li>
                                     <p>{elem.name}</p>
                                     <label class="switch">
                                        <input type="checkbox"/>
                                        <span class="slider round"></span>
                                    </label>
                                 </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RoleEdit;
