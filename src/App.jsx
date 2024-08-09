import './App.css'

function App() {

  return (
    <>
      <HeaderDiv />
      <Heading />
      <Nav />
      <About />
      <Rezervation />
      <Footer />
    </>
  )
}

function HeaderDiv() {
  return (
    <div className="header">
      <img src="images/logo.svg" alt="" />
      <a href="#">Ücretsiz Danışmanlık</a>
    </div>
  )
}

function Heading(){
  return (
    <div className="heading">
    <h1>Tasarım çözümleri artık daha kolay</h1>
    <p>Çeşitli tasarım disiplinlerinde on yılı aşkın tecrübemle, tasarım ihtiyaçlarınız için tek adresinizim.</p>
  </div>
  )
}

function Nav(){
  return (
    <div className="nav">
      <div className="graphic">
        <h4>Grafik Tasarım</h4>
      </div>
      <div className="uı-ux">
        <h4>UI/UX</h4>
      </div>
      <div className="apps">
        <h4>Uygulamalar</h4>
      </div>
      <div className="photography">
        <h4>Fotoğrafçılık</h4>
      </div>
      <div className="ıllustrations">
        <h4>İllüstrasyonlar</h4>
      </div>
      <div className="motion">
        <h4>Hareket grafikleri</h4>
      </div>
    </div>
  )
}

function About(){
  return(
    <div className="about">
      <img src="images/about-img.png" alt="" />
      <div className="about-text">
        <h2>Ben Amy ve bir sonraki projenizde çalışmayı çok isterim</h2>
        <p>Güzel tasarım çözümleri yaratmak için başkalarıyla birlikte çalışmayı seviyorum. Marka illüstrasyonlarından eksiksiz mobil uygulamalara kadar her şeyi tasarladım. Ayrıca kamera konusunda da becerikliyimdir!</p>
        <a href="#">Ücretsiz Danışmanlık</a>
      </div>
    </div>
  )
}

function Rezervation(){
  return(
  <div className="rezervation">
    <div className="rezervation-text">
      <h2>Benimle bir görüşme rezervasyonu yapın</h2>
      <p>Size nasıl yardımcı olabileceğimi görmek için sohbet etmeyi çok isterim. Bizim için en iyi ilk adım, ücretsiz danışmanlık sırasında projenizi tartışmamızdır. Daha sonra oradan ilerleyebiliriz.</p>
    </div>
    <div className="rezervation-btn">
      <a href="#">Ücretsiz Danışmanlık</a>
    </div>
  </div>
  )
}

function Footer(){
  return (
    <div className="footer">
      <img src="images/logo.svg" alt="" />
      <a href="#">Ücretsiz Danışmanlık</a>
    </div>
  )
}

export default App
