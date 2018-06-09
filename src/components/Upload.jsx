import React, { Component } from 'react';
import Preview from './Preview';
class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };
    this.handleUploadImage = this.handleUploadImage.bind(this);
    
  }
  

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:8000/${body.file}` });
        var pic= JSON.stringify(body.file);
        console.log(pic)
        localStorage.setItem("image",pic);
      });
    });
  }

    render() {
      return (
        <div>
          <hr/>
          
        <div className="container upld"  >
        <div className="front">
          <div className="col-md-8 ">
            <h2>
              Upload Photo
            </h2>
          </div>
          <div className="col-md-4" >
          <div className="col-md-1">
         <a href="/"  > <button type="button" className="btn btn-primary btn-md">Back</button></a>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-1">
          <a href="/design"><button  type="button" className="btn btn-primary active btn-md">Next</button></a>
          </div>
        </div>
        </div>
        <form onSubmit={this.handleUploadImage}>
        <div className="col-md-12 fle bg-primary">
        <div className="col-md-7 ">
        <img className="upl " src={this.state.imageURL} alt="" />
        
        </div>
        <div className="col-md-1">
        </div>
        <div className="col-md-2 pad" style={{"color":"black"}}>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file"  /><br/>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Desired name" /><br/>
          <br/><button className="btn btn-default">Upload</button>
        </div>
        
       
        </div>
      </form>
      
      <br/>
</div>
                <hr/>
                
                </div>
                
    );
}
}

export default Upload;
