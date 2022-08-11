function calcular (){
	var n_cotas = document.getElementById('number_cotas').value;
	var valor_cota = document.getElementById('valor_cota').value;
	var valor_dividendo = document.getElementById('valor_dividendo').value;
	var valor_renda_passiva = document.getElementById('valor_renda_passiva').value;


	/**magic number**/
	var magic_number = parseInt(valor_cota/valor_dividendo);
	document.getElementById('magic_number').innerText=magic_number;


	/**meses até a renda passiva**/
	var valor_passivo = parseInt(valor_renda_passiva/valor_dividendo);
	document.getElementById('meses_renda_passiva').innerText=valor_passivo;

	/**renda final**/
	var renda_final = parseInt(valor_cota*valor_passivo);
	document.getElementById('valor_final').innerText=renda_final;


	/**tempo para adquirir**/
	var tempo_adquirir = parseInt(valor_passivo/12);
	document.getElementById('tempo_adquirir').innerText=tempo_adquirir;
}
