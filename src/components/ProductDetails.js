import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../css/ProductDetails.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useState } from 'react';
import { setSelectedProduct } from '../redux/slices/productSlice';
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';


function ProductDetails() {
    const { id } = useParams();
    const [count, setCount] = useState(0);
    const product = useSelector((store) =>
        store.product.products.find((product) => product.id === Number(id))
    );
    const { price, image, title, description } = product
    const dispatch = useDispatch();
    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    if (!product) {
        return <p>Ürün bulunamadı</p>;
    }

    return (
        <div className='container'>
            <div className='img'>
                <img src={product.image} alt={product.title} width={300} height={500} />
            </div>
            <div>
                <h1 className='font-arial'>{product.title}</h1>
                <p className='description font-arial'>{product.description}</p>
                <h3 className='price font-arial'>{product.price} ₺</h3>
                <div className='total'>
                    <CiCircleMinus className='totalProduct' onClick={decrement} />
                    <span className='numberTotal'>{count}</span>
                    <CiCirclePlus className='totalProduct' onClick={increment} />
                </div>
                <div>
                    <button className='addBasket' onClick={addBasket}>Sepete Ekle</button>
                </div>

            </div>

        </div>
    )

}

export default ProductDetails
