import { Dispatch } from "redux";

import { Message } from "../types";
import { getMessagesList } from "../fakeApi";

export const UPDATE_RATE = "UPDATE_RATE";

export type UpdateRateAction = {
  type: typeof UPDATE_RATE;
  payload: number;
};

export function setRate(rate: number) {
  return { type: UPDATE_RATE, payload: rate };
}

export const MESSAGES = {
  SET_MESSAGES: "SET_MESSAGES",
  DELETE_MESSAGE: "DELETE_MESSAGE",
  INSERT_SERVICE_MESSAGE: "INSERT_SERVICE_MESSAGE",
};

export function setMessages(messages: Message[]) {
  return { type: MESSAGES.SET_MESSAGES, messages };
}
export function deleteMessage(messageId: number) {
  return { type: MESSAGES.DELETE_MESSAGE, messageId };
}
export function insertServiceMessage(messageId: number) {
  return { type: MESSAGES.INSERT_SERVICE_MESSAGE, messageId };
}

export const fetchMessages = () => (dispatch: Dispatch) => {
  getMessagesList().subscribe((data: Message[]) => {
    dispatch(setMessages(data));
  });
};

export type MessagesAction = {
  type:
    | typeof MESSAGES.SET_MESSAGES
    | typeof MESSAGES.DELETE_MESSAGE
    | typeof MESSAGES.INSERT_SERVICE_MESSAGE;
  messages?: Message[];
  messageId?: number;
};
