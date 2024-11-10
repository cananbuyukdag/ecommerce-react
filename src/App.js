import './App.css';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouerConfig';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateBasket, setDrawer } from './redux/slices/basketSlice';
import { useEffect } from 'react';


function App() {
  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateBasket());
  }, [])
  return (
    <div>
      <PageContainer>
        <Loading />
        <Header />
        <RouterConfig />
        <Drawer anchor='right' open={drawer} onClose={() => dispatch(setDrawer())}>
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{ padding: '20px' }}>
                    <img style={{ marginRight: '10px' }} src={product.image} width={50} height={50} />
                    <p style={{ width: '350px', marginRight: '10px' }}>{product.title}({product.count})</p>
                    <p style={{ fontWeight: 'bold', marginRight: '10px', width: '60px' }}>{product.price}₺</p>
                    <button style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'rgb(185,76,76)', border: 'none', color: '#fff', width: '50px' }}>Sil</button>
                  </div>
                </div>
              )
            })
          }
          <div>
            <p>Toplam Tutar: {totalAmount}</p>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
