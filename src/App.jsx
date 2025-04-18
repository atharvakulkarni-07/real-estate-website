import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import Extra from './components/extra/extra';
import Testm from './components/testimonials/testm';
import Featured from './components/featured-properties/FP';
import Tail from './components/tail/tail';
import Value from './components/value/value';
import Collaboration from './components/collaboration/colab';

// Import the Buy section and its subpages
import Buy from './components/Buy/buy';
import ApartmentsBuy from './components/Buy/Apartments/apartments';
import HousesBuy from './components/Buy/Houses/houses';
import PlotsBuy from './components/Buy/Plots/plots';

// Import Rent section and subpages
import Rent from './components/Rent/rent';
import ApartmentsRent from './components/Rent/Apartments/apartments';
import HousesRent from './components/Rent/Houses/houses';
import CoLivingRent from './components/Rent/CoLiving/coliving';

// Import Sell section and subpages
import Sell from './components/Sell/sell';
import PostProperty from './components/Sell/PostProperty/postproperty';
import SellServices from './components/Sell/SellServices/sellservices';

// Import Home Loans section and subpages
import HomeLoans from './components/HomeLoans/homeloans';
import ApplyForLoan from './components/HomeLoans/ApplyForLoan/applyforloan';
import CheckEligibility from './components/HomeLoans/CheckEligibility/checkeligibility';
import LoanCalculator from './components/HomeLoans/LoanCalculator/loancalculator';

// Import Home Interiors section and subpages
import HomeInteriors from './components/HomeInteriors/homeinteriors';
import FullHome from './components/HomeInteriors/FullHome/fullhome';
import Kitchen from './components/HomeInteriors/Kitchen/kitchen';
import Furniture from './components/HomeInteriors/Furniture/furniture';

// Import PP's Advice section and subpages
import PPsAdvice from './components/PPsAdvice/ppsadvice';
import Guides from './components/PPsAdvice/Guides/guides';
import Articles from './components/PPsAdvice/Articles/articles';
import ExpertsAdvice from './components/PPsAdvice/ExpertsAdvice/expertsadvice';

// Import Help section and subpages
import Help from './components/Help/help';
import FAQs from './components/Help/FAQs/faqs';
import ContactSupport from './components/Help/ContactSupport/support';


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={
            <>
              <Extra />
              <Featured />
              <Value />
              <Testm />
              <Collaboration />
              <Tail />
            </>
          } />

          {/* Buy Section Routes */}
          <Route path="/buy" element={<Buy />} />
          <Route path="/buy/apartments" element={<ApartmentsBuy />}/>
          <Route path="/buy/houses" element={<HousesBuy />} />
          <Route path="/buy/plots" element={<PlotsBuy />} />

          {/* Rent Section */}
          <Route path="/rent" element={<Rent />} />
          <Route path="/rent/apartments" element={<ApartmentsRent />}/>
          <Route path="/rent/houses" element={<HousesRent />} />
          <Route path="/rent/co-living" element={<CoLivingRent />} />

          {/* Sell Section Routes */}
          <Route path="/sell" element={<Sell />} />
          <Route path="/sell/postproperty" element={<PostProperty />}/ >
          <Route path="/sell/sellservices" element={<SellServices />}/>
          
          {/* Home Loans Section Routes */}
          <Route path="/homeloans" element={<HomeLoans />}/>
          <Route path="/homeloans/applyforloan" element={<ApplyForLoan/>}/>
          <Route path="/homeloans/checkeligibility" element={<CheckEligibility/>}/>
          <Route path="/homeloans/loancalculator" element={<LoanCalculator/>}/>


          {/* Home Interiors Section */}
          <Route path="/homeinteriors" element={<HomeInteriors />}/>
          <Route path="/homeinteriors/fullhome" element={<FullHome />}/>
          <Route path="/homeinteriors/kitchen" element={<Kitchen />} />
          <Route path="/homeinteriors/furniture" element={<Furniture />}/>


          {/* PP's Advice Section */}
          <Route path="/ppsadvice" element={<PPsAdvice />} />
          <Route path="/ppsadvice/guides" element={<Guides />} />
          <Route path="/ppsadvice/articles" element={<Articles />} />
          <Route path="/ppsadvice/expertsadvice" element={<ExpertsAdvice />} />

          {/* Help Section */}
        <Route path="/help" element={<Help />} />
        <Route path="/help/faqs" element={<FAQs />} />
        <Route path="/help/support" element={<ContactSupport />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
