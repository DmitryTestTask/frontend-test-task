import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useRate } from "./useRate";
import { List } from "./List/List";
import { fetchMessages } from "./store/actions";

export const App = () => {
  const dispatch = useDispatch();
  const isRatesLoaded = useRate();

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return isRatesLoaded ? <List /> : <p>We loading rate for u. Wait a bit</p>;
};
