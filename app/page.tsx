import type { NextPage } from 'next';
import Head from 'next/head';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="A simple todo app" />
      </Head>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Home;