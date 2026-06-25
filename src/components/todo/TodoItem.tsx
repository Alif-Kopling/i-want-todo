import { useState } from "react";
import { Button, TextField, InputGroup } from "@heroui/react";
import { Todo } from "@/types";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleSave = () => {
    if (!editValue.trim()) return;
    onEdit(todo.id, editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(todo.text);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2 p-3 rounded-lg border border-separator">
        <TextField
          value={editValue}
          onChange={setEditValue}
          className="flex-1"
          autoFocus
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === "Enter") handleSave();
            if (e.key === "Escape") handleCancel();
          }}
        >
          <InputGroup>
            <InputGroup.Input />
          </InputGroup>
        </TextField>
        <Button variant="primary" size="sm" onPress={handleSave}>
          Save
        </Button>
        <Button variant="tertiary" size="sm" onPress={handleCancel}>
          Cancel
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between gap-2 p-3 rounded-lg border border-separator">
      <div className="flex items-center gap-3">
        <Button
          variant={todo.completed ? "primary" : "ghost"}
          size="sm"
          isIconOnly
          onPress={() => onToggle(todo.id)}
          className="min-w-8 h-8"
        >
          {todo.completed ? "✓" : "○"}
        </Button>
        <span
          className={`${todo.completed ? "line-through text-muted" : ""} cursor-pointer`}
          onDoubleClick={() => {
            setEditValue(todo.text);
            setIsEditing(true);
          }}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex gap-1">
        <Button variant="ghost" size="sm" onPress={() => {
          setEditValue(todo.text);
          setIsEditing(true);
        }}>
          ✏️
        </Button>
        <Button variant="ghost" size="sm" onPress={() => onDelete(todo.id)}>
          ✕
        </Button>
      </div>
    </div>
  );
}
