import { Message, State } from "../types";

export const messagesSelector = (state: State): Message[] => state.messages;
export const rateSelector = (state: State) => state.rate;
