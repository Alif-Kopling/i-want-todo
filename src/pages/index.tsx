import DefaultLayout from "@/layouts/default";
import TodoList from "@/components/todo/TodoList";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <TodoList />
      </section>
    </DefaultLayout>
  );
}