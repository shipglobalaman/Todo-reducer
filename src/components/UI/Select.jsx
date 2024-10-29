const Select = () => {
  return (
    <div>
      <form class="max-w-sm mx-auto">
        <select
          id="countries"
          class="dark:bg-blue-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Select Types of Cuisines</option>
          <option value="In">Indian Cuisine</option>
          <option value="CI">Chinies Cuisine</option>
          <option value="FR">French Cuisine</option>
          <option value="ME">Mexican Cuisine</option>
        </select>
      </form>
    </div>
  );
};
export default Select;
