import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import data from '../utils/data';
import CenterBanner from '../components/CenterBanner';
import BootstrapCarousel from "../carsol/Bootstrap";
import Boot from "../carsol/Boot";
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
    <Layout title="Home Page">
       
    <CenterBanner />
    
    <main>
        <BootstrapCarousel />
    </main>
    
    <div className="container mt-4 px-4 grid grid-cols-3 gap-4 md:grid-cols-4 lg:gid-cols-5">
    {data.products.map((product) => (
      <ProductItem product = { product} key = {product.slug} ></ProductItem>
    ))}
    
    </div>
    
    </Layout>

    
    
    </>
  )
}
