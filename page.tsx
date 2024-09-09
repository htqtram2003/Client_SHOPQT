
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navbar from "@/components/Navbar";
import Products from "@/components/ProductList";
import HotProducts from "@/components/hot-products";
import TwoImagesRow from "@/components/TwoImagesRow";
import Slideshow from '@/components/slideshow';
import SalePage from '@/components/SaleProductList';
import Users from '@/app/User';
import ProductPage from '@/components/ProductPage';
export default function Home(){
  const username = typeof window !== 'undefined' ? localStorage.getItem('username') : '';
  return (
    <>
    <Header />
    <Navbar />
    <main className="p-8">
                <h1 className="text-2xl font-bold">Welcome {username ? username : 'Guest'}</h1>
            </main>
    <Slideshow />
    <Products />
    <HotProducts />
    <TwoImagesRow />
    <SalePage />
    <Users />
    <ProductPage/>
    <Footer />
  </>
  );
}
