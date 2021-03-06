import React, { Component, useCallback } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import Photo from "./Photo";

const CLOUDINARY_UPLOAD_PRESET = 'hgdd9gxv';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/expat_journal/upload';

class PhotosPrivate extends Component {
    constructor(props) {
        super(props)

        this.state={
            photoList:[],
            img_url: "",
            id: "",
            location: "",
            description: "",
            uploadedFileCloudinaryUrl: '',
            uploadedFile: null
        };

        console.log("in private photos!")
    }

    componentDidMount() {
        let localID = localStorage.getItem("user_id");

        axios.get(`https://expat-journal.herokuapp.com/api/photos/all/${localID}`,  {
            headers: {
            'Authorization': localStorage.getItem('token')
            }
        })
            .then((res) =>{
               return this.setState({photoList: res.data});
            })
            .catch(err => console.log(err));

            
    }


    update = (e) => {

        e.preventDefault();
        let localID = localStorage.getItem("user_id");

        let updatedPhoto = {id: this.state.id, img_url: this.state.img_url, location: this.state.location, description: this.state.description }

        axios.put(`https://expat-journal.herokuapp.com/api/photos/all/${this.state.id}`,updatedPhoto, {
            headers: {
            'Authorization': localStorage.getItem('token')
            }
        })
            .then( axios.get(`https://expat-journal.herokuapp.com/api/photos/all/${localID}`,
            {

                headers: {
                    'Authorization': localStorage.getItem('token')
                    }

            }
            
            
            ).then((res) =>{
                return this.setState({photoList: res.data});
             }))
            .catch(err => console.log(err));

        console.log("updating photos!");
    }

    add = e => {
        e.preventDefault();
        let localID = localStorage.getItem("user_id");

        let newPhoto = {user_id: localID, img_url: this.state.img_url, location: this.state.location, description: this.state.description }

        axios.post(`https://expat-journal.herokuapp.com/api/photos/all/${localID}`,newPhoto, {
            headers: {
            Authorization: localStorage.getItem('token')
            }
        }).then( axios.get(`https://expat-journal.herokuapp.com/api/photos/all/${localID}`,  {
            headers: {
            Authorization: localStorage.getItem('token')
            }
        })
        .then((res) =>{
            console.log(res);
            this.setState({photoList: res.data})
         }))
        .catch(err => console.log(err));

    }

    delete = (e, id) => {
        console.log(e);

        e.preventDefault();
        let localID = localStorage.getItem("user_id");

        let selected_id = id; 
        console.log(selected_id);

        axios.delete(`https://expat-journal.herokuapp.com/api/photos/all/${selected_id}`, {headers: {
            Authorization: localStorage.getItem('token')
            }} )
            .then( 
                axios.get(`https://expat-journal.herokuapp.com/api/photos/all/${localID}`,  {
                headers: {
                Authorization: localStorage.getItem('token')
                }
                })
            .then((res) =>{
                console.log(res);
                this.setState({photoList: res.data})
                    })
                )
        .catch(err => console.log(err));

    }

    redirect = id => {
        this.props.history.push(`/photo/${id}`);
    }

    handleChanges = e => {
        e.preventDefault();
        console.log(e.target.name, e.target.value )
        this.setState({[e.target.name]: e.target.value});
    }


    onImageDrop(files) {
        this.setState({
          uploadedFile: files[0]
        });
    
        this.handleImageUpload(files[0]);
      }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file)
                            .field('api_key', 882347815869688)

        upload.end((err, response) => {
        if (err) {
            console.error(err);
        }

        if (response.body.secure_url !== '') {
            this.setState({
            img_url: response.body.secure_url
            });
            console.log(this.state.img_url);
        }
        });
    }

    render() {
        // console.log(this.state.photoList)
    return (
        <div className="photos-private">
            {this.state.photoList.map(a_photo =>
                
            <Photo photo={a_photo} delete={this.delete} clickPhoto={this.redirect}/>    

            )}

            

            <div className="photos-update-form">
                <form onSubmit={this.update}>


                <h2>Update Photos</h2>
                <select onChange={this.handleChanges} name="id">
                    {this.state.photoList.map(a_photo =>
                
                    <option name="id" value={a_photo.id}>{a_photo.location}</option>
    
                    )}
                </select>



                <b>Location:</b><input type="text" name="location" onChange={this.handleChanges}></input>
                <b>Description:</b> <input type="text" name="description" onChange={this.handleChanges}></input>
                <b>Image URL:</b><input type="text" name="img_url" onChange={this.handleChanges}></input>

                <button type="submit">Update Photo!</button>
                </form>
            </div>

            <div className="photos-add-form">
                <form onSubmit={this.add}>

            <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            accept="image/*"
            multiple={false}>
                {({getRootProps, getInputProps}) => {
                return (
                    <div
                    {...getRootProps()}
                    >
                    <input {...getInputProps()} />
                    {
                    <p>Try dropping some files here, or click to select files to upload.</p>
                    }
                    </div>
                )
            }}
            </Dropzone>

                <h2> Add Photos</h2>
                <b>Location:</b><input type="text" name="location" onChange={this.handleChanges}></input>
                <b>Description:</b> <input type="text" name="description" onChange={this.handleChanges}></input>
                {/* <b>Image URL:</b><input type="text" name="img_url" onChange={this.handleChanges}></input> */}

                <button type="submit">Add Photo!</button>
                </form>
            </div>


        </div>
    )
    }
}

export default PhotosPrivate;