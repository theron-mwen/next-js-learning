export const metadata = {
  title: {
    absolute: "My Blog",
  },
};
export default async function Blog() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Intentional Delay");
    }, 2000),
  );
  return <h1>My blog</h1>;
}
