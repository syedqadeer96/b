import { Container, Grid, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardProps from "../../CardProps";

import Banner from "../molecules/Banner/Banner";

import MyAppBar from "../organisms/AppBar/MyAppBar";
import Footer from "../molecules/Footer/Footer";

import { useNavigate } from "react-router-dom";


import { Search } from "@mui/icons-material";
import MyButton from "../atoms/MyButton/MyButton";
import MyCard from "../molecules/MyCard/MyCard";

const EntrepreneurshipPage = () => {
  const navigate = useNavigate();

  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const IconText = () => {
    return (
      <Grid container>
        <Grid item>
          <Search />
        </Grid>
        <Grid item>
          <Typography variant="body2">Search by title or author</Typography>
        </Grid>
      </Grid>
    );
  };
  useEffect(() => {
    axios.get("http://localhost:8007/books").then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <Container>
      <MyAppBar />
      <Banner />

      <TextField
        label={<IconText />}
        variant="standard"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          searchItems(event.target.value)
        }
        sx={{
          marginBottom: 1.8,
          width: "30%",
          marginLeft: "2%",
          marginTop: 2,
        }}
      />

      <Typography variant="h6" component="h2" sx={{ marginTop: 3 }}>
        Trending Blinks
      </Typography>

      <Grid container spacing={2} marginLeft={0}>
        {searchInput.length > 1
          ? filteredResults.map((book: CardProps) => {
              if (book.state !== "Finished") {
                
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
                        category={book.category}
                        bu={(() => {
                          if (book.state === "added to lib") {
                            return (
                              <Stack alignItems="flex-end" marginTop={1.5}>
                                ...
                              </Stack>
                            );
                          } else {
                            return (
                              <>
                                <MyButton
                                  sx={{ mb: 7, pb: 5 }}
                                  onClick={() => {
                                    navigate("/BookDetailViewPage", {
                                      state: { id: book.id },
                                    });
                                  }}
                                >
                                  Add to lib
                                </MyButton>
                              </>
                            );
                          }
                        })()}
                      ></MyCard>
                    </Grid>
                  );
                
              }
            })
          : APIData.map((book: CardProps) => {
              if (book.state !== "Finished") {
               
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
                        category={book.category}
                        bu={(() => {
                          if (book.state === "added to lib") {
                            return (
                              <Stack alignItems="flex-end" marginTop={1.5}>
                                ...
                              </Stack>
                            );
                          } else {
                            return (
                              <>
                                <MyButton
                                  sx={{ mb: 7, pb: 5 }}
                                  onClick={() => {
                                    navigate("/BookDetailViewPage", {
                                      state: { id: book.id },
                                    });
                                  }}
                                >
                                  Add to lib
                                </MyButton>
                              </>
                            );
                          }
                        })()}
                      ></MyCard>
                    </Grid>
                  );
                
              }
            })}
      </Grid>

    
      <Footer />
    </Container>
  );
};

export default EntrepreneurshipPage;
