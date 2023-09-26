import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar";
import {fetchApi} from '../services'
import { useEffect, useRef, useState } from 'react';
import './styles.css';

export const App = () => {

  const [inputValue, setInputValue] = useState('')
  const [value, setValue] = useState('')
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  // let loadedRef = useRef(false)
  
  const onChange = e => {
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setImages([]);
    setValue(inputValue);
    setInputValue('');
    setPage(1);
  };

  useEffect(() => {
    setIsLoading(false)
    setIsLoaded(true)
  }, [])
  
  useEffect(() => {
    console.log(isLoaded)
    if (!isLoaded) return;
    {
      const fetchImages = async () => {
        const getImages = await fetchApi(value, page);
        setImages(prevImages => [...prevImages, ...getImages])
        setIsLoading(false)
      }
      fetchImages()
    }
    }, [ page, value]);
    
    const loadMore = () => {
      setPage(page + 1);
    };
    
  return (
    <div className="App">
      <Searchbar
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        inputValue={inputValue}
      />
      <ImageGallery
        images={images}
        loadMore={loadMore}
        isLoading={isLoading}
      // message={this.message}
      />
    </div>
  )
};