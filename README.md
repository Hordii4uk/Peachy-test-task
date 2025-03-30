# peachy-candidate

## Task

Implement functionality according to design (link in Sources). You can use provided theme or any other theme/scratch project.

### Goals:

1.  Products/variants should be added to cart by clicking the `add to cart` button (check CartJS docs);
2.  Changing the `product variant (select dropdown)` should correctly change the `variant that will be added to the cart` (check CartJS docs);
3.  Product cards should be `carousel on mobile` and `grid on desktop` and automatically change to `carousel view` or `grid view` depending on screen resolution;
4.  Clicking the `Product Image` and `Product Title` should redirect to `Product Details Page` (no need to implement this page);

## Docs

Shopify CLI: https://shopify.dev/docs/themes/tools/cli/install
CartJS: https://cartjs.org/pages/guide#data-api-submitting-forms

## Setup steps

1.  Install node modules `yarn install`;
2.  Update `shopify.theme.toml` (replace `store = ""` with your's store address, e.g `store = "my-store"`);
3.  Start Development `yarn start`;
4.  Code the task;
5.  Deploy `yarn deploy`.

## Note
- Use latest version of Shopify CLI
- You have everything you need in the provided theme to develop this page
- Use `src` folder for your `css (scss)` and `js`;
- `Tailwind` is optional but will be a plus;

## Sources

- Design - https://www.figma.com/file/BB5Ge3zMwyOt1CZ3FuWQaZ/peachy-candidate
