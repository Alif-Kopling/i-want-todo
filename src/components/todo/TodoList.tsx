import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@heroui/react";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoStats from "./TodoStats";

import { Todo as TodoType } from "@/types";

type Filter = "all" | "active" | "completed";

const FILTERS: Filter[] = ["all", "active", "completed"];

interface Props {
  todos: TodoType[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
}

export default function TodoList({
  todos,
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
}: Props) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered: TodoType[] = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;

    return true;
  });

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Aku nak ni bole?</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <TodoInput onAdd={addTodo} />

        <div className="flex justify-center gap-2">
          {FILTERS.map((f) => (
            <Button
              key={f}
              size="sm"
              variant={filter === f ? "primary" : "tertiary"}
              onPress={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>

        <TodoStats completed={completedCount} total={todos.length} />

        <div className="flex flex-col gap-2">
          {filtered.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onEdit={editTodo}
              onToggle={toggleTodo}
            />
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-muted py-8">No todos found</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
