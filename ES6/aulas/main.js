class render {
    static element(parent, child, text){
        let childEl = document.createElement(child)
        let textEl = document.createTextNode(text);
        childEl.appendChild(textEl);
        parent.appendChild(childEl);
    }
}


//Aula Classes
// Criando uma classe (será a classe Pai)
class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        try {
            this.listEl;
            render.element(this.listEl, 'li', data);
        } catch(e){
            
        }
    }
}

// Extendendo uma classe (Herança) (Será a Classe filha)
class TodoList extends List {
    constructor(user = "Tati", listId = 'todolist') {
        super(); //chama o constructor da classe pai
        this.user = user;
        this.userEl = document.getElementById('user');
        this.listEl = document.getElementById(listId);
    }
    mostraUsuario(){
        render.element(this.userEl, 'p', "ToDos do usuário " + this.user + ":");
    }
}
const MinhaLista = new TodoList("João");
document.getElementById('adicionarTodo').onclick = function () {
    MinhaLista.add('Fazer café');
}
MinhaLista.mostraUsuario();

/* Métodos Estáticos
 -não precisa dar new para instanciar
 -método estático não enxerga o restante da classe
 -usar para passar uma informação para o método, 
 para que ele retorne algo de forma independente do
 resto da classe
 -normalmente a classe não tem constructor
*/

// Daria erro
class UsersList {
    constructor() {
        this.users = [];
    }
    static addUser(){
        //this.users.push('Novo Usuário');
        //console.log(this.users); //vai dar erro
    }
}
UsersList.addUser();

//Não Daria Erro
class operMat {
    static adicao(a, b){
        this.staticEl = document.getElementById('staticclasses');
        let soma=a+b;
        render.element(this.staticEl, 'li', a + " + " + b + " = " + soma);
    }
    static subtracao(a,b){
        this.staticEl = document.getElementById('staticclasses');
        let diferenca=a-b;
        render.element(this.staticEl, 'li', a + " - " + b + " = " + diferenca);
    }
    static multiplicacao(a,b){
        this.staticEl = document.getElementById('staticclasses');
        let produto=a*b;
        render.element(this.staticEl, 'li', a + " * " + b + " = " + produto);
    }
    static divisao(a,b){
        this.staticEl = document.getElementById('staticclasses');
        let quociente;
        b!==0 ? quociente = a/b : quociente = 'Erro (Impossível dividir por zero)';
        render.element(this.staticEl, 'li', a + " : " + b + " = " + quociente);
    }
}
operMat.adicao(1, 3);
operMat.subtracao(5, 9);
operMat.multiplicacao(2, 8);
operMat.divisao(10,2);
operMat.divisao(10,0);


// Aula Const e Letra
class testConst{
    static inicia(){
        let constEl = document.getElementById('const');
        const usuario = {nome: "Tati"};
        render.element(constEl,'li', usuario.nome);
        usuario.nome = "João"; //constantes podem ser mutadas, ou seja mantém o formato do objeto mas altera os valores dentro do objeto
        render.element(constEl, 'li', usuario.nome);
    }    
}
testConst.inicia();

class testLet{
    static inicia() {
        const letEl = document.getElementById('let');
        let y = 3;
        render.element(letEl, 'li', "y antes da função: " + y);
        testLet.teste(10, letEl);
        try{
            render.element(letEl, 'li', "y após a função: " + y);
        } catch(e) {
            render.element(letEl, 'li', "y fora da função: " + e);
        }
    }
    static teste(x, letEl){
        let y = 2;
        render.element(letEl, 'li', "y dentro da função antes do if: " + y);
        if (x > 5){
            let y = 4;
            render.element(letEl, 'li', "y dentro do if: " + y);
        }
        render.element(letEl, 'li', "y dentro da função após o if: " + y + " (o valor retornou ao valor original)");
    }
}
testLet.inicia();

class testVar{
    static inicia(){
        const varEl = document.getElementById('var');
        var z = 3;
        render.element(varEl, 'li', "z antes da função: " + z);
        testVar.teste(10, varEl);
        try{
            render.element(varEl, 'li', "z após a função: " + z);
        } catch(e) {
            render.element(varEl, 'li', "z após função: " + e);
        }
    }
    static teste(x, varEl){
        var z = 2;
        render.element(varEl, 'li', "z dentro da função antes do if: " + z);
        if (x > 5){
            var z = 4;
            render.element(varEl, 'li', "z dentro do if: " + z);
        }
        render.element(varEl, 'li', "z dentro da função após o if: " + z + " (o valor NÃO retornou ao valor original)");
    }
}
testVar.inicia();

//Operações com vetores
