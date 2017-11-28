const produto = {
  nome: 'Caneta Preta Bic',
  preco: 1.90,
  desconto: 0.05
}

function clone(objeto) {
  return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic azul';

console.log(produto, novoProduto);
