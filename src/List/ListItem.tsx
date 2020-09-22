import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

import { ListItem, MessageContent } from "../types";
import { deleteMessage, insertServiceMessage } from "../store/actions";

export const ListItemComponent = ({
  canDelete,
  id,
  text,
  messageType,
  btcAmount,
  rate,
  messageContent,
}: ListItem) => {
  const dispatch = useDispatch();

  const onDeleteClick = useCallback(() => {
    canDelete && dispatch(deleteMessage(id));
  }, [dispatch, canDelete, id]);

  const onInsertClick = useCallback(() => {
    dispatch(insertServiceMessage(id));
  }, [dispatch, id]);

  const deleteButtonClass = useMemo(() => `delete-btn ${canDelete ? "" : "delete-btn-disabled"}`, [
    canDelete,
  ]);
  const btc = useMemo(() => btcAmount && `${(btcAmount * rate).toFixed(4)}USD`, [btcAmount, rate]);
  const itemContent = useMemo(
    () =>
      Array.isArray(messageContent)
        ? messageContent.map(({ amount, source }: MessageContent) => (
            <div key={`${amount}_${Date.now()}`}>{`${source}: ${amount}`}</div>
          ))
        : messageContent,
    [messageContent],
  );

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
