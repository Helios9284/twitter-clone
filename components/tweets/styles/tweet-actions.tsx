import React from "react";
import {ITweet} from "@/components/tweets/types"
import CommentButton from "@/components/tweets/actions/comment-button";
 import LikeButton from "@/components/tweets/actions/like-button";
 import RetweetButton from "@/components/tweets/actions/retweet-button";
 import ShareButton from "@/components/tweets/actions/share-button";
 import BookmarkButton from "@/components/tweets/actions/bookmark-button";
 
 const TweetActions = ({ tweet }: { tweet: ITweet }) => {
   return (
     <>
       <CommentButton tweet={tweet} />
       <RetweetButton  />
       <LikeButton post={tweet} />
       <ShareButton  />
       <BookmarkButton  post={tweet}/>
     </>
   );
 };
 
 export default TweetActions;