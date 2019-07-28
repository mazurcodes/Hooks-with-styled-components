import React, { useState }from 'react';
import styled from "styled-components";

const FromNewSong = styled.form`
  
  `;
const LabelNewSong = styled.label`
  
  `;
const InputNewSong = styled.input`
    padding: 10px;
    margin-right: 10px;
  `;
const SubmitNewSong = styled.input`
  padding: 10px;
  `;

// COMPONENT
const NewSongForm = (props) => {
  
  const [title, setTitle] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.newsong(title);
    setTitle('');
  }
  
  
  return (
    <FromNewSong onSubmit={handleSubmit} key="song-form-01">
      <LabelNewSong key="song-form-02">Song Name: </LabelNewSong>
      <InputNewSong type="text" key="song-form-03" onChange={(e) => setTitle(e.target.value)} value={title} required />
      <SubmitNewSong type="submit" key="song-form-04" value="add song" />
    </FromNewSong>
  )
}

export default NewSongForm

