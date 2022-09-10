import React from "react";
import { Link } from "react-router-dom";

const VideoGridItem = ({video}) => {
  return (
    <div class="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div class="w-full flex flex-col">
        <div class="relative">
          <Link to={`videos/${video.id}`} >
            <img
              src={video.thumbnail}
              class="w-full h-auto"
              alt={video.title}
            />
          </Link>

          <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {video.duration}
          </p>
        </div>

        <div class="flex flex-row mt-2 gap-2">
          <Link to={`videos/${video.id}`} class="shrink-0">
            <img
              src={video.avatar}
              class="rounded-full h-6 w-6"
              alt={video.author}
            />
          </Link>

          <div clas="flex flex-col">
            <Link to={`videos/${video.id}`}>
              <p class="text-slate-900 text-sm font-semibold">{video.title}</p>
            </Link>
            <Link
              to={`videos/${video.id}`}
              class="text-gray-400 text-xs mt-2 hover:text-gray-600"
              href="#"
            >
             {video.author}
            </Link>
            <p class="text-gray-400 text-xs mt-1">{video.views} . {video.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
