import { register, load } from "@shopify/theme-sections";
import Header from "@/shopify/sections/header";
import FeaturedProducts from "@/shopify/sections/featured-products";

register("header", Header);
register("featured-products", FeaturedProducts);
load("*");
