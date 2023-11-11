const clientes = [];
    let clienteIndex = -1;


    function adicionarCliente(cliente) {
      if (clienteIndex === -1) {
        clientes.push(cliente);
      } else {
        clientes[clienteIndex] = cliente;
        clienteIndex = -1;
        document.getElementById("alterar").style.display = "none";
       
      }
      atualizarListaClientes();
    }

    function adicionarBotaoExcluir(cliente, index) {
      const listaClientes = document.getElementById("clientes");
      const itemLista = document.createElement("li");
      itemLista.innerHTML = `
        Nome: ${cliente.nome}<br>
        Sobrenome: ${cliente.sobrenome}<br>
        Tipo de Cliente: ${cliente.tipoCliente}<br>
        Data de Nascimento: ${cliente.dataNascimento}<br>
        CEP: ${cliente.cep}<br>
        Cidade: ${cliente.cidade}<br>
        Endereço: ${cliente.endereco}<br>
        Número: ${cliente.numero}<br>
        <button type="button" onclick="preencherFormulario(${index})">Editar</button>
        <button type="button" onclick="excluirCliente(${index})">Excluir</button>
      `;
      listaClientes.appendChild(itemLista);
    }

    function excluirCliente(index) {
      clientes.splice(index, 1);
      atualizarListaClientes();
    }
    const cep=document.getElementById("cep");
     cep.addEventListener('input', () => {
     cep.value = cep.value.slice(0, 9);
     cep.value = cep.value.replace(/(\d{5})(\d{3})/, '$1-$2');
    });

    const numero=document.getElementById("numero");
     numero.addEventListener('input', () => {
     numero.value = numero.value.slice(0, 6);
     numero.value = numero.value.replace(/(\d{5})(\d{3})/, '$1-$2');
    });

    const nome=document.getElementById("nome");
     nome.addEventListener('input', () => {
     nome.value = nome.value.replace(/[^A-Za-zÀ-ÿ\s]/g,"");
     });

     const sobrenome=document.getElementById("sobrenome");
     sobrenome.addEventListener('input', () => {
     sobrenome.value = sobrenome.value.replace(/[^A-Za-zÀ-ÿ\s]/g,"");
     });
    
     const cidade=document.getElementById("cidade");
     cidade.addEventListener('input', () => {
      cidade.value = cidade.value.slice(0, 60);
     cidade.value = cidade.value.replace(/[^A-Za-zÀ-ÿ\s]/g,"");
     });

     const endereco=document.getElementById("endereco");
     endereco.addEventListener('input', () => {
      endereco.value = endereco.value.slice(0, 60);
     endereco.value = endereco.value.replace(/[^A-Za-zÀ-ÿ\s]/g,"");
     });
    
    function preencherFormulario(index) {
      let salvar = document.getElementById ("salvar");
       salvar.textContent="Alterar";
      const cliente = clientes[index];
      document.getElementById("nome").value = cliente.nome;
      document.getElementById("sobrenome").value = cliente.sobrenome;
      document.getElementById("tipo-cliente").value = cliente.tipoCliente;
      document.getElementById("data-nascimento").value = cliente.dataNascimento;
      document.getElementById("cep").value = cliente.cep;
      document.getElementById("cidade").value = cliente.cidade;
      document.getElementById("endereco").value = cliente.endereco;
      document.getElementById("numero").value = cliente.numero;
      clienteIndex = index;
    }
    
    function atualizarListaClientes() {
      const listaClientes = document.getElementById("clientes");
      listaClientes.innerHTML = "";
      clientes.forEach((cliente, index) => {
        adicionarBotaoExcluir(cliente, index);
      });
  
    }

    
    function salvarCliente() {
      const nome = document.getElementById("nome").value;
      const sobrenome = document.getElementById("sobrenome").value;
      const tipoCliente
       = document.getElementById("tipo-cliente").value;
      const dataNascimento = document.getElementById("data-nascimento").value;
      const cep = document.getElementById("cep").value;
      const cidade = document.getElementById("cidade").value;
      const endereco = document.getElementById("endereco").value;
      const numero = document.getElementById("numero").value;

      if (nome && sobrenome && tipoCliente && dataNascimento && cep && cidade && endereco && numero) {
        adicionarCliente({
          nome,
          sobrenome,
          tipoCliente,
          dataNascimento,
          cep,
          cidade,
          endereco,
          numero,
        });
        document.getElementById("cliente-form").reset();
      } else {
        alert("Preencha todos os campos corretamente.");
      }
      salvar.textContent="Salvar";

    }

   
    function alterarCliente() {
      const nome = document.getElementById("nome").value;
      const sobrenome = document.getElementById("sobrenome").value;
      const tipoCliente = document.getElementById("tipo-cliente").value;
      const dataNascimento = document.getElementById("data-nascimento").value;
      const cep = document.getElementById("cep").value;
      const cidade = document.getElementById("cidade").value;
      const endereco = document.getElementById("endereco").value;
      const numero = document.getElementById("numero").value;

      if (nome && sobrenome && tipoCliente && dataNascimento && cep && cidade && endereco && numero) {
        adicionarCliente({
          nome,
          sobrenome,
          tipoCliente,
          dataNascimento,
          cep,
          cidade,
          endereco,
          numero,
        });
        document.getElementById("cliente-form").reset();
      } else {
        alert("Preencha todos os campos corretamente.");
      }
    }

    document.getElementById("limpar").addEventListener("click", () => {
      document.getElementById("cliente-form").reset();
    });