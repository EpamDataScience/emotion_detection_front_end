import React from 'react'
import Webcam from "react-webcam"
import './WebcamCapture.css'
import Button from 'react-bootstrap/lib/Button'

export default class WebcamCapture extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={500}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={480}
          videoConstraints={videoConstraints}
        />
        <Button variant="primary" size="lg" block className="start_record_btn" onClick={this.capture}>Start</Button>
      </div>
    );
  }
}