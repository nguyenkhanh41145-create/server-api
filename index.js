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
        image: '/friend1.png'
      },
      {
        name: 'Sunny Sunflower',
        role: 'Cheery Blossom',
        bio: 'Always looks on the bright side and smiles with golden petals.',
        image: '/friend2.png'
      },
      {
        name: 'Lucky Clover',
        role: 'Charm of Joy',
        bio: 'Brings good fortune and peaceful energy to every garden visitor.',
        image: '/friend3.png'
      },
      {
        name: 'Grand Ancient Tree',
        role: 'Garden Guardian',
        bio: 'Provides cool shades where birds gather to sing all summer long.',
        image: '/friend4.png'
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});