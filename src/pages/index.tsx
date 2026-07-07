import type { Todo } from "@/types";

import todosData from "../data/todos.json";

import { useTodos } from "@/hooks/useTodos";
import DefaultLayout from "@/layouts/default";
import TodoList from "@/components/todo/TodoList";

const initialTodos: Todo[] = todosData.map((t: Record<string, unknown>) => ({
  id: String(t.id),
  text: String(t.text),
  completed: Boolean(t.isCompleted),
  createdAt: Date.now(),
}));

export default function IndexPage() {
  const todoProps = useTodos(initialTodos);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <TodoList {...todoProps} />
      </section>
    </DefaultLayout>
  );
}
