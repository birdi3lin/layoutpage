"use strict";

class App{
	constructor(){
		this.entry = [
			{
				"id": 1,
				"what": "Aurora Borealis Viewing",
				"where": "Greenland and Iceland",
				"description": "The Aurora is an incredible light show caused by collisions between electrically charged particles released from the sun that enter the earth's atmosphere and collide with gases such as oxygen and nitrogen.",
				"photo": "img/aurora.jpg",
				"toDo":[
					{
						"pers": "Know the best time of the year to see Aurora Borealis.",
						"sec": "Check the best place to see Aurora Borealis."
					},
					{
						"pers": "Book tickets and hotels in advance.",
						"sec": "Get a travel guide book for help."
					},
					{
						"pers": "Secure winter clothes so you don't get frozen.",
						"sec": "Prepare other stuff you may need to combat below 0 temperature."
					},
					{
						"pers": "Don't forget to bring a camera with you.",
						"sec": "Enjoy your trip!"
					}
				],

				"procedure": []
			},
			{
				"id": 2,
				"what": "Ride the Steel Dragon 2000",
				"where": "Nagashima Spa Land",
				"description": " Opened, appropriately, in 2000—The Year of the Dragon in Asia, the amusement park features several roller coasters, thrill rides, and kid rides, a giant Ferris wheel, and a water park.",
				"photo": "img/nabana.jpg",
				"toDo":[],

				"procedure": []
			},
			{
				"id": 3,
				"what": "Go fishing with Hime",
				"where": "Malindi, Kenya",
				"description": "The waters off Malindi, on Kenya’s central coast, offer one of the few places on the planet where anglers can realistically hope to accomplish a billfish royal slam, or even a fantasy slam.",
				"photo": "img/fishing.jpg",
				"toDo":[ ],

				"procedure": []
			},
			{
				"id": 4,
				"what": "Stargazing in New Zealand",
				"where":"Aoraki Mackenzie Dark Sky Reserve",
				"description": "On a nightime tour, Magellanic Clouds can be spotted— satellite galaxies of the Milky Way visible only from the southern hemisphere.",
				"photo": "img/stargaze.jpg",
				"toDo":[	],

				"procedure": []
			}
		];
		this.state = [
			{
				"bind": {
					"procedures":[],
					"entry_pers":[],
					"entry_sec":[]
				}
			}
		];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	createEntry(){
		let id = document.getElementById('entry_id');
		let name = document.getElementById('entry_what');
		let where = document.getElementById('entry_where');
		let description = document.getElementById('entry_description');
		let photo = document.getElementById('entry_photo');
		let preparationtime = document.getElementById('entry_preparationtime');
		let cookingtime = document.getElementById('entry_cookingtime');
		let yields = document.getElementById('entry_yields');

		let dummyEntry = [];
		for(let i=0;i<this.state[0].bind.entry_pers.length;i++){
			dummyEntry.push({
				"pers" : this.state[0].bind.entry_pers[i],
				"sec" : this.state[0].bind.entry_sec[i]
			});
		}
		let toDO = dummyEntry;

		let dummyProcedure = [];
		for(let i=0;i<this.state[0].bind.procedures.length;i++){
			dummyProcedure.push(this.state[0].bind.procedures[i]);
		}
		let procedure = dummyProcedure;

		let entry = {
			"id": id.value,
			"what": name.value,
			"where": where.value,
			"description": description.value,
			"photo": photo.value,
			"toDo": ingredients,
		//	"preparationtime": preparationtime.value,
			//"cookingtime": cookingtime.value,
		//	"yields": yields.value,
		//	"procedure": procedure
		};


		this.entry.push(entry);

		//Clear Fields
		this.state[0].bind.procedures = this.state[0].bind.ingredients_pers = this.state[0].bind.ingredients_sec = [];
		id.value = what.value = description.value = photo.value = toDO.value = where.value = '';
	}

	deleteEntry(key){
		let r = this.entry;
		for(let i=0;i<r.length;i++){
			if(r[i].id == key){
				this.entry.splice(i,1);
				break;
			}
		}
		this.pugLayout();
	}

	findEntryByID(id){
		let r = this.entry;
		for(let i=0;i<r.length;i++){
			if(id==r[i].id){
				return r[i];
			}
		}
	}

	findEntryByName(name){
		let objects = [];
		let r = this.entry;
		for(let i=0;i<r.length;i++){
			let expr = (r[i].what.toUpperCase().indexOf(what.toUpperCase()) > -1);
			// console.log(name," vs ",r[i].name," = ",expr);
			if(expr){
				objects.push(r[i]);
			}
		}
		return objects;
	}

	bindEntryNewProcedures(val,id){
		let bind = this.state[0].bind.procedures;
		bind[id] = val;
		// console.log(bind);
	}

	bindEntrytoDO(val,id,obj){
		let bind = null;
		if(obj === "qty"){
			bind = this.state[0].bind.entry_pers;
		}
		else if(obj === "name"){
			bind = this.state[0].bind.entry_sec;
		}
		bind[id] = val;
		// console.log(bind);
	}
}

class Component extends App{
	constructor(){

		super();
	}

