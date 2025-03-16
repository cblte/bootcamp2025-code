const list = [
  { color: "white", size: "XXL" },
  { color: "red", size: "XL" },
  { color: "black", size: "M" },
];

list.sort();
console.log("Simple call to sort():\nlist =", list);

list.sort((a, b) => (a.color > b.color ? 1 : -1));
console.log("Sorted by color:\nlist =", list);

list.sort((a, b) => (a.size > b.size ? 1 : -1));
console.log("Sorted by size:\nlist =", list);
