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
const 