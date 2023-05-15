export function CriptoCoin(DigitalCoinList){

	//Hacemos llamado a la API para obtener un listado
	//de las top 100 criptomonedas

	let ListCriptoURL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD';
	fetch(ListCriptoURL)
	.then(response => response.json())
	.then(CritopList => {

		let Data = CritopList.Data;
		// Iteramos para obtener los resultados 

		function SelectCriptos(){
			for (var i = 0; i < Data.length; i++){

				// Creamos las opciones como hijos de DigitalCoin
				const {FullName, Name} = Data[i].CoinInfo;
				const option = document.createElement('option');
				option.value = Name;
				option.text = FullName;
				DigitalCoinList.appendChild(option);}
			}
			SelectCriptos();
		})

.catch(error => console.log(error));
}

// Llamamos a la API con todos los datos que hemos obtenido 

export function ConsultCripto(NameCoin, DigitalCoin, Answer){
	let URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${DigitalCoin}&tsyms=${NameCoin}`;
	fetch(URL)
	.then(response => response.json())
	.then(Result => {
		const CONSULT = Result.DISPLAY[DigitalCoin][NameCoin]
		const NAME = [DigitalCoin];
		Answer.innerHTML = `
			<h2>${NAME}</h2>
			<h5>Precio</h5>
			<p>${CONSULT.PRICE}</p>
			<h5>Mas alto del día</h5>
			<p>${CONSULT.HIGHDAY}</p>
			<h5>Mas bajo del día</h5>
			<p>${CONSULT.LOWDAY}</p>
			<h5>Ultima actualización</h5>
			<p>${CONSULT.LASTUPDATE}</p>
		`
	})
	.catch(error => console.log(error));
}