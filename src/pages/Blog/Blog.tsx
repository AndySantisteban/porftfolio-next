import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MarkdownPreview from '@uiw/react-markdown-preview'
import { Col, Menu, Row } from 'antd'
import { Post as IPost } from '../../models/post'
import Title from 'antd/es/typography/Title'
import { Helmet } from 'react-helmet-async'

const Post: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [content, setContent] = useState<string | null>(null)
    const [posts, setPosts] = useState<IPost[]>([])
    const [message, setMessage] = useState<string>('Cargando')
    const navigate = useNavigate()
    useEffect(() => {
        fetch('/blog/list.json')
            .then((x) => x.json())
            .then((x) => {
                setPosts(x)
            })
    }, [])
    useEffect(() => {
        const loadMarkdown = async () => {
            try {
                const response = await fetch(`/posts/${id}.md`)
                const text = await response.text()
                if (text.charAt(0) == '<') {
                    setMessage('El artìculo ha sido eliminado :(')
                    return
                }
                setContent(text)
            } catch (error) {
                setMessage('El artìculo ha sido eliminado :(')
                console.error('Error loading markdown file:', error)
            }
        }

        loadMarkdown()
    }, [id])

    return (
        <div className="post-container">
            <Helmet>
                <title>Blog</title>
                <meta name="description" content={`Andy Santisteban Post`} />
            </Helmet>
            <Row style={{ minHeight: '100%' }}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ paddingRight: '10px' }}>
                    <Title level={3}>Otros artículos</Title>
                    <Menu
                        items={posts?.map((x) => {
                            return {
                                key: x.id,
                                label: x.title,
                            }
                        })}
                        onClick={(e) => navigate('/posts/' + e.key)}
                        theme="light"
                        style={{ paddingRight: '10px' }}
                    />
                </Col>
                <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                    {content ? (
                        <MarkdownPreview
                            source={content}
                            style={{ padding: 16 }}
                            wrapperElement={{
                                'data-color-mode': 'light',
                            }}
                        />
                    ) : (
                        <p>{message}</p>
                    )}
                </Col>
            </Row>
        </div>
    )
}

export default Post
