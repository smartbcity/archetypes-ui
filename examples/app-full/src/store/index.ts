import { initRedux } from "@smartb/archetypes-ui-providers";

const reducers = {
}

export const {store, history, reducer} = initRedux<typeof reducers>(reducers)

export type State = ReturnType<typeof reducer>;

