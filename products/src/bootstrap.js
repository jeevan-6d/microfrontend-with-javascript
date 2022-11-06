import faker from "faker";

const mount = (el) => {
  let productString = "";

  for (let i = 0; i < 5; i++) {
    productString += `<div>${faker.commerce.productName()}</div>`;
  }

  el.innerHTML = productString;

  // ReactDom.render(<App/>,el)
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// which DEFNITELY has an element with an id of "dev-products"
// We want to immediately render our app into that element

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#product-list");

  // Assuming our container doesn't have an element
  // with id 'product-list'.........

  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Context/Situation #2
// We are running the file in development or production
// though the CONTAINER app
// No GUARANTEE that an element with has id  of 'dev-products' exits
// We DO NOT WANT to immediately render the app

export { mount };
