// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Divider } from '@mui/material';


// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <List sx={{ width: '100%', maxWidth: 600, bgcolor: '#dbf6f0' }}>
            <ListItem sx={{paddingBottom:2}}>
                <ListItemAvatar>
                    <Avatar alt="img" src={data.photo} sx={{width:80, height:80}} />
                </ListItemAvatar>
                <ListItemText
                    sx={{paddingLeft:5}}
                    primary={data.name}
                    secondary={
                        <React.Fragment>
                            {data.phone}<br />
                            {data.email}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider component="li" variant="middle" />            
        </List>
    );
};

export default Contact;
