
import '../assets/css/faq.css';
import CustomNavbar from '../components/CustomNavbar';

const FAQs = () => {
  return (
    <div className="faqs__container">
        <header>
            <CustomNavbar/>
        </header>
      <h2>Frequently Asked Questions</h2>

      <div className="faq__item">
        <h3>Q: How can I apply for a loan through AgroCloud Finance?</h3>
        <p>A: To apply for a loan, you can navigate to the Loan section on our platform and fill out the online application form. Make sure to provide accurate information, and our team will review your application.</p>
      </div>

      <div className="faq__item">
        <h3>Q: What types of loans does AgroCloud Finance offer for agriculture?</h3>
        <p>A: AgroCloud Finance provides various types of agricultural loans, including crop loans, horticulture loans, and livestock loans. You can choose the type of loan that best suits your farming needs.</p>
      </div>

    </div>
  );
};

export default FAQs;
