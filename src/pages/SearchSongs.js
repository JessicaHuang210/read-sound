import React, { Component } from "react";
import PropTypes from "prop-types";
import InputText from "components/InputText";
import { FormWrap, FormItem } from "components/Form";

class SearchSongs extends Component {
  state = {
    keywords: ""
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
            onChange={e => this.props.onSearchSong(e.target.value.trim())}
          />
        </FormItem>
      </FormWrap>
    );
  }
}

export default SearchSongs;
