import {ConsultCripto, CriptoCoin} from "./api.js"

let form = document.querySelector('#form-search');
let CoinCountry = document.querySelector('.coin');
let Answer = document.querySelector('.answer');
let DigitalCoinList = document.querySelector("#Digital-coin-list");
let MenssageError = document.querySelector(".texterrorconsult");
let Menssage = document.querySelector(".textinitial");
let img = document.querySelector(".img");

let ObjSearch = {
	NameCoin: "",
	DigitalCoin: ""
} 
	

document.addEventListener('DOMContentLoaded', () => {
	CriptoCoin(DigitalCoinList);
	form.addEventListener('submit', SubmitForm);
	CoinCountry.addEventListener('change', getValue);
	DigitalCoinList.addEventListener('change', getValue);
})


// Enviamos los datos optenidos por el form a la API
function SubmitForm(e){
	e.preventDefault();
	const {NameCoin, DigitalCoin} = ObjSearch;

	//Mostramos un mensaje de error en caso de no estar llenos los campos
	if (NameCoin === "" || DigitalCoin === "") {
		Menssage.classList.add("hidden");
		MenssageError.classList.remove("hidden");
		setInterval(() => {MenssageError.classList.add("hidden")}, 5000)
		return;
	}


	setTimeout(() => {Menssage.classList.add("hidden")}, 5000)
	ConsultCripto(NameCoin, DigitalCoin, Answer);
}

// Obtenemos los datos del form
function getValue(e){
	ObjSearch[e.target.name] = e.target.value;
}

