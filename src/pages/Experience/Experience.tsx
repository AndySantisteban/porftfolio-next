import { Col, Row, Timeline } from 'antd'
import Title from 'antd/es/typography/Title'
import { Helmet } from 'react-helmet-async'
import { TbClock } from 'react-icons/tb'

function Experience() {
    return (
        <div>
            <Helmet>
                <title>Experiencia Laboral</title>
            </Helmet>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ lineHeight: '1.5rem' }}>
                    <Title level={2}>Mi experiencia laboral</Title>
                    <Timeline
                        mode="left"
                        items={[
                            {
                                dot: <TbClock />,
                                children: (
                                    <div>
                                        <Title level={4}>Unified Software (Full-stack Developer)</Title>
                                        <Title level={5} type="secondary">
                                            agosto de 2022 - Present
                                        </Title>
                                    </div>
                                ),
                            },
                            {
                                children: (
                                    <div>
                                        <Title level={4}>Freelancer.com (Full-stack Developer)</Title>
                                        <Title level={5} type="secondary">
                                            febrero de 2020 - diciembre de 2023
                                        </Title>
                                        <br />
                                        <span>
                                            Encargado del desarrollo de aplicaciones web para diversas empresas dentro de las cuales pude implementar:
                                            <br /> - Arquitecturas limpias. <br />
                                            - Desarrollo de SPA. <br />- Desarrollo de Landing Pages. <br />- Manejo de proyectos y cambio de arquitecturas. <br /> - Monorepos. <br />- Microservicios.
                                        </span>
                                    </div>
                                ),
                            },
                            {
                                children: (
                                    <div>
                                        <Title level={4}>Clínica de la Piel (Project Manager & Full Stack Developer)</Title>
                                        <Title level={5} type="secondary">
                                            marzo de 2022 - octubre de 2023
                                        </Title>
                                        <br />
                                        <span>
                                            - Encargado de todas las áreas de desarrollo.
                                            <br />- Manejo del equipo de trabajo y control de actividades.
                                            <br />- Desarrollador del área frontend.
                                            <br />- Encargado del manejo de despliegues a los servidores
                                        </span>
                                    </div>
                                ),
                            },
                            {
                                children: (
                                    <div>
                                        <Title level={4}>First Automation (Web Developer & Cloud Engineer)</Title>
                                        <Title level={5} type="secondary">
                                            septiembre de 2021 - marzo de 2023
                                        </Title>
                                        <br />
                                        <span>
                                            Desarrollador de software encargado de las áreas: <br />
                                            Frontend: <br />
                                            - Desarrollo de la página oficial de https://nubeindustrial.com <br />
                                            - Desarrollo y diseño de la aplicación web de https://app.nubeindustrial.com <br />
                                            - Creación de monorepos para contener microservicios aplicando buenas practicas, reglas y optimizadores de librerías. Tecnologías usadas como React.js, Typescript, Styled-components, Vite, react-grid-layout, Apollo Client, Graphql, etc. <br />
                                            Devops & Cloud Engineer: <br />
                                            - Tecnologías usadas como Amazon web services, EC2, S3, Yarn workspaces para manejar monorepos y microservicios con Node.js con typescript, con despliegue continuo. <br />
                                            Encargado del desarrollo de aplicaciones web y móvil, con React y React Native, además de realizar la integración de un entorno cloud con S3, Cloudfront y CI/CD con CodeCommit, CodeBuild y Codepipeline, con el fin de optimizar el despliegue,
                                        </span>
                                    </div>
                                ),
                            },
                            {
                                children: (
                                    <div>
                                        <Title level={4}>MDP CONSULTING S.A.C (Full-stack Developer)</Title>
                                        <Title level={5} type="secondary">
                                            septiembre de 2022 - diciembre de 2022
                                        </Title>
                                        <br />
                                        <span>
                                            Desarrollo full-stack encargado del área principal del frontend. <br /> Frontend: <br /> - Desarrollo en equipo del producto de Tracking SelleR para el cliente de Ripley en https://appseller.ripley.com.pe/login <br />- Uso de metodologías Ágiles y planificación de proyectos con Scrum <br />- Entorno cloud con Amazon web services. <br />- Tecnologías usadas como React.js y Typescript.
                                        </span>
                                    </div>
                                ),
                            },
                        ]}
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ lineHeight: '1.5rem' }}>
                    <Title level={2}>Mis trabajos</Title>
                    <Timeline
                        mode="left"
                        items={[
                            {
                                children: (
                                    <div>
                                        <Title level={4}>USS - Universidad Señor de Sipán</Title>
                                        <Title level={5} type="secondary">
                                            Signape
                                        </Title>
                                        Este software transforma la comunicación al integrar la detección e interpretación de lenguaje de señas, fomentando un entorno inclusivo.
                                        <br />
                                        <br />
                                        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FUssipanImagen%2Fvideos%2F1006514997066493%2F&show_text=false&width=560&t=0" width="90%" height="314" scrolling="no" frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                    </div>
                                ),
                            },
                            {
                                children: (
                                    <div>
                                        <Title level={4}>USS - Universidad Señor de Sipán</Title>
                                        <Title level={5} type="secondary">
                                            Escuela de Ingeniería de Sistemas USS ejecuta proyecto de responsabilidad social
                                        </Title>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <img width={'45%'} src="https://media.licdn.com/dms/image/C4D2DAQHQgMyo_2h_Xg/profile-treasury-document-images_800/1/1658418178174?e=1728518400&v=beta&t=-aaUZIDJ82q6SNBdt47CNht8TuuPJgPG0CSErsflXI8" alt="" />
                                            <img width={'45%'} src="https://www.uss.edu.pe/uss/document/FileInv/salaprensa/Escuela-de-Ingenier%C3%ADa-de-Sistemas-USS-ejecuta-proyecto-de-responsabilidad-social.jpg" />
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                children: (
                                    <div>
                                        <Title level={4}>Code Fresh</Title>
                                        <Title level={5} type="secondary">
                                            GitOps
                                        </Title>
                                        <img width={'90%'} src="https://media.licdn.com/dms/image/C4E1FAQEJxtvRevIuHA/feedshare-document-images_480/1/1672622273222?e=1728518400&v=beta&t=sN5Vmrt8dBCk2ZADI2VagK8lDfUFWrvUb93Kor-539E" alt="" />
                                    </div>
                                ),
                            },
                        ]}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Experience
