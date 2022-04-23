import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FaGlasses } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export default function OnlineFeed() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ padding: "2rem" }}>
          <FaGlasses size={30} color="#87204D" />
          <p>My Posts</p>
        </div>
        <div style={{ padding: "2rem" }}>
          <MdPostAdd size={30} color="#87204D" />
          <p>Create New Post</p>
        </div>
      </div>
      <div className="grid">
        <Grid container>
          <Grid
            item
            md={4}
            sm={5}
            sx={{
              mt: "0.1%",
              mb: "3%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ede8ea",
                minHeight: "auto",
                width: 300,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  gap: "1rem",
                  margin: "1rem",
                }}
              >
                <FaTrashAlt color={"#87204d"} />
                <FaPen color={"#87204d"} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem",
                  overflow: "hidden",
                  overflowY: "scroll",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontSize: "larger",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "#87204d",
                  }}
                >
                  Harry Potter and the Goblet of Fire by J.K. Rowling
                </p>

                <p>
                  Description <br></br>
                  This is the fourth novel in the Harry Potter series. It
                  follows Harry Potter, a wizard in his fourth year at Hogwarts
                  School of Witchcraft and Wizardry, and the mystery surrounding
                  the entry of Harry's name into the Triwizard Tournament, in
                  which he is forced to compete.
                </p>
                <p>
                  User's review
                  <br></br>
                  The book is imaginative, funny, frightening and, of course,
                  magical! What makes them so successful is that they combine
                  action, fantasy and friendship.
                </p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
