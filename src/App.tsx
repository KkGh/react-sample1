import { useCallback, useState } from "react";
import Textbox from "./components/Textbox";

const App = () => {
  const [text, setText] = useState("sample");
  const [value, setValue] = useState(10);


  const handleChange = useCallback((text: string) => {
    setText(text);
  }, []);

  return (
    <div>
      {<Textbox text={text} onChange={handleChange} />}

      <input type="number" value={value} onChange={e => setValue(e.target.value as unknown as number)} />
      <div>great processing...</div>
      <div>result: {text.repeat(value)}</div>
    </div>
  );
};

export default App;