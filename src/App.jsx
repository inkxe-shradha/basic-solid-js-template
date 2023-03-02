import Header from "./components/Header";
import { createEffect, createSignal } from "solid-js";
import CounterX from "./components/Counter";

function App() {
  const [counter, setCounter] = createSignal(0);
  createEffect(() => {
    console.log("Create Effect Registered", counter());
  });
  return (
    <>
      <Header />
      <div className="card">
        <CounterX counter={counter()} />
        <div class="actions">
          <button
            type="button"
            class="btn-grad"
            onclick={() => setCounter(counter() - 1)}
          >
            -
          </button>
          <button
            type="button"
            class="btn-grad-v2"
            onClick={() => setCounter((previous) => previous + 1)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
