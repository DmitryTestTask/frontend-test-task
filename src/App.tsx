import React, { useEffect, useState } from "react";

import { useRate } from "./useRate";
import { List } from "./List/List";
import { connect, useDispatch } from "react-redux";
import { getMessagesList } from "./fakeApi";
import { setMessages } from "./store";
import { IApp, IMessage, IState } from "./types";


const App = (props: IApp) => {
    const [isMessagesLoaded, setIsMessagesLoaded] = useState(false);
    useEffect(() => {
        getMessagesList().subscribe((data: any) => {
            setIsMessagesLoaded(true);
            props.dispatch(setMessages(data));
        });
    }, []);
    const isRatesLoaded = useRate();

    return isMessagesLoaded && isRatesLoaded ? <List state={props.state}
                                                     dispatch={props.dispatch}/> :
                                                <p>We loading rate for u. Wait a bit</p>;
};

const mapStateToProps = (state: IState) => ({ state });

export default connect(mapStateToProps)(App);
