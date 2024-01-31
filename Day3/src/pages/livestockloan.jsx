// import { useState } from 'react';
// import '../assets/css/livestockloan.css'

// const LivestockLoan = () => {
//   const [applicantName, setApplicantName] = useState('');
//   const [livestockType, setLivestockType] = useState('');
//   const [loanAmount, setLoanAmount] = useState('');

//   const submitForm = (e) => {
//     e.preventDefault();
//     console.log('Livestock Loan Application submitted:', { applicantName, livestockType, loanAmount });
//     // You can send the form data to the backend for further processing here
//   };

//   return (
//     <div>
//       <h2>Livestock Loan Application Form</h2>
//       <form onSubmit={submitForm}>
//         <label>
//           Applicant Name:
//           <input
//             type="text"
//             value={applicantName}
//             onChange={(e) => setApplicantName(e.target.value)}
//             required
//           />
//         </label>
//         <br />

//         <label>
//           Livestock Type:
//           <input
//             type="text"
//             value={livestockType}
//             onChange={(e) => setLivestockType(e.target.value)}
//             required
//           />
//         </label>
//         <br />

//         <label>
//           Loan Amount:
//           <input
//             type="number"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(e.target.value)}
//             required
//           />
//         </label>
//         <br />

//         <button type="submit">Submit Application</button>
//       </form>
//     </div>
//   );
// };

// export default LivestockLoan;


import { useState } from 'react';
import '../assets/css/livestockloan.css';
import { useNavigate } from 'react-router-dom';

const LivestockLoan = () => {
  const [applicantName, setApplicantName] = useState('');
  const [livestockType, setLivestockType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    console.log('Livestock Loan Application submitted:', { applicantName, livestockType, loanAmount, aadharNumber, panNumber });
    // You can send the form data to the backend for further processing here
  };
  const navigate = useNavigate();

  const handleChangeLive = () => {
    navigate('/');
  };

  return (
    <div className="livestock-loan__container">
      <div className="livestock-loan__form">
        <h2>Livestock Loan Application Form</h2>
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
              Livestock Type:
              <input
                type="text"
                value={livestockType}
                onChange={(e) => setLivestockType(e.target.value)}
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
            <button type="submit" onClick={handleChangeLive}>Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LivestockLoan;
