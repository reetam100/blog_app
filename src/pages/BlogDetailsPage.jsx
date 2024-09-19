import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Paper } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { fetchBlogs } from "../features/blog/blogSlice";

const BlogDetailsPage = () => {
  const { blogId } = useParams(); // Get blogId from the URL
  const dispatch = useDispatch();

  // Select blog data and loading/error states from Redux store
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  // Fetch blogs if not already loaded
  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [dispatch, blogs.length]);

  // Find the blog by ID
  const blog = blogs.find((b) => b.id === blogId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Box sx={{ p: 3 }}>
      {blog ? (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            {blog.title}
          </Typography>
          <Box
            component="img"
            src={blog.coverImg}
            alt={blog.title}
            sx={{ width: "100%", height: "auto", mb: 2 }}
          />
          <ReactQuill value={blog.desc} readOnly theme="snow" />
        </Paper>
      ) : (
        <div>Blog not found.</div>
      )}
    </Box>
  );
};

export default BlogDetailsPage;
