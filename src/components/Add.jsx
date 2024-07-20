import { addToDo } from "../features/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function Add() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    dispatch(addToDo(input));
    setInput("");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          width: "100vw",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            my: "50px",
            fontSize: "35px",
            color: "purple",
          }}
        >
          React toolkit
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            placeholder="Add todos"
            sx={{
              border: 1,
              display: "flex",
              width: " 300px",
              mb: "25px",
            }}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></TextField>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={handleSubmit}>
          Add
        </Button>
      </Box>
    </>
  );
}

export default Add;
