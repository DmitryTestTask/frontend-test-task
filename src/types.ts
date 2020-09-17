import { Dispatch } from "redux";

export interface IMessage {
    id: number;
    text: string;
    canDelete: boolean;
    btcAmount?: number;
    messageContent?: string | IMessageContent;
    messageType: string;
}

export interface IMessageContent {
    source: string;
    amount: number;
}

export interface IState {
    rate: number;
    messages: IMessage[];
}


export interface IApp {
    dispatch: Dispatch;
    state: IState;
}

export interface IList {
    dispatch: Dispatch;
    state: IState;
}

export interface IListItem {
    id: number;
    text: string;
    canDelete: boolean;
    btcAmount?: number;
    messageContent?: string | IMessageContent;
    messageType: string;
    dispatch: Dispatch;
    rate: number;
}