	pugLayout(){
		let html = `
			<div id="pugLayout" class="container">
				<nav>
					<div class="nav-wrapper teal darken-2">
						<a href="#" onclick="component.pugLayout()" class="brand-logo">&nbsp;&nbsp;Bucket List of a Pug</a>
						<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
						<ul class="right hide-on-med-and-down">
							<li><a href="#" onclick="component.entryList()"><i class="material-icons left">assignment</i>Bucket List</a></li>
							<li><a href="#" onclick="component.entryCreate()"><i class="material-icons left">note_add</i>New Entry</a></li>
						</ul>
						<ul class="side-nav" id="mobile-demo">
							<li><a href="#" onclick="component.entryList()"><i class="material-icons left">assignment</i>Bucket List</a></li>
							<li><a href="#" onclick="component.entryCreate()"><i class="material-icons left">note_add</i>New Entry</a></li>
						</ul>
					</div>
				</nav>

				<div class="parallax-container">
					<div class="parallax"><img src="img/puggy8.jpg" ></div>
				</div>
                
                <div class="carousel">
                    <a class="carousel-item" href="#one!"><img src="img/scandi.jpg"></a>
                    <a class="carousel-item" href="#two!"><img src="img/pugoke.jpg"></a>
                    <a class="carousel-item" href="#three!"><img src="img/movieout.jpg"></a>
                    <a class="carousel-item" href="#four!"><img src="img/alaskaroad.jpg"></a>
                    <a class="carousel-item" href="#five!"><img src="img/wine.jpg"></a>
                  </div>

				<div id="entryRecent"></div>
				<div id="entryView"></div>
				<div id="entryList"></div>
				<div id="entryCreate"></div>

				<footer class="page-footer teal darken-2" >
					<div class="container">
						<div class="row">
							<div class="col l6 s12">
								<h5 class="white-text">Bucket List App</h5>
								<p class="grey-text text-lighten-4">A sample Web App made to master materialize.css and oop.</p>
							</div>
							<div class="col l4 offset-l2 s12">
								<h5 class="white-text">Links</h5>
								<ul>
									<li>
										<a class="grey-text text-lighten-3" href="#" onclick="component.pugLayout()">

											Home</a></li>
											<li><a class="grey-text text-lighten-3" href="#" onclick="component.entryList()">
												<!-- <i class="material-icons left">assignment</i> -->
												Bucket List</a></li>
												<li><a class="grey-text text-lighten-3" href="#" onclick="component.entryCreate()">
													<!-- <i class="material-icons left">dashboard</i> -->
													New Entry</a></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="footer-copyright">
										<div class="container">
											© 2016-2017 Copyright Text
											<img class="right" src="img/kuma1.gif" width="35" height="30" style="margin-top:6px;" />

										</div>
									</div>
								</footer>

							</div>
		`;

		this.reRender(`
			${html}

			`,document.getElementById("app"));
		this.entryRecent();
	}

	entryRecent(){

		let html = `
			<h5 class="center-align">RECENT ENTRIES</h5>
			<div class="row">
		`;

		let r = this.entry;
		let count = 0;
		for(let i=(r.length-1);i>=0;i--){
			if(count++ === 3)break;
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].what}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.entryView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}

		html += `</div>`;

