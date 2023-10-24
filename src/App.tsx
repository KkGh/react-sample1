import { ChangeEvent, useCallback, useState } from "react";
import Textbox from "./components/Textbox";

const App = () => {
  const [text, setText] = useState("sample");
  const [value, setValue] = useState(10);

  const handleTextChange = useCallback((text: string) => {
    setText(text);
  }, []);

  const handleValueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    return setValue(e.target.value as unknown as number);
  }, []);

  return (
    <div>
      {<Textbox text={text} onChange={handleTextChange} />}

      <div>
        <input type="number" value={value} onChange={handleValueChange} />
      </div>

      <div>result: </div>
      <textarea readOnly rows={10} cols={40}>
        {text.repeat(value)}
      </textarea>
    </div>
  );
};

export default App;
