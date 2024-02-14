// import { useEffect } from 'react';
// import CustomNavbar from "../components/CustomNavbar";
// import "../assets/css/home.css";
// import { Parallax } from 'react-parallax';
// import { useNavigate } from "react-router-dom";

// const Home = () => {

//   const navigate = useNavigate();
//   const handleChangeLo = () => {
//     navigate('/loan');
//   };
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY;
//       const banner = document.querySelector('.home__banner');
//       const parallaxBanner = document.querySelector('.home__parallax');
      
//       if (banner) {
//         banner.style.transform = `translateY(${scrolled * -0.5}px)`;
//       }

//       if (parallaxBanner) {
//         parallaxBanner.style.transform = `translateY(${scrolled * -0.1}px)`;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="home__App">
//       <header className="home__header">
//         <CustomNavbar/>
//       </header>
//       <main>
//         <Parallax bgImage="your-banner-image.jpg" strength={500}>
//           <div className="home__banner">
//             <div className="home__m">
//               <div className="home__banner-content">
//                 <h1 className="home__welcome">Welcome to AgroFund </h1>
//                 <br/>
//                 <p className="home__wel-sub">AgroCloud Finance Pro is a cutting-edge platform that revolutionizes the agricultural funding landscape through innovative technologies and comprehensive financial management solutions.
//  </p>
                
//               </div>
//             </div>
//           </div>
//         </Parallax>
//         <section className="home__parallax">
//           <div className="home__intro">      
//             <div className="home__parallax-content">
//               <h2 className="home__tit-intro">Introduction to AgriFund</h2><br></br><br></br>
//               <p className="home__intro-content">AgriFund is your premier destination for agricultural loans tailored to meet the unique needs of farmers and agribusinesses. Whether you are a small family farm or a large-scale operation, we are here to help you grow and thrive.</p>
//               <br></br>
//               <br></br>
//               <button className="home__submit-button" onClick={handleChangeLo}>Apply Loan Now</button>
//             </div>
//           </div>
//         </section>
//         <section className="home__content">
//           <div className="home__key">
//             <div className="home__content-inner">
//               <h2 className="home__key-title">Key Features</h2><br></br><br></br>
//               <p className="home__keypoint1">Flexible loan options designed for farmers of all sizes.</p>
//               <p className="home__keypoint1">Competitive interest rates and repayment terms.</p>
//               <p className="home__keypoint1">Dedicated support from agricultural finance experts.</p>
//               <p className="home__keypoint1">Fast and hassle-free application process.</p>
//               <p className="home__keypoint1">Commitment to sustainable farming practices and rural development.</p>
//             </div>
//           </div>
//         </section>
//         <section className="home__contact"></section>
//       </main>

//       <footer className="home__footer">
//         <p>&copy; 2024 Your Company</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;



import { useEffect } from 'react';
import CustomNavbar from "../components/CustomNavbar";
import "../assets/css/home.css";
import { Parallax } from 'react-parallax';
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const handleChangeLo = () => {
    navigate('/loan');
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const banner = document.querySelector('.home__banner');
      const parallaxBanner = document.querySelector('.home__parallax');
      
      if (banner) {
        banner.style.transform = `translateY(${scrolled * -0.5}px)`;
      }

      if (parallaxBanner) {
        parallaxBanner.style.transform = `translateY(${scrolled * -0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home__App">
      <header className="home__header">
        <CustomNavbar/>
      </header>
      <main>
        <Parallax bgImage="your-banner-image.jpg" strength={500}>
          <div className="home__banner">
            <div className="home__m">
              <div className="home__banner-content">
                <h1 className="home__welcome">Welcome to AgroFund </h1>
                <br/>
                <p className="home__wel-sub">AgroCloud Finance Pro is a cutting-edge platform that revolutionizes the agricultural funding landscape through innovative technologies and comprehensive financial management solutions.
 </p>
                
              </div>
            </div>
          </div>
        </Parallax>
        <section className="home__parallax">
          <div className="home__intro">      
            <div className="home__parallax-content">
              <h2 className="home__tit-intro">Introduction to AgriFund</h2><br></br><br></br>
              <p className="home__intro-content">AgriFund is your premier destination for agricultural loans tailored to meet the unique needs of farmers and agribusinesses. Whether you are a small family farm or a large-scale operation, we are here to help you grow and thrive.</p>
              <br></br>
              <br></br>
              <button className="home__submit-button" onClick={handleChangeLo}>Apply Loan Now</button>
            </div>
          </div>
        </section>
        <section className="home__content">
          <div className="home__key">
            <div className="home__content-inner">
              <h2 className="home__key-title">Key Features</h2><br></br><br></br>
              <p className="home__keypoint1">Financial Management: Tools for tracking income, expenses, and overall financial health specific to agricultural operations.</p>
              <p className="home__keypoint1">Budgeting and Planning: Assistance with budget creation and long-term financial planning to optimize resources and maximize profitability.</p>
              <p className="home__keypoint1">Dedicated support from agricultural finance experts.</p>
              <p className="home__keypoint1">Fast and hassle-free application process.</p>
              <p className="home__keypoint1">Commitment to sustainable farming practices and rural development.</p>
            </div>
          </div>
        </section>
        <section className="home__contact"></section>
      </main>

      <footer className="home__footer">
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default Home;

