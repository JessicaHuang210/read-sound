import React, { Fragment, useState, useEffect } from "react";

import Table from "components/Table";
function SearchAlbum(props) {
  const [songList, setSongList] = useState([]);

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
    getSongs({ album: props.match.params.id });
  }, [props.match.params.id]);

  return (
    <Fragment>
      <h3>{props.match.params.id}</h3>
      <Table data={songList} readOnly />
    </Fragment>
  );
}

export default SearchAlbum;
