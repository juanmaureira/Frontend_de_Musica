import React, { Fragment, useContext } from 'react'
import { SongsContents } from '../../contexts/SongsContents';
import Tracks from './Tracks';
import ProgressBar from '../common/ProgressBar';
import Message from '../common/Message';

const Songs = () => {
    const { validateQTrack, doneFetch, tracks, text } = useContext(SongsContext);
    return (
        <Fragment>
            <SearchTrack validateQTrack={validateQTrack} />
            { 
                doneFetch ? (tracks.length ? (<Tracks text = {text} tracks = { tracks } />) : (<Message text = { text }/> )) : (<ProgressBar />)
            }
        </Fragment>
    )
}
