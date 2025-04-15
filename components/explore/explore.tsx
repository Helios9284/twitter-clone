"use client";
 import React from "react";
 import { InfiniteTweets } from "@/components/tweets/infinite-tweet";
 import LoadingSpinner from "@/components/elements/loading/loading-spinner";
 import TryAgain from "@/components/elements/try-again";
 import { useTweets } from "@/components/tweets/hooks/use-tweets";
 
 const Explore = () => {
   const {
     data: tweets,
     isLoading,
     isError,
     isSuccess,
     isFetchingNextPage,
     hasNextPage,
     fetchNextPage,
   } = useTweets({});
 
   if (isLoading) {
     return (
       <>
         <LoadingSpinner />
       </>
     );
   }
 
   if (isError) {
     return <TryAgain />;
   }
 
   return (
     <InfiniteTweets
       tweets={tweets}
       isSuccess={isSuccess}
       isFetchingNextPage={isFetchingNextPage}
       hasNextPage={hasNextPage}
       fetchNextPage={fetchNextPage}
     />
   );
 };
 
 export default Explore;