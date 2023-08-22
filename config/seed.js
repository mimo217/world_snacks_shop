require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

  (async function () {
    await Category.deleteMany({})
    const categories = await Category.create([
      { name: 'USA 🇺🇸', sortOrder: 10 },
      { name: 'China 🇨🇳', sortOrder: 20 },
      { name: 'Mexico 🇲🇽', sortOrder: 30 },
      { name: 'United Kingdom 🇬🇧', sortOrder: 40 },
      { name: 'France 🇫🇷', sortOrder: 50 },
      { name: 'Japan 🇯🇵', sortOrder: 60 },
      { name: 'Australia 🇦🇺', sortOrder: 70 },
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
      { name: 'Tim Tam Coconut Cream Flavor', imageURL: 'https://i.imgur.com/BaJ87L2.png', category: categories[6], price: 4.95 },
      { name: 'Arnotts Shapes Pizza', imageURL: 'https://i.imgur.com/v52wFTh.png', category: categories[6], price: 10.15 },
      { name: 'Cheezels Box 125g', imageURL: 'https://i.imgur.com/WjtlgD3.jpg', category: categories[6], price:12.13 },
      { name: 'Tim Tam Original Chocolate Biscuits', imageURL: 'https://i.imgur.com/DjzkxFe.png', category: categories[6], price: 13.95 },
      { name: 'Allens Party Mix', imageURL: 'https://i.imgur.com/Xi8lCm2.png', category: categories[6], price: 25.95 },
      { name: 'MILO Chocolate Malt Powder Drink Mix', imageURL: 'https://i.imgur.com/eeXRhB0.png', category: categories[6], price: 1.95 },
      { name: 'Cheetos® Crunchy Cheddar Jalapeno Cheese', imageURL: 'https://i.imgur.com/azgavdR.png', category: categories[0], price: 4.95 },
      { name: 'Grandmas® Brand Chocolate Chip Cookies', imageURL: 'https://i.imgur.com/DnUhhAH.png', category: categories[0], price: 3.95 },
      { name: 'Doritos® Spicy Pineapple Jalapeno Flavored Tortilla Chips', imageURL: 'https://i.imgur.com/UVGbU6T.png', category: categories[0], price: 7.95 },
      { name: 'Jack Links® Flamin Hot® Flavored Original Beef Jerky', imageURL: 'https://i.imgur.com/RzG2CsT.png', category: categories[0], price: 1.95 },
      { name: 'Nerds Gummy Clusters, Back to School Candy, Rainbow', imageURL: 'https://i.imgur.com/Fmf21Kt.png', category: categories[0], price: 2.95 },
      { name: 'SOUR PATCH KIDS Soft & Chewy Candy', imageURL: 'https://i.imgur.com/3onD59V.png', category: categories[0], price: 3.95 },
      { name: 'Beef Wellington Potato Chips', imageURL: 'https://i.imgur.com/FovsK5a.png', category: categories[1], price: 1.95 },
      { name: 'White Peach Oreos - Chocolate Sandwich Cookies with White Peach Cream', imageURL: 'https://i.imgur.com/E5j9iGr.png', category: categories[1], price: 0.95 },
      { name: 'Spicy Butter Hot Pot Potato Chips', imageURL: 'https://i.imgur.com/Md4TEMe.png', category: categories[1], price: 2.95 },
      { name: 'Coconut Milk Fruit Mochi - Rice Cakes', imageURL: 'https://i.imgur.com/MdzdIhi.png', category: categories[1], price: 3.95 },
      { name: 'Senbei Rice Crackers - Baked, Vegetarian', imageURL: 'https://i.imgur.com/wNkSioO.png', category: categories[1], price: 0.95 },
      { name: 'Spicy Flavored Peanuts', imageURL: 'https://i.imgur.com/UFJsjAf.png', category: categories[1], price: 0.95 },
      { name: 'De la Rosa Mazapan, Mexican Original Peanut Candy,', imageURL: 'https://i.imgur.com/oZtcenj.png', category: categories[2], price: 8.95 },
      { name: 'Vero Banda Fuego Mix Assorted Chili Lollipops', imageURL: 'https://i.imgur.com/EHS3O6z.png', category: categories[2], price: 3.95 },
      { name: 'Marinela Gansito Snack Cakes', imageURL: 'https://i.imgur.com/P4k7MAQ.png', category: categories[2], price: 7.95 },
      { name: 'TAKIS FUEGO', imageURL: 'https://i.imgur.com/tOE8NFB.png', category: categories[2], price: 8.95 },
      { name: 'CHEETOS BOLITAS', imageURL: 'https://i.imgur.com/OEAcNgK.png', category: categories[2], price: 3.95 },
      { name: 'CHURRUMAIS CON LIMONCITO', imageURL: 'https://i.imgur.com/DOOmV3Y.png', category: categories[2], price: 4.95 },
      { name: 'Monster Munch Pickled Onion', imageURL: 'https://i.imgur.com/94XoS7i.png', category: categories[3], price: 8.95 },
      { name: 'Walkers Prawn Cocktail Crisps', imageURL: 'https://i.imgur.com/POENk2H.png', category: categories[3], price: 3.95 },
      { name: 'Walkers Quavers Cheese', imageURL: 'https://i.imgur.com/r7gOq2N.png', category: categories[3], price: 4.95 },
      { name: 'Percy Pig Gummy Candy', imageURL: 'https://i.imgur.com/1HMsEhO.png', category: categories[3], price: 8.95 },
      { name: 'McVities Jaffa Cakes', imageURL: 'https://i.imgur.com/H0rMBPs.png', category: categories[3], price: 3.95 },
      { name: 'Maynards Bassetts Wine Gums', imageURL: 'https://i.imgur.com/y7Kblv3.png', category: categories[3], price: 4.95 },
      { name: 'Kinder Brioss 10 snacks Ferrero', imageURL: 'https://i.imgur.com/kIELGgB.png', category: categories[4], price: 8.95 },
      { name: 'Lu Petit Beurre Biscuits', imageURL: 'https://i.imgur.com/kIELGgB.png', category: categories[4], price: 3.95 },
      { name: 'Lu Barquettes Strawberry Cookies', imageURL: 'https://i.imgur.com/nUUQw7k.png', category: categories[4], price: 4.95 },
      { name: 'Carambar - Caramel Candy XL Bag', imageURL: 'https://i.imgur.com/fqtNg5w.png', category: categories[4], price: 8.95 },
      { name: 'Brets - Aioli Potato Chips', imageURL: 'https://i.imgur.com/jjbqqOY.png', category: categories[4], price: 6.90 },
      { name: 'Cote d\'Or - Nougatti', imageURL: 'https://i.imgur.com/tD2XKv3.png', category: categories[4], price: 4.95 },
      { name: 'Kit Kat Japan Ice Cream', imageURL: 'https://i.imgur.com/jBj9Zt1.png', category: categories[5], price: 8.95 },
      { name: 'Pocky: Almond Crush', imageURL: 'https://i.imgur.com/mU1YDvf.png', category: categories[5], price: 3.95 },
      { name: 'Kajuu Gummy Japanese Pear', imageURL: 'https://i.imgur.com/MCeBA9A.png', category: categories[5], price: 4.95 },
      { name: 'Samyang Buldak Spring Rice Cracker', imageURL: 'https://i.imgur.com/iwEneq6.png', category: categories[5], price: 8.95 },
      { name: 'Calpis Water Freezing Peach', imageURL: 'https://i.imgur.com/P8xXmCY.png', category: categories[5], price: 6.90 },
      { name: 'Sea Urchin Potato Chips', imageURL: 'https://i.imgur.com/nEeynuH.png', category: categories[5], price: 4.95 },
      
    ]);

    console.log(items)

    process.exit();

  })();