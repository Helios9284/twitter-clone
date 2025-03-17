"use client";
  
 import { TweetHeader } from "@/components/header/tweet-header";
 import { getTweetMetadata } from "@/components/tweets/api/getTweetMetadata";
 import TweetDetails from "@/components/tweets/tweet-details";
  
 
 import usePost from "@/hooks/usePost";
 
 import { useSession } from "next-auth/react";
 
 const page = async ({ params }: { params: { postId: string } }) => {
  
   const initialTweet = await getTweetMetadata({
     tweet_id: params.postId,
   });
 
   return (
     <>
       <TweetHeader/>
       <TweetDetails initialTweet={initialTweet as any} />
       
     </>
   );
 };