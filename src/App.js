import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Group from './components/Pages/Group/Group';
import Added from './components/Pages/Added/Added';
import Edit from './components/Pages/Edit/Edit';
import Homework from './components/Pages/Homework/Homework'
import Stuff from './components/Pages/Stuff/Stuff';
import StuffEdit from './components/Pages/StuffEdit/StuffEdit';
import Lessons from './components/Pages/Lessons/Lessons';
import Jurnal from './components/Pages/Jurnal/Jurnal';
import Lesson1 from './components/Pages/Lesson1/Lesson1';
import Pilans from './components/Pages/Pilans/Pilans'
import Added1 from './components/Pages/Added1/Added1'
import Pilans1 from './components/Pages/Pilans1/Pilans1'
import Role from './components/Pages/Role/Role';
import RoleEdit from './components/Pages/RoleEdit/RoleEdit';
import {Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/group' >
          <Group />
        </Route>
        <Route path='/added' >
          <Added />
        </Route>
        <Route path='/edit' >
          <Edit />
        </Route>
        <Route path='/homework' >
          <Homework />
        </Route>
        <Route path='/stuff' >
          <Stuff />
        </Route>
        <Route path='/stuffEdit' >
          <StuffEdit />
        </Route>
        <Route path='/lessons' >
          <Lessons />
        </Route>
        <Route path='/jurnal' >
          <Jurnal />
        </Route>
        <Route path='/lesson1' >
          <Lesson1 />
        </Route>
        <Route path='/pilans' >
          <Pilans />
        </Route>
        <Route path='/added1' >
          <Added1 />
        </Route>
        <Route path='/pilans1' >
          <Pilans1 />
        </Route>
        <Route path='/role'>
          <Role />
        </Route>
        <Route path='/roleedit'>
          <RoleEdit />
        </Route>
      </Switch>
      
    </>
  );
}

export default App;
