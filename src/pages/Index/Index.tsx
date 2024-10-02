import { Avatar, Button, Card, Col, Divider, List, Row } from 'antd'
import Yo from '/person-with-logos.png'
import { useEffect, useState } from 'react'
import Meta from 'antd/es/card/Meta'
import { Post } from '../../models/post'
import { TbLink } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Helmet } from 'react-helmet-async'
import Title from 'antd/es/typography/Title'

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

const Recomendations: Post[] = [
    {
        id: 1,
        date: new Date(),
        title: 'Jorge Luis Calle Morales',
        subtitle: 'Buen supervisor y líder de equipo, gestionando tiempos y acciones de manera precisa, llegando a mejorar la productividad del proyecto y enseñando sobre el uso de metodologías ágiles y arquitecturas para el desarrollo de codigo, un profesional destacable',
        author: 'https://media.licdn.com/dms/image/v2/C4D03AQEflvGS_wqUEg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1654014911305?e=1733356800&v=beta&t=mmKrnIYrG56Z-AtpuyOnDtYq-Gx2xVUhMUiioFHENyA',
    },
    {
        id: 2,
        date: new Date(),
        title: 'Dante Villa Rodriguez',
        subtitle: 'Excelente profesional, dispuesto siempre a cumplir con sus tareas y brindar apoyo al equipo.',
        author: 'https://media.licdn.com/dms/image/v2/D4E35AQF-8Wv7G5Sb5Q/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1725922967027?e=1728284400&v=beta&t=LrdqYBPGLY2GjVMq-YFHhPifnZQeQIpgRZTfGuU5twQ',
    },
    {
        id: 3,
        date: new Date(),
        title: 'Yessica Milagros Huillca Lloclle',
        subtitle: 'Andy fue profesional en todo el proyecto desempeñó como desarrollador parte de la célula Tracking Seller. Puede lograr mayores exitosos en el futuro.',
        author: 'https://media.licdn.com/dms/image/v2/C4E03AQHrZDQk-xSoyg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1560899472497?e=1733356800&v=beta&t=ZvVaCf74KwrAiFJBiMS3YgSdQ7XqLCMYnNOKDLg8j4o',
    },
    {
        id: 4,
        date: new Date(),
        title: 'Samuel Sánchez Pardo',
        subtitle: 'Excelente profesional, tuve el agrado de estudiar con el en la universidad buscando siempre implementar lo mejor para los trabajos.',
        author: 'https://static-00.iconduck.com/assets.00/user-icon-512x512-r62xmy4p.png',
    },
    {
        id: 5,
        date: new Date(),
        title: 'Nicolette Isis Pacheco Contreras',
        subtitle: 'Andy es una persona con valores, que le apasiona programar al pasar con el tiempo va adquiriendo más conocimiento de las nuevas tecnologías y lenguaje de programación que aplica en sus proyectos de estudio y trabajo. Su experiencia ayuda al grupo de trabajo a realizar proyectos de calidad.',
        author: 'https://static-00.iconduck.com/assets.00/user-icon-512x512-r62xmy4p.png',
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
            <Helmet>
                <title>Andy Santisteban</title>
            </Helmet>
            <Title level={1}>Sobre mí</Title>
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
                            color="default"
                            onClick={() => {
                                window.location.href = '/Profile.pdf'
                            }}
                            variant="solid"
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
            <Title level={2}>Blog</Title>
            <Row>
                {posts?.map((x) => {
                    return (
                        <Col key={x.id} xs={24} sm={24} md={12} lg={12} xl={12} style={{ lineHeight: '1.5rem', padding: 10 }}>
                            <Card
                                hoverable
                                actions={[
                                    '',
                                    <div style={{ textAlign: 'end', paddingRight: '10px' }}>
                                        <Button onClick={() => navigate('/posts/' + x.id)} color="default" variant="solid">
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
            <Title level={2}>Videos</Title>
            <Row>
                {YoutubeUrl?.map((x) => {
                    return (
                        <Col key={x.id} xs={24} sm={24} md={8} lg={8} xl={8} style={{ lineHeight: '1.5rem', padding: 10 }}>
                            <Card hoverable cover={<ReactPlayer url={x.subtitle} width={'100%'} />}>
                                <Meta title={x.title} description={x.author} />
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <Title level={2}>Recomendaciones</Title>
            <List
                itemLayout="vertical"
                dataSource={Recomendations}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta avatar={<Avatar src={`${item.author}`} />} title={<a>{item.title}</a>} description={item.subtitle} />
                    </List.Item>
                )}
            />
            <Divider />
        </div>
    )
}

export default Index
