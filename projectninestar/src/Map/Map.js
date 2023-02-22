import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <div>
        <div class="add" id="contact">
	    <div class="container">
	         <div class="ser">
				<h2>Contact Us</h2>
				<h1>Contact us the get started</h1>
			</div> 
			<div class="row justify-content-around">
			    <div class="col-sm-12 col-md-12 col-lg-5 mt-5 shadow-sm york">
			        <div class="loc d-flex mt-3">
					    <div class="icon mt-2">
						    <iconify-icon icon="akar-icons:location"></iconify-icon>
					    </div>
					    <div class="para">
						    <h1>Location:</h1>
							<p>A108 Adam Street, New York, NY 535022</p>
						</div>
					</div>
					<div class="loc d-flex  mt-4">
					    <div class="icon">
						    <iconify-icon icon="bi:envelope"></iconify-icon>
					    </div>
					    <div class="para">
						    <h1>Email:</h1>
							<p>info@example.com</p>
						</div>
					
					
					</div>
					<div class="loc d-flex  mt-4">
					    <div class="icon">
						    <iconify-icon icon="bi:phone"></iconify-icon>
					    </div>
					    <div class="para">
						    <h1>Call:</h1>
							<p>+1 5589 55488 55s</p>
						</div>
					</div>
					<div class="map mt-5">
					    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31528.698621891348!2d77.29696873659499!3d8.964100679884865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429c15ac547f7%3A0x9a707276cd8ae327!2sTenkasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1666715501410!5m2!1sen!2sin" width="100%" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					
					</div>
				</div>
			
			   <div class="col-sm-12 col-md-12 col-lg-6 mt-5 shadow-sm sec" >
			        <div class="form mt-3 mb-5">
					    <div class="name">
						    <div class="mb-3 hold">
							  <label for="exampleFormControlInput1" class="form-label">Your Name</label>
							  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="   Your Name"></input>
							</div>
							<div class="mb-3 hold">
							  <label for="exampleFormControlInput1" class="form-label">Your Email</label>
							  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="   Your Email"></input>
							</div>
						</div>
						<div class="sub">
						    <div class="mb-3 mt-1">
							  <label for="exampleFormControlInput1" class="form-label">Subject</label>
							  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="   Subject"></input>
							</div>
							<div class="mb-3 mt-4">
							  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
							  <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
							</div>
							<div class="prime">
							    <button type="button" class="btn btn-primary mt-5">Send Message</button>
							</div>
						</div>
					</div>
				</div>
			</div>
	
	    </div>
	</div>
    <div class="letter">
	    <div class="container">
	        <div class="row our">
			    <h4>Our Newsletter</h4><br></br>
					<p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
					<form class="mail">
					<p><input class="emailbox shadow-sm" type="email" name="email" ></input><a href="" class="shadow-sm">Subscribe</a></p>
					</form>
			</div>
	
        </div>	
	</div>
    </div>
  )
}

export default Map