import React, { Component } from "react";
import PropTypes from "prop-types";
import InputText from "components/InputText";
import { FormWrap, FormItem } from "components/Form";

class SearchSongs extends Component {
  static propTypes = {
    searchKey: PropTypes.string,
    onSearchSong: PropTypes.func,
    placeholder: PropTypes.string
  };
  static defaultProps = {
    searchKey: "name",
    placeholder: "搜尋歌名..."
  };
  render() {
    return (
      <FormWrap>
        <FormItem>
          <InputText
            type="search"
            value={this.props.keywords}
            name="keywords"
            placeholder={this.props.placeholder}
            onChange={e =>
              this.props.onSearchSong({
                [this.props.searchKey]: e.target.value.trim()
              })
            }
          />
        </FormItem>
      </FormWrap>
    );
  }
}

export default SearchSongs;
