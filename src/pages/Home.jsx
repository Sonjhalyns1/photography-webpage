import { useState, useEffect} from "react";
import { storage } from "../firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage"
import { v4 } from "uuid"; 

export default function Home() {
  const [imageUpload, setImageUpload] = useState(null)
  const [imageList, setImageList] = useState([])
  const imageListRef = ref(storage, "images/")

  const uploadImage = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url])
      })
    })
  };
  useEffect(() => {
    const fetchImages = async () => {
      let result = await listAll(imageListRef);
      let urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
      return Promise.all(urlPromises);
    };
    const loadImages = async () => {
      const urls = await fetchImages();
      setImageList(urls);
    };
    loadImages();
  }, []);
  return (
    <div name= "home">
      
      <input type = "file" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
      <button onClick={uploadImage} className="border border-blue-400"> Upload Image</button>
      {imageList.map((url) => {
        return <img src={url} />
      })}
    </div>
  );
}