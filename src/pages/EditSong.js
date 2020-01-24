import React, { Component, Fragment } from "react";
import InputText from "components/InputText";
import Button from "components/Button";
import { FormWrap, FormItem, FormLabel, FormAction } from "components/Form";

class EditSong extends Component {
  state = {
    info: {}
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/getSongs/" + id
    );
    const res = await response.json();
    this.setState({ info: res });
  }

  render() {
    const { name, singer, album, youtubeURL, fileName } = this.state.info;
    return (
      <FormWrap width={500}>
        <FormItem>
          <FormLabel>歌名</FormLabel>
          <InputText defaultValue={name} />
        </FormItem>
        <FormItem>
          <FormLabel>歌手</FormLabel>
          <InputText defaultValue={singer} />
        </FormItem>
        <FormItem>
          <FormLabel>專輯</FormLabel>
          <InputText defaultValue={album} />
        </FormItem>
        <FormItem>
          <FormLabel>連結</FormLabel>
          <InputText
            placeholder="請輸入youtube連結"
            defaultValue={youtubeURL}
          />
        </FormItem>
        <FormItem>
          <FormLabel>檔名</FormLabel>
          <InputText defaultValue={fileName} />
        </FormItem>
        <div>
          <Button>儲存</Button>
        </div>
      </FormWrap>
    );
  }
}

export default EditSong;
