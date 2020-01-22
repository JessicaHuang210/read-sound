import React, { Component } from "react";
import PropTypes from "prop-types";
import InputText from "components/InputText";
import { FormWrap, FormItem } from "components/Form";

class SearchSongs extends Component {
  state = {
    keywords: "",
    isLoading: false
  };
  handleChange = async e => {
    const val = e.target.value;
    const stateName = e.target.name;
    this.setState({ [stateName]: val.trim() });
    var url = new URL(process.env.REACT_APP_API_URL + "/getSongs"),
      params = { keywords: val };
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );
    await fetch(url);
  };

  static propTypes = {
    onSearchSong: PropTypes.func
  };

  render() {
    return (
      <FormWrap>
        <FormItem>
          <InputText
            type="text"
            value={this.props.keywords}
            name="keywords"
            placeholder="搜尋歌名..."
            onChange={e => this.props.onSearchSong(e.target.value)}
          />
        </FormItem>
      </FormWrap>
    );
  }
}

export default SearchSongs;
