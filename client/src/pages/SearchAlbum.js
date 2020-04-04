import React, { Fragment, useState, useEffect } from "react";
import Spin from "components/Spin";
import { H2 } from "components/Typography";

import Table from "components/Table";
function SearchAlbum(props) {
  const [songList, setSongList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSongs = async (obj = {}) => {
    setIsLoading(true);
    var url = new URL(process.env.REACT_APP_API_URL + "/getSongs"),
      params = obj;
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );
    const res = await fetch(url);
    const list = await res.json();
    setSongList(list);
    setIsLoading(false);
  };

  const handleSingerClick = singer => {
    props.history.push({ pathname: "/searchSinger/" + singer });
  };

  useEffect(() => {
    getSongs({ album: props.match.params.id });
  }, [props.match.params.id]);

  return (
    <Fragment>
      <H2>{props.match.params.id}</H2>
      {isLoading ? (
        <Spin />
      ) : (
        <Table data={songList} onSingerClick={handleSingerClick} readOnly />
      )}
    </Fragment>
  );
}

export default SearchAlbum;
