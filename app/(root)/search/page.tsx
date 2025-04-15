import React from 'react'
import ExploreHeader from '@/components/header/explore-header'
 import SearchResults from '@/components/search/search-results';
 
 const page = () => {
   return (
    <>
       <div className="pb-10">
         <ExploreHeader />
         <SearchResults/>
       </div>
     </>
   )
 }
 
 export default page