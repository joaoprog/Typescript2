///<reference path="pessoa.ts"/>
///<reference path="cliente.ts"/>
///<reference path="funcionario.ts"/>
///<reference path="banco.ts"/>
namespace empresa{
    let banco = new Banco();
    banco.setNome("Bradesco");
    banco.setCodBanco(33);

    let cliente = new Cliente();
    cliente.setNome("João");
    cliente.setCodCliente(1);
    cliente.setCpf("000.000.000-00");
    cliente.setIdade(30);
    cliente.setCredito(2000);
    cliente.setBanco(banco);

    let cliente2 = new Cliente();
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
    let tabela = document.getElementById("tabela");

    let conteudo = " <tr> <th>Clientes</th> <th>Banco</th> </tr>";
    banco.getClientes().forEach(element => {
        conteudo +- "<tr> <td>"+element.getNome()+"</td><td>"+element.getBanco().getNome()+"</td> </tr>";
    });
    tabela.innerHTML= conteudo;
}