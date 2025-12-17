
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import "./Header.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function AnchorTemporaryDrawer() {
    const [open,setOpen]=useState(false);

    return(
        <div>
            <Button onClick={()=>setOpen(true)}><MenuOutlinedIcon /></Button>
            <Drawer anchor={"right"} open={open} onClose={()=>setOpen(false)}>
                <div className="sideContainer">
                    <Link to="/" onClick={()=>setOpen(false)}><p>Home</p></Link>
                    <Link to="#" onClick={()=>setOpen(false)}><p>Compare</p></Link>
                    <Link to="#" onClick={()=>setOpen(false)}><p>Watchlist</p></Link>
                    <Link to="/dashboard" onClick={()=>setOpen(false)}><p>Dashboard</p></Link>
                </div>
            </Drawer>
        </div>
    )
}