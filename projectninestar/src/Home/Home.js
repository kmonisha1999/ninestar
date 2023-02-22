import React from 'react'
import About from '../About/About'
import Clients from '../Clients/Clients'
import Faq from '../Faq/Faq'
import Footer from '../Footer/Footer'
import Links from '../Links/Links'
import Map from '../Map/Map'
// import Portfolio from '../Portfolio/Portfolio'
import Service from '../Service/Service'
import Team from '../Team/Team'
import './Home.css'


const Home = () => {
  return (
    <div>
		<div id="hed" className="container-fluid fixed-top">
		<div className="row">
			<div className="navbar navbar-expand-lg navbar-light bg-white d-flex justify-content-center py-3 shadow-sm p-2">
				<div className="container">
				<a className="navbar-brand fs-3" href="#">Ninestars</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item px-1">
							<a className="nav-link active alink" aria-current="page"  href="#home">Home</a>
						</li>
						<li className="nav-item px-1">
							<a className="nav-link alink" href="#aboutus">About us</a>
						</li>
						<li className="nav-item px-1">
							<a className="nav-link alink" href="#services">Services</a>
						</li>
						<li className="nav-item px-1">
							<a className="nav-link alink" href="#portfolio">Portfolio</a>
						</li>
						<li className="nav-item px-1">
							<a className="nav-link alink" href="#team">Team</a>
						</li>
						<li className="nav-item dropdown px-1">
							<a className="nav-link dropdown-toggle alink" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown link</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li><a className="dropdown-item" href="">Action</a></li>
								<li><a className="dropdown-item" href="">Another action</a></li>
								<li><a className="dropdown-item" href="">Something else here</a></li>
							</ul>
						</li>
						<li className="nav-item px-2">
							<a className="nav-link alink" href="#contact">Contact</a>
						</li>
						<a type="button" className="btn btn rounded-pill px-4 gs" href="#home">Get Started</a>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<div className="home">
	    <div className="container">
		    <div className="row">
				<div className="col d-flex align-items-center justify-content-center col-sm-12 col-md-12 col-lg-6 order-1 order-lg-0">
				    <div className="homep mt-5">
						<h1>Bettter digital experience with Ninestars</h1>
						<h2>We are team of talented designers making websites with Bootstrap</h2>
						<button type="button" className="btn gs mt-4 di">Get Started</button>
					</div>	
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 homeimg order-0 order-lg-1">
			        <img src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/hero-img.svg" className="img-fluid animated" alt=""></img>
				</div>
			</div>	
	    </div>
		<About/>
        <Service/>
		<Faq/>
		<Team/>
		<Clients/>
		<Map/>
		<Links/>
		<Footer/>
	</div>





























    </div>
  )
}

export default Home