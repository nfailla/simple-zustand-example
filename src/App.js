import "./App.css";
import { useStore } from "./store";
import { What, Who, When, FollowUp, Actions, Plans } from "./formInputs";

function App() {
  const what = useStore((state) => state.what);
  const setWhat = useStore((state) => state.setWhat);
  const who = useStore((state) => state.who);
  const setWho = useStore((state) => state.setWho);
  const when = useStore((state) => state.when);
  const setWhen = useStore((state) => state.setWhen);
  const followUp = useStore((state) => state.followUp);
  const toggleFollowUp = useStore((state) => state.toggleFollowUp);
  const clear = useStore((state) => state.clear);
  const add = useStore((state) => state.add);
  const plans = useStore((state) => state.plans);

  return (
    <div className="app">
      <What value={what} onChange={setWhat}></What>
      <Who value={who} onChange={setWho}></Who>
      <When value={when} onChange={setWhen}></When>
      <FollowUp value={followUp} onChange={toggleFollowUp}></FollowUp>

      <Actions onClear={clear} onAdd={add}></Actions>

      <Plans value={plans} />
    </div>
  );
}

export default App;
