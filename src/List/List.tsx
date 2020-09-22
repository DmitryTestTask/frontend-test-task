import React from "react";
import { useSelector } from "react-redux";

import { ListItemComponent } from "./ListItem";
import { Message } from "../types";
import { messagesSelector, rateSelector } from "../store/selectors";

export const List = () => {
  const messages = useSelector(messagesSelector);
  const rate = useSelector(rateSelector);

  return (
    <div className="messages-list">
      {messages.map((message: Message) => (
        <ListItemComponent key={`${message.id}`} {...message} rate={rate} />
      ))}
      }
    </div>
  );
};
