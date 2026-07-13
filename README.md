# TweetStorm ⛈️

Um utilitário TypeScript para dividir textos longos em múltiplos tweets numerados, respeitando os limites de caracteres do Twitter e mantendo as palavras inteiras.

## 🎯 Sobre o Projeto

**TweetStorm** é uma biblioteca TypeScript que simplifica o processo de criar uma "tempestade de tweets" - uma série de tweets numerados e interconectados para compartilhar conteúdo mais longo nas redes sociais.

O projeto resolve um problema comum: você tem um texto longo que quer compartilhar no Twitter, mas precisa dividir em múltiplos tweets sem quebrar palavras no meio. TweetStorm faz isso automaticamente!

### Características principais

- ✨ Divide texto em blocos de tamanho máximo de 136 caracteres
- 🧩 Respeita quebras de palavra (não quebra no meio de palavras)
- 📝 Numeração automática dos tweets (ex: "1/5:", "2/5:", etc)
- 📦 Escrito em TypeScript com tipagem total
- 🧪 Inclui testes com Jest

## 📋 Composição do Projeto

- **TypeScript**: 96.4%
- **JavaScript**: 3.6%

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Exemplo de Uso

```typescript
import { TweetStorm } from './src/TweetStorm';

const texto = "Seu texto bem longo aqui que deseja compartilhar em múltiplos tweets...";

// Gera um array com os tweets numerados
const tweets = TweetStorm.gerarTweetStorm(texto);

// Imprime cada tweet
tweets.forEach(tweet => {
  console.log(tweet);
});
```

### Saída Esperada

```
1/3: Seu texto bem longo aqui que deseja compartilhar em múltiplos...
2/3: tweets sem quebrar palavras no meio. O TweetStorm cuida disso...
3/3: automaticamente para você!
```

## 📚 API

### `TweetStorm.gerarTweetStorm(texto: string): string[]`

Gera um array de tweets numerados a partir do texto fornecido.

**Parâmetros:**
- `texto` (string): O texto a ser dividido em tweets

**Retorno:**
- Array de strings contendo os tweets numerados

**Exemplo:**
```typescript
const tweets = TweetStorm.gerarTweetStorm("Meu texto aqui");
// Retorna: ["1/1: Meu texto aqui"]
```

### `TweetStorm.quebraTexto(texto: string, tamanhoBloco: number): string[]`

Divide um texto em blocos de tamanho especificado, respeitando quebras de palavra.

**Parâmetros:**
- `texto` (string): O texto a ser dividido
- `tamanhoBloco` (number): Tamanho máximo de cada bloco em caracteres

**Retorno:**
- Array de strings contendo os blocos de texto

**Exemplo:**
```typescript
const blocos = TweetStorm.quebraTexto("Texto aqui", 5);
// Retorna: ["Texto", "aqui"]
```

### Propriedades Estáticas

- `TweetStorm.tamanhoMaximo` (number): Define o tamanho máximo padrão em caracteres (padrão: 136)

## 🛠️ Desenvolvimento

### Estrutura do Projeto

```
TweetStorm/
├── src/
│   ├── TweetStorm.ts       # Classe principal
│   └── Test/               # Testes
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração TypeScript
├── jest.config.js          # Configuração Jest
└── README.md               # Este arquivo
```

### Scripts Disponíveis

```bash
# Executar testes
npm test

# Compilar TypeScript
npx tsc
```

### Dependências de Desenvolvimento

- **TypeScript** ^5.1.6
- **Jest** ^29.6.0
- **ts-jest** ^29.1.1
- **@types/jest** ^29.5.2

## 💡 Como Funciona

1. **Quebra de Texto**: O texto é dividido em blocos de até 136 caracteres
2. **Respeito às Palavras**: Se o bloco terminaria no meio de uma palavra, a quebra é feita no espaço anterior
3. **Numeração**: Cada bloco é numerado no formato "X/Y: bloco" onde X é o número atual e Y é o total
4. **Retorno**: Um array com todos os tweets é retornado

### Algoritmo

O algoritmo de quebra funciona assim:

1. Itera pelo texto em blocos de tamanho máximo
2. Para cada bloco, procura o último espaço antes do limite
3. Se encontrar um espaço, quebra nele (não quebra a palavra)
4. Se não encontrar, quebra no limite (último caracter)
5. Adiciona o bloco à lista de resultados

## 📄 Licença

ISC

## 👤 Autor

**GabOof**
- GitHub: [@GabOof](https://github.com/GabOof)

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas! Sinta-se à vontade para:
- Abrir issues para reportar bugs
- Enviar pull requests com melhorias
- Sugerir novas funcionalidades

## 🔗 Links

- [Repositório](https://github.com/GabOof/TweetStorm)
- [Issues](https://github.com/GabOof/TweetStorm/issues)

---

Feito com ❤️ por GabOof
