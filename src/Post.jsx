import React, { useEffect, useState } from 'react';

const Post = () => {
  const [input, setInput] = useState('');
  const [datas, setData] = useState([]);

  let handalForm = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    };
    await fetch(
      'https://62d647f215ad24cbf2d39b56.mockapi.io/crud',
      requestOptions
    )
      .then(async (response) => await response.json())
      .then((data) => {
        setInput('');
      });

    getData();
  };

  let getData = async () => {
    await fetch(`https://62d647f215ad24cbf2d39b56.mockapi.io/crud`)
      .then(async (response) => await response.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Item Name"
          value={input}
        />
        <button onClick={handalForm}>Submit</button>
      </form>

      {datas.map((val, id) => {
        return (
          <ul key={id}>
            <li>{val.input} </li>
          </ul>
        );
      })}
    </>
  );
};

export default Post;
