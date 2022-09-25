// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, {useState} from "react";
import { Box, FormControl, TextField } from '@mui/material'

const ContactForm = ({handleClick}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [param, setParam] = useState({name:'', phone:'', email:'', photo:''})
    
    return (
        <> 
        <Box
                sx={{
                    width: 500,
                    height: 320,
                    backgroundColor: '#f3f1eb',                    
                }}
            >
                <FormControl fullWidth sx={{ width: "90%", marginTop: "10px" }}>
                    <TextField
                        required
                        id="filled-required"
                        label="Name"
                        variant="filled"
                        sx={{ marginBottom: "10px" }}
                        value={param.name}
                        onChange={(e)=>{setParam({...param, name:e.target.value})}}
                    />
                    <TextField
                        required
                        id="filled-required"
                        label="Phone"
                        variant="filled"
                        sx={{ marginBottom: "10px" }}
                        value={param.phone}
                        onChange={(e)=>{setParam({...param, phone:e.target.value})}}
                    />
                    <TextField
                        required
                        id="filled-required"
                        label="Email"
                        variant="filled"
                        sx={{ marginBottom: "10px" }}
                        value={param.email}
                        onChange={(e)=>{setParam({...param, email:e.target.value})}}
                    />
                    <TextField
                        required
                        id="filled-required"
                        label="Photo URL"
                        variant="filled"
                        sx={{ marginBottom: "10px" }}
                        value={param.photo}
                        onChange={(e)=>{setParam({...param, photo:e.target.value})}}
                    />
                    <div>
                        <button 
                        onClick={()=>{
                            handleClick(param);
                            setParam("");
                            }}>ADD NEW</button>
                    </div>

                </FormControl>
            </Box>
        </>
    );
}

export default ContactForm;