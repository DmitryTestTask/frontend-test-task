import { MESSAGES, MessagesAction, UPDATE_RATE, UpdateRateAction } from "./actions";
import { Message } from "../types";
import { messageToInsert } from "../data-mocks/messages";

export const rateReducer = (state = 0, action: UpdateRateAction) => {
  switch (action.type) {
    case UPDATE_RATE:
      return action.payload;
    default:
      return state;
  }
};

export const messagesReducer = (state: Message[] = [], action: MessagesAction) => {
  switch (action.type) {
    case MESSAGES.SET_MESSAGES:
      return action.messages;
    case MESSAGES.INSERT_SERVICE_MESSAGE:
      const index = state.findIndex((message: Message) => message.id === action.messageId);
      return [
        ...state.slice(0, index + 1),
        { id: Date.now(), ...messageToInsert },
        ...state.slice(index + 1),
      ];
    case MESSAGES.DELETE_MESSAGE:
      return [...state.filter((message: Message) => message.id !== action.messageId)];
    default:
      return state;
  }
};
