"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var render = /*#__PURE__*/function () {
  function render() {
    _classCallCheck(this, render);
  }

  _createClass(render, null, [{
    key: "element",
    value: function element(parent, child, text) {
      var childEl = document.createElement(child);
      var textEl = document.createTextNode(text);
      childEl.appendChild(textEl);
      parent.appendChild(childEl);
    }
  }]);

  return render;
}(); //Aula Classes
// Criando uma classe (será a classe Pai)


var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);

      try {
        this.listEl;
        render.element(this.listEl, 'li', data);
      } catch (e) {}
    }
  }]);

  return List;
}(); // Extendendo uma classe (Herança) (Será a Classe filha)


var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  function TodoList() {
    var _this;

    var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Tati";
    var listId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'todolist';

    _classCallCheck(this, TodoList);

    _this = _super.call(this); //chama o constructor da classe pai

    _this.user = user;
    _this.userEl = document.getElementById('user');
    _this.listEl = document.getElementById(listId);
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      render.element(this.userEl, 'p', "ToDos do usuário " + this.user + ":");
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList("João");

document.getElementById('adicionarTodo').onclick = function () {
  MinhaLista.add('Fazer café');
};

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

var UsersList = /*#__PURE__*/function () {
  function UsersList() {
    _classCallCheck(this, UsersList);

    this.users = [];
  }

  _createClass(UsersList, null, [{
    key: "addUser",
    value: function addUser() {//this.users.push('Novo Usuário');
      //console.log(this.users); //vai dar erro
    }
  }]);

  return UsersList;
}();

UsersList.addUser(); //Não Daria Erro

var operMat = /*#__PURE__*/function () {
  function operMat() {
    _classCallCheck(this, operMat);
  }

  _createClass(operMat, null, [{
    key: "adicao",
    value: function adicao(a, b) {
      this.staticEl = document.getElementById('staticclasses');
      var soma = a + b;
      render.element(this.staticEl, 'li', a + " + " + b + " = " + soma);
    }
  }, {
    key: "subtracao",
    value: function subtracao(a, b) {
      this.staticEl = document.getElementById('staticclasses');
      var diferenca = a - b;
      render.element(this.staticEl, 'li', a + " - " + b + " = " + diferenca);
    }
  }, {
    key: "multiplicacao",
    value: function multiplicacao(a, b) {
      this.staticEl = document.getElementById('staticclasses');
      var produto = a * b;
      render.element(this.staticEl, 'li', a + " * " + b + " = " + produto);
    }
  }, {
    key: "divisao",
    value: function divisao(a, b) {
      this.staticEl = document.getElementById('staticclasses');
      var quociente;
      b !== 0 ? quociente = a / b : quociente = 'Erro (Impossível dividir por zero)';
      render.element(this.staticEl, 'li', a + " : " + b + " = " + quociente);
    }
  }]);

  return operMat;
}();

operMat.adicao(2, 5);
operMat.subtracao(5, 9);
operMat.multiplicacao(2, 8);
operMat.divisao(10, 2);
operMat.divisao(10, 0); // Aula Const e Letra

var testConst = /*#__PURE__*/function () {
  function testConst() {
    _classCallCheck(this, testConst);
  }

  _createClass(testConst, null, [{
    key: "inicia",
    value: function inicia() {
      var constEl = document.getElementById('const');
      var usuario = {
        nome: "Tati"
      };
      render.element(constEl, 'li', usuario.nome);
      usuario.nome = "João"; //constantes podem ser mutadas, ou seja mantém o formato do objeto mas altera os valores dentro do objeto

      render.element(constEl, 'li', usuario.nome);
    }
  }]);

  return testConst;
}();

testConst.inicia();

var testLet = /*#__PURE__*/function () {
  function testLet() {
    _classCallCheck(this, testLet);
  }

  _createClass(testLet, null, [{
    key: "inicia",
    value: function inicia() {
      var letEl = document.getElementById('let');
      var y = 3;
      render.element(letEl, 'li', "y antes da função: " + y);
      testLet.teste(10, letEl);

      try {
        render.element(letEl, 'li', "y após a função: " + y);
      } catch (e) {
        render.element(letEl, 'li', "y fora da função: " + e);
      }
    }
  }, {
    key: "teste",
    value: function teste(x, letEl) {
      var y = 2;
      render.element(letEl, 'li', "y dentro da função antes do if: " + y);

      if (x > 5) {
        var _y = 4;
        render.element(letEl, 'li', "y dentro do if: " + _y);
      }

      render.element(letEl, 'li', "y dentro da função após o if: " + y + " (o valor retornou ao valor original)");
    }
  }]);

  return testLet;
}();

testLet.inicia();

var testVar = /*#__PURE__*/function () {
  function testVar() {
    _classCallCheck(this, testVar);
  }

  _createClass(testVar, null, [{
    key: "inicia",
    value: function inicia() {
      var varEl = document.getElementById('var');
      var z = 3;
      render.element(varEl, 'li', "z antes da função: " + z);
      testVar.teste(10, varEl);

      try {
        render.element(varEl, 'li', "z após a função: " + z);
      } catch (e) {
        render.element(varEl, 'li', "z após função: " + e);
      }
    }
  }, {
    key: "teste",
    value: function teste(x, varEl) {
      var z = 2;
      render.element(varEl, 'li', "z dentro da função antes do if: " + z);

      if (x > 5) {
        var z = 4;
        render.element(varEl, 'li', "z dentro do if: " + z);
      }

      render.element(varEl, 'li', "z dentro da função após o if: " + z + " (o valor NÃO retornou ao valor original)");
    }
  }]);

  return testVar;
}();

testVar.inicia(); //Operações com vetores

var arr = [1, 3, 4, 5, 8, 9];

var opArray = /*#__PURE__*/function () {
  function opArray() {
    _classCallCheck(this, opArray);
  }

  _createClass(opArray, null, [{
    key: "dobraValores",
    value: function dobraValores(arr) {
      var arrEl = document.getElementById("map");
      var newArr = arr.map(function (item, index) {
        render.element(arrEl, 'li', "Index [" + index + "]; Valor original: " + item + "; Novo valor: " + item * 2);
        return item * 2;
      });
      render.element(arrEl, 'p', 'Retorno Final do Map dobraValores: [ ' + newArr + ' ]');
      return newArr;
    }
  }, {
    key: "somaTodos",
    value: function somaTodos(arr) {
      var arrEl = document.getElementById("reduce");
      var sum = arr.reduce(function (total, itemAtual, index) {
        render.element(arrEl, 'li', "Acumulado: " + total + "; Valor Atual[" + index + "]: " + itemAtual + "; Valor do Retorno: " + (total + itemAtual));
        return total + itemAtual;
      });
      render.element(arrEl, 'p', "Retorno final do Reduce somaTodos:" + sum);
      return sum;
    }
  }, {
    key: "multiplicaTodos",
    value: function multiplicaTodos(arr) {
      var arrEl = document.getElementById("reduce");
      var prod = arr.reduce(function (total, itemAtual, index) {
        render.element(arrEl, 'li', "Acumulado: " + total + "; Valor Atual[" + index + "]: " + itemAtual + "; Valor do Retorno: " + total * itemAtual);
        return total * itemAtual;
      });
      render.element(arrEl, 'p', "Retorno final do Reduce multiplicaTodos:" + prod);
      return prod;
    }
  }, {
    key: "filtraPares",
    value: function filtraPares(arr) {
      var arrEl = document.getElementById("filter");
      var filter = arr.filter(function (item) {
        render.element(arrEl, 'li', "O valor " + item + " é par? " + (item % 2 ? "Não" : "Sim"));
        return item % 2 === 0;
      });
      render.element(arrEl, 'p', "Retorno final do Filter filtraPares:[ " + filter + " ]");
      return filter;
    }
  }, {
    key: "temItem",
    value: function temItem(arr, valor) {
      var arrEl = document.getElementById("filter");
      var filter = arr.filter(function (item) {
        render.element(arrEl, 'li', "O valor " + item + " é igua a " + valor + "? " + (item === valor ? "Sim" : "Não"));
        return item === valor;
      });
      render.element(arrEl, 'p', "Retorno final do Filter temItem:[ " + filter + " ]");
      return filter;
    }
  }]);

  return opArray;
}();

opArray.dobraValores(arr);
opArray.somaTodos(arr);
opArray.multiplicaTodos(arr);
opArray.filtraPares(arr);
opArray.temItem(arr, 4);
