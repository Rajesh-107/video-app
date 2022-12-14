import React, { useEffect } from "react";
import VideoGridItem from "./VideoGridItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/VideosSlice";
import Loading from "../Loading/Loading";
import { useGetVideosQuery } from "../../features/api/apiSlice";
import VideoLoader from "../Loaders/VideoLoader";
import Error from "../Loaders/Error";

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );

  const {tags, search} = useSelector(state => state.filter)

  useEffect(() => {
    dispatch(fetchVideos({tags, search}));
  }, [dispatch, tags, search]);

  let content;

  if(isLoading) content = (
    <>
    <VideoLoader></VideoLoader>
    <VideoLoader></VideoLoader>
    <VideoLoader></VideoLoader>
    <VideoLoader></VideoLoader>
    <VideoLoader></VideoLoader>
    <VideoLoader></VideoLoader>
    <VideoLoader></VideoLoader>
    </>
  );

  if(!isLoading && isError) content = <div class="col-span-12">{error}</div>

  if(!isError && !isLoading && videos?.length === 0){
    content = <div class="col-span-12">No videos Found
    </div>
  }

  if(!isError && !isLoading && videos?.length > 0){
    content = videos.map(video =>
    <VideoGridItem key={video.id}
    video={video}
    ></VideoGridItem>)
  }

  // const { data: videos, isLoading, isError } = useGetVideosQuery();
  

  // let content = null;

  //     if (isLoading) {
  //   content = (
  //     <>
  //       <VideoLoader></VideoLoader>
  //       <VideoLoader></VideoLoader>
  //       <VideoLoader></VideoLoader>
  //       <VideoLoader></VideoLoader>
  //       <VideoLoader></VideoLoader>
  //       <VideoLoader></VideoLoader>
  //       <VideoLoader></VideoLoader>
  //     </>
  //   );
  // }

  // if (!isLoading && isError) {
  //   content = <Error></Error>;
  // }

  // if (!isLoading && !isError &&  videos?.length === 0) {
  //   content = <Error message="No videos found"></Error>;
  // }
  // if (!isLoading && !isError &&  videos?.length > 0) {
  //   content = videos.map((video) => (
  //     <VideoGridItem key={video.id} video={video}></VideoGridItem>
  //   ));
  // }

  return (
    <div>
      <section class="pt-12">
        <section class="pt-12">
          <div class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {/* {<VideoGridItem></VideoGridItem>} */}
            {content}
          </div>
        </section>
      </section>
    </div>
  );
};

export default VideoGrid;
