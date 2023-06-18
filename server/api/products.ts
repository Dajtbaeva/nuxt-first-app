// import data from "./products.json";

// export default defineEventHandler(async () => {
//   return new Promise<any>((resolve) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 2000);
//   });
// });

let productCount = 0;

export default async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(productCount++);
    }, 2000);
  });
  return {
    productCount,
  };
};
