///<reference path="pessoa.ts"/>
///<reference path="cliente.ts"/>
///<reference path="funcionario.ts"/>
///<reference path="banco.ts"/>
var empresa;
(function (empresa) {
    var banco = new empresa.Banco();
    banco.setNome("Bradesco");
    banco.setCodBanco(33);
    var cliente = new empresa.Cliente();
    cliente.setNome("João");
    cliente.setCodCliente(1);
    cliente.setCpf("000.000.000-00");
    cliente.setIdade(30);
    cliente.setCredito(2000);
    cliente.setBanco(banco);
    var cliente2 = new empresa.Cliente();
    cliente2.setNome("Maria");
    cliente2.setCodCliente(2);
    cliente.setCpf("111.000.000-11");
    cliente.setIdade(40);
    cliente.setCredito(3000);
    cliente.setBanco(banco);
    document.getElementById("nome").textContent = cliente.getNome();
    document.getElementById("idade").textContent = cliente.getIdade().toString();
    document.getElementById("cpf").textContent = cliente.getCpf();
    document.getElementById("codigo").textContent = cliente.getCodCliente().toString();
    document.getElementById("credito").textContent = cliente.getCredito().toString();
    document.getElementById("banco").textContent = cliente.getBanco().toString();
    banco.addCliente(cliente);
    banco.addCliente(cliente2);
    //trecho inserido para exemplificar a implantação das tabelas
    var tabela = document.getElementById("tabela");
    var conteudo = " <tr> <th>Clientes</th> <th>Banco</th> </tr>";
    banco.getClientes().forEach(function (element) {
        conteudo + -"<tr> <td>" + element.getNome() + "</td><td>" + element.getBanco().getNome() + "</td> </tr>";
    });
    tabela.innerHTML = conteudo;
})(empresa || (empresa = {}));
