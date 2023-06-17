export default defineNuxtRouteMiddleware((to, from) => {
  // console.log(from);
  // to is the destination
  console.log(to);
  const isLogged = false;
  if (isLogged) {
    // redirect to the page we want to go
    return navigateTo(to.fullPath);
  }
  // else redirect to a login page
  return navigateTo("/login");
});
