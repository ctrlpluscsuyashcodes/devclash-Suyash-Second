import "./sponsors.css";

const Sponsors = () => {
  return (
    <div className="wrap-sponsors" id="sponsors">
      <div>
        <div className="domainHeading">SPONSORS</div>
      </div>
      <div className="titleSponsors">
        <img className="logo" src="assets/actualone.svg" alt="" />
        <img className="logo" src="assets/gfg.png" alt="" />
        <img className="logo aptos" src="assets/aptoslogo.jpg" alt="" />
        <img className="logo" src="assets/plutope.jpeg" alt="" />
        {/* <img className="logo polygon" src="assets/polygonlogo.png" alt="" /> */}
        <img className="logo polygon" src="assets/acampusai.png" alt="" />
      </div>
    </div>
  );
};

export default Sponsors;
