import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const INITIAL_FORM_STATE = {
  what: "",
  who: "",
  when: "",
  followUp: false,
};

const store = (set, get) => ({
  //state
  ...INITIAL_FORM_STATE,
  plans: [],

  //actions
  setWhat: (what) => set({ what }, false, "set-what"),
  setWho: (who) => set({ who }),
  setWhen: (when) => set({ when }),
  toggleFollowUp: () => set((state) => ({ followUp: !state.followUp })),
  clear: () => set(INITIAL_FORM_STATE),
  add: () => {
    set((state) => {
      const { what, who, when, followUp } = state;
      state.plans.push({ what, who, when, followUp });
    });

    get().clear();
  },
});

export const useStore = create(
  devtools(immer(persist(store, { name: "my-zustand-app" })))
);
