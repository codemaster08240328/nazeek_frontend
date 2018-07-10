import React from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

Modal.setAppElement(youtubemodal)

const youtubemodal = ({toggleModal, isModal}) => {
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
    };
    const _onReady = (event) => {
      // access to player in all event handlers via event.target
    }

    return (
        <Modal
          isOpen={isModal}
          onRequestClose={toggleModal}
          style={customStyles}
          contentLabel="Example Modal"
        > 
        <YouTube
          videoId="ZpU3mEaK0_w"
          opts={{
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
          }}
          onReady={_onReady}
        />  
        </Modal>
    );
};

export default youtubemodal;