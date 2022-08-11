function calcular (){
	var n_cotas = document.getElementById('number_cotas').value;
	var valor_cota = document.getElementById('valor_cota').value;
	var valor_dividendo = document.getElementById('valor_dividendo').value;
	var valor_renda_passiva = document.getElementById('valor_renda_passiva').value;


	/**magic number**/
	var magic_number = parseInt(valor_cota/valor_dividendo);
	document.getElementById('magic_number').innerText=magic_number + " cota(s)";


	/**meses até a renda passiva**/
	var valor_passivo = parseInt(valor_renda_passiva/valor_dividendo);
	document.getElementById('meses_renda_passiva').innerText=valor_passivo + " R$";

	/**renda final**/
	var renda_final = parseInt(valor_cota*valor_passivo);
	document.getElementById('valor_final').innerText=renda_final + " R$";


	/**tempo para adquirir**/
	meses = 0;
	cont = magic_number;
	cotas_compradas = parseInt(n_cotas);
	minhas_cotas = 0;
	acm = 0;
	meses_totais = 0;

	do{
		do{
			meses = meses + 1;
			minhas_cotas = minhas_cotas + cotas_compradas;
		}while(minhas_cotas < cont);

		acm = acm + minhas_cotas;
		meses_totais = meses_totais + meses;
		cotas_compradas = cotas_compradas + 1;
		meses = 0;
		minhas_cotas = 0;
	}while(acm <= 3000);
	meses_totais = meses_totais / 12;

	document.getElementById('tempo_adquirir').innerText=meses_totais;
}
