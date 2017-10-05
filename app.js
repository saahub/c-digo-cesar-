function aux(option) {
  do{
  var answer = prompt("Indique 1) ciphar - Indique 2) deciphar");
  if(answer !==""){
    if(answer == "1") {
     var other = prompt("ingresa una palabra");
     cipher(other);

    }
    else if(answer ==="2"){
         var other2 = prompt("ingresa una palabra");
         decipher(other2);
  } else {
         alert("ingrese una opcion valida");
         }
          }
  } while (answer === "" || (answer != "1" && answer != "2"));

}


function cipher(string){
  var newString = ""; //crear string vacío para ir concatenándole los índices cifrados
  for (var i = 0 ; i < string.length ; i++){
    if (string[i] == " "){ //si el índice es un espacio, devolver un espacio
      newString = newString + " ";
    }else{
      var letter = string.charCodeAt(i); //pasar el contenido del índice a ASCII
      letter = (((letter - 65) + 33) % 26) + 65;  //cifrar el índice. aquí es de ASCII a ASCII
      letter = String.fromCharCode(letter); // pasar a letra el índice cifrado en ASCII
      newString = newString + letter;
    }
  }
   alert(newString);
}

function decipher()
{
 var wordCipher = prompt("Ingrese una palabra para descifrar: ");
 var wordDecipher = "";
 for(var i=0; i<26; i++)
 {
   if (wordCipher[i] == " "){ //si el índice es un espacio, devolver un espacio
            wordDescipher = wordDescipher + " ";
        }else{
     var letter = wordDecipher.charCodeAt(i); //pasar el contenido del índice a ASCII
     console.log(letter);
        letter = ((letter - 33) + 26);//cifrar el índice. aquí es de ASCII a ASCII
        console.log(letter);
     wordDecipher= wordDecipher + String.fromCharCode(letter);// pasar a letra el índice cifrado en ASCII
        }
         
 }
   alert(wordDecipher);
 }

   aux(); 


