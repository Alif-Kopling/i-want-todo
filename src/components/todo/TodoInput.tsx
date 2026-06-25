import { useState } from "react";
import { TextField, InputGroup, Button } from "@heroui/react";

interface Props {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <div className="flex gap-2 items-start">
      <TextField
        value={value}
        onChange={setValue}
        className="flex-1"
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") handleSubmit();
        }}
      >
        <InputGroup>
          <InputGroup.Input placeholder="Add a new todo..." />
        </InputGroup>
      </TextField>
      <Button variant="primary" onPress={handleSubmit}>
        Add
      </Button>
    </div>
  );
}
