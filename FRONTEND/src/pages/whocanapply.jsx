import '../assets/css/whocanapply.css'
import CustomNavbar from '../components/CustomNavbar';

const WhoCanApply = () => {
  return (
    <div>
      <CustomNavbar/>
      <div className="bank-container">
        <h2 className="bank-header">Who Can Apply for Agricultural Loans?</h2>

        <p className="bank-paragraph">
          Agricultural loans are available for a variety of individuals and entities involved in agricultural activities.
          Here are some categories of individuals who can typically apply for agricultural loans:
        </p>

        <ul className="bank-list">
          <li className="bank-list-item">Farmers engaged in crop cultivation, livestock farming, or other agricultural practices.</li>
          <li className="bank-list-item">Individuals who own agricultural land.</li>
          <li className="bank-list-item">Agricultural laborers and farm managers.</li>
          <li className="bank-list-item">Agribusinesses involved in food processing, packaging, and marketing.</li>
          <li className="bank-list-item">Agricultural cooperatives and their members.</li>
          <li className="bank-list-item">Horticulturists involved in fruit and vegetable cultivation.</li>
          <li className="bank-list-item">Fishermen and aquaculturists engaged in fisheries and aquaculture activities.</li>
          <li className="bank-list-item">Rural entrepreneurs starting or expanding agricultural ventures.</li>
          <li className="bank-list-item">Individuals belonging to scheduled castes and tribes in regions with specific schemes.</li>
          <li className="bank-list-item">Women farmers targeted by programs promoting gender inclusivity in agriculture.</li>
          <li className="bank-list-item">Minority communities and veterans in agriculture.</li>
        </ul>

        <p className="bank-paragraph">
          It is important to check with local banks, agricultural cooperatives, or government agencies to understand
          specific eligibility criteria and available loan programs in your region.
        </p>
      </div>
    </div>
  );
};

export default WhoCanApply;
