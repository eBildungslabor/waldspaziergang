function sounds(){
    
    var rand = [
        'https://videokonferenzintro.de/ressourcen/wald1.mp3',
          'https://videokonferenzintro.de/ressourcen/wald2.mp3',
            'https://videokonferenzintro.de/ressourcen/wald3.mp3',
              'https://videokonferenzintro.de/ressourcen/wald4.mp3',
                'https://videokonferenzintro.de/ressourcen/wald5.mp3',
                  'https://videokonferenzintro.de/ressourcen/wald6.mp3',
                    'https://videokonferenzintro.de/ressourcen/wald7.mp3',
                      'https://videokonferenzintro.de/ressourcen/wald8.mp3',
                        'https://videokonferenzintro.de/ressourcen/wald9.mp3',
         'https://videokonferenzintro.de/ressourcen/wald10.mp3'];

    var randSound = rand[Math.floor(Math.random() * rand.length)];
    
    var player=document.getElementById('player');
    var sourceMp3=document.getElementById('sourceMp3');

    sourceMp3.src='' + randSound + '';
    
   player.load();
   player.play();
}


function hide()
{
    document.getElementById("starten").style.display='none';
}

function texthide()
{
    document.getElementById("hide2").style.display='none';
}

function redirect(){
 var delay = 60000; // time in milliseconds

 // Display message
 document.getElementById("message").innerHTML = "Schließe die Augen, lehne Dich zurück und entspanne Dich für 60 Sekunden. Danach gelangst Du zur Videokonferenz.";
 
 setTimeout(function(){
  window.location = "vk.html";
 },delay);
 
}



 // Selecting button element
    var btn = document.getElementById("starten");
     
    // Assigning event listeners to the button
    btn.addEventListener("click", sounds);
    btn.addEventListener("click", hide);
   btn.addEventListener("click", redirect);
   btn.addEventListener("click", texthide);
