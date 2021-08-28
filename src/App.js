import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Menu from './pages/Menu';
import Pesanan from './pages/Pesanan';
import Reservasi from './pages/Reservasi';
import Karyawan from './pages/Karyawan';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Beranda} />
          <Route path='/menu' component={Menu} />
          <Route path='/pesanan' exact component={Pesanan} />
          <Route path='/reservasi' component={Reservasi} />
          <Route path='/karyawan' component={Karyawan} />
        </Switch>
      </Router>
    </>
  );
}

export default App;