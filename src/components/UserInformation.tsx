import back from "../assets/back.svg";
import placeholder from "../assets/placeholder.svg";
import filledStar from "../assets/filled-star.svg";
import unfilledStar from "../assets/unfilled-star.svg";
import "../styles/details.scss";

const UserInformation = () => {
  return (
    <div className="user-info-container">
      <div className="user-info-wrapper">
        <header>
          <div className="go-back">
            <img src={back} alt="" />
            <span>Back to Users</span>
          </div>
          <div className="head">
            <h2>User Details</h2>
            <div className="user-action">
              <button className="blacklist-btn light">Blacklist User</button>
              <button className="activate-btn light">Activate User</button>
            </div>
          </div>
          <div className="user-info-menu">
            <div className="name">
              <div className="pic">
                <img src={placeholder} alt="" />
              </div>
              <h4>Grace Effiom</h4>
              <span>LSQFf5B7g90</span>
            </div>
            <div className="tier-info">
              <h5>User's Tier</h5>
              <img src={filledStar} alt="" />
              <img src={unfilledStar} alt="" />
              <img src={unfilledStar} alt="" />
            </div>
            <div className="account-balance">
              <h5 className="amount">#200,000.00</h5>
              <small>7868764378/Providus Bank</small>
            </div>
          </div>
          <nav className="details-menu">
            <ul>
              <li>General Details</li>
              <li>Documents</li>
              <li>Bank Details</li>
              <li>Loans</li>
              <li>Savings</li>
              <li>App and System</li>
            </ul>
          </nav>
        </header>

        <section>
          <div className="section-one categories">
            <h4>Personal Information</h4>
            <div className="section-one-container">
              <div className="section-one-wrapper-first">
                <div className="inner-p">
                  <h6>Full Name</h6>
                  <span>Grace Effiom</span>
                </div>
                <div className="inner-p">
                  <h6>Phone Number</h6>
                  <span>07060780922</span>
                </div>
                <div className="inner-p">
                  <h6>Email Address</h6>
                  <span>grace@gmail.com</span>
                </div>
                <div className="inner-p">
                  <h6>BVN</h6>
                  <span>223787632395</span>
                </div>
                <div className="inner-p">
                  <h6>Gender</h6>
                  <h6>Female</h6>
                </div>
              </div>

              <div className="section-one-wrapper-second">
                <div className="inner-p">
                  <h6>Marital Status</h6>
                  <span>Single</span>
                </div>
                <div className="inner-p">
                  <h6>Children</h6>
                  <span>None</span>
                </div>
                <div className="inner-p">
                  <h6>Type of Residence</h6>
                  <span>Parent's Apartment</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="section-two categories">
            <h4>Education and Employment</h4>
            <div className="section-one-container">
              <div className="section-one-wrapper-first">
                <div className="inner-ee">
                  <h6>Level of Education</h6>
                  <span>B.Sc</span>
                </div>
                <div className="inner-ee">
                  <h6>Employment Status</h6>
                  <span>Employed</span>
                </div>
                <div className="inner-ee">
                  <h6>Sector of Employment</h6>
                  <span>FinTech</span>
                </div>
                <div className="inner-ee">
                  <h6>Duration of Employment</h6>
                  <span>2 years</span>
                </div>
              </div>

              <div className="section-one-wrapper-second">
                <div className="inner-ee">
                  <h6>Office Email</h6>
                  <span>grace@lendsqr.com</span>
                </div>
                <div className="inner-ee">
                  <h6>Monthly Income</h6>
                  <span>#200,000.00 - #400,00.00</span>
                </div>
                <div className="inner-ee">
                  <h6>Loan Repayment</h6>
                  <span>40,000</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="socials categories">
            <h4>Social</h4>

            <div className="inner-s">
              <h6>Twitter</h6>
              <span>@grace_effiom</span>
            </div>
            <div className="inner-s">
              <h6>Facebook</h6>
              <span>Grace Effiom</span>
            </div>
            <div className="inner-s">
              <h6>Instagram</h6>
              <span>@grace_effiom</span>
            </div>
          </div>
          <hr />
          <div className="guarantor categories">
            <h4>Guarantor</h4>
            <div className="inner-g">
              <h6>Full Name</h6>
              <span>Debby Ogana</span>
            </div>
            <div className="inner-g">
              <h6>Phone Number</h6>
              <span>07060780922</span>
            </div>
            <div className="inner-g">
              <h6>Email Address</h6>
              <span>debby@gmail.com</span>
            </div>
            <div className="inner-g">
              <h6>Relationship</h6>
              <span>Sister</span>
            </div>
          </div>
          <hr />
          <div className="untitled categories">
            <h4>Untitled</h4>
            <div className="inner-u">
              <h6>Full Name</h6>
              <span>Debby Ogana</span>
            </div>
            <div className="inner-u">
              <h6>Phone Number</h6>
              <span>07060780922</span>
            </div>
            <div className="inner-u">
              <h6>Email Address</h6>
              <span>debby@gmail.com</span>
            </div>
            <div className="inner-u">
              <h6>Relationship</h6>
              <span>Sister</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserInformation;