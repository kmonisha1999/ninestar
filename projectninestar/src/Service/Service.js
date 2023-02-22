import React from 'react'
import Portfolio from '../Portfolio/Portfolio'
import './Service.css'
const Service = () => {
  return (
    <div>
        <div class="service" id="services">
	    <div class="container">
				<div class="ser">
					<h2>Services</h2>
					<h1>Check out the great services we offer</h1>
				</div>
			
			<div class="row mt-5">
				<div class="col-sm-12 col-md-6 col-lg-3 mt-3">
					<div class="card s1">
						<iconify-icon icon="icon-park-outline:dribble" class="pt-3"></iconify-icon>
						<h3 class="mt-3">Lorem Ipsum</h3>
						<p class="mt-3">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate </p>
					</div>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-3 mt-3">
					<div class="card s1">
						<iconify-icon icon="akar-icons:file" class="pt-3"></iconify-icon>
						<h3 class="mt-3">Sed ut perspiciatis</h3>
						<p class="mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  </p>
					</div>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-3 mt-3">
					<div class="card s1">
						<iconify-icon icon="bx:tachometer" class="pt-3"></iconify-icon>
						<h3 class="mt-3">Magni Dolores</h3>
						<p class="mt-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
						</p>
					</div>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-3 mt-3">
					<div class="card s1">
						<iconify-icon icon="bx:world" class="pt-3"></iconify-icon>
						<h3 class="mt-3">Nemo Enim</h3>
						<p class="mt-3">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
					</div>
				</div>
			</div>
	    </div>
	</div>
    <Portfolio/>
    </div>
  )
}

export default Service