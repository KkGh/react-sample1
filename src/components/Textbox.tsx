import { ChangeEvent, useCallback } from "react";

type Props = {
  text: string;
  onChange: (text: string) => void;
};

const Textbox = ({ text, onChange }: Props) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return <textarea value={text} onChange={handleChange} />;
};

export default Textbox;
