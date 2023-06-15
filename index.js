const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const coffees = [
  {
    id: "price_1MyNiJC9PWsDk3eWaxR0e91G",
    name: "Black",
    image: "https://i.ibb.co/wJF4kW0/black.jpg",
    ingredients: ["Coffee", "Water"],
    description: "Coffee with nothing added – no cream, no milk, no sweetener",
    price: 3,
  },
  {
    id: "price_1MyNjDC9PWsDk3eWvm3vNRfm",
    name: "Latte",
    image: "https://i.ibb.co/zbpBYkG/latte.jpg",
    ingredients: ["Espresso", "Steamed milk"],
    description:
      "A single shot of espresso combined with several ounces of steamed milk to create a rich, creamy beverage that has a more subtle espresso taste",
    price: 8,
  },
  {
    id: "price_1MyNjZC9PWsDk3eWWiSh0v8M",
    name: "Cappucino",
    image: "https://i.ibb.co/ZNdX9hP/cappuccino.jpg",
    ingredients: ["Espresso", "Steamed milk", "Foam"],
    description:
      "A single shot of espresso combined with several ounces of steamed milk to create a rich, creamy beverage that has a more subtle espresso taste.",
    price: 6,
  },
  {
    id: "price_1MyNjuC9PWsDk3eWic6IcrQc",
    name: "Americano",
    image: "https://i.ibb.co/RDHhLv8/americano.jpg",
    ingredients: ["Espresso", "Hot water"],
    description:
      "An Americano combines freshly pulled shots of espresso with hot water to achieve the size of a standard cup of brewed coffee",
    price: 6,
  },
  {
    id: "price_1MyNkBC9PWsDk3eWpz3r4Y3U",
    name: "Mocha",
    image: "https://i.ibb.co/0KrdMN2/mocha.jpg",
    ingredients: ["Espresso", "Chocolate", "Steamed milk"],
    description:
      "A Mocha is made of a shot of espresso combined with chocolate powder or syrup, followed by milk or cream. It is a variant of a latte, in the sense that it is often 1/3 espresso and 2/3 steamed milk",
    price: 10,
  },
  {
    id: "price_1MyNkPC9PWsDk3eW8noLYTWW",
    name: "Irish",
    image: "https://i.ibb.co/WxDcC90/irish.jpg",
    ingredients: ["Coffee", "Whiskey", "Sugar", "Cream"],
    description:
      "An Irish coffee is a caffeinated alcoholic drink consisting of Irish whiskey, hot coffee and sugar, which has been stirred and topped with cream (sometimes cream liqueur)",
    price: 12,
  },
  {
    id: "price_1MyNkmC9PWsDk3eW1lGjZsnQ",
    name: "Affogato",
    image: "https://i.ibb.co/thR0qBb/affogato.jpg",
    ingredients: ["Espresso", "Ice cream"],
    description:
      "An Affogato coffee is an Italian coffee-based dessert. It's made of a scoop of plain milk-flavored or vanilla gelato or ice cream topped with a shot of hot espresso",
    price: 5,
  },
  {
    id: "price_1MyNlDC9PWsDk3eWBtE1xx60",
    name: "Espresso",
    image: "https://i.ibb.co/N3D7N3Z/espresso.jpg",
    ingredients: ["1oz Espresso"],
    description:
      "An Espresso is a type of strong black coffee made by forcing steam through ground coffee beans",
    price: 4,
  },
  {
    id: "price_1MyNlUC9PWsDk3eWrrIoSASD",
    name: "Macchiato",
    image: "https://i.ibb.co/k1w94yk/macchiato.jpg",
    ingredients: ["Espresso shot", "Foam"],
    description:
      "A Macchiato is an espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through.",
    price: 8,
  },
  {
    id: "price_1MyNliC9PWsDk3eWti5qnqZR",
    name: "Flat white",
    image: "https://i.ibb.co/WHhMVdW/flat-white.jpg",
    ingredients: ["Espresso", "Steamed milk"],
    description:
      "A Flat White is a blend of micro-foamed milk poured over a single or double shot of espresso. This microfoam is steamed milk infused with air, to create a smooth and velvety texture and creamy taste",
    price: 10,
  },
];

app.get("/", (request, response) => {
  response.send("Simple Coffee api, made by Gabriela Quintanilla");
});

app.get("/api/coffees", (request, response) => {
  response.send(coffees);
});
app.get("/api/coffees/:id", (request, response) => {
  const coffee = coffees.find((coffee) => coffee.id === request.params.id);
  if (!coffee) return response.status(404).send("No coffee with that id");
  else response.send(coffee);
});
app.get("/api/coffees/name/:name", (request, response) => {
  const coffee = coffees.find((coffee) => coffee.name === request.params.name);
  if (!coffee) return response.status(404).send("No coffee with that name");
  else response.send(coffee);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
