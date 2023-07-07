export class TweetStorm {
  static tamanhoMaximo: number = 136;

  // Função para quebrar o texto em blocos menores
  static quebraTexto(texto: string, tamanhoBloco: number): string[] {
    const blocos: string[] = [];
    const comprimento: number = texto.length;

    for (let i = 0; i < comprimento; i += tamanhoBloco) {
      if (i + tamanhoBloco < comprimento) {
        // Adiciona um bloco completo ao tweet storm
        let bloco: string = texto.substring(i, i + tamanhoBloco);

        // Quebra o bloco apenas nos espaços, caso esteja no meio de uma palavra
        const espaco: number = bloco.lastIndexOf(" ");
        let indiceQuebra: number = tamanhoBloco;

        // Verifica se espaço foi encontrado
        if (espaco !== -1) {
          indiceQuebra = espaco;
        }

        // Adiciona o bloco até o índice de quebra à lista de "blocos"
        blocos.push(bloco.substring(0, indiceQuebra));

        // Avança o índice da string "texto" considerando a diferença entre o tamanho do bloco original e o índice de quebra
        i += indiceQuebra - tamanhoBloco;
      } else {
        // Adiciona o último bloco parcial ao tweet storm
        blocos.push(texto.substring(i));
      }
    }

    return blocos;
  }

  // Função para gerar o tweet storm numerado
  static gerarTweetStorm(texto: string): string[] {
    const tweetStorm: string[] = [];
    const blocosTexto: string[] = TweetStorm.quebraTexto(texto, TweetStorm.tamanhoMaximo);

    // Gera os tweets numerados
    for (let i = 0; i < blocosTexto.length; i++) {
      const tweet: string = `${i + 1}/${blocosTexto.length}: ${blocosTexto[i]}`;
      tweetStorm.push(tweet);
    }

    return tweetStorm;
  }
}
