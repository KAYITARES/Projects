export default function Stats({ items }) {
  const numItems = items.length;
  if (numItems === 0)
    return (
      <footer className="stats">
        You can satrt adding items in your list{" "}
      </footer>
    );
  const totalPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((totalPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>you got everything! Ready to go ✈️</em>
      ) : (
        <em>
          👜 You have {numItems} items on your list, and you already packed
          {totalPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
