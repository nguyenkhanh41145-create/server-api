const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    gardenName: 'Happy Little Green Garden',
    dailyQuote: '"To plant a garden is to believe in tomorrow." 🍃',
    serverStatus: 'Server is photosynthesizing happily! ☀️',
    plants: [
      {
        name: 'Sprout Buddy',
        role: 'Baby Seedling',
        bio: 'Loves fresh morning dew and basking under the warm morning sun.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Emojione_1F331.svg'
      },
      {
        name: 'Sunny Sunflower',
        role: 'Cheery Blossom',
        bio: 'Always looks on the bright side and smiles with golden petals.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Emojione_1F33B.svg'
      },
      {
        name: 'Lucky Clover',
        role: 'Charm of Joy',
        bio: 'Brings good fortune and peaceful energy to every garden visitor.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Emojione_1F33F.svg'
      },
      {
        name: 'Grand Ancient Tree',
        role: 'Garden Guardian',
        bio: 'Provides cool shades where birds gather to sing all summer long.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Emojione_1F333.svg'
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Garden server is running on port ${PORT}`);
});