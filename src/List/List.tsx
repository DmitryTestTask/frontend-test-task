import React from "react";
import { messagesSelector, rateSelector } from "../selectors";
import { ListItem } from "./ListItem";
import { IList, IMessage } from "../types";

export const List = (props: IList) => {
    const messages = messagesSelector(props.state);
    const rate = rateSelector(props.state);

    return <div className='messages-list'>
        {
           messages.map((message: IMessage) => <ListItem key={`${message.id}_${Date.now()}`}
                                                         {...message}
                                                         dispatch={props.dispatch}
                                                         rate={rate}/>)
        }
    </div>;
};

