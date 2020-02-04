import React, { Component } from "react";
import InputText from "components/InputText";
import Button from "components/Button";
import { FormWrap, FormItem, FormLabel, FormAction } from "components/Form";

class EditSong extends Component {
  state = {
    info: {},
    isLoading: false
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/getSongs/" + id
    );
    const res = await response.json();
    this.setState({ info: res });
  }

  handleChange = e => {
    const val = e.target.value;
    const stateName = e.target.name;
    this.setState({
      info: { ...this.state.info, ...{ [stateName]: val.trim() } }
    });
  };

  handleGoback = () => {
    this.props.history.push({ pathname: "/" });
  };

  handleUpdate = async () => {
    const id = this.props.match.params.id;
    const params = {
      name: this.state.info.name,
      singer: this.state.info.singer,
      album: this.state.info.album,
      youtubeURL: this.state.info.youtubeURL,
      fileName: this.state.info.fileName
    };
    this.setState({ isLoading: true });
    await fetch(process.env.REACT_APP_API_URL + "/getSongs/" + id, {
      method: "PATCH", // or 'PUT'
      body: JSON.stringify(params), // data can be `string` or {object}!
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    this.setState({ isLoading: false });
    this.props.history.push({ pathname: "/" });
  };

  render() {
    const { name, singer, album, youtubeURL, fileName } = this.state.info;
    return (
      <FormWrap width={500}>
        <FormItem>
          <FormLabel>歌名</FormLabel>
          <InputText
            defaultValue={name}
            name="name"
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <FormLabel>歌手</FormLabel>
          <InputText
            defaultValue={singer}
            name="singer"
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <FormLabel>專輯</FormLabel>
          <InputText
            defaultValue={album}
            name="album"
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <FormLabel>連結</FormLabel>
          <InputText
            placeholder="請輸入youtube連結"
            defaultValue={youtubeURL}
            name="youtubeURL"
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <FormLabel>檔名</FormLabel>
          <InputText
            defaultValue={fileName}
            name="fileName"
            onChange={this.handleChange}
          />
        </FormItem>
        <FormAction block>
          <Button block light onClick={this.handleGoback}>
            返回
          </Button>
          <Button
            block
            onClick={this.handleUpdate}
            disabled={this.state.isLoading}
          >
            儲存
          </Button>
        </FormAction>
      </FormWrap>
    );
  }
}

export default EditSong;
