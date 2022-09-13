import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Form from './Form';
import { fetchVideo } from "../../features/Video/VideoSlice";
import Error from '../Loaders/Error';

const EditVideo = () => {
    const dispatch = useDispatch();
    const {videoId} = useParams();
    const {video, isLoading, isError, error} = useSelector(state => state.video);

    useEffect(() => {
        dispatch(fetchVideo(videoId))
    }, [dispatch, videoId]);

    let content = null;

    if(isLoading){
        content = <div>
            Loading ...
        </div>
    }

    if(!isLoading && isError){
        content = <Error message="There was a error"></Error>
    }
    if(!isLoading && !isError && video?.id){
        content = <Form video={video}></Form>
    }

    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-0">
            <div className="w-full">
                <div className="px-4 sm:px-0 pb-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Edit video
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                        Please fillup the form to edit video
                    </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">{content}</div>
            </div>
        </div>
    );
};

export default EditVideo;