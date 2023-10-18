import { useLoaderData } from "react-router-dom";
import Card from "../../../components/Card/Card";

const Products = () => {
    const products = useLoaderData()

    return (
        <div>
            {/* https://i.ibb.co/3RSBHfs/10.png
            https://i.ibb.co/VTcWSLc/11.png
            https://i.ibb.co/nw7vMxW/12.png
            https://i.ibb.co/Yk4j0vT/1.png
            https://i.ibb.co/ZfQz0qN/2.png
            https://i.ibb.co/C1Jbgdq/4.png
            https://i.ibb.co/mTnNDGk/5.png
            https://i.ibb.co/Wkdy8mz/6.png
            https://i.ibb.co/xsv20Mh/7.png */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/3RSBHfs/10.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/VTcWSLc/11.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/ZfQz0qN/2.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/mTnNDGk/5.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {
                products.map(product => <Card key={product._id} product={product}></Card>)
            }
        </div>
    );
};

export default Products;