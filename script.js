// variaveis do peso é das resposta dos planetas

const peso = document.getElementById("peso");
const resposta = document.getElementById("respMercurio");
const respVenus = document.getElementById("respVenus");
const respMarte = document.getElementById("respMarte");
const respJupiter = document.getElementById("respJupiter");
const respSaturno = document.getElementById("respSaturno");
const respNetuno = document.getElementById("respNetuno");

function clicar(){    
        //pegando valor de peso e transformando em numero
        const meuPeso = Number(peso.value);

        // pegando os valor do peso e multiplicando pela gravidade de cada planeta

        const somaMercurio = meuPeso * 0.34;
        const somaVenus = meuPeso * 0.88;
        const somaMarte = meuPeso * 0.38;
        const somaJupiter = meuPeso * 2.64;
        const somaSaturno = meuPeso * 1.6;
        const somaUrano = meuPeso * 0.92;
        const somaNetuno = meuPeso * 1.18;
    if (meuPeso == 0){
        // se usuario nao colocar um valor, vai aparecer esse texto avisando
        window.alert("Por favor Informe seu Peso");
    } else {
        // colocando as respostas é imagens dos planetas 
        resposta.innerHTML = ` MERCURIO <br>
            Seu peso seria ${somaMercurio.toFixed(2)} (KG) <br>
            Curiosidades: Mercúrio é o planeta  que está mais perto do Sol. <br>
            Duração do dia: 58d 15h 30m. <br>
            Temperatura média: 169,35 °C.<br>
            Composição atmosférica: hélio, sódio e oxigênio.`
        const img = document.getElementById("imagem").innerHTML = "<img src = 'imagem/planetas/mercurio.gif' width = '250' >";

    respVenus.innerHTML = `VÊNUS <br>
            Seu peso seria ${somaVenus.toFixed(2)} (KG) <br>
            Curiosidades: Vênus é o planeta mais próximo da Terra. <br>
            Duração do dia: 243d 0h 0m. <br>
            Temperatura média:462 °C. <br>
            Composição atmosférica: dióxido de carbono. (CO2)
    `;
    const imgVenus = document.getElementById("imagemVenus").innerHTML = "<img src = 'imagem/planetas/venus.gif' width = '320'>";

    respMarte.innerHTML = `MARTE <br>
            Seu peso seria ${somaMarte.toFixed(2)} (KG) <br>
            Curiosidades: Marte O planeta vermelho é o único além da Terra que possui clima. <br>
            Duração do dia: 1d 0h 37m. <br>
            Temperatura média: inverno -60 °C, verão 22 °C. <br>
            Composição atmosférica: Dióxido de Carbono e Nitrogénio.
            `;
    const imgMarte = document.getElementById("imagemMarte").innerHTML = "<img src = 'imagem/planetas/marte.png' width = '300'>";

    respJupiter.innerHTML = `JÚPITER <br>
            Seu peso seria ${somaJupiter.toFixed(2)} (KG) <br>
            Curiosidades: Júpiter é o maior planeta do Sistema Solar, ele possui 80 luas. <br>
            Duração do dia: 0d 9h 56m. <br>
            Temperatura média: -110 °C. <br>
            Composição atmosférica: 86% de hidrogênio e 14% de hélio.
            `;
    const imgJupiter = document.getElementById("imagemJupiter").innerHTML = "<img src = 'imagem/planetas/jupiter.gif' width = '300'>";

    respSaturno.innerHTML = `SATURNO <br>
            Seu peso seria ${somaSaturno.toFixed(2)} (KG) <br>
            Curiosidades: Saturno é tão pouco denso que poderia flutuar sobre a água. <br>
            Duração do dia: 0d, 10h 30m. <br>
            Temperatura média:-138 ºC. <br>
            Composição atmosférica: predominância de hidrogênio (H2) e hélio (He).
            `;
    const imgSaturno = document.getElementById("imagemSaturno").innerHTML = "<img src = 'imagem/planetas/saturno.gif' width = '360'> ";

    respUrano.innerHTML = `URANO<br>
            Seu peso seria ${somaUrano.toFixed(2)} (KG) <br>
            Curiosidades: A cor azulada característica do planeta é resultado da absorção de luz realizada pelo gás metano. <br>
            Duração do dia: 0d 17h 14m. <br>
            Temperatura média:-224 ºC. <br>
            Composição atmosférica: 83% de hidrogénio, 15% de hélio, 2% de metano e pequenas porções de acetileno.
            `;
    const imgUrano = document.getElementById("imagemUrano").innerHTML = "<img src = 'imagem/planetas/urano.png' width = '300'>";

    respNetuno.innerHTML = `NETUNO<br>
            Seu peso seria ${somaNetuno.toFixed(2)} (KG) <br>
            Curiosidades: Netuno é classificado pelos cientistas como o planeta mais frio do Sistema Solar.<br>
            Duração do dia: 0d 16h 6m. <br>
            Temperatura média:-250 ºC. <br>
            Composiçãoatmosférica: gases como hélio, metano e hidrogênio, Não apresenta superfície sólida.
            `;
    const imgNetuno = document.getElementById("imagemNetuno").innerHTML = "<img src = 'imagem/planetas/netuno.png' width = '300'>";

    }


    
    // Apagando o texto do peso

    peso.value = innerHTML = "";
}

function limpar(){
        //apagando os valores de cada resposta e imagem 
    peso.innerHTML = " ";
    resposta.style.backgroundColor = '';
    resposta.innerHTML = " ";
    respVenus.innerHTML = " ";
    respMarte.innerHTML = " ";
    respJupiter.innerHTML = " ";
    respSaturno.innerHTML = " ";
    respUrano.innerHTML = " ";
    respNetuno.innerHTML = " ";
    const img = document.getElementById("imagem").innerHTML = "<img src = '' >";
    const imgVenus = document.getElementById("imagemVenus").innerHTML = "<img src = '' >";
    const imgMarte = document.getElementById("imagemMarte").innerHTML = "<img src = '' >";
    const imgJupiter = document.getElementById("imagemJupiter").innerHTML = "<img src = '' >";
    const imgSaturno = document.getElementById("imagemSaturno").innerHTML = "<img src = '' >";
    const imgUrano = document.getElementById("imagemUrano").innerHTML = "<img src = '' >";
    const imgNetuno = document.getElementById("imagemNetuno").innerHTML = "<img src = '' >";
}

