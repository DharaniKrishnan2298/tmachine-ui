import { AppBar, Toolbar, IconButton, Box, Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NightlightIcon from "@mui/icons-material/Nightlight";
import FolderIcon from "@mui/icons-material/Folder";
import PhoneIcon from "@mui/icons-material/Phone";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";


import logo from "../Images/tmachinelogo.png"; 

export default function Navbar() {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        width: "100vw", 
        left: 0,
        background: "#fff", 
        boxShadow: "none", 
        borderBottom: "1px solid #ddd",
        padding: "5px 0",
        paddingRight: "50px"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center"
        }}>
          
          
          <img 
            src={logo} 
            alt="Tmachine.ai" 
            style={{ width: "140px", height: "auto", objectFit: "contain" }}
          />

         
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton sx={{ color: "#555", "&:hover": { color: "#000" } }}>
              <NightlightIcon />
            </IconButton>
            <IconButton sx={{ color: "#555", "&:hover": { color: "#000" } }}>
              <HomeIcon />
            </IconButton>
            <IconButton sx={{ color: "#555", "&:hover": { color: "#000" } }}>
              <FolderIcon />
            </IconButton>
            <IconButton sx={{ color: "#555", "&:hover": { color: "#000" } }}>
              <PhoneIcon />
            </IconButton>
            <IconButton sx={{ color: "red", "&:hover": { color: "#b30000" } }}>
              <PowerSettingsNewIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
