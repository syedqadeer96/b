import React, { useState, useEffect } from "react";
import axios from "axios";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardProps from "../../../CardProps";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import MyCard from "../MyCard/MyCard";
import MyButton from "../../atoms/MyButton/MyButton";
interface Rp {
  state1: string;
}

const Rendercards = (props: Rp) => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8007/books").then((response) => {
      setAPIData(response.data);
    });
  }, []);

  return (
    <Grid container spacing={2} marginLeft={0}>
      {APIData.map((book: CardProps) => {
        if (props.state1 === "Finished" && book.state === "Finished") {
          return (
            <Grid item xs={12} sm={6} lg={4} key={book.id}>
              <MyCard
                id={book.id}
                image={book.image}
                title={book.title}
                author={book.author}
                reads={book.reads}
                time={book.time}
                state={book.state}
              
                bu={
                  <MyButton
                    sx={{ mb: 7, pb: 5 }}
                    onClick={() => {
                      axios.patch(`http://localhost:8007/books/${book.id}`, {
                        state: "added to lib",
                      });
                      window.location.reload();
                    }}
                  >
                    Read Again{" "}
                  </MyButton>
                }
                bo={
                  <>
                    <Box
                      sx={{
                        width: "100%",
                        height: 15,
                        backgroundColor: "#DFE8F6",
                        borderRadius: "0px 0px 8px 8px",
                        border: "1px solid #E1ECFC",
                      }}
                    />
                  </>
                }
              ></MyCard>
            </Grid>
          );
        }

        if (props.state1 === "added to lib" && book.state === "added to lib") {
          return (
            <Grid item xs={12} sm={6} lg={4} key={book.id}>
              <MyCard
                id={book.id}
                image={book.image}
                title={book.title}
                author={book.author}
                reads={book.reads}
                time={book.time}
                state={book.state}
                bu={<MyButton sx={{ mb: 7, pb: 5 }}
                onClick={() => {
                  axios.patch(`http://localhost:8007/books/${book.id}`, {
                    state: "Finished",
                  });
                  window.location.reload();
                }}>Finished</MyButton>}
                bo={
                  <>
                    <Box
                      sx={{
                        width: 95,
                        height: 15,
                        position: "absolute",
                        backgroundColor: "#E1ECFC",
                        borderRadius: "0px 0px 0px 8px",
                      }}
                    />
                    <Box
                      sx={{
                        width: "100%",
                        height: 15,
                        backgroundColor: "#F1F6F4",
                        borderRadius: "0px 0px 8px 8px",
                        border: "1px solid #E1ECFC",
                      }}
                    />
                  </>
                }
              ></MyCard>
            </Grid>
          );
        }
      })}
    </Grid>
  );
};
export default Rendercards;
