const orderItems = (items, tire) => {
  let i = 0;
  if (tire?.style?.width) tire.style.width += 300;

  const orderedItems = items.map((item) => {
    if (item.parentNode === "group1") {
      return { ...item, position: { y: 0, x: 300 * i++ + 25 } };
    }
    return item;
  });
  return orderedItems;
};

export default orderItems;
