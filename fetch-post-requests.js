// %%
const options = {
  method: "post",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    name: "MacBook Pro M1 Pro",
    data: {
      model: "MacBook Pro M1 Pro",
      year: 2021,
      color: "Space Gray",
      storage: "512GB SSD",
      processor: "Apple M1 Pro",
      memory: "16GB RAM",
      display: "14-inch Liquid Retina XDR Display",
      resolution: "3024 x 1964",
      weight: "2.3 pounds",
      battery: "Up to 18 hours of battery life",
      ports: ["USB-C", "Thunderbolt 3", "MagSafe", "MagSafe Power Adapter"],
      operatingSystem: "macOS Monterey",
      price: "$2,999",
    },
  }),
};

try {
  const url = "https://api.restful-api.dev/objects";
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (err) {
  console.error("Request failed", err);
}

// %%
const options2 = {
  method: "post",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    title: "Blog Post Entry",
    body: "Hello World from my first Blog Post Entry",
    userId: 1,
    tags: ["blog", "post", "entry"],
  }),
};

fetch("https://jsonplaceholder.typicode.com/posts", options2)
  .then((response) => response.json())
  .then((data) => console.log(data));
