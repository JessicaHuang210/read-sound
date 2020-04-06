import React, { Fragment, useState, useEffect } from "react";
import InputText from "components/InputText";
import Button from "components/Button";
const initialState = {
  name: ""
};

function AddSinger() {
  const [{ name }, setInfo] = useState(initialState);
  const [singerList, setSingerList] = useState([]);

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

  const handleAddSinger = async () => {
    console.log(name);
    await fetch(process.env.REACT_APP_API_URL + "/singers", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    await getSingers();
    clearState();
  };

  const clearState = () => {
    setInfo({ ...initialState });
  };

  useEffect(() => {
    async function fetchData() {
      console.log(singerList);
    }
    fetchData();
  }, [singerList]);
  return (
    <Fragment>
      <InputText
        type="text"
        value={name}
        name="name"
        placeholder="歌手"
        onChange={handleChange}
      />
      <Button onClick={handleAddSinger} block>
        新增
      </Button>
    </Fragment>
  );
}

export default AddSinger;
