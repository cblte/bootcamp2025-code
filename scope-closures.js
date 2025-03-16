// %%

const bark = (dog) => {
  const say = `${dog} barked!`;
  console.log(say);
};

bark(`Roger`);
// %%
const bark2 = (dog) => {
  const say = `${dog} barked!`;
  return () => console.log(say);
};

// The bark2 function is a higher-order function that:
// 1. Takes a dog name as input
// 2. Creates a closure that captures the 'say' variable
// 3. Returns a new function that will log the message when called
//
// When we call bark2("Diego")(), we're:
// - First calling bark2("Diego") which returns a function
// - Then immediately calling that returned function with ()
bark2("Diego")();
