import "./App.css";

function App() {
  return (
    <div className="main-div">
      <div className="upper-half">
        <div className="left-half">
          <img src="/img/1.png" alt="logo png" className="trophyPng" />
        </div>
        <div className="right-half">
          <img src="/img/logo.png" alt="" className="logoPng" />
          <p className="headLine">
            <b>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </b>
          </p>
          <ul className="list-inline">
            <li>
              {" "}
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src="/img/2.png" alt="" className="awardPhoto" />
          <p>
            Government of India has awarded the{" "}
            <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="lower-half">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src="/img/3.png" alt="logo png" className="trophyPng" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
        <hr />
        <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
        <p>
          CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS
          & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD &
          BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
          AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div className="footer">
        <div className="siteInfo"><i class=" siteInfoIcon fa-solid fa-phone"></i> Toll free 1800 2000 1734</div>
        <div className="siteInfo"><i class=" siteInfoIcon fa-brands fa-facebook"></i>www.facebook.com/cripumps</div>
        <div className="siteInfo"><i class="siteInfoIcon fa-solid fa-globe"></i>www.crigroups.com</div>
      </div>
    </div>
  );
}

export default App;