		this.render(`
			${html}
			`,document.getElementById("entryRecent"));
	}

	entryView(id){
		let r = this.findEntryByID(id);

		let html = `
			<h5 class="center-align">${r.what}</h5>
			<div class="row">
				<div class="col s12 m12">
					<div class="card horizontal small">
						<div class="card-image">
							<img src="${r.photo}">
						</div>
						<div class="card-stacked">
							<div class="card-content">
								<p>${r.description}</p>
							</div>
							<div class="card-action small">
								<span onclick="component.deleteEntry(${r.id})" class="new badge small red" data-badge-caption="">DELETE</span>
								<span onclick="component.pugLayout()" class="new badge small" data-badge-caption="">BACK TO HOME</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		`;

		html += `
			<div class="row">
				<div class="col s6 m6">
					<h6>Things to Do</h6>
					<ul class="collection">
		`;

		for(let i=0;i<r.toDo.length;i++){
			let ri = r.toDO[i];
			html += `
						<li class="collection-item avatar">
							<i class="material-icons circle">star</i>
							<span class="title">${ri.qty}</span>
							<p>${ri.what}<br>

							</p>

						</li>
			`;
		}

		html += `
					</ul>
				</div>
				<div class="col s6 m6">
					<h6>Procedure</h6>
					<ul class="collection">
		`;

		for(let i=0;i<r.procedure.length;i++){
			let rp = r.procedure[i];
			html += `
						<li class="collection-item avatar">
							<i class="material-icons circle">done</i>
							<span class="title">Step ${i+1}</span>
							<p>${rp}<br>

							</p>

						</li>
			`;
		}

		html += `
					</ul>
				</div>
			</div>
		`;

		this.reRender(`
			${html}
			`,document.getElementById("entryView"));
		$('#entryView').show();
		$('#entryRecent').hide();
		$('#entryList').hide();
		$('#entryCreate').hide();
	}

	entryList(){
		let html = `
			<br/>
		  	<nav>
	    		<div class="nav-wrapper white">
					<form>
						<div class="input-field">
							<input onkeyup="component.entryListItems(this.value)" id="search" type="search" placeholder="Search" required>
							<label for="search"><i class="material-icons">search</i></label>
							<i class="material-icons">close</i>
						</div>
					</form>
				</div>
			</nav>
			<br/>
		`;

		html += `
			<div class="row" id="entryListItems">
		`;
		let r = this.entry;
		for(let i=0;i<r.length;i++){
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].what}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.entryView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}

		html += `</div>`;

		this.reRender(`
			${html}
			`,document.getElementById("entryList"));
		$('#entryList').show();
		$('#entryView').hide();
		$('#entryRecent').hide();
		$('#entryCreate').hide();
	}

entrytItems(what){
		let html = ``;
		let r = this.findEntryByName(what);
		for(let i=0;i<r.length;i++){
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].what}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.entryView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}
		this.reRender(`
			${html}
			`,document.getElementById("entryListItems"));
		$('#entryList').show();
		$('#entryView').hide();
		$('#entryRecent').hide();
		$('#entryCreate').hide();
	}

	entryCreate(){
		let html = `
			<div class="row">
				<form class="col s12">
				<h5 class="center-align">Make New Entry</h5>
				<button onclick="component.createEntry()" class="btn waves-effect waves-light">Save</button>
					<div class="row">
						<div class="input-field col s6">
							<input disabled value="${this.entry.length+1}" id="entry_id" type="text" class="validate">
						</div>
						<div class="input-field col s6">
							<input id="entry_name" type="text" class="validate">
							<label for="entry_name">WHAT</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s6">
							<input id="entry_location" type="text" class="validate">
							<label for="entry_location">WHERE</label>
						</div>
					<div class="row">
						<div class="input-field col s6">
							<input id="entry_description" type="text" class="validate">
							<label for="entry_description">DESCRIPTION</label>
						</div>
						<div class="input-field col s6">
							<input id="entry_photo" type="text" class="validate">
							<label for="entry_photo">PHOTO</label>
						</div>

					<div class="row">
						<div class="input-field col s6">
							<h6> THINGS TO DO</h6>
							<button onclick="component.entryNewtoDO()" class="btn-floating waves-effect waves-light"><i class="material-icons">add</i></button>
							<div id="entryNewtoDO"></div>
						</div>
					</div>
				</form>
			</div>
		`;

		this.reRender(`
			${html}
			`,document.getElementById("entryCreate"));
		$('#entryCreate').show();
		$('#entryList').hide();
		$('#entryView').hide();
		$('#entryRecent').hide();
		this.state[0].bind.procedures = [];
		this.state[0].bind.entry_pers = [];
		this.state[0].bind.entry_sec = [];
	}

	 recipeNewProcedures(){
		let bind = this.state[0].bind.procedures;
		bind.push("");

		let html = ``;
		for(let i=0;i<bind.length;i++){
			let decode_bind = `onkeyup="component.bindEntryNewProcedures(this.value,${i})"`;
			html += `
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind} value="${bind[i]}" type="text" />
					</div>
				</div>
			`;
		}

		this.reRender(`
			${html}
			`,document.getElementById("entryNewProcedures"));
	}

	entryNewtoDO(obj){
		let bind_pers = this.state[0].bind.entry_pers;
		let bind_sec = this.state[0].bind.entry_sec;
		bind_pers.push("");
		bind_sec.push("");

		let html = ``;
		for(let i=0;i<bind_pers.length;i++){
			let decode_bind_pers = `onkeyup="component.bindEntryNewtoDo(this.value,${i},'pers')"`;
			let decode_bind_sec = `onkeyup="component.bindEntryeNewtoDo(this.value,${i},'sec')"`;
			html += `
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind_pers} value="${bind_pers[i]}" type="text" />
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind_sec} value="${bind_sec[i]}" type="text" />
					</div>
				</div>
			`;
		}

		this.reRender(`
			${html}
			`,document.getElementById("entryNewtoDO"));
	}


}

let component = new Component();
component.pugLayout();
