import React, { useState, useEffect } from "react";
import InputText from "components/InputText";
import Button from "components/Button";
import { FormWrap, FormItem, FormAction } from "components/Form";
const initialState = {
  name: "",
  singer: "",
  album: ""
};
function AddSong(props) {
  const [{ name, singer, album }, setInfo] = useState(initialState);
  const [isCreateDisabled, setIsCreatDisabled] = useState(false);

  const clearState = () => {
    setInfo({ ...initialState });
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setInfo(prevState => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    setIsCreatDisabled(!name || !singer);
  }, [name, singer]);

  return (
    <FormWrap inline>
      <FormItem>
        <InputText
          type="text"
          value={name}
          name="name"
          placeholder="歌名"
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <InputText
          type="text"
          value={singer}
          name="singer"
          placeholder="歌手"
          onChange={handleChange}
        />
      </FormItem>
      <FormItem>
        <InputText
          type="text"
          value={album}
          name="album"
          placeholder="專輯"
          onChange={handleChange}
        />
      </FormItem>
      <FormAction>
        <Button
          disabled={isCreateDisabled}
          onClick={() => {
            props.onCreatedClick({ name, singer, album });
            clearState();
          }}
          block
        >
          新增
        </Button>
      </FormAction>
    </FormWrap>
  );
}

export default AddSong;
