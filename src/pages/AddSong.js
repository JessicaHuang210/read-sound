import React, { Component } from "react";
import PropTypes from "prop-types";
import InputText from "components/InputText";
import Button from "components/Button";
import { FormWrap, FormItem, FormAction } from "components/Form";

class AddSong extends Component {
  state = {
    name: "",
    singer: "",
    album: "",
    fileName: "",
    isLoading: false
  };
  handleChange = e => {
    const val = e.target.value;
    const stateName = e.target.name;
    this.setState({ [stateName]: val.trim() });
  };
  handleReset = () => {
    this.setState({ name: "", singer: "", album: "", fileName: "" });
  };
  handleClick = async () => {
    const { name, singer, album, fileName } = this.state;
    const params = {
      name,
      singer,
      album,
      fileName
    };
    let isValidateFailed = false;
    Object.keys(params).forEach(i => {
      if (i === "name" || i === "singer") {
        params[i] === "" && (isValidateFailed = true);
        return;
      }
    });
    if (!isValidateFailed) {
      this.setState({ isLoading: true });
      const res = await fetch("http://localhost:1313/getSongs", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(params), // data can be `string` or {object}!
        headers: new Headers({
          "Content-Type": "application/json"
        })
      });
      console.log(await res.json());
      this.setState({ isLoading: false });
      this.handleReset();
      this.props.onCreatedSong();
    }
  };

  static propTypes = {
    onCreatedSong: PropTypes.func
  };
  render() {
    const { name, singer, album, fileName, isLoading } = this.state;
    return (
      <FormWrap>
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
        <FormItem>
          <InputText
            type="text"
            value={fileName}
            name="fileName"
            placeholder="檔名"
            onChange={this.handleChange}
          />
        </FormItem>
        <FormAction>
          <Button disabled={isLoading} onClick={this.handleClick} block>
            新增
          </Button>
        </FormAction>
      </FormWrap>
    );
  }
}

export default AddSong;
