//alert("Olá Mundo!!!")
//document.write("Olá Mundo!!!")

/* var nome = "Lucas"
nome = "Maria"
alert(nome) */

/* var a,b;
a= 5;
b ="5 Kg de açucar";
document.write("O valor da variável A é:"+a);
document.write("<p>"+"O valor da variável B é:"+b+"<p>")
document.write("<p>"+"O valor da variável A dividido por 2 é: "+a/2+"<p>")
document.write("<p>"+"O valor da variável B dividido por 2 é: "+b/2+"<p>")


document.write("<p>"+"O valor da variável B dividido por 2 é: "+parseInt(b)/2+"<p>") */

/*Converter String em Number(Float)*/
/* var c,d;
c= 5;
d ="45.78 Kg de açucar";
document.write("O valor da variável A é:"+c);
document.write("<p>"+"O valor da variável B é:"+d+"<p>")
document.write("<p>"+"O valor da variável A dividido por 2 é: "+c/2+"<p>")
document.write("<p>"+"O valor da variável B dividido por 2 é: "+d/2+"<p>")

document.write("<p>"+"O valor da variável B dividido por 2 é: "+parseInt(d)/2+"<p>")
document.write("<p>"+"O valor da variável B dividido por 2 é: "+parseFloat(d)/2+"<p>") */


/* var a,b,c;
a=6, b=3, e=1;
document.write((a>b) && (b>c));
alert((a>b) || (b==c));
alert(a != b); */

/* hoje = new Date();
xDia = hoje.getDay();
diaSemana = new Array(7);
diaSemana[0]=["Domingo","Comida Japonesa","R$32,90"];
diaSemana[1]=["Segunda-feira", "Arroz de panela de pressão com batata e calabresa","R$29,90"];
diaSemana[2]=["Terça-feira"," Batata recheada hasselback (fatiada)","R$25,90"];
diaSemana[3]=["Quarta-feira","Arroz, torresmo, couve e uma farofinha","R$21,90"];
diaSemana[4]=["Quinta-feira","Batata à portuguesa simples","R$26,90"];
diaSemana[5]=["Sexta-feira","Mussaka","R$27,90"];
diaSemana[6]=["Sábado","Churrasco", "R$28,90"]; */
/* document.write("O número da semana é: "+" "+ (xDia +1)); */
/* document.write("<p><b>"+"hoje é: "+ diaSemana[xDia]); */

/* document.write("<p><b> Dia da semana "  +(xDia+ 1)+" - "+diaSemana[xDia][0]+"<p>"+"Prato do dia é "+diaSemana[xDia][1]+"<p>"+" Valor do prato "+diaSemana[xDia][2]); */

/* a = 5;
alert("1°")
alert(++a +2);
alert("2°")
alert(a++ +2);
alert("a = "+a) */

/* b = 5;
alert("1°")
alert(--b +2);
alert("2°")
alert(b-- +2);
alert("b = "+b)*/

document.write("----------------------------------------------------------")

document.write("<p><b>"+ "Usando o método toUpperCase" + "</p></b>")
var a = ("Olá pessoal");
var b = ("Seja bem vindo ao JavaScript ");
document.write(a.toUpperCase()+"<br>")
document.write(b.toUpperCase())
document.write("<p><b>" + "Você poderá usar: "+" </p></b>")
document.write("<p><b>"+ "a.toUpperCase() + b.toLowerCase()" + "</p></b><br>")

document.write("----------------------------------------------------------")

document.write("<p><b>"+ "Usando o método toLowerCase" + "</p></b>")
document.write(a.toLowerCase()+"<br>")
document.write(b.toLowerCase())
document.write("<p><b>" + "Você poderá usar: "+" </p></b>")
document.write("<p><b>"+ "a.toLowerCase() + b.toLowerCase()" + "</p></b>")

document.write("----------------------------------------------------------")
