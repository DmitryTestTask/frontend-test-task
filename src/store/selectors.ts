import { IMessage, IState } from "../types";

export const messagesSelector = (state: IState): IMessage[] => state.messages;
export const rateSelector = (state: IState) => state.rate;
