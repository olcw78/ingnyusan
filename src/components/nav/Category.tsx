const Category = () => {
  return (
    <button
      class="lg:hidden md:block mx-2"
      onClick={() => {
        console.log("category clicked!");
      }}
    >
      <img src="/svg/category.svg" alt="tag menu icon" />
    </button>
  );
};
export default Category;
