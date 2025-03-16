// %%

const a = () => console.log("a");

const b = () => console.log("b");

const c = () => {
  console.log("c");
  setTimeout(b, 0);
  a();
};

c();
// %%

const bb = () => console.log("bb");

const cc = () => console.log("cc");

const aa = () => {
  console.log("aa");
  setTimeout(bb, 0);
  new Promise((resolve, reject) => resolve("should be right after cc, before bb")).then((resolve) =>
    console.log(resolve),
  );
  cc();
};

aa();
