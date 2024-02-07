export default function FretboardInput(props) {
  return (
    <input
      type="text"
      maxLength={2}
      value={props.value}
      onChange={(e) => {
        const value = e.target.value ? e.target.value.toUpperCase() : "";
        props.onChange(value);
      }}
    />
  );
}
