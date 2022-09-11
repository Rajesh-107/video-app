import { useEffect } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { fetchRelatedVideos } from "../../features/relatedVideos/RelatedVideosSlice";

const RelatedVideoList = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  let content = null;

  if (isLoading) content = <Loading></Loading>;
  if(!isLoading && isError){
    content = <div className="col-span-12">
        {error}
    </div>
  }

  if(!isLoading && !isError && relatedVideos?.length === 0){
    content = <div className="col-span-12">
    No RelatedVideos found!
</div>
  }
  if(!isLoading && !isError && relatedVideos?.length > 0){
    content = relatedVideos.map(video => 
        ( <RelatedVideoListItem  key={video.id} video={video}></RelatedVideoListItem>))
  }


  return (
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
     {content}
    </div>
  );
};

export default RelatedVideoList;
