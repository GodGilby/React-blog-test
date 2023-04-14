import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import style from './postform.module.css'

interface FormData {
    id: number;
    title: string;
    description: string;
    type: 'image' | 'video' | '';
    link: string;
    edit?: boolean;
}

const PostForm = () => {

    const location = useLocation<FormData>();
    const [formData, setFormData] = useState<FormData>({
        id: 0,
        title: '',
        description: '',
        type: '',
        link: '',
        edit: false,
    });

    useEffect(() => {
        if (location.state) {
            const { description, link, title, type, edit, id } = location.state
            setFormData({ description: description, title: title, type: type, link: link, edit: edit, id: id })
        }
    }, [location.state])


    const handleInputChange = (name: keyof FormData, value: string | keyof FormData) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let posts: FormData[] = [];
        const existingPosts = JSON.parse(localStorage.getItem('posts') || '[]');

        if (formData.edit) {
            posts = existingPosts;
            const postIndex = existingPosts.findIndex((post: FormData) => post.id === formData.id);
            console.log(postIndex, formData);
            if (postIndex !== -1) {
                posts[postIndex].title = formData.title
                posts[postIndex].link = formData.link
                posts[postIndex].description = formData.description
                posts[postIndex].type = formData.type
                posts[postIndex].id = formData.id

                localStorage.setItem('posts', JSON.stringify(posts));
                alert("Post Edited");
            }

        } else {
            formData.id = existingPosts.length + 1;
            existingPosts.push(formData);
            localStorage.setItem('posts', JSON.stringify(existingPosts));
            alert("Post Created");
        }

        setFormData({
            id: 0,
            description: '',
            title: '',
            type: '',
            link: ''
        })
    };

    return (
        <div className={style.form_container}>
            <h1>{formData.edit ? 'Edit' : 'Create'} Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    required
                    maxLength={35}
                    name="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                />
                <label htmlFor="content">Content:</label>
                <textarea
                    id="description"
                    required
                    name="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                ></textarea>

                <label>
                    Type:
                </label>
                <select required className={style.select} name="type" value={formData.type} onChange={(e) => handleInputChange('type', e.target.value)}>
                    <option value="">--Select--</option>
                    <option value="image">Image Link</option>
                    <option value="video">Youtube ID</option>
                </select>
                {formData.type === 'image' && (
                    <div className={style.select_box}>
                        <label>
                            Image Link:
                        </label>
                        <input
                            type="text"
                            name="link"
                            required
                            value={formData.link}
                            onChange={(e) => handleInputChange('link', e.target.value)}
                        />
                    </div>
                )}

                {formData.type === 'video' && (
                    <div>
                        <label>
                            Youtube ID:
                        </label>
                        <input
                            type="text"
                            name="link"
                            required
                            value={formData.link}
                            onChange={(e) => handleInputChange('link', e.target.value)}
                        />
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostForm;