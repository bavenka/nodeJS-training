const reviews = [
  { id: 1, starts: 5, comments: "...a bad product", productId: 2 },
  { id: 2, starts: 2, comments: "good product", productId: 2 },
  { id: 3, starts: 3, comments: "buy it", productId: 1 },
];

const products = [
  { id: 1, name: "Supreme T-Shirt", price: 12 },
  { id: 2, name: "Adidas T-Shirt", price: 11 },
  { id: 3, name: "Nike T-Shirt", price: 13 }
];

export const getProducts = (req, res) => res.status(200).json(products);

export const getProduct = (req, res) => {
  const { id } = req.params;

  const product = products.find(product => product.id === Number(id));
  res.status(200).json(product);
};

export const getProductReviews = (req, res) => {
  const { id } = req.params;

  const productReviews = reviews.filter(review => review.productId === Number(id));
  res.status(200).json(productReviews);
};

export const addProduct = (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(200).json(product);
};
