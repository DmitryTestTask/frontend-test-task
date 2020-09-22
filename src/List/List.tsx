import React from "react";
import { useSelector } from "react-redux";

import { ListItem } from "./ListItem";
import { IMessage } from "../types";
import { messagesSelector, rateSelector } from "../store/selectors";

export const List = () => {
  const messages = useSelector(messagesSelector);
  const rate = useSelector(rateSelector);

  return (
    <div className="messages-list">
      {messages.map((message: IMessage) => (
        <ListItem key={`${message.id}_${Date.now()}`} {...message} rate={rate} />
      ))}
      }
    </div>
  );
};
