const titulo = document.getElementById('text');

function Get(){
    var ramdon = Math.floor(Math.random() * 11);
    titulo.textContent = ramdon;

    console.log(ramdon)

}
