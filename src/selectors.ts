import { createSelector } from 'reselect';
import { IState } from "./types";

export const messagesSelector = (state: IState) => state.messages;
export const rateSelector = (state: IState) => state.rate;
