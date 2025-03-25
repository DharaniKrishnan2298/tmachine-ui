import { Container } from "@mui/material";
import PythonCourseTag from "../Components/PythonCourse";
import ChapterAccordion from "../Components/Accordion";

export default function AccordionPage() {
  return (
    <Container sx={{ marginTop: 3 }}>
      <PythonCourseTag />
      <ChapterAccordion />
    </Container>
  );
}
