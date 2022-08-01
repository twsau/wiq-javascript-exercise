# Wi-Q JavaScript Exercise

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

- Node
- NPM
- Yarn (optional)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## NextJS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

## Tasks

- Click into one of the available menus. Note that no products load, this is due to an error from the API.
Ideally we would want to handle an error like this with a friendly error message. **Hint: You may need to check the
documentation for the data fetching library we are using to see how it handles errors.**
- Once the page handles this error you can remove the `throw new Error` line from `api/menu/[id].ts` file.
- Note that when you add products to the basket, they are added multiple times instead of the quantity updating.
Collate the items in the basket so that when the same item is added twice, its quantity is updated, and when the last
item is removed, it is removed completely.
  - Are there any units you could break out of this piece of work to independently unit test?
- You'll notice that every menu has the same set of menu items. That's because the response from this API endpoint
is hardcoded and not dependent on the page route. Check out the files `/pages/api/menu/[id].ts` and `/pages/api/menu/data.json`.
Update the `[id].ts` file so that when `/menu/[id]` is requested, we return with the correct set of products from `data.json`.
**Hint: you might want to check the docs for Next.js to see how API routes can vary on path parameters.**
