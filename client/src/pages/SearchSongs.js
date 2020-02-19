import React, { useState } from "react";
import InputText from "components/InputText";
import { FormWrap, FormItem } from "components/Form";

function SearchSongs(props) {
  const [searchKey] = useState(props.name || "name");
  const [placeholder] = useState(props.placeholder || "搜尋歌名...");
  return (
    <FormWrap>
      <FormItem>
        <InputText
          type="search"
          value={props.keywords}
          name="keywords"
          placeholder={placeholder}
          onChange={e =>
            props.onSearchSong({
              [searchKey]: e.target.value.trim()
            })
          }
        />
      </FormItem>
    </FormWrap>
  );
}

export default SearchSongs;
