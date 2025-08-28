import Footer from '../components/common/Footer/footer';
import Header from '../components/common/Header/header'
import MainComponent from '../components/Landingpage/MainComponents/MainComponent';


function HomePage() {
  return (
    <div>
    <Header />
    <main>
      <MainComponent/>
    </main>
    {/* <Footer/> */}
    </div>
  )
}

export default HomePage