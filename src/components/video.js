import React from "react";
import styled from "styled-components";


const VideoWrapper = styled.video`
  width: 100%;
  max-height: 900px;
  position: relative;
  right: 0;
  
  &:onfocus {
      border: none;
      outline: 0;
  }
`;

const Video = ({ videoSrcURL, videoTitle, iframStyle, ...props }) => (
  <VideoWrapper autoPlay loop controls playsInline>
    <source src={videoSrcURL} type="video/mp4" />
  </VideoWrapper>
)
export default Video
