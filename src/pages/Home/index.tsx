import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PostCardProps } from '../../components/molecules/PostCard';
import { PostsList } from '../../components/molecules/PostList';
import HomeImage from '../../components/organisms/HomeImage';
import Container from '../../components/templates/Container';

interface LocationState {
    data: string
}
const Home = () => {
    const location = useLocation<LocationState>();
    const [post, setPost] = useState<PostCardProps[]>([]);

    const existingPosts: PostCardProps[] = JSON.parse(localStorage.getItem('posts') || '[]');
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');


    useEffect(() => {
        if (query) {
            const searchValue = query;
            const filteredPosts = existingPosts.filter((post) => post.title.toLocaleLowerCase().includes(searchValue))
            setPost(filteredPosts);
        } else {
            setPost(existingPosts);
        }

    }, [query])

    return (
        <Container>
            <HomeImage />
            <PostsList posts={post} />
        </Container>
    )
}

export default Home;