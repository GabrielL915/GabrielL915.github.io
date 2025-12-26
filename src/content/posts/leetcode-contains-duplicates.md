---
  title: LeetCode — Contains Duplicate
  pubDate: 2025-12-26
  categories: [leetcode,]
  description: 'Desafio LeetCode'
---

Este é o meu primeiro post sobre LeetCode. Pretendo fazer mais no futuro.

Esse desafio é bem tranquilo, mas como estou voltando a escrever depois de um tempo, achei melhor começar com algo mais simples de resolver.

---

## Descrição do problema

O desafio

https://leetcode.com/problems/contains-duplicate/

pede o seguinte:

Dado um array de inteiros `nums`, retorne `true` se algum valor aparecer pelo menos duas vezes.

Caso todos os elementos sejam distintos, retorne `false`.

---

### Exemplos

```tsx
Input: nums = [1, 2, 3, 1]
Output: true
// O número 1 aparece duas vezes (índices 0 e 3)
```

```tsx
Input: nums = [1, 2, 3, 4]
Output: false
// Todos os elementos são únicos
```

```tsx
Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true
```

---

### Constraints

- `1 <= nums.length <= 10⁵`
- `10⁹ <= nums[i] <= 10⁹`

---

Então, a primeira coisa que passou pela minha cabeça ao resolver esse desafio foi usar um `filter` junto com `indexOf` para detectar duplicatas, como neste trecho de código:

```tsx
function containsDuplicate(nums: number[]): boolean {
  const duplicates = nums.filter((item, index) => nums.indexOf(item) !== index)
  return duplicates.length > 0
}
```

Porém, essa solução falhou com o erro **Time Limit Exceeded**.

Se você olhar para este gráfico de **Big O**, dá para entender o motivo:

![Big-O Complexity Chart](/Big_o.png)

Minha solução se encaixa em **O(n²)**, que, bem… como o gráfico mostra, é péssimo.

---

### Mas por que ela é O(n²)?

É bem simples:

- O `filter` percorre o array inteiro → **O(n)**
- O `indexOf` também percorre o array inteiro → **O(n)**

Como o `indexOf` é chamado para cada elemento do array, o custo total acaba sendo **O(n²)**.

Por isso, esse código não serve para arrays grandes e acaba estourando o limite de tempo do LeetCode.

---

## Solução que passou

A solução que utilizei foi usar um `Set`, já que ele não permite valores duplicados.

```tsx
function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length
}
```

### Como isso funciona?

- O `Set` remove automaticamente valores duplicados.
- Se o tamanho do `Set` for menor que o tamanho do array original, significa que existem duplicatas.

### Complexidade

A complexidade dessa solução é **O(N)**, pois percorremos o array apenas uma vez.

---

E é isso 👍
