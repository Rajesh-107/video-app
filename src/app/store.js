import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/VideosSlice";
import tagsReducer from "../features/tags/TagsSlice";
import VideoReducer from "../features/Video/VideoSlice";
import relatedVideosReducer from "../features/relatedVideos/RelatedVideosSlice";
import filterReducer from "../features/filter/filterSlice";
import { apiSlice } from "../features/api/apiSlice";


export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: VideoReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});
