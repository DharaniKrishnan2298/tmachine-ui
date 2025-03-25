import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const chapters = [
  {
    id: 1,
    title: "Evaluate Mathematical Expressions in Python",
    topics: [
      {
        id: 1,
        title: "Merge Two Lists",
        subtopics: [
          { id: 1, title: "Using Loops" },
          { id: 2, title: "Using + Operator" },
        ],
      },
      { id: 2, title: "Alternative Methods", subtopics: [] },
    ],
  },
  {
    id: 2,
    title: "GCD and LCM of Numbers",
    topics: [
      {
        id: 1,
        title: "Finding GCD",
        subtopics: [
          { id: 1, title: "Euclidean Algorithm" },
          { id: 2, title: "Recursion Method" },
        ],
      },
      { id: 2, title: "Finding LCM Using GCD", subtopics: [] },
    ],
  },
];

const ChapterAccordion = () => {
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [expandedTopic, setExpandedTopic] = useState(null);
  const navigate = useNavigate();

  const toggleChapter = (id) => {
    setExpandedChapter(expandedChapter === id ? null : id);
    setExpandedTopic(null);
  };

  const toggleTopic = (id) => {
    setExpandedTopic(expandedTopic === id ? null : id);
  };

  return (
    <Box
      sx={{
        position: "absolute", 
        top: "60px", 
        left: "0", 
        right: "60px",
        bottom: "0", 
        overflowY: "auto", 
        background: "#F5F5F5",
        padding: "20px",
      }}
    >
     <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "8px",
          fontWeight: 600,
          fontSize: "14px",
          color: "#000",
          background: "#fff",
          borderRadius: "6px",
        }}
      >
        <Typography sx={{ width: "20%", textAlign: "center" }}>Chapter No</Typography>
        <Typography sx={{ width: "70%" }}>Chapter</Typography>
      </Box>

      {chapters.map((chapter) => (
        <Box key={chapter.id} sx={{ marginBottom: "6px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              background: "white",
              padding: "6px",
              borderRadius: "6px",
              fontSize: "14px",
              cursor: "pointer",
            }}
            onClick={() => toggleChapter(chapter.id)}
          >
            <Box
              sx={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#E0E0E0",
                borderRadius: "4px",
                padding: "4px",
                fontWeight: 500,
                marginRight: "8px",
                color: "#000",
              }}
            >
              <MenuBookIcon sx={{ fontSize: "16px", marginRight: "4px", color: "#000" }} />
              {`Chapter ${chapter.id}`}
              <IconButton size="small" sx={{ marginLeft: "4px", color: "#000" }}>
                {expandedChapter === chapter.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>

            <Typography sx={{ width: "70%", fontSize: "14px", color: "#000" }}>
              {chapter.title}
            </Typography>

            <IconButton size="small">
              <InfoOutlinedIcon fontSize="small" sx={{ color: "#000" }} />
            </IconButton>
          </Box>

         
          <Collapse in={expandedChapter === chapter.id} timeout="auto" unmountOnExit>
            <Box sx={{ padding: "6px", background: "#FFF8E1", borderRadius: "6px", marginTop: "4px" }}>
              {chapter.topics.map((topic) => (
                <Box key={topic.id} sx={{ marginBottom: "6px" }}>
                  
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background: "white",
                      padding: "6px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "13px",
                    }}
                    onClick={() => toggleTopic(topic.id)}
                  >
                    <Box
                      sx={{
                        width: "20%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#FFE0B2",
                        borderRadius: "4px",
                        padding: "4px",
                        fontWeight: 500,
                        marginRight: "8px",
                        color: "#000",
                      }}
                    >
                      <FolderOpenIcon sx={{ fontSize: "14px", marginRight: "4px", color: "#000" }} />
                      {`Topic ${topic.id}`}
                      <IconButton size="small" sx={{ marginLeft: "4px", color: "#000" }}>
                        {expandedTopic === topic.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </IconButton>
                    </Box>

                    <Typography sx={{ width: "70%", fontSize: "13px", color: "#000" }}>
                      {topic.title}
                    </Typography>

                    <IconButton size="small">
                      <InfoOutlinedIcon fontSize="small" sx={{ color: "#000" }} />
                    </IconButton>
                  </Box>

                  {/* Subtopics Dropdown */}
                  <Collapse in={expandedTopic === topic.id} timeout="auto" unmountOnExit>
                    <Box sx={{ paddingLeft: "32px", marginTop: "4px" }}>
                      {topic.subtopics.map((subtopic) => (
                        <Box
                          key={subtopic.id}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            background: "#FFF9C4",
                            padding: "8px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            border: "1px solid #FDD835",
                          }}
                          onClick={() => navigate(`/chapter/${chapter.id}/${topic.id}/${subtopic.id}`)}
                        >
                          <Typography sx={{ width: "70%", fontSize: "14px", color: "#000" }}>
                            {subtopic.title}
                          </Typography>

                          <IconButton size="small">
                            <InfoOutlinedIcon fontSize="small" sx={{ color: "#000" }} />
                          </IconButton>
                        </Box>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              ))}
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default ChapterAccordion;
