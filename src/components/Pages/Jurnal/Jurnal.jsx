import React from 'react';
import './Jurnal.css'
import {Link} from 'react-router-dom'



/* ===LessonData start =============================== */
const stuffLessonData = [
    {lessonNumbers:'1 Классы', lessonInfo:'А, Б, В' },
    {lessonNumbers:'2 Классы', lessonInfo:'А, Б, В' },
    {lessonNumbers:'3 Классы', lessonInfo:'А, Б, В' },
    {lessonNumbers:'4 Классы', lessonInfo:'А, Б, В' },
    {lessonNumbers:'5 Классы', lessonInfo:'А, Б, В' },
    {lessonNumbers:'6 Классы', lessonInfo:'А, Б, В' },
    {lessonNumbers:'7 Классы', lessonInfo:'А, Б, В' },
    {lessonNumbers:'8 Классы', lessonInfo:'А, Б, В' },
    {lessonNumbers:'9 Классы', lessonInfo:'А, Б, В' },
  ]
  /* ===LessonData End =============================== */

const Jurnal = () => {
    return (
        <>
            <section className="jurnal">
                <div className="container">
                    <div className="palan-box">
                         <div className="palan-small-box">
                                    <div className="stuff-class-year-box">
                                <div className="stuff-select-box">
                                    <h4>Учебный год</h4>
                                    <select className='stuff-select'>
                                    <option value="year1">2021</option>
                                    <option value="year2">2020</option>
                                    <option value="year3">2019</option>
                                    <option value="year4">2018</option>
                                    <option value="year5">2017</option>
                                    <option value="year6">2016</option>
                                    </select>
                                </div>
                                <div className="stuff-class-list-box">
                                    <ul className="stuff-class-list">
                                    {stuffLessonData.map(stuffData =>(
                                            <li>
                                            <div className="stuff-postion"></div>
                                            <Link className='stuff-list-link' to='/lesson1'>
                                            <h3>{stuffData.lessonNumbers}</h3>
                                            <p>{stuffData.lessonInfo}</p>
                                            </Link>
                                            </li>
                                    ))}
                                    </ul>
                                </div>
                                </div>
                         </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Jurnal;
