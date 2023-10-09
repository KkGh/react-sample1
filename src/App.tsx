import { useCallback, useState } from "react";
import Textbox from "./components/Textbox";

const App = () => {
  const [text, setText] = useState("sample");

  const handleChange = useCallback((text: string) => {
    setText(text);
  }, []);

  return (
    <div>
      {<Textbox text={text} onChange={handleChange} />}

      <span>subsubsub</span>
      <div>result: {text}</div>
    </div>
  );
};

export default App;