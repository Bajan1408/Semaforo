let contador = 1;

const semaforo = setInterval(() => {
	if(contador <= 5){
	const verm = document.getElementById("verm");
    verm.style.filter="brightness(500%)";
	verm.style.boxShadow="0 0 15px 3px";
    verde.style.filter="brightness(10%)";
    amar.style.filter="brightness(10%)";
	}
	  else if(contador > 5 && contador <= 10){
	   const amar = document.getElementById("amar");
	   amar.style.filter="brightness(200%)";
	   amar.style.boxShadow="0 0 15px 3px";
	   verm.style.filter="brightness(10%)";
	   verde.style.filter="brightness(10%)";  
	
	} else if(contador > 10 && contador <= 15){
       const vede = document.getElementById("verde");
       verde.style.filter="brightness(200%)";
	   verde.style.boxShadow="0 0 15px 3px";
       amar.style.filter="brightness(10%)";
       verm.style.filter="brightness(10%)";
	
	} else if(contador > 15){
		contador = 0; 
	}

 contador += 1;	
 
 }, 1000)
 
  const paraSemaforo = document.getElementById('parar_semaforo');
  
        paraSemaforo.addEventListener("click", () => {
		clearInterval(semaforo);
        paraSemaforo.style.backgroundColor='grey';	
        alert('Semáforo parado, pressione F5 para continuar!');		
        });
 
  
  
