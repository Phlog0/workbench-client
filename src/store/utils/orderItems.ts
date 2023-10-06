const orderItems = (items, tire) => {
  let i = 0;
  tire.style.width = 60;
  const orderedItems = items.map((item, index) => {
    if (item.parentNode === "group1") {
      tire.style.width += 300;
      console.log(i, tire.style.width);
      return { ...item, position: { y: 0, x: 300 * i++ + 30 } };
    }
    return item;
  });
  return orderedItems;
};

export default orderItems;
