const CandleItem = (props) => {
  return (
    <div>
      <ul>
        <li>{props.aromas}</li>
        <li>{props.description}</li>
        <li>{props.name}</li>
      </ul>
    </div>
  );
};

export default CandleItem;
