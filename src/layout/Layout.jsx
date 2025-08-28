import { Outlet } from 'react-router-dom';
import { Header } from '../component/Header';
import { Footer } from '../component/Footer';


export function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}
