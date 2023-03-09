const PagePathsWithComponents = import.meta.glob("./pages/*.tsx", {
  eager: true,
});

export const routes = Object.keys(PagePathsWithComponents).map(path => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1];

  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: (PagePathsWithComponents[path] as any).default,
  };
});