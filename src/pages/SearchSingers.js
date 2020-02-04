import React, { Component, Fragment } from "react";
import SearchSongs from "./SearchSongs";
import Table from "components/Table";

class SearchSingers extends Component {
  state = {
    songLsit: [],
    keyword: "",
    isLoading: false
  };
  componentDidMount() {
    this.getSongs();
  }

  getSongs = async (obj = {}) => {
    var url = new URL(process.env.REACT_APP_API_URL + "/getSongs"),
      params = obj;
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );
    const res = await fetch(url);
    const list = await res.json();
    this.setState({ songLsit: list });
  };

  render() {
    return (
      <Fragment>
        <SearchSongs
          keyword={this.state.keyword}
          onSearchSong={this.getSongs}
          searchKey="singer"
          placeholder="搜尋歌手..."
        />
        <Table data={this.state.songLsit} />
      </Fragment>
    );
  }
}

export default SearchSingers;
