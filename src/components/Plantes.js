import React, { useState } from 'react';
import axios from 'axios';
const Plante = () => {
    const [message, setMessage] = useState('');
    const [postPicture, setPostPicture] = useState(null);
    const [file, setFile] = useState();
    const userID = localStorage.getItem('userId');

    const handlePost = async () => {
        if (message && postPicture) {
            axios.post('http://localhost:8080/plantes',
                    {ID: userID, Nom: message, Photo: file })
                .then (function (response){
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            cancelPost();
        } else {
            alert('Veuillez entrer un message');
        }
    };

    const handlePicture = (e) => {
        setPostPicture(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    };

    const cancelPost = () => {
        setMessage('');
        setPostPicture('');
        setFile('');
    };

    return (
        <div className="post-container">
            <h2>Nouveau post</h2>
            <br />
            <form className="post-form" onSubmit={handlePost}>
        <textarea
            name="message"
            id="message"
            placeholder="Nom de Plante"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
        />

                <div className="footer-form">
                    <div className="icon">
                        <img src="./img/picture.svg" alt="img" />
                        <input
                            type="file"
                            id="file-upload"
                            name="file"
                            accept="image/*"
                            onChange={(e) => handlePicture(e)}
                        />
                    </div>
                    <div className="btn-send">
                        {message || postPicture ? (
                            <button className="cancel" onClick={cancelPost}>
                                Annuler message
                            </button>
                        ) : null}
                        <button className="send" type="submit">
                            Envoyer
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Plante;