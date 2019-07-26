import React, {useState} from 'react';
import styled from "styled-components";
import uuid from "uuid/v1"
import NewSongForm from './NewSongForm';

const SongList = () => {
  //********* CODE *************

  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1},
    { title: 'memory gospel', id: 2},
    { title: 'this wild darkness', id: 3},
  ])

  const addSong = (title) => {
    // console.log(title);
    setSongs([...songs, {title: "new song", id: uuid()}])
  }

  //********** STYLE *************

  const StyledSongList = styled.div`

  `;
  const Ul = styled.ul`
  
  `;
  const Li = styled.li`
  `;
  
  const list = songs.map(song => (
    <Li key={song.id}>{song.title}</Li>
  ))
  return (
    <StyledSongList>
      <Ul>
        {list}
      </Ul>
      <NewSongForm/>
    </StyledSongList>
  )
}

export default SongList
