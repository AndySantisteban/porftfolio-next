import { Button, Col, Row } from 'antd'
import Yo from '/person-with-logos.png'

function Index() {
    return (
        <div>
            <h1>Sobre mí</h1>
            <br />
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ lineHeight: '1.5rem' }}>
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
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
                    <img src={Yo} width={'50%'} />
                </Col>
            </Row>
        </div>
    )
}

export default Index
