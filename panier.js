document.addEventListener('DOMContentLoaded',function(){
    //recupération des elements sur l'article 1
    var plusButton1 = document.querySelector('button.plus-btn1');
    var minusbutton1 = document.querySelector('button.minus-btn1');
    var removebutton1 = document.querySelector('i.remove-btn1');
    var quantité1 =document.querySelector('span.quantity1');
    var total1 =document.querySelector('span.total1');
    var like =document.getElementById('heart')
    var total =document.getElementById('total-price')
    nombrearticle1 = 1;

    //initialisation affichage quantité1
    quantité1.textContent = nombrearticle1;

    //click boutton +
    plusButton1.addEventListener('click',function(){
        nombrearticle1 += 1
        quantité1.textContent = nombrearticle1;

    //prix article 1 quand on click sur +
        prix1 = 100*nombrearticle1
        total1.textContent=prix1
        //total
        prixTotal = prix1 + parseInt(total2.textContent);
        total.textContent = prixTotal;

    });
     //click boutton -
     minusbutton1.addEventListener('click',function(){
        if( nombrearticle1 >=2){
        nombrearticle1 -=1
    }
        quantité1.textContent = nombrearticle1;

    //prix article 1 quand on click sur -
        prix1 =100*nombrearticle1
        total1.textContent=prix1
    //total
        
    prixTotal = prix1 + parseInt(total2.textContent);
    total.textContent = prixTotal;

     });
     
     //boutton1 like
     like.addEventListener('click',function(){
        like.style.color='red'
     });
    
  //recupération des elements sur l'article 2
  var plusButton2 = document.querySelector('button.plus-btn2');
  var minusbutton2 = document.querySelector('button.minus-btn2');
  var removebutton2 = document.querySelector('i.remove-btn2');
  var quantité2 =document.querySelector('span.quantity2');
  var total2 =document.querySelector('span.total2');
  var like2 =document.getElementById('heart2')
  nombrearticle2 = 1;

  //initialisation affichage quantité 2
  quantité2.textContent = nombrearticle2;
  //click boutton2 +
  plusButton2.addEventListener('click',function(){
      nombrearticle2 += 1
      quantité2.textContent = nombrearticle2;

  //prix article 2 quand on click sur +
      prix2 = 800*nombrearticle2
      total2.textContent=prix2

    //total
    prixTotal = parseInt(total1.textContent) + prix2;
        total.textContent = prixTotal;
  });
   //click boutton2 -
  
   minusbutton2.addEventListener('click',function(price1){
      if( nombrearticle2 >=2){
      nombrearticle2 -=1
    }
      quantité2.textContent = nombrearticle2;

  //prix article 2 quand on click sur -
      prix2 =800* nombrearticle2
      total2.textContent=prix2
    //total
    prixTotal = parseInt(total1.textContent) + prix2;
    total.textContent = prixTotal;

     
   });
   
   //boutton1 like
   like2.addEventListener('click',function(){
      like2.style.color='red'
   });
    //boutton1 supprimer article 1
    var parentElement1 = document.querySelector('body')
    var childElement1 = document.querySelector('div.article1')
       removebutton1.addEventListener('click',function(){
        parentElement1.removeChild(childElement1);

        // Mise à jour du total
    total1.textContent=0
        var prix1 = parseFloat(total1.textContent);
        var prix2 = parseFloat(total2.textContent) ;
        var prixTotal = prix1 + prix2;
        total.textContent = prixTotal;
    });
   //boutton2 supprimer article2
   var parentElement2 = document.querySelector('body')
   var childElement2 = document.querySelector('div.article2')
  removebutton2.addEventListener('click',function(){
      parentElement2.removeChild(childElement2)

       // Mise à jour du total
       total2.textContent=0
       var prix1 = parseFloat(total1.textContent);
        var prix2 = parseFloat(total2.textContent) ;
        var prixTotal = prix1 + prix2;
        total.textContent = prixTotal;
   });

     
})
