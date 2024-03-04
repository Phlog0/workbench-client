import TableRow from "./TableRow";
import styles from "./RowRenderer.module.scss";
// import { List } from "react-virtualized";
function RowRenderer({
  index, // Index of row
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  key, // Unique key within array of rendered rows
  parent, // Reference to the parent List (instance)
  style,
  data, // Style object to be applied to row (to position it);
  // This must be passed through to the rendered row element.
}) {
  //   const user = list[index];

  // If row content is complex, consider rendering a light-weight placeholder while scrolling.
//   const content = isScrolling ? (
//     "..."
//   ) : (
//     <TableRow data={data} disabled={true} />
//   );

  // Style is required since it specifies how the row is to be sized and positioned.
  // React Virtualized depends on this sizing/positioning for proper scrolling behavior.
  // By default, the List component provides following style properties:
  //    position
  //    left
  //    top
  //    height
  //    width
  // You can add additional class names or style properties as you would like.
  // Key is also required by React to more efficiently manage the array of rows.
  console.log("meow!");
  return (
    <div key={key}>
      {/* <TableRow data={data} disabled={true} /> */}
    </div>
  );
}

export default RowRenderer;
