"use client";
 
//  import LoadingSpinner from "../elements/loading/loading-spinner";
import LoadingSpinner from "@/components/elements/loading/loading-spinner";
import {useTweets} from "@/components/tweets/hooks/use-tweets"
import {InfiniteTweets} from "@/components/tweets/infinite-tweet"
 
 
 export const Tweets = () => {
   
   const {
     data: tweets,
     isLoading,
     isError,
     isSuccess,
     isFetchingNextPage,
     fetchNextPage,
     hasNextPage,
   } = useTweets({});
 
   if (isLoading) {
     return  <LoadingSpinner/>;
   }
 
   if (isError) {
     return <p>Try agian...</p>;
   }
 
  
   
 
   return (
     <InfiniteTweets
       tweets={tweets}
       isSuccess={isSuccess}
       isFetchingNextPage={isFetchingNextPage}
       fetchNextPage={fetchNextPage}
       hasNextPage={hasNextPage}
     />
   );
 };