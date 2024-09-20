'use strict'; // ativa o modo restrito
// ajuda a evitar erros comuns de programação
/* consumo de API - https://viacep.com.br/ */


// função p limpar campos preenchidos
const limparFomulario = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
}

//verifica se o CEP é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);


//função que preenche o formulário
const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('logradouro').value = endereco.bairro;
    document.getElementById('logradouro').value = endereco.localidade;
    document.getElementById('logradouro').value = endereco.uf;

}