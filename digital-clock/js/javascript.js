
function updateTime() {
    // Seleção dos elementos
    const clock = document.getElementById("clock"),
          date = clock.querySelector(".date"),
          time = clock.querySelector(".time");

    // Atribuição : 
    const now = new Date(),  // capturando data 
          dateOptions = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }, // formatando data 
          timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false }; // formatando tempo

    
    const dateString = now.toLocaleDateString('pt-BR', dateOptions), // [ toLocaleDateString() ] Obtenha uma data como uma string, usando convenções de localidade
          timeString = now.toLocaleTimeString('pt-BR', timeOptions); // [ toLocaleTimeString() ] Obtenha a parte da hora de uma data como uma string, usando convenções de localidade

    // A propriedade [ textContent ] da interface Node representa o conteúdo de texto de um nó e dos seus descendentes.
    date.textContent = dateString;
    time.textContent = timeString;

}

// Chama a função updateTime inicialmente para evitar atrasos no carregamento da página
updateTime();

// Chama a função updateTime a cada segundo (1000ms)
setInterval(updateTime, 1000);

