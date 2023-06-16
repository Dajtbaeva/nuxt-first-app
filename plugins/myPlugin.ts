export default defineNuxtPlugin(() => {
  return {
    provide: {
      sayHello: (message: string) => console.log(`Hello, ${message}`),
    },
  };
});
