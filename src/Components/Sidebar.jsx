import { Box, IconButton, Typography } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import NoteIcon from "@mui/icons-material/Note";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const chapter = { id: 1 };
  const topic = { id: 1 };
  const subtopic = { id: 1 };

  const handleRedirect = () => {
    navigate(`/chapter/${chapter.id}/${topic.id}/${subtopic.id}`);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        right: "0", 
        top: "0",
        height: "100vh", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "25px", 
        background: "#fff",
        padding: "20px 10px",
        borderLeft: "1px solid #ddd",
        boxShadow: "-2px 0 5px rgba(0,0,0,0.1)",
      }}
    >
      {[ 
        { icon: <BarChartIcon />, label: "Progress" }, 
        { icon: <TimelineIcon />, label: "Statistics" }, 
        { icon: <NoteIcon />, label: "Notes" }, 
        { icon: <StarIcon />, label: "Highlights" } 
      ].map((item, index) => (
        <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <IconButton onClick={handleRedirect} sx={{ color: "#555", "&:hover": { color: "#000" } }}>
            {item.icon}
          </IconButton>
          <Typography sx={{ fontSize: "12px", color: "#555" }}>{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
}
