import { ChangeEvent } from "react";

type Props = {
  text: string;
  onChange: (text: string) => void;
};

const Textbox = ({ text, onChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return <textarea value={text} onChange={handleChange} />;
};

export default Textbox;