import { proxy, subscribe } from "valtio";

// TODO: persist state to local storage or smth

interface State {
  showSidebar: boolean;
}

export const state = proxy<State>({
  showSidebar: false,
});
