import  { useState } from 'react';
import '../assets/css/farmequipmentloan.css';
import { useNavigate } from 'react-router-dom';

const FarmEquipmentLoan = () => {
  const [applicantName, setApplicantName] = useState('');
  const [equipmentType, setEquipmentType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    console.log('Farm Equipment Loan Application submitted:', {
      applicantName,
      equipmentType,
      loanAmount,
      aadharNumber,
      panNumber,
    });
    // You can send the form data to the backend for further processing here
  };
  const navigate = useNavigate();

  const handleChangeEquip = () => {
    navigate('/');
  };

  return (
    <div className="farm-equipment-loan">
      <h2>Farm Equipment Loan Application Form</h2>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>
            Applicant Name:
            <input
              type="text"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Equipment Type:
            <input
              type="text"
              value={equipmentType}
              onChange={(e) => setEquipmentType(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Loan Amount:
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Aadhar Card Number:
            <input
              type="text"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            PAN Card Number:
            <input
              type="text"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <button type="submit"onClick={handleChangeEquip}>Submit Application</button>
        </div>
      </form>
    </div>
  );
};

export default FarmEquipmentLoan;
