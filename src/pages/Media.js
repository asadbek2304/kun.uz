import React from 'react';
import styled from 'styled-components';
import ToggleBar from '../components/ToggleBar';
import { mediaData } from '../util/data';

const Media = () => {
    return <Wrapper style={{background: 'whitesmoke', height: '100vh'}}>
        <h4>Медиа</h4>
        <ToggleBar data={mediaData} type='media'/>
    </Wrapper>
};

const Wrapper = styled.div`
h4{
    text-align: center;
    margin-top: 0;
    padding-top: 1rem;
}
`

export default Media;