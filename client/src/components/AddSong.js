import React, { useState, useEffect } from "react";
import InputText from "components/InputText";
import InputSelect from "components/InputSelect";
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
  const [singerList, setSingerList] = useState(false);

  const clearState = () => {
    setInfo({ ...initialState });
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const getSingers = async (obj = {}) => {
    var url = new URL(process.env.REACT_APP_API_URL + "/singers"),
      params = obj;
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );
    const res = await fetch(url);
    const list = await res.json();
    setSingerList(list);
  };

  useEffect(() => {
    setIsCreatDisabled(!name || !singer);
    getSingers();
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
        <InputSelect value={singer} name="singer" onChange={handleChange}>
          {singerList.length > 0
            ? singerList.map(i => {
                return (
                  <option key={i._id} value={i._id}>
                    {i.name}
                  </option>
                );
              })
            : null}
        </InputSelect>
        {/* <InputText
          type="text"
          value={singer}
          name="singer"
          placeholder="歌手"
          onChange={handleChange}
        /> */}
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
