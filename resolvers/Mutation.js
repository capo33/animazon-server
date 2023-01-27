const uui = () => {
  let head = Date.now().toString(36);
  let tail = Math.random().toString(36).slice(2);
  return head + tail;
};

const Mutation = {
  addAnimal: (
    parent,
    { image, title, rating, price, description, slug, stock, onSale, category },
    { animals }
  ) => {
    let newAnimal = {
      id: uui(),
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onSale,
      category,
    };
    animals.push(newAnimal);
    return newAnimal;
  },

  removeAnimal: (parent, { id }, { animals }) => {
    let index = animals.findIndex((animal) => animal.id === id);
    if (index === -1) {
      return false;
    }
    animals.splice(index, 1);
    return true;
  },

//   updateAnimal: (
//     parent,
//     {
//       id,
//       image,
//       title,
//       rating,
//       price,
//       description,
//       slug,
//       stock,
//       onSale,
//       category,
//     },
//     { animals }
//   ) => {
//     let index = animals.findIndex((animal) => animal.id === id);
//     if (index === -1) {
//       return false;
//     }
//     let updatedAnimal = {
//       id,
//       image,
//       title,
//       rating,
//       price,
//       description,
//       slug,
//       stock,
//       onSale,
//       category,
//     };
//     animals[index] = updatedAnimal;
//     return updatedAnimal;
//   },
};

module.exports = Mutation;
