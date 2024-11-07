import './App.css';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouerConfig';
import Loading from './components/Loading';

function App() {
  return (
    <div>
      <PageContainer>
        <Loading />
        <Header />
        <RouterConfig />
      </PageContainer>
    </div>
  );
}

export default App;