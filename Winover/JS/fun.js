let nome = document.getElementById('nome_cliente');
let nomeq = document.querySelector('#nome_cliente')
let btnadd = document.getElementById('b');
let main = document.getElementById('s')
function add(){
    let nome_input= nome.value;

    if(nome_input !=="" && nome_input !== null && nome_input !== undefined){
    const script =`<main>
    <div>
        <h2>teste</h2>
        <p>${nome_input}. vou passar umas informações importantes para o senhor
         </p>
    </div>
</main>`;
    main.innerHTML = script;
    }
}









