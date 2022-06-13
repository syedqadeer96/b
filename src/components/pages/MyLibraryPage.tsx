import { Container } from "@mui/material";
import React from "react";

import MyAppBar from "../organisms/AppBar/MyAppBar";
import Footer from "../molecules/Footer/Footer";
import LabTabs from "../molecules/MyTab/LabTabs";

const MyLibraryPage = () => {
  return (
    <Container>
      <MyAppBar />
      <LabTabs/>

      <Footer />
    </Container>
  );
};

export default MyLibraryPage;
