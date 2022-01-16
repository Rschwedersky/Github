import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div
      style={{
        margin: '30px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h2 style={{ paddingBottom: '5px', color: '#727272' }}>Home</h2>
      <Link to="contatos/123456">Acessar Contatos</Link>
    </div>
  );
};

const Contatos = () => {
  const { idExemplo } = useParams();
  const navigate = useNavigate();

  return (
    <div
      style={{
        margin: '30px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ width: '200px' }}>
        <h2 style={{ paddingBottom: '5px', color: '#727272' }}>{`Exemplo: ${idExemplo}`}</h2>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => navigate(-1)} style={{ padding: '5px', marginRight: '10px', cursor: 'pointer' }}>
            Voltar
          </button>
          <button onClick={() => navigate('/')} style={{ padding: '5px', cursor: 'pointer' }}>
            Home
          </button>
          <Link to="/"> Home</Link>
        </div>
      </div>
    </div>
  );
};

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="contatos/:idExemplo" element={<Contatos />} />
    <Route path="*" element={<p>Qualquer outra coisa</p>} />
  </Routes>
);