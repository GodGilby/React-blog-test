import Container from "../../components/templates/Container";
import React from 'react';
import PostForm from "../../components/organisms/PostForm";
import { useParams } from "react-router-dom";

const Blog = () => {
    const params = useParams();
    console.log(params);
    return (
        <Container>
            <PostForm />
        </Container>
    )
}
export default Blog;