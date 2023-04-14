import React from 'react';
import Text from '../../atoms/Text';
import Image from '../../atoms/Image'
import styles from './postcard.module.css';
import IconButton from '../../atoms/IconButton';
import { useHistory } from 'react-router-dom';

export type PostCardProps = {
    title: string;
    description: string;
    link: string;
    type: 'image' | 'video';
    id: number;
};

const PostCard: React.FC<PostCardProps> = ({
    title,
    description,
    link,
    type,
    id
}) => {
    const history = useHistory();

    return (
        <div className={styles.postCard}>
            <div>
                {type === 'image' && <Image size='medium' className={styles.image} src={link} alt={title} />}
                {type === 'video' && (
                    <iframe
                        width='100%'
                        height='300px'
                        src={`https://www.youtube.com/embed/${link}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                )}
            </div>
            <div className={styles.content}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text type='title'>
                        {title}
                    </Text>
                    <IconButton onClick={() => history.push({
                        pathname: '/blog/edit',
                        state: { title, description, type, link, edit: true, id: id }
                    })} />
                </div>
                <Text type="description">{description}</Text>
            </div>
        </div>
    );
};

export default PostCard;