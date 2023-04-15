export const searchP = (searchTerm, lista) => {
    let copialista = lista.slice();
    if (searchTerm) {
      // Eliminar tildes de searchTerm
      searchTerm = searchTerm.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      // Eliminar tildes de los nombres en la lista
      copialista = lista.map((item) => {
        const newItem = { ...item };
        newItem.nombre = newItem.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return newItem;
      });
      copialista = copialista.filter((item) =>
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return copialista;
  };
  