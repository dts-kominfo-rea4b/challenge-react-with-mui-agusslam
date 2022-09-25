// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider, Box } from '@mui/material';
import React from 'react';


// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <Box sx={{
            width: 600,
            height: "100%",
            backgroundColor: '#dbf6f0',                    
        }}>

            {
                data.map((contacts, index) => {
                    return (
                        <List key={index}>
                            <ListItem alignItems='flex-center'>
                                <ListItemAvatar>
                                    <Avatar alt="avatar" src={contacts.photo} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={contacts.name}
                                    secondary={
                                        <React.Fragment>
                                            {contacts.phone}<br />
                                            {contacts.email}
                                        </React.Fragment>}
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                    )
                })
            }


        </Box>
    );
};

export default Contact;
