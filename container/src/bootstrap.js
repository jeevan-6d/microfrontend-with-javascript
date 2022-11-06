import { mount as productsMount } from "products/ProductIndex";
import { mount as cartMount } from "cart/CartIndex";

productsMount(document.querySelector("#my-product"));

cartMount(document.querySelector("#my-cart"));
