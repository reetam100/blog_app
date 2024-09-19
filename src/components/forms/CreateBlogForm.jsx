import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { addBlog } from "../../features/blog/blogSlice";

const CreateBlogForm = () => {
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(addBlog({ title, desc, coverImg: cover }));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      maxWidth={"500px"}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill theme="snow" value={desc} onChange={setDesc} />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Cover Image URL"
        value={cover}
        onChange={(e) => setCover(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Create
      </Button>
    </Box>
  );
};

export default CreateBlogForm;
