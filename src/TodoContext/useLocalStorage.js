import React,{useState, useEffect} from "react";

function useLocalStorage(itemName, initialValue){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(initialValue)
    
      useEffect(()=>{
          setTimeout(()=>{
            try{
              const loclStorageItem = localStorage.getItem(itemName);
              let parsedItem;

            if(!loclStorageItem){
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem=initialValue
            } else{
              parsedItem=JSON.parse(loclStorageItem)
            }

            setItem(parsedItem)
            setLoading(false)
            } catch(err){
              setError(error)
            }
                
          }, 1000)
      },[])


    const saveItem = (newItem)=> {
        try{
          const strItem = JSON.stringify(newItem)
          localStorage.setItem(itemName, strItem)
          setItem(newItem)
        }catch(err){
          setError(err)
        }
    }

    return {
      item,
      saveItem,
      loading,
      error
    }

  }

  export {useLocalStorage}