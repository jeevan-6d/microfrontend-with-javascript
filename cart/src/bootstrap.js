import faker from "faker";

const mount = (el) => {
  const cartString = `<div>You have ${faker.datatype.number(
    20
  )} iteams in your cart!</div>`;

  el.innerHTML = cartString;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-list");

  if (el) {
    mount(el);
  }
}

export { mount };
