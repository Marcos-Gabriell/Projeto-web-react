import { FaMapMarker } from 'react-icons/fa';
import './End.css';

const Lojas = () => {
  return (
    <div className="lojas-container">
      <div className="loja">
        <div className="loja-content">
          <FaMapMarker size={40} color="white" />
          <div>
            <span><br/> Curitiba </span>
            <p><br/>
              Av. República Argentina, 3021
              <br />
              Cj 21 Portão Curitiba – PR
              <br />
              CEP 80.610-260
            </p>
          </div>
        </div>
      </div>

      <div className="loja">
        <div className="loja-content">
          <FaMapMarker size={40} color="white" />
          <div>
            <span><br/> Campinas</span>
            <p><br/>
              Av. José Rocha Bonfim, 214
              <br />
              Sl 129 Santa Genebra Campinas – SP
              <br />
              CEP 13.080-650
            </p>
          </div>
        </div>
      </div>

      <div className="loja">
        <div className="loja-content">
          <FaMapMarker size={40} color="white" />
          <div>
            <span><br/>Manaus</span>
            <p><br/>
              Rua Rio Javari, 361
              <br />
              CP 1604 Nossa Senhora Manaus – AM
              <br />
              CEP 69.053-110
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lojas;
