// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

const produto = [
    {
      id: 1,
      especificacao: "Cachorro Quente",
      preco: 4
    },
    {
      id: 2,
      especificacao: "X-Salada",
      preco: 4.5
    },
    {
      id: 3,
      especificacao: "X-Bacon",
      preco: 5
    },
    {
      id: 4,
      especificacao: "Torrada simples",
      preco: 2
    },
    {
      id: 5,
      especificacao: "Refrigerante",
      preco: 1.5
    },
  ]
  
  function pedido(item, qnt = 1) {
    let {preco} = produto.filter(v => v.id === item)[0]
    let precoFinal = preco * qnt 
    return `Total: R$ ${precoFinal.toFixed(2)}`
  }
  
