import { createStore, combineReducers } from "redux";
import { ObserveOnMessage } from "rxjs/internal/operators/observeOn";
import { messageToInsert } from "./data-mocks/messages";
import { IMessage } from "./types";

const UPDATE_RATE = "UPDATE_RATE";

type UpdateRateAction = {
    type: typeof UPDATE_RATE;
    payload: number;
};

export function addTodo(rate: number) {
    return { type: UPDATE_RATE, payload: rate };
}

const rateReducer = (state = 0, action: UpdateRateAction) => {
    switch (action.type) {
        case UPDATE_RATE:
            return action.payload;
        default:
            return state;
    }
};



const MESSAGES = {
    SET_MESSAGES: "SET_MESSAGES",
    DELETE_MESSAGE: "DELETE_MESSAGE",
    INSERT_SERVICE_MESSAGE: "INSERT_SERVICE_MESSAGE"
};

export function setMessages(messages: IMessage[]) {
    return { type: MESSAGES.SET_MESSAGES, messages };
}
export function deleteMessage(messageId: number) {
    return { type: MESSAGES.DELETE_MESSAGE, messageId };
}
export function insertServiceMessage(messageId: number) {
    return { type: MESSAGES.INSERT_SERVICE_MESSAGE, messageId };
}

type messagesAction = {
    type: typeof MESSAGES.SET_MESSAGES | typeof MESSAGES.DELETE_MESSAGE | typeof MESSAGES.INSERT_SERVICE_MESSAGE;
    messages?: IMessage[];
    messageId?: number;
};

const messagesReducer = (state = [], action: messagesAction) => {
    switch (action.type) {
        case MESSAGES.SET_MESSAGES:
            return action.messages;
        case MESSAGES.INSERT_SERVICE_MESSAGE:
            const index = state.findIndex((message: IMessage) => message.id === action.messageId);
            return [
                ...state.slice(0, index + 1),
                {id: Date.now(), ...messageToInsert},
                ...state.slice(index + 1)
            ];
        case MESSAGES.DELETE_MESSAGE:
            return [...state.filter((message: IMessage) => message.id !== action.messageId)];
        default:
            return state;
    }
};

const reducers = combineReducers({ rate: rateReducer, messages: messagesReducer });

export const store = createStore(reducers, {});
