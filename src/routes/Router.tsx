import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from '../pages/Index/Index'
import Layout from '../components/Layout'
import Proyects from '../pages/Proyects/Proyects'
import Contact from '../pages/Contact/Contact'
import JwtProyect from '../components/projects/test-and-convert-types'
import Jwt from '../components/projects/jwt'
import Snake from '../components/projects/snake'
import Blog from '../components/projects/blog'
import Notas from '../components/projects/notas'
import Experience from '../pages/Experience/Experience'
import Signape from '../components/projects/signape'
import Cultivame from '../components/projects/cultivame'

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Index />} />
                        <Route path="/proyects" element={<Proyects />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/proyects/jwt" element={<JwtProyect />} />
                        <Route path="/proyects/jwtTemplate" element={<Jwt />} />
                        <Route path="/proyects/snake" element={<Snake />} />
                        <Route path="/proyects/blog" element={<Blog />} />
                        <Route path="/proyects/notas" element={<Notas />} />
                        <Route path="/proyects/cultivame" element={<Cultivame />} />
                        <Route path="/proyects/signape" element={<Signape />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
