import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { IListItem, IMessageContent } from "../types";
import { deleteMessage, insertServiceMessage } from "../store/actions";

export const ListItem = ({
  canDelete,
  id,
  text,
  messageType,
  btcAmount,
  rate,
  messageContent,
}: IListItem) => {
  const dispatch = useDispatch();
  const onDeleteClick = useCallback(() => {
    canDelete && dispatch(deleteMessage(id));
  }, [dispatch, canDelete, id]);

  const onInsertClick = useCallback(() => {
    dispatch(insertServiceMessage(id));
  }, [dispatch, id]);
  const deleteButtonClass = `delete-btn ${canDelete ? "" : "delete-btn-disabled"}`;
  const btc = btcAmount && `${(btcAmount * rate).toFixed(4)}USD`;
  const itemContent = Array.isArray(messageContent)
    ? messageContent.map(({ amount, source }: IMessageContent) => (
        <div key={`${amount}_${Date.now()}`}>{`${source}: ${amount}`}</div>
      ))
    : messageContent;

  return (
    <div className={`message-item ${messageType}`}>
      <div className="item-info">
        <div className="bold title">{text}</div>
        <div className="item-content">{itemContent}</div>
        <div className="amount">{btc}</div>
        {messageType !== "custom" && (
          <div className="add-msg-btn" onClick={onInsertClick}>
            Add service message
          </div>
        )}
      </div>
      <div className={deleteButtonClass} onClick={onDeleteClick}>
        Delete
      </div>
    </div>
  );
};
