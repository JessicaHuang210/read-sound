import React, { useState, useEffect } from "react";
import InputText from "components/InputText";
import Button from "components/Button";
import { FormWrap, FormItem, FormLabel, FormAction } from "components/Form";
const initialState = {
  name: "",
  singer: "",
  album: "",
  youtubeURL: "",
  fileName: ""
};
function EditSong(props) {
  const [info, setInfo] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [id] = useState(props.match.params.id);

  const handleChange = e => {
    const { name, value } = e.target;
    setInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleUpdate = async () => {
    setIsLoading({ isLoading: true });
    await fetch(process.env.REACT_APP_API_URL + "/getSongs/" + id, {
      method: "PATCH",
      body: JSON.stringify(info),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    setIsLoading({ isLoading: false });
    props.history.push({ pathname: "/" });
  };

  const handleGoback = () => {
    props.history.push({ pathname: "/" });
  };

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/getSongs/" + id
      );
      response.ok && setInfo(await response.json());
      response.ok || props.history.push({ pathname: "/" });
    }
    getData();
  }, [id, props.history]);

  return (
    <FormWrap width={500}>
      <FormItem>
        <FormLabel>歌名</FormLabel>
        <InputText
          defaultValue={info.name}
          name="name"
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <FormLabel>歌手</FormLabel>
        <InputText
          defaultValue={info.singer}
          name="singer"
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <FormLabel>專輯</FormLabel>
        <InputText
          defaultValue={info.album}
          name="album"
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <FormLabel>連結</FormLabel>
        <InputText
          placeholder="請輸入youtube連結"
          defaultValue={info.youtubeURL}
          name="youtubeURL"
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <FormLabel>檔名</FormLabel>
        <InputText
          defaultValue={info.fileName}
          name="fileName"
          onChange={handleChange}
        />
      </FormItem>
      <FormAction block>
        <Button block light onClick={handleGoback}>
          返回
        </Button>
        <Button block onClick={handleUpdate} disabled={isLoading}>
          儲存
        </Button>
      </FormAction>
    </FormWrap>
  );
}

export default EditSong;
