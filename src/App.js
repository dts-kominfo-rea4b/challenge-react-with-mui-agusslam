import './App.css';
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import React, { useState } from 'react';
import { Grid } from '@mui/material';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import Contact from './components/Contact';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [daftar, setDaftar] = useState(contactsJSON)

  const handleClick = (newDaftar) => {
    setDaftar([...daftar, newDaftar])
  }

  return (
    <div className="App">
      <Header />
      <Grid
        container
        justify="center"
        sx={{
          marginTop: "50px",
        }}>
        <Grid 
        item lg={6} 
        sx={{ 
          paddingLeft:"8%"
          }}><ContactForm handleClick={handleClick} /></Grid>
        <Grid item lg={6}><Contact data={daftar} /></Grid>
      </Grid>
    </div>
  );
};

export default App;
