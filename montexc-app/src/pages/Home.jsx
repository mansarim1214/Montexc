import Hero from "../components/Home_comp/Hero";
import Overview from "../components/Home_comp/Overview";
import ImageCarousel from "../components/Home_comp/ImageCarousel";
import StatGrid from "../components/Home_comp/StatGrid";
import PaymentMethod from "../components/Home_comp/PaymentMethod";
import AccountType from "../components/Home_comp/AccountType";
import DownloadApps from "../components/Home_comp/DownloadApps";
import GetStarted from "../components/Home_comp/GetStarted";
import WhyJoin from "../components/Home_comp/WhyJoin";

function Home() {
  return (
    <>
<Hero />

<Overview />

<ImageCarousel />

<StatGrid />

<PaymentMethod / >

<AccountType />

<DownloadApps/>

<GetStarted / >

<WhyJoin/>


    </>
  );
}

export default Home;
