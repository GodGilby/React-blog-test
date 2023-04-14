import React from 'react';
import Button from '../../atoms/Button';
import PostCard, { PostCardProps } from '../../molecules/PostCard';
import styles from './postlist.module.css';
import Text from '../../atoms/Text';
import { useHistory } from 'react-router-dom';

type PostsListProps = {
    posts: PostCardProps[];
};

export const PostsList = ({ posts }: PostsListProps) => {

    const history = useHistory();

    return (
        <div className={styles.postsList}>
            <Button className={styles.post_button} onClick={() => history.push('/blog')}>
                <Text type='title'>ADD POST</Text>
            </Button>
            {posts.map((post, index: number) => {
                return <PostCard key={index} title={post.title} description={post.description} link={post.link} type={post.type} id={post.id} />
            })}
        </div>
    );
};