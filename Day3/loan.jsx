import '../assets/css/loan.css'
import CustomNavbar from '../components/CustomNavbar';
import { useNavigate } from 'react-router-dom';

const Loan = () => {
  const Navigate=new useNavigate();
  const handleChangeLivestock=()=>{
    Navigate('/livestock');
  }
  const handleChangeFarm=()=>{
    Navigate('/farm')
  }
  const handleChangeLand=()=>{
    Navigate('/land')
  }
  const handleChangeHorti=()=>{
    Navigate('/horti')
  }
  return (
    <div className='loan__wrapper'>
      <header>
            <CustomNavbar/>
      </header>
    <div className='cd'>
    <div className="loan-card" onClick={handleChangeLivestock}>
        <h3>Livestock Loans</h3>
        <p>
          <strong>Purpose:</strong> Designed for acquiring, breeding, and maintaining livestock.
        </p>
        <p>
          <strong>Use:</strong> Used for purchasing animals, feed, veterinary care, and related expenses.
        </p>
        <p>
          <strong>Repayment:</strong> Structured based on the breeding cycle or as agreed upon.
        </p>
      </div>

      
      <div className="loan-card" onClick={handleChangeFarm}>
        <h3>Farm Equipment Loans</h3>
        <p>
          <strong>Purpose:</strong> To finance the purchase of agricultural machinery and equipment.
        </p>
        <p>
          <strong>Use:</strong> Used for buying tractors, plows, harvesters, and other farm machinery.
        </p>
        <p>
          <strong>Repayment:</strong> May have seasonal or customized repayment plans.
        </p>
      </div>

      
      <div className="loan-card" onClick={handleChangeLand}>
        <h3>Land Purchase Loans</h3>
        <p>
          <strong>Purpose:</strong> To assist in buying agricultural land.
        </p>
        <p>
          <strong>Use:</strong> Used for acquiring additional farmland for expansion.
        </p>
        <p>
          <strong>Repayment:</strong> Structured based on the terms agreed upon, often a long-term loan.
        </p>
      </div>

      <div className="loan-card" onClick={handleChangeHorti}>
        <h3>Agribusiness Loans</h3>
        <p>
          <strong>Purpose:</strong> Supports agricultural business ventures, including processing, packaging, and marketing.
        </p>
        <p>
          <strong>Use:</strong> Used for setting up or expanding agribusiness activities.
        </p>
        <p>
          <strong>Repayment:</strong> May vary based on the nature of the business.
        </p>
      </div>
    </div>
    <br/>
    </div>
  );
};

export default Loan;
