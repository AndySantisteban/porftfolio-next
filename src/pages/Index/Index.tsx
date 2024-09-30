import { Button, Card, Col, Divider, Row } from 'antd'
import Yo from '/person-with-logos.png'
import { useEffect, useState } from 'react'
import Meta from 'antd/es/card/Meta'
import { Post } from '../../models/post'
import { TbLink } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'

const YoutubeUrl: Post[] = [
    {
        id: 1,
        date: new Date(),
        title: 'Autentificación con React Native y Rest API con Golang, JWT, Docker y MySQL',
        subtitle: 'https://www.youtube.com/watch?v=gYvHu6ngvAM',
        author: 'Andy Santisteban',
    },
    {
        id: 2,
        date: new Date(),
        title: 'Calculador de edad con flutter',
        subtitle: 'https://www.youtube.com/watch?v=cqed0QybadY',
        author: 'Andy Santisteban',
    },
    {
        id: 3,
        date: new Date(),
        title: 'Calculador de tiempo y fecha con Date Pickers y React-native',
        subtitle: 'https://www.youtube.com/watch?v=CSdKTBVn-nU',
        author: 'Andy Santisteban',
    },
    {
        id: 4,
        date: new Date(),
        title: 'Calculadora en Flutter',
        subtitle: 'https://www.youtube.com/watch?v=yJ7NLardkuI',
        author: 'Andy Santisteban',
    },
    {
        id: 5,
        date: new Date(),
        title: 'CheckBox Spinner Activity y Product Item Activity',
        subtitle: 'https://www.youtube.com/watch?v=BajmgVQWA4g',
        author: 'Andy Santisteban',
    },
    {
        id: 6,
        date: new Date(),
        title: 'Calculadora de precios',
        subtitle: 'https://www.youtube.com/watch?v=0ftj2KDrx28',
        author: 'Andy Santisteban',
    },
]
function Index() {
    const [posts, setPosts] = useState<Post[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('/blog/list.json')
            .then((x) => x.json())
            .then((x) => {
                setPosts(x)
            })
    }, [])
    return (
        <div>
            <h1>Sobre mí</h1>
            <br />
            <Row>
                <Col xs={24} sm={24} md={20} lg={20} xl={20} style={{ lineHeight: '1.5rem' }}>
                    ¡Hola! Soy Andy Santisteban, un desarrollador especializado en <b>Golang</b> , con más de 4 años de experiencia en la creación de soluciones tecnológicas avanzadas. Aunque mi foco principal es Golang, tengo un amplio stack que incluye lenguajes como <b> TypeScript</b>, <b>Python</b>, <b>C#</b> y <b>JavaScript</b>, lo que me permite abordar y resolver problemas complejos de manera eficiente, independientemente del entorno o la tecnología.
                    <br />
                    Mi capacidad de adaptación y resolución de problemas ha sido fundamental en los proyectos en los que he trabajado.
                    <br />
                    Si estás buscando a alguien que pueda liderar y ejecutar proyectos técnicos de alto nivel, me encantaría unirme a tu equipo. ¡Hablemos!
                    <div
                        style={{
                            marginTop: '20px',
                        }}
                    >
                        <Button
                            type="default"
                            onClick={() => {
                                window.location.href = '/Profile.pdf'
                            }}
                        >
                            Descargar CV
                        </Button>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={4} lg={4} xl={4} style={{ textAlign: 'center' }}>
                    <img src={Yo} width={'50%'} />
                </Col>
            </Row>
            <Divider />
            <h2>Blog</h2>
            <Row>
                {posts?.map((x) => {
                    return (
                        <Col key={x.id} xs={24} sm={24} md={12} lg={12} xl={12} style={{ lineHeight: '1.5rem', padding: 10 }}>
                            <Card
                                hoverable
                                actions={[
                                    '',
                                    <div style={{ textAlign: 'end', paddingRight: '10px' }}>
                                        <Button onClick={() => navigate('/posts/' + x.id)}>
                                            <TbLink /> Ver post
                                        </Button>
                                    </div>,
                                ]}
                            >
                                <Meta title={x.title} description={x.subtitle} />
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <Divider />
            <h2>Videos</h2>
            <Row>
                {YoutubeUrl?.map((x) => {
                    return (
                        <Col key={x.id} xs={24} sm={24} md={8} lg={8} xl={8} style={{ lineHeight: '1.5rem', padding: 10 }}>
                            <Card hoverable cover={<ReactPlayer url={x.subtitle} width={'100%'} height={'120%'} />}>
                                <Meta title={x.title} description={x.author} />
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Index
