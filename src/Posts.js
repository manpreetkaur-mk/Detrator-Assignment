import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";

export default function Posts() {
  const [posts, setposts] = useState([]);

  const get_posts = async () => {
    await axios
      .get("https://dummyjson.com/posts")
      .then((response) => {
        setposts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    get_posts(); // eslint-disable-next-line
  }, []);

  return (
    <>
      {posts?.map((data, index) => {
        return (
          <div key={index} style={body}>
            <Card sx={card}>
              <Typography sx={card_tittle}>{data.title}</Typography>
              <CardContent>{data.body}</CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
}

const body = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#F5EBEB",
};

const card = {
  margin: 2,
  width: "60%",
  textAlign: "center",
  backgroundColor: "#D5B4B4",
};

const card_tittle = {
  margin: 1,
  fontWeight: "bold",
  fontSize: 18,
  marginTop: 2,
};
