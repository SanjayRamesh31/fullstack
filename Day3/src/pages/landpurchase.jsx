// import { useState } from 'react';

// const LandPurchaseLoan = () => {
//   const [applicantName, setApplicantName] = useState('');
//   const [landLocation, setLandLocation] = useState('');
//   const [loanAmount, setLoanAmount] = useState('');

//   const submitForm = (e) => {
//     e.preventDefault();
//     console.log('Land Purchase Loan Application submitted:', { applicantName, landLocation, loanAmount });
//     // You can send the form data to the backend for further processing here
//   };

//   return (
//     <div>
//       <h2>Land Purchase Loan Application Form</h2>
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
//           Land Location:
//           <input
//             type="text"
//             value={landLocation}
//             onChange={(e) => setLandLocation(e.target.value)}
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

// export default LandPurchaseLoan;

import { useState } from 'react';
import '../assets/css/landpurchase.css';

const LandPurchaseLoan = () => {
  const [applicantName, setApplicantName] = useState('');
  const [landLocation, setLandLocation] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    console.log('Land Purchase Loan Application submitted:', { applicantName, landLocation, loanAmount, aadharNumber, panNumber });
    // You can send the form data to the backend for further processing here
  };

  return (
    <div className="land-purchase-loan__container">
      <div className="land-purchase-loan__form">
        <h2>Land Purchase Loan Application Form</h2>
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
              Land Location:
              <input
                type="text"
                value={landLocation}
                onChange={(e) => setLandLocation(e.target.value)}
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
            <button type="submit">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LandPurchaseLoan;
