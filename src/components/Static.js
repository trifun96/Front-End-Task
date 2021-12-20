import React from "react";
import "../styles/static.css";

class Static extends React.Component {
  state = {
    showPreview: false,
    previewImage: "",
  };

  previewBox = (imageName) => {
    this.setState({ showPreview: true });
    this.setState({ previewImage: imageName });
  };

  render() {
    return (
      <div className="static-container">
        <div className="static-text">
          <div className="first-text">
            <h1>What is Lorem Ipsum?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="second-text">
            <h1>Why do we use it?</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </p>
          </div>
        </div>
        <div className="galery">
          <h1>Galery</h1>

          <div className="images">
            <button onClick={() => this.previewBox("img1")}>
              <img src="images/img1.jpg"></img>
            </button>
            <button onClick={() => this.previewBox("img3")}>
              <img src="images/img3.jpg"></img>
            </button>
            <button onClick={() => this.previewBox("img10")}>
              <img src="images/img10.jpg"></img>
            </button>
            <button onClick={() => this.previewBox("img11")}>
              <img src="images/img11.jpg"></img>
            </button>
            <button onClick={() => this.previewBox("img8")}>
              <img src="images/img8.jpg"></img>
            </button>
            <button onClick={() => this.previewBox("img9")}>
              <img src="images/img9.jpg"></img>
            </button>
            <button onClick={() => this.previewBox("img10")}>
              <img src="images/img10.jpg"></img>
            </button>
            <button onClick={() => this.previewBox("img11")}>
              <img src="images/img11.jpg"></img>
            </button>
            <button onClick={() => this.previewBox("img1")}>
              <img src="images/img1.jpg"></img>
            </button>
          </div>
          {this.state.showPreview && (
            <React.Fragment>
              <div className="preview-box-backdrop"></div>
              <div className="preview-box">
                <button
                  onClick={() => this.setState({ showPreview: false })}
                  className="detail"
                >
                  <span className="icon fa fa-times"></span>
                </button>

                <div className="image-box">
                  <img src={`images/${this.state.previewImage}.jpg`}></img>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>


      </div>

    );
  }
}

export default Static;