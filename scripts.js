const btn = document.querySelector("#btn-form");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    const informacao = document.querySelector(".informacao");

    // ESSE É O VALOR QUE O CLIENTE VAI DIGITAR
    const queroReceber = document.querySelector(".quero-receber");

    const valueQueroReceber = queroReceber.value;

    const queroReceberConvertido = parseInt(valueQueroReceber);

    //RECEBENDO DADOS DO HTML
    const valorCadastrar = document.querySelector(".valorCadastrar");
    const totalPagar = document.querySelector(".totalPagar");
    const cadaParcela = document.querySelector(".cada-parcela");

    // VALOR DE CADA PARCELA (DISPLAY NONE)

    const parcela1 = document.querySelector(".parcela1");
    const parcela2 = document.querySelector(".parcela2");
    const parcela3 = document.querySelector(".parcela3");
    const parcela4 = document.querySelector(".parcela4");
    const parcela5 = document.querySelector(".parcela5");
    const parcela6 = document.querySelector(".parcela6");
    const parcela7 = document.querySelector(".parcela7");
    const parcela8 = document.querySelector(".parcela8");
    const parcela9 = document.querySelector(".parcela9");
    const parcela10 = document.querySelector(".parcela10");
    const parcela11 = document.querySelector(".parcela11");
    const parcela12 = document.querySelector(".parcela12");

    //ESCOLHA DA QUANTIDADES DE PARCELAS
    const qntParcelas = document.querySelector("#qnt-parcelas");
    const textQntParcelas = qntParcelas.options[qntParcelas.selectedIndex].text;
    const qntParcelasConvertido = parseInt(textQntParcelas);

    //TAXAS E CALCULOS
    const tac = queroReceberConvertido / (1 - 0.03) - queroReceberConvertido;
    const prestamista = 0.00035 * qntParcelasConvertido;
    const prestamistaDaOperacao =
        queroReceberConvertido / (1 - prestamista) - queroReceberConvertido;
    const tacPrestamista = tac + prestamistaDaOperacao;

    const valorDoEmprestimo = queroReceberConvertido + tacPrestamista;

    const jurosEfetivo = 1 - 0.007272;

    const principal = valorDoEmprestimo / qntParcelasConvertido;

    // VARIAVEIS PARA CADA PARCELAS
    var calculoParcela1 =
        principal + (valorDoEmprestimo / jurosEfetivo - valorDoEmprestimo);
    var restoParcela1 = valorDoEmprestimo - calculoParcela1;

    var calculoParcela2 =
        principal + (restoParcela1 / jurosEfetivo - restoParcela1);
    var restoParcela2 = restoParcela1 - calculoParcela2;

    var calculoParcela3 =
        principal + (restoParcela2 / jurosEfetivo - restoParcela2);
    var restoParcela3 = restoParcela2 - calculoParcela3;

    var calculoParcela4 =
        principal + (restoParcela3 / jurosEfetivo - restoParcela3);
    var restoParcela4 = restoParcela3 - calculoParcela4;

    var calculoParcela5 =
        principal + (restoParcela4 / jurosEfetivo - restoParcela4);
    var restoParcela5 = restoParcela4 - calculoParcela5;

    var calculoParcela6 =
        principal + (restoParcela5 / jurosEfetivo - restoParcela5);
    var restoParcela6 = restoParcela5 - calculoParcela6;

    var calculoParcela7 =
        principal + (restoParcela6 / jurosEfetivo - restoParcela6);
    var restoParcela7 = restoParcela6 - calculoParcela7;

    var calculoParcela8 =
        principal + (restoParcela7 / jurosEfetivo - restoParcela7);
    var restoParcela8 = restoParcela7 - calculoParcela8;

    var calculoParcela9 =
        principal + (restoParcela8 / jurosEfetivo - restoParcela8);
    var restoParcela9 = restoParcela8 - calculoParcela9;

    var calculoParcela10 =
        principal + (restoParcela9 / jurosEfetivo - restoParcela9);
    var restoParcela10 = restoParcela9 - calculoParcela10;

    var calculoParcela11 =
        principal + (restoParcela10 / jurosEfetivo - restoParcela10);
    var restoParcela11 = restoParcela10 - calculoParcela11;

    var calculoParcela12 =
        principal + (restoParcela11 / jurosEfetivo - restoParcela11);

    //-------------
    let opcoes = {
        style: "decimal",
        useGrouping: true,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    };

    valorCadastrar.innerHTML =
        "Valor a cadastrar: R$ " +
        valorDoEmprestimo.toLocaleString("pt-BR", opcoes);

    switch (qntParcelasConvertido) {
        case 4:
            parcela1.innerHTML =
                "1 - " + calculoParcela1.toLocaleString("pt-BR", opcoes);
            parcela2.innerHTML =
                "2 - " + calculoParcela2.toLocaleString("pt-BR", opcoes);
            parcela3.innerHTML =
                "3 - " + calculoParcela3.toLocaleString("pt-BR", opcoes);
            parcela4.innerHTML =
                "4 - " + calculoParcela4.toLocaleString("pt-BR", opcoes);

            parcela1.style.display = "block";
            parcela2.style.display = "block";
            parcela3.style.display = "block";
            parcela4.style.display = "block";
            parcela5.style.display = "none";
            parcela6.style.display = "none";
            parcela7.style.display = "none";
            parcela8.style.display = "none";
            parcela9.style.display = "none";
            parcela10.style.display = "none";
            parcela11.style.display = "none";
            parcela12.style.display = "none";

            const soma =
                calculoParcela1 +
                calculoParcela2 +
                calculoParcela3 +
                calculoParcela4;

            totalPagar.innerHTML =
                "Total a pagar: R$ " + soma.toLocaleString("pt-BR", opcoes);

            valorCadastrar.style.display = "block";
            informacao.style.display = "block";
            totalPagar.style.display = "block";

            break;

        case 5:
            parcela1.innerHTML =
                "1 - " + calculoParcela1.toLocaleString("pt-BR", opcoes);
            parcela2.innerHTML =
                "2 - " + calculoParcela2.toLocaleString("pt-BR", opcoes);
            parcela3.innerHTML =
                "3 - " + calculoParcela3.toLocaleString("pt-BR", opcoes);
            parcela4.innerHTML =
                "4 - " + calculoParcela4.toLocaleString("pt-BR", opcoes);
            parcela5.innerHTML =
                "5 - " + calculoParcela5.toLocaleString("pt-BR", opcoes);

            parcela1.style.display = "block";
            parcela2.style.display = "block";
            parcela3.style.display = "block";
            parcela4.style.display = "block";
            parcela5.style.display = "block";
            parcela6.style.display = "none";
            parcela7.style.display = "none";
            parcela8.style.display = "none";
            parcela9.style.display = "none";
            parcela10.style.display = "none";
            parcela11.style.display = "none";
            parcela12.style.display = "none";

            const soma5 =
                calculoParcela1 +
                calculoParcela2 +
                calculoParcela3 +
                calculoParcela4 +
                calculoParcela5;

            totalPagar.innerHTML =
                "Total a pagar: R$ " + soma5.toLocaleString("pt-BR", opcoes);

            valorCadastrar.style.display = "block";
            informacao.style.display = "block";
            totalPagar.style.display = "block";
            break;

        case 6:
            parcela1.innerHTML =
                "1 - " + calculoParcela1.toLocaleString("pt-BR", opcoes);
            parcela2.innerHTML =
                "2 - " + calculoParcela2.toLocaleString("pt-BR", opcoes);
            parcela3.innerHTML =
                "3 - " + calculoParcela3.toLocaleString("pt-BR", opcoes);
            parcela4.innerHTML =
                "4 - " + calculoParcela4.toLocaleString("pt-BR", opcoes);
            parcela5.innerHTML =
                "5 - " + calculoParcela5.toLocaleString("pt-BR", opcoes);
            parcela6.innerHTML =
                "6 - " + calculoParcela6.toLocaleString("pt-BR", opcoes);

            parcela1.style.display = "block";
            parcela2.style.display = "block";
            parcela3.style.display = "block";
            parcela4.style.display = "block";
            parcela5.style.display = "block";
            parcela6.style.display = "block";
            parcela7.style.display = "none";
            parcela8.style.display = "none";
            parcela9.style.display = "none";
            parcela10.style.display = "none";
            parcela11.style.display = "none";
            parcela12.style.display = "none";

            const soma6 =
                calculoParcela1 +
                calculoParcela2 +
                calculoParcela3 +
                calculoParcela4 +
                calculoParcela5 +
                calculoParcela6;

            totalPagar.innerHTML =
                "Total a pagar: R$ " + soma6.toLocaleString("pt-BR", opcoes);

            valorCadastrar.style.display = "block";
            informacao.style.display = "block";
            totalPagar.style.display = "block";
            break;

        case 7:
            parcela1.innerHTML =
                "1 - " + calculoParcela1.toLocaleString("pt-BR", opcoes);
            parcela2.innerHTML =
                "2 - " + calculoParcela2.toLocaleString("pt-BR", opcoes);
            parcela3.innerHTML =
                "3 - " + calculoParcela3.toLocaleString("pt-BR", opcoes);
            parcela4.innerHTML =
                "4 - " + calculoParcela4.toLocaleString("pt-BR", opcoes);
            parcela5.innerHTML =
                "5 - " + calculoParcela5.toLocaleString("pt-BR", opcoes);
            parcela6.innerHTML =
                "6 - " + calculoParcela6.toLocaleString("pt-BR", opcoes);
            parcela7.innerHTML =
                "7 - " + calculoParcela7.toLocaleString("pt-BR", opcoes);

            parcela1.style.display = "block";
            parcela2.style.display = "block";
            parcela3.style.display = "block";
            parcela4.style.display = "block";
            parcela5.style.display = "block";
            parcela6.style.display = "block";
            parcela7.style.display = "block";
            parcela8.style.display = "none";
            parcela9.style.display = "none";
            parcela10.style.display = "none";
            parcela11.style.display = "none";
            parcela12.style.display = "none";

            const soma7 =
                calculoParcela1 +
                calculoParcela2 +
                calculoParcela3 +
                calculoParcela4 +
                calculoParcela5 +
                calculoParcela6 +
                calculoParcela7;

            totalPagar.innerHTML =
                "Total a pagar: R$ " + soma7.toLocaleString("pt-BR", opcoes);

            valorCadastrar.style.display = "block";
            informacao.style.display = "block";
            totalPagar.style.display = "block";
            break;

        case 8:
            parcela1.innerHTML =
                "1 - " + calculoParcela1.toLocaleString("pt-BR", opcoes);
            parcela2.innerHTML =
                "2 - " + calculoParcela2.toLocaleString("pt-BR", opcoes);
            parcela3.innerHTML =
                "3 - " + calculoParcela3.toLocaleString("pt-BR", opcoes);
            parcela4.innerHTML =
                "4 - " + calculoParcela4.toLocaleString("pt-BR", opcoes);
            parcela5.innerHTML =
                "5 - " + calculoParcela5.toLocaleString("pt-BR", opcoes);
            parcela6.innerHTML =
                "6 - " + calculoParcela6.toLocaleString("pt-BR", opcoes);
            parcela7.innerHTML =
                "7 - " + calculoParcela7.toLocaleString("pt-BR", opcoes);
            parcela8.innerHTML =
                "8 - " + calculoParcela8.toLocaleString("pt-BR", opcoes);

            parcela1.style.display = "block";
            parcela2.style.display = "block";
            parcela3.style.display = "block";
            parcela4.style.display = "block";
            parcela5.style.display = "block";
            parcela6.style.display = "block";
            parcela7.style.display = "block";
            parcela8.style.display = "block";
            parcela9.style.display = "none";
            parcela10.style.display = "none";
            parcela11.style.display = "none";
            parcela12.style.display = "none";

            const soma8 =
                calculoParcela1 +
                calculoParcela2 +
                calculoParcela3 +
                calculoParcela4 +
                calculoParcela5 +
                calculoParcela6 +
                calculoParcela7 +
                calculoParcela8;

            totalPagar.innerHTML =
                "Total a pagar: R$ " + soma8.toLocaleString("pt-BR", opcoes);

            valorCadastrar.style.display = "block";
            informacao.style.display = "block";
            totalPagar.style.display = "block";
            break;

        case 9:
            parcela1.innerHTML =
                "1 - " + calculoParcela1.toLocaleString("pt-BR", opcoes);
            parcela2.innerHTML =
                "2 - " + calculoParcela2.toLocaleString("pt-BR", opcoes);
            parcela3.innerHTML =
                "3 - " + calculoParcela3.toLocaleString("pt-BR", opcoes);
            parcela4.innerHTML =
                "4 - " + calculoParcela4.toLocaleString("pt-BR", opcoes);
            parcela5.innerHTML =
                "5 - " + calculoParcela5.toLocaleString("pt-BR", opcoes);
            parcela6.innerHTML =
                "6 - " + calculoParcela6.toLocaleString("pt-BR", opcoes);
            parcela7.innerHTML =
                "7 - " + calculoParcela7.toLocaleString("pt-BR", opcoes);
            parcela8.innerHTML =
                "8 - " + calculoParcela8.toLocaleString("pt-BR", opcoes);
            parcela9.innerHTML =
                "9 - " + calculoParcela9.toLocaleString("pt-BR", opcoes);

            parcela1.style.display = "block";
            parcela2.style.display = "block";
            parcela3.style.display = "block";
            parcela4.style.display = "block";
            parcela5.style.display = "block";
            parcela6.style.display = "block";
            parcela7.style.display = "block";
            parcela8.style.display = "block";
            parcela9.style.display = "block";
            parcela10.style.display = "none";
            parcela11.style.display = "none";
            parcela12.style.display = "none";

            const soma9 =
                calculoParcela1 +
                calculoParcela2 +
                calculoParcela3 +
                calculoParcela4 +
                calculoParcela5 +
                calculoParcela6 +
                calculoParcela7 +
                calculoParcela8 +
                calculoParcela9;

            totalPagar.innerHTML =
                "Total a pagar: R$ " + soma9.toLocaleString("pt-BR", opcoes);

            valorCadastrar.style.display = "block";
            informacao.style.display = "block";
            totalPagar.style.display = "block";
            break;

        case 10:
            parcela1.innerHTML =
                "1 - " + calculoParcela1.toLocaleString("pt-BR", opcoes);
            parcela2.innerHTML =
                "2 - " + calculoParcela2.toLocaleString("pt-BR", opcoes);
            parcela3.innerHTML =
                "3 - " + calculoParcela3.toLocaleString("pt-BR", opcoes);
            parcela4.innerHTML =
                "4 - " + calculoParcela4.toLocaleString("pt-BR", opcoes);
            parcela5.innerHTML =
                "5 - " + calculoParcela5.toLocaleString("pt-BR", opcoes);
            parcela6.innerHTML =
                "6 - " + calculoParcela6.toLocaleString("pt-BR", opcoes);
            parcela7.innerHTML =
                "7 - " + calculoParcela7.toLocaleString("pt-BR", opcoes);
            parcela8.innerHTML =
                "8 - " + calculoParcela8.toLocaleString("pt-BR", opcoes);
            parcela9.innerHTML =
                "9 - " + calculoParcela9.toLocaleString("pt-BR", opcoes);
            parcela10.innerHTML =
                "10 - " + calculoParcela10.toLocaleString("pt-BR", opcoes);

            parcela1.style.display = "block";
            parcela2.style.display = "block";
            parcela3.style.display = "block";
            parcela4.style.display = "block";
            parcela5.style.display = "block";
            parcela6.style.display = "block";
            parcela7.style.display = "block";
            parcela8.style.display = "block";
            parcela9.style.display = "block";
            parcela10.style.display = "block";
            parcela11.style.display = "none";
            parcela12.style.display = "none";

            const soma10 =
                calculoParcela1 +
                calculoParcela2 +
                calculoParcela3 +
                calculoParcela4 +
                calculoParcela5 +
                calculoParcela6 +
                calculoParcela7 +
                calculoParcela8 +
                calculoParcela9 +
                calculoParcela10;

            totalPagar.innerHTML =
                "Total a pagar: R$ " + soma10.toLocaleString("pt-BR", opcoes);

            valorCadastrar.style.display = "block";
            informacao.style.display = "block";
            totalPagar.style.display = "block";
            break;

        case 11:
            parcela1.innerHTML =
                "1 - " + calculoParcela1.toLocaleString("pt-BR", opcoes);
            parcela2.innerHTML =
                "2 - " + calculoParcela2.toLocaleString("pt-BR", opcoes);
            parcela3.innerHTML =
                "3 - " + calculoParcela3.toLocaleString("pt-BR", opcoes);
            parcela4.innerHTML =
                "4 - " + calculoParcela4.toLocaleString("pt-BR", opcoes);
            parcela5.innerHTML =
                "5 - " + calculoParcela5.toLocaleString("pt-BR", opcoes);
            parcela6.innerHTML =
                "6 - " + calculoParcela6.toLocaleString("pt-BR", opcoes);
            parcela7.innerHTML =
                "7 - " + calculoParcela7.toLocaleString("pt-BR", opcoes);
            parcela8.innerHTML =
                "8 - " + calculoParcela8.toLocaleString("pt-BR", opcoes);
            parcela9.innerHTML =
                "9 - " + calculoParcela9.toLocaleString("pt-BR", opcoes);
            parcela10.innerHTML =
                "10 - " + calculoParcela10.toLocaleString("pt-BR", opcoes);
            parcela11.innerHTML =
                "11 - " + calculoParcela11.toLocaleString("pt-BR", opcoes);

            parcela1.style.display = "block";
            parcela2.style.display = "block";
            parcela3.style.display = "block";
            parcela4.style.display = "block";
            parcela5.style.display = "block";
            parcela6.style.display = "block";
            parcela7.style.display = "block";
            parcela8.style.display = "block";
            parcela9.style.display = "block";
            parcela10.style.display = "block";
            parcela11.style.display = "block";
            parcela12.style.display = "none";

            const soma11 =
                calculoParcela1 +
                calculoParcela2 +
                calculoParcela3 +
                calculoParcela4 +
                calculoParcela5 +
                calculoParcela6 +
                calculoParcela7 +
                calculoParcela8 +
                calculoParcela9 +
                calculoParcela10 +
                calculoParcela11;

            totalPagar.innerHTML =
                "Total a pagar: R$ " + soma11.toLocaleString("pt-BR", opcoes);

            valorCadastrar.style.display = "block";
            informacao.style.display = "block";
            totalPagar.style.display = "block";
            break;

        case 12:
            parcela1.innerHTML =
                "1 - " + calculoParcela1.toLocaleString("pt-BR", opcoes);
            parcela2.innerHTML =
                "2 - " + calculoParcela2.toLocaleString("pt-BR", opcoes);
            parcela3.innerHTML =
                "3 - " + calculoParcela3.toLocaleString("pt-BR", opcoes);
            parcela4.innerHTML =
                "4 - " + calculoParcela4.toLocaleString("pt-BR", opcoes);
            parcela5.innerHTML =
                "5 - " + calculoParcela5.toLocaleString("pt-BR", opcoes);
            parcela6.innerHTML =
                "6 - " + calculoParcela6.toLocaleString("pt-BR", opcoes);
            parcela7.innerHTML =
                "7 - " + calculoParcela7.toLocaleString("pt-BR", opcoes);
            parcela8.innerHTML =
                "8 - " + calculoParcela8.toLocaleString("pt-BR", opcoes);
            parcela9.innerHTML =
                "9 - " + calculoParcela9.toLocaleString("pt-BR", opcoes);
            parcela10.innerHTML =
                "10 - " + calculoParcela10.toLocaleString("pt-BR", opcoes);
            parcela11.innerHTML =
                "11 - " + calculoParcela11.toLocaleString("pt-BR", opcoes);
            parcela12.innerHTML =
                "12 - " + calculoParcela12.toLocaleString("pt-BR", opcoes);

            parcela1.style.display = "block";
            parcela2.style.display = "block";
            parcela3.style.display = "block";
            parcela4.style.display = "block";
            parcela5.style.display = "block";
            parcela6.style.display = "block";
            parcela7.style.display = "block";
            parcela8.style.display = "block";
            parcela9.style.display = "block";
            parcela10.style.display = "block";
            parcela11.style.display = "block";
            parcela12.style.display = "block";

            const soma12 =
                calculoParcela1 +
                calculoParcela2 +
                calculoParcela3 +
                calculoParcela4 +
                calculoParcela5 +
                calculoParcela6 +
                calculoParcela7 +
                calculoParcela8 +
                calculoParcela9 +
                calculoParcela10 +
                calculoParcela11 +
                calculoParcela12;

            totalPagar.innerHTML =
                "Total a pagar: R$ " + soma12.toLocaleString("pt-BR", opcoes);

            valorCadastrar.style.display = "block";
            informacao.style.display = "block";
            totalPagar.style.display = "block";

            break;

        default:
            valorCadastrar.innerHTML =
                "Certifique-se de que todas as informações foram incluídas.";
            valorCadastrar.style.display = "block";
            informacao.style.display = "none";
            totalPagar.style.display = "none";
            parcela1.style.display = "none";
            parcela2.style.display = "none";
            parcela3.style.display = "none";
            parcela4.style.display = "none";
            parcela5.style.display = "none";
            parcela6.style.display = "none";
            parcela7.style.display = "none";
            parcela8.style.display = "none";
            parcela9.style.display = "none";
            parcela10.style.display = "none";
            parcela11.style.display = "none";
            parcela12.style.display = "none";
    }

    if (queroReceberConvertido < 100) {
        valorCadastrar.innerHTML = "Escolha valores a partir de R$ 100,00";
        valorCadastrar.style.display = "block";
        informacao.style.display = "none";
        totalPagar.style.display = "none";
        parcela1.style.display = "none";
        parcela2.style.display = "none";
        parcela3.style.display = "none";
        parcela4.style.display = "none";
        parcela5.style.display = "none";
        parcela6.style.display = "none";
        parcela7.style.display = "none";
        parcela8.style.display = "none";
        parcela9.style.display = "none";
        parcela10.style.display = "none";
        parcela11.style.display = "none";
        parcela12.style.display = "none";
    } else if (isNaN(queroReceberConvertido)) {
        valorCadastrar.innerHTML =
            "Certifique-se de que todas as informações foram incluídas.";
        valorCadastrar.style.display = "block";
        informacao.style.display = "none";
        totalPagar.style.display = "none";
        parcela1.style.display = "none";
        parcela2.style.display = "none";
        parcela3.style.display = "none";
        parcela4.style.display = "none";
        parcela5.style.display = "none";
        parcela6.style.display = "none";
        parcela7.style.display = "none";
        parcela8.style.display = "none";
        parcela9.style.display = "none";
        parcela10.style.display = "none";
        parcela11.style.display = "none";
        parcela12.style.display = "none";
    }
});
