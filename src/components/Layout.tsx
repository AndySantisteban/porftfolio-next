import { Outlet, useNavigate } from 'react-router-dom'
import { Flex, Layout as AntdLayout, Menu } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import type { MenuProps } from 'antd'
import { TbArrowFork, TbCode, TbHome, TbMail } from 'react-icons/tb'
import { useMediaQuery } from '../hooks/useMediaQuery'
type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
    {
        key: '',
        label: 'Inicio',
        icon: <TbHome />,
    },
    {
        key: 'experience',
        label: 'Experiencia Laboral',
        icon: <TbArrowFork />,
    },
    {
        key: 'proyects',
        label: 'Proyectos',
        icon: <TbCode />,
        children: [
            {
                key: 'signape',
                label: 'Signape  (Deep Learning)',
            },
            {
                key: 'cultivame',
                label: 'Cultivame (Deep Learning)',
            },
            {
                key: 'snake',
                label: 'Snake Filter',
            },
            {
                key: 'blog',
                label: 'Blog',
            },
            {
                key: 'jwt',
                label: 'Test-and-convert-types',
            },
            {
                key: 'jwtTemplate',
                label: 'Json Web Token Template',
            },
            {
                key: 'notas',
                label: 'Notas con Firebase',
            },
        ],
    },
    {
        key: 'contact',
        label: 'Contacto',
        icon: <TbMail />,
    },
]
function Layout() {
    const navigate = useNavigate()
    const onNavigate: MenuProps['onClick'] = (e) => {
        const route = e.keyPath.reverse().join('/')
        navigate(route)
    }
    const matches = useMediaQuery('(min-width: 768px)')

    return (
        <Flex
            gap="middle"
            wrap
            style={{
                minHeight: '100vh',
            }}
        >
            <AntdLayout>
                {matches && <Menu mode="horizontal" defaultSelectedKeys={['index']} items={items} style={{ minWidth: '100%', backgroundColor: '#f9fafb', borderColor: 'transparent' }} onClick={onNavigate} />}
                <AntdLayout>
                    {!matches && (
                        <Sider
                            width="20%"
                            style={{
                                backgroundColor: '#f9fafb',
                                borderColor: 'transparent',
                                paddingTop: '40px',
                            }}
                        >
                            <Menu mode="vertical" defaultSelectedKeys={['index']} items={items} style={{ flex: 1, minWidth: 0, minHeight: '100%', backgroundColor: '#f9fafb', borderColor: 'transparent' }} onClick={onNavigate} />
                        </Sider>
                    )}
                    <Content
                        style={{
                            background: 'white',
                            minHeight: '100%',
                            padding: 24,
                        }}
                    >
                        <Outlet />
                    </Content>
                </AntdLayout>
                <Footer
                    style={{
                        backgroundColor: '#f9fafb',
                    }}
                >
                    © 2024 Andy Santisteban
                    <div>
                        <a href="https://www.facebook.com/AndySantisteban1607/" className="container__networks__item" target="_blank">
                            <img src="https://img.icons8.com/color/25/000000/facebook.png" alt={'...'} />
                        </a>
                        <a href="https://wa.link/5ayf76" className="container__networks__item" target="_blank">
                            <img src="https://img.icons8.com/office/25/000000/whatsapp--v1.png" alt={'...'} />
                        </a>
                        <a href="https://www.linkedin.com/in/andy-santisteban/" className="container__networks__item" target="_blank">
                            <img src="https://img.icons8.com/fluency/25/000000/linkedin.png" alt={'...'} />
                        </a>
                    </div>
                </Footer>
            </AntdLayout>
        </Flex>
    )
}

export default Layout
