"use client";
//  import PostItem from "@/components/post/post-item";
//  import Header from "@/components/shared/header";
//  import Tweet from "@/components/shared/tweet-form";
//  import usePosts from "@/hooks/usePosts";
//  import { IPost } from "@/types";
//  import { ArrowLeft } from "lucide-react";
//  import { useSession } from "next-auth/react";
 import React from "react";
 import CreateTweet from "@/components/create-tweet/create-tweet";
  
 import { Header } from "@/components/header/header";
 import { Tweets } from "@/components/tweets/tweets";
 
 const page = () => {
  //  const { data: session, status }: any = useSession();
  //  const { data: posts } = usePosts();
 
   return (
     <div>
      <Header>
         <span className="p-1">Home</span>
      </Header>
      <CreateTweet />
      <Tweets />
     </div>
   );
 };
 
 export default page;