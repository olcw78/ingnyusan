const PagePathsWithComponents = import.meta.glob("./pages/*.tsx", {
  eager: true
});

export const routes = Object.keys(PagePathsWithComponents).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1];
  const fc = PagePathsWithComponents[path] as any;

  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: fc.default,
    order: fc.navOrder as number
  };
});

export type RoutesT = typeof routes;
