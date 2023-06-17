export default defineEventHandler((event) => {
  console.log(event);
  return {
    api: "server works",
  };
  // return json object
});
