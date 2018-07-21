import React from 'react'
import { Modal } from 'react-bootstrap'
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    ViberShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    LivejournalIcon,
    MailruIcon,
    EmailIcon,
    ViberIcon,
  } from 'react-share'

const AddressModal = ({ show, handleClose }) => {
  const lang = localStorage.getItem('lang');
  const shareUrl = 'google.com'
  const title = "title"

  return (
    <Modal
      id='myModal-address'
      show={show}
      onHide={handleClose}
    >
      <Modal.Body>
        <div className='sec-head clearfix'>
          <h2 className='sec-title f-left'>{lang==='ar'?'Select Share':'Select Share'}</h2>
          <button onClick={handleClose} type='button' className='close' data-dismiss='modal'>&times;</button>
        </div>
        <div className='modal-body'>
            <ul className='totalShare'>
                <li >
                    <GooglePlusShareButton
                        url={shareUrl}
                        className="Demo__some-network__share-button">
                        <GooglePlusIcon size={40} round />
                    </GooglePlusShareButton>
                </li>
                <li>
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        className="Demo__some-network__share-button">
                        <FacebookIcon size={40} round />
                    </FacebookShareButton>
                </li>
                <li>
                    <LinkedinShareButton
                        url={shareUrl}
                        quote={title}
                        className="Demo__some-network__share-button">
                        <LinkedinIcon size={40} round />
                    </LinkedinShareButton>
                </li>
                <li>
                    <TwitterShareButton
                        url={shareUrl}
                        quote={title}
                        className="Demo__some-network__share-button">
                        <TwitterIcon size={40} round />
                    </TwitterShareButton>
                </li>
                <li>
                    <TelegramShareButton
                        url={shareUrl}
                        quote={title}
                        className="Demo__some-network__share-button">
                        <TelegramIcon size={40} round />
                    </TelegramShareButton>
                </li>
                <li>
                    <WhatsappShareButton
                        url={shareUrl}
                        quote={title}
                        className="Demo__some-network__share-button">
                        <WhatsappIcon size={40} round />
                    </WhatsappShareButton>
                </li>
                <li>
                    <PinterestShareButton
                        url={shareUrl}
                        quote={title}
                        className="Demo__some-network__share-button">
                        <PinterestIcon size={40} round />
                    </PinterestShareButton>
                </li>
                <li>
                    <VKShareButton
                        url={shareUrl}
                        quote={title}
                        className="Demo__some-network__share-button">
                        <VKIcon size={40} round />
                    </VKShareButton>
                </li>
                <li>
                    <OKShareButton
                        url={shareUrl}
                        quote={title}
                        className="Demo__some-network__share-button">
                        <OKIcon size={40} round />
                    </OKShareButton>
                </li>
                <li>
                    <ViberShareButton
                        url={shareUrl}
                        quote={title}
                        className="Demo__some-network__share-button">
                        <ViberIcon size={40} round />
                    </ViberShareButton>
                </li>
            </ul>
            
            
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddressModal