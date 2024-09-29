import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from '../pages/Index/Index'
import Layout from '../components/Layout'
import Proyects from '../pages/Proyects/Proyects'
import Contact from '../pages/Contact/Contact'
// import JwtProyect from '../components/projects/test-and-convert-types'
import Jwt from '../components/projects/jwt'
import Snake from '../components/projects/snake'
// import Blog from '../components/projects/blog'
import Notas from '../components/projects/notas'
import Experience from '../pages/Experience/Experience'
import Signape from '../components/projects/signape'
import Cultivame from '../components/projects/cultivame'
import FirstAutomation from '../components/projects/first-automation'
import Post from '../pages/Blog/Blog'
import { HelmetProvider } from 'react-helmet-async'
import HassPassword from '../components/projects/hash-password'
import FirsAutomationApp from '../components/projects/first-automation-app'
import TrackingSeller from '../components/projects/tracking-seller'
import MultiserviciosInfotec from '../components/projects/multiservicios-infotec'
import IglesiaNazareno from '../components/projects/iglesia-nazareno'

function Router() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Index />} />
                        <Route path="/proyects" element={<Proyects />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/proyects/iglesia-del-nazareno" element={<IglesiaNazareno />} />
                        <Route path="/proyects/jwtTemplate" element={<Jwt />} />
                        <Route path="/proyects/snake" element={<Snake />} />
                        {/* <Route path="/proyects/blog" element={<Blog />} /> */}
                        <Route path="/proyects/notas" element={<Notas />} />
                        <Route path="/proyects/cultivame" element={<Cultivame />} />
                        <Route path="/proyects/signape" element={<Signape />} />
                        <Route path="/proyects/first-automation-web" element={<FirstAutomation />} />
                        <Route path="/proyects/first-automation-app" element={<FirsAutomationApp />} />
                        <Route path="/proyects/tracking-seller" element={<TrackingSeller />} />
                        <Route path="/proyects/multiservicios-infotec" element={<MultiserviciosInfotec />} />
                        <Route path="/proyects/hass-password" element={<HassPassword />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/posts/:id" element={<Post />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    )
}

export default Router
