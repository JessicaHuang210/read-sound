import React, { Component, Fragment } from "react";
import AddSong from "./AddSong";
import SearchSongs from "./SearchSongs";
import { H3 } from "components/Typography";
import Table from "components/Table";

class Home extends Component {
  state = {
    songLsit: [],
    keyword: ""
  };
  componentDidMount() {
    this.getSongs();
  }
  getSongs = async (val = "") => {
    console.log(val);
    this.setState({ keyword: val.trim() });

    var url = new URL(process.env.REACT_APP_API_URL + "/getSongs"),
      params = { keywords: val };
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );

    const res = await fetch(url);
    const list = await res.json();
    this.setState({ songLsit: list });
  };
  handleDetailClick = async id => {
    const res = await fetch(process.env.REACT_APP_API_URL + "/getSongs/" + id);
    console.log(await res.json());
  };
  handleDeleteClick = async id => {
    const res = await fetch(process.env.REACT_APP_API_URL + "/getSongs/" + id, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    console.log(await res.json());
    await this.getSongs();
  };
  render() {
    return (
      <Fragment>
        <AddSong onCreatedSong={this.getSongs} />
        <SearchSongs
          keyword={this.state.keyword}
          onSearchSong={this.getSongs}
        />
        <H3>所有歌曲</H3>
        <Table
          onDeleteClick={this.handleDeleteClick}
          onDetailClick={this.handleDetailClick}
          data={this.state.songLsit}
        />
      </Fragment>
    );
  }
}

export default Home;
