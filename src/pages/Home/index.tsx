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
    const existingPosts: PostCardProps[] = JSON.parse(localStorage.getItem('posts') || '[]');
    const [post, setPosts] = useState<PostCardProps[]>(existingPosts);

    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    const filterPosts = (posts: PostCardProps[], searchValue: string) => {
        return posts.filter((post: any) => post.title.toLowerCase().includes(searchValue));
    };

    useEffect(() => {
        if (query) {
            const searchValue = query.toLowerCase();
            const filteredPosts = filterPosts(existingPosts, searchValue);
            setPosts(filteredPosts);
        } else {
            setPosts(existingPosts);
        }
    }, [query]);

    return (
        <Container>
            <HomeImage />
            <PostsList posts={post} />
        </Container>
    )
}

export default Home;