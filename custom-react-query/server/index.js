import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
      image:
        "https://images.pexels.com/photos/20523214/pexels-photo-20523214/free-photo-of-people-walking-on-a-walkway-under-a-large-white-structure.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      name: "table copper",
      price: 2200,
      image:
        "https://images.pexels.com/photos/9719089/pexels-photo-9719089.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "table steel",
      price: 300,
      image:
        "https://images.pexels.com/photos/19861148/pexels-photo-19861148/free-photo-of-a-close-up-of-a-sunflower-with-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 4,
      name: "table",
      price: 800,
      image:
        "https://images.pexels.com/photos/19779594/pexels-photo-19779594/free-photo-of-view-of-a-dramatic-sunset-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 5,
      name: "stool",
      price: 900,
      image:
        "https://images.pexels.com/photos/20711553/pexels-photo-20711553/free-photo-of-orange-flowers-on-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);


});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
