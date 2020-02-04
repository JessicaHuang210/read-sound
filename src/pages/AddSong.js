import React, { Component } from "react";
import PropTypes from "prop-types";
import InputText from "components/InputText";
import Button from "components/Button";
import { FormWrap, FormItem, FormAction } from "components/Form";

class AddSong extends Component {
  state = {
    name: "",
    singer: "",
    album: ""
  };
  handleChange = e => {
    const val = e.target.value;
    const stateName = e.target.name;
    this.setState({ [stateName]: val.trim() });
  };
  handleReset = () => {
    this.setState({ name: "", singer: "", album: "" });
  };

  static propTypes = {
    onCreatedClick: PropTypes.func
  };
  render() {
    const { name, singer, album } = this.state;
    const isCreateDisabled = !name || !singer;
    return (
      <FormWrap inline>
        <FormItem>
          <InputText
            type="text"
            value={name}
            name="name"
            placeholder="歌名"
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <InputText
            type="text"
            value={singer}
            name="singer"
            placeholder="歌手"
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <InputText
            type="text"
            value={album}
            name="album"
            placeholder="專輯"
            onChange={this.handleChange}
          />
        </FormItem>
        <FormAction>
          <Button
            disabled={isCreateDisabled}
            onClick={() => {
              this.props.onCreatedClick(this.state);
              this.handleReset();
            }}
            block
          >
            新增
          </Button>
        </FormAction>
      </FormWrap>
    );
  }
}

export default AddSong;
