//Importar el navegador y las rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Importar las páginas
import { Home } from "./pages/home";
import { AboutMe } from './pages/about-me';
import { Service } from './pages/services';
//Importar el layout
import { MainLayout } from './MainLayout';
//Importar Path 
import { PATHS } from './libs/types';

export const App = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path={PATHS.HOME} element={<Home />} />
                    <Route path={PATHS.ABOUT_ME} element={<AboutMe />} />
                    <Route path={PATHS.SERVICES} element={<Service />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}