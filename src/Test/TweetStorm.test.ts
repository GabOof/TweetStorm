import { TweetStorm } from '../TweetStorm';

describe('TweetStorm', () => {
  describe('gerarTweetStorm', () => {
    
    // Caso de teste: Deve gerar um tweet numerado para um texto de 66 caracteres
    it('Tweet de 66 caracteres', () => {
      const texto = 'Contrary to popular belief, Lorem Ipsum is not simply random text.';
      const resultadoEsperado = [
        '1/1: Contrary to popular belief, Lorem Ipsum is not simply random text.'
      ];

      const resultado = TweetStorm.gerarTweetStorm(texto);

      expect(resultado).toEqual(resultadoEsperado);
    });

    // Caso de teste: Deve gerar um tweet numerado para um texto de 136 caracteres
    it('Tweet de 136 caracteres', () => {
      const texto = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, hi.';
      const resultadoEsperado = [
        '1/1: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, hi.'
      ];

      const resultado = TweetStorm.gerarTweetStorm(texto);

      expect(resultado).toEqual(resultadoEsperado);
    });

    // Caso de teste: Deve gerar dois tweets numerados para um texto de 163 caracteres
    it('Tweet de 163 caracteres', () => {
      const texto = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.';
      const resultadoEsperado = [
        '1/2: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,',
        '2/2:  making it over 2000 years old.'
      ];

      const resultado = TweetStorm.gerarTweetStorm(texto);

      expect(resultado).toEqual(resultadoEsperado);
    });

    // Caso de teste: Deve gerar múltiplos tweets numerados para um texto de 1003 caracteres
    it('Tweet de 1003 caracteres', () => {
      const texto = 'Once upon a time, in a small village nestled amidst lush green meadows, there lived a young girl named Lily. She was known for her vibrant red hair and sparkling emerald eyes. Lily had an insatiable curiosity and an unwavering sense of adventure. Every day, Lily would explore the enchanting woods surrounding the village. She would chase butterflies, climb trees, and discover hidden treasures. The forest was her playground, filled with magical creatures and mysterious secrets. One sunny afternoon, as Lily was wandering deeper into the woods, she stumbled upon a peculiar old book lying beneath a gnarled tree. Intrigued, she dusted off the cover and opened it carefully. The pages were filled with ancient symbols and forgotten tales. Lily couldn\'t resist delving into the book\'s captivating stories. It transported her to far-off lands and introduced her to fantastical creatures. She learned about brave knights, wise wizards, and mischievous fairies. Each page turned into a new adventure. End!';
      const resultadoEsperado = [
        '1/8: Once upon a time, in a small village nestled amidst lush green meadows, there lived a young girl named Lily. She was known for her',
        '2/8:  vibrant red hair and sparkling emerald eyes. Lily had an insatiable curiosity and an unwavering sense of adventure. Every day, Lily',
        '3/8:  would explore the enchanting woods surrounding the village. She would chase butterflies, climb trees, and discover hidden treasures.',
        '4/8:  The forest was her playground, filled with magical creatures and mysterious secrets. One sunny afternoon, as Lily was wandering deeper',
        '5/8:  into the woods, she stumbled upon a peculiar old book lying beneath a gnarled tree. Intrigued, she dusted off the cover and opened it',
        '6/8:  carefully. The pages were filled with ancient symbols and forgotten tales. Lily couldn\'t resist delving into the book\'s captivating',
        '7/8:  stories. It transported her to far-off lands and introduced her to fantastical creatures. She learned about brave knights, wise',
        '8/8:  wizards, and mischievous fairies. Each page turned into a new adventure. End!'
      ];

      const resultado = TweetStorm.gerarTweetStorm(texto);

      expect(resultado).toEqual(resultadoEsperado);
    });
  });
});
