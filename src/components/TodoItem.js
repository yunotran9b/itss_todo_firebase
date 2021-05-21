function TodoItem({ item, onCheck }) {
  const handleChange = () => {
    onCheck(item);
  }
  return (
    <label className="panel-block">
      <input
        type="checkbox"
        checked={item.done}
        onChange={handleChange}
      />
      <span className={item.done ? 'has-text-grey-light' : ''}>
        {item.text}
      </span>
    </label>
  );
}

export default TodoItem;