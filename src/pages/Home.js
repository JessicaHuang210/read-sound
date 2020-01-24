import React, { Component, Fragment } from "react";
import AddSong from "./AddSong";
import SearchSongs from "./SearchSongs";
import { H3 } from "components/Typography";
import Table from "components/Table";

class Home extends Component {
  state = {
    songLsit: [],
    keyword: "",
    isLoading: false
  };
  componentDidMount() {
    this.getSongs();
  }
  getSongs = async (val = "") => {
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
  handleDetailClick = id => {
    this.props.history.push({ pathname: "/EditSong/" + id });
  };
  handleDeleteClick = async id => {
    const option = {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    };
    await fetch(process.env.REACT_APP_API_URL + "/getSongs/" + id, option);
    await this.getSongs();
  };
  handleCreatedClick = async state => {
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
    this.setState({ isLoading: true });
    await fetch("http://localhost:1313/getSongs", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(params), // data can be `string` or {object}!
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    this.setState({ isLoading: false });
    await this.getSongs();
  };
  render() {
    return (
      <Fragment>
        <AddSong
          isLoading={this.state.isLoading}
          onCreatedClick={this.handleCreatedClick}
        />
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
