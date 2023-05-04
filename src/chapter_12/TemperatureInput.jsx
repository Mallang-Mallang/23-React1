const scaleNames = {
  c: '섭씨',
  f: '화씨',
};

function TemperatureInput(props) {
  const hanldeChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]}): </legend>
      <input value={props.temperature} onChange={hanldeChange} />
    </fieldset>
  );
}

export default TemperatureInput;
