import store from "./store";
import { bugAdded, bugResolved } from "./actions";

// Runs everytime the state changes
store.subscribe(() => {
  console.log("State Changed", store.getState());
});

// dispatch run for a state change
store.dispatch(bugAdded("Bug 1"));

store.dispatch(bugResolved(1));

store.dispatch(bugAdded("Bug 2"));

console.log(store.getState());
