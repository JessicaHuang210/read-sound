import React, { Fragment, useState, useEffect } from "react";
import AddSong from "../components/AddSong";
import SearchSongs from "../components/SearchSongs";
import { H3 } from "components/Typography";
import Table from "components/Table";
import Spin from "components/Spin";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Home(props) {
  const [songList, setSongList] = useState([]);
  const [keyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const handleCreateClick = async state => {
    const params = {
      name: state.name,
      singer: state.singer,
      album: state.album,
      fileName: state.fileName
    };
    let isValidateFailed = false;
    Object.keys(params).forEach(i => {
      if (i === "name" || i === "singer") {
        params[i] === "" && (isValidateFailed = true);
        return;
      }
    });
    if (isValidateFailed) return;
    setIsLoading(true);
    await fetch(process.env.REACT_APP_API_URL + "/getSongs", {
      method: "POST",
      body: JSON.stringify(params),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    await getSongs();
    setIsLoading(false);
  };

  const handleDeleteClick = async id => {
    const option = {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    };
    await fetch(process.env.REACT_APP_API_URL + "/getSongs/" + id, option);
    await getSongs();
  };

  const handleDetailClick = id => {
    props.history.push({ pathname: "/EditSong/" + id });
  };

  const hanbleSingerClick = singer => {
    props.history.push({ pathname: "/searchSinger/" + singer });
  };

  const hanbleAlbumClick = album => {
    props.history.push({ pathname: "/searchAlbum/" + album });
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await getSongs();
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <AddSong isLoading={isLoading} onCreatedClick={handleCreateClick} />
      <SearchSongs keyword={keyword} onSearchSong={getSongs} />
      <H3>所有歌曲</H3>
      {isLoading ? (
        <Spin>
          <AiOutlineLoading3Quarters className="icon--rotate" />
        </Spin>
      ) : (
        <Table
          onDeleteClick={handleDeleteClick}
          onDetailClick={handleDetailClick}
          onSingerClick={hanbleSingerClick}
          onAlbumClick={hanbleAlbumClick}
          data={songList}
        />
      )}
    </Fragment>
  );
}

export default Home;
