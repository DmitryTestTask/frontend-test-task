import React from "react";
import { deleteMessage, insertServiceMessage } from "../store";
import { IListItem, IMessageContent } from "../types";

export const ListItem = (props: IListItem) => {
    const onDeleteClick = () => {
        if(!props.canDelete) {
            return;
        }
        props.dispatch(deleteMessage(props.id));
    };

    const onInsertClick = () => {
        props.dispatch(insertServiceMessage(props.id));
    };

    const btcAmount = props.btcAmount && `${(props.btcAmount * props.rate).toFixed(4)}USD`;

    return <div className={`message-item ${props.messageType}`}>
        <div className='item-info'>
            <div className='bold title'>{props.text}</div>
            <div className='item-content'>
                {
                    Array.isArray(props.messageContent) ?
                        props.messageContent.map((mc: IMessageContent) =>
                            <div key={`${mc.amount}_${Date.now()}`}>{`${mc.source}: ${mc.amount}`}</div>) :
                        props.messageContent
                }
            </div>
            <div className='amount'>{btcAmount}</div>

            {
                props.messageType !== 'custom' &&
                <div className='add-msg-btn' onClick={onInsertClick}>Add service message</div>
            }
        </div>

        <div className={`delete-btn ${props.canDelete ? '' : 'delete-btn-disabled'}`}
             onClick={onDeleteClick}>Delete</div>
    </div>;
};

