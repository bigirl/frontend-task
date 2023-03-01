
import React, { useCallback, useState } from "react";

import StyledSearchTextbox from "./StyledSearchTextbox";
import { SearchIcon, CloseIcon } from "../../tools/icons";

import { useAppDispatch } from '../../store/hooks';
import { useDebounce } from '../../tools/hooks/useDebounce';
import { update } from './searchTermSlice';


const SearchTextbox = () => {
  const [text, setText] = useState("");

  const dispatch = useAppDispatch();
  const sendRequest = (value:string) => {
    dispatch(update(value));
  };

  const debouncedSendRequest = useDebounce(sendRequest, 200);

  const handleChange = (event: any) => {
    const value = event.target.value.toLowerCase();

    setText(value);
    debouncedSendRequest(value);
  };

  const clearInput = () => {
    setText("");
    debouncedSendRequest("");
  };

  return (
      <StyledSearchTextbox className={"inputWithIcon"}>
        <span className="left-icon"><SearchIcon /></span>
        <input type="text" value={text} onChange={handleChange} placeholder="Search item"/>
        <button className="right-icon" onClick={clearInput}>
          <CloseIcon/>
        </button>
      </StyledSearchTextbox>
  );
};

export default SearchTextbox;
