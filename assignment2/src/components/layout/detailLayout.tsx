import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import ProductDetail from '../../pages/productDetail'

const DetailLayout = () => {
    return <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
}
export default DetailLayout