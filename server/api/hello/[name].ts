export default defineEventHandler((event) => {
  return { name: `Hello, ${event.context.params.name}!` };
});
