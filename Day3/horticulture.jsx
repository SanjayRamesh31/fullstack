// import { useState } from 'react';

// const HorticultureLoan = () => {
//   const [applicantName, setApplicantName] = useState('');
//   const [horticultureType, setHorticultureType] = useState('');
//   const [loanAmount, setLoanAmount] = useState('');

//   const submitForm = (e) => {
//     e.preventDefault();
//     console.log('Horticulture Loan Application submitted:', { applicantName, horticultureType, loanAmount });
//     // You can send the form data to the backend for further processing here
//   };

//   return (
//     <div>
//       <h2>Horticulture Loan Application Form</h2>
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
//           Horticulture Type:
//           <input
//             type="text"
//             value={horticultureType}
//             onChange={(e) => setHorticultureType(e.target.value)}
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

// export default HorticultureLoan;


// import { useState } from 'react';
// import '../assets/css/horticulture.css'

// const HorticultureLoan = () => {
//   const [applicantName, setApplicantName] = useState('');
//   const [horticultureType, setHorticultureType] = useState('');
//   const [loanAmount, setLoanAmount] = useState('');

//   const submitForm = (e) => {
//     e.preventDefault();
//     console.log('Horticulture Loan Application submitted:', { applicantName, horticultureType, loanAmount });
//     // You can send the form data to the backend for further processing here
//   };

//   return (
//     <div className="loan__container">
//       <div className="loan__form">
//         <h2>Horticulture Loan Application Form</h2>
//         <form onSubmit={submitForm}>
//           <label>
//             Applicant Name:
//             <input
//               type="text"
//               value={applicantName}
//               onChange={(e) => setApplicantName(e.target.value)}
//               required
//             />
//           </label>
//           <br />

//           <label>
//             Horticulture Type:
//             <input
//               type="text"
//               value={horticultureType}
//               onChange={(e) => setHorticultureType(e.target.value)}
//               required
//             />
//           </label>
//           <br />

//           <label>
//             Loan Amount:
//             <input
//               type="number"
//               value={loanAmount}
//               onChange={(e) => setLoanAmount(e.target.value)}
//               required
//             />
//           </label>
//           <br />

//           <button type="submit">Submit Application</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default HorticultureLoan;

import { useState } from 'react';
import '../assets/css/horticulture.css';

const HorticultureLoan = () => {
  const [applicantName, setApplicantName] = useState('');
  const [horticultureType, setHorticultureType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    console.log('Horticulture Loan Application submitted:', { applicantName, horticultureType, loanAmount, aadharNumber, panNumber });
    // You can send the form data to the backend for further processing here
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="loan__container">
      <div className="loan__form">
        <h2>Horticulture Loan Application Form</h2>
        <form onSubmit={submitForm}>
          <label>
            Applicant Name:
            <input
              type="text"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
              required
            />
          </label>
          <br />

          <label>
            Horticulture Type:
            <input
              type="text"
              value={horticultureType}
              onChange={(e) => setHorticultureType(e.target.value)}
              required
            />
          </label>
          <br />

          <label>
            Loan Amount:
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              required
            />
          </label>
          <br />

          <label>
            Aadhar Card Number:
            <input
              type="text"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              required
            />
          </label>
          <br />

          <label>
            PAN Card Number:
            <input
              type="text"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              required
            />
          </label>
          <br />

          <button type="submit">Submit Application</button>
        </form>
      </div>

      {showPopup && (
        <div className="popup" onClick={closePopup}>
          <span className="popuptext" id="myPopup">
            Your application has been submitted successfully!
          </span>
        </div>
      )}
    </div>
  );
};

export default HorticultureLoan;
