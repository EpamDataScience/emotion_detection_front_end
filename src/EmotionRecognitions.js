import React, {Component} from 'react';
import Container from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import WebcamCapture from './WebcamCapture'
import axios from 'axios'
import './EmotionRecognitions.css'


export default class EmotionRecognitions extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedEmotion: 'Simle'
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
  }

  render() {
    return (
      <Container className="addmargin">
        <Row className="justify-content-md-center">
          <Col>
            <div className='face_emotion_recognition_demo'>
              <div className="description_container">
                <h2>Demo</h2>
                <p>Try Emotion Recognition now by uploading a video.</p>
              </div>

              <div className="face_emotion_recognition_video_record">
                <div>
                  <div className="video_container">
                    <WebcamCapture/>
                  </div>
                </div>
              </div>
              <div className='face_emotion_recognition_example_and_result'>
                <div className="emotion_example">
                  <img src="smile_face_example.jpg" alt="Smiley face" height="100%" width="100%"></img>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }

}
