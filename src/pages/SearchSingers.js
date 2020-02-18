import React, { Fragment, useState, useEffect } from "react";

import SearchSongs from "./SearchSongs";
import Table from "components/Table";
function SearchSingers() {
  const [songList, setSongList] = useState([]);
  const [keyword] = useState("");

  const getSongs = async (obj = {}) => {
    var url = new URL(process.env.REACT_APP_API_URL + "/getSongs"),
      params = obj;
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );
    const res = await fetch(url);
    const list = await res.json();
    setSongList(list);
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <Fragment>
      <SearchSongs
        keyword={keyword}
        onSearchSong={getSongs}
        searchKey="singer"
        placeholder="搜尋歌手..."
      />
      <Table data={songList} readOnly />
    </Fragment>
  );
}

export default SearchSingers;
