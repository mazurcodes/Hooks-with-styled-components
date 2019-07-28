import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import uuid from "uuid/v1"
import NewSongForm from './NewSongForm';

const StyledSongList = styled.div`

`;
const Ul = styled.ul`

`;
const Li = styled.li`
`;
const AgeBtn = styled.button`
`;

// COMPONENT
const SongList = () => {
  
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1},
    { title: 'memory gospel', id: 2},
    { title: 'this wild darkness', id: 3},
  ])

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, {title, id: uuid()}])
  }
  const addAge = () => {
    setAge(age + 1);
  }

  const list = songs.map(song => (
    <Li key={song.id}>{song.title}</Li>
  ))

  useEffect(() => {
    console.log("useEffect hook ran", songs);
  }, [songs])

  return (
    <StyledSongList>
      <Ul>
        {list}
      </Ul>
      <NewSongForm newsong={addSong}/>
      <AgeBtn onClick={addAge}>Add 1 to age {age}</AgeBtn>
    </StyledSongList>
  )
}

export default SongList
