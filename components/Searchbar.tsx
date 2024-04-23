'use client'

import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react"

const isValidAmazonProductURL = (url:string)=>{
  try{
    const parsedURL = new URL(url);
    const hostname= parsedURL.hostname;
    if(hostname.includes("amazon.com")||
    hostname.includes("amazon.")||
    hostname.endsWith("amazon")){
      return true;
    }
  }catch(error){
    return false;
  }
  return false;
}

const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit =async (event: FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
      const isValidLink = isValidAmazonProductURL(searchPrompt);
      if(!isValidLink) return alert("Please provide a valid Amazon Link")
      try{
        setIsLoading(true)
        const product = await scrapeAndStoreProduct(searchPrompt);
        console.log(product)
      }catch(error){
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    }
  return (
   <form className="flex flex-wrap gap-4 mt-12"
    onSubmit={handleSubmit}
   >
    <input type="text" id="" className="searchbar-input" 
      value={searchPrompt}
      onChange={(e)=>setSearchPrompt(e.target.value)}
    placeholder='Enter product link'/>
    <button type="submit" className="searchbar-btn"
      disabled={searchPrompt===""}
    >
      {isLoading ? 'SEARCHING...' : 'Search'}
    </button>    
   </form>
  )
}

export default Searchbar