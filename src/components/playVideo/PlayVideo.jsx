import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const PlayVideo = ({ videoId }) => {

    const [apiData, setApiData] = useState(null);

    const fetchVideoData = async () => {

        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`

        try {
            const response = await fetch(videoDetails_url);
            if (!response.ok) throw new Error("API'dan ma'lumot olishda xatolik!");

            const data = await response.json();
            if (data.items.length === 0) throw new Error("Video topilmadi!");

            setApiData(data.items[0]);
        } catch (error) {
            console.error("Xatolik:", error.message);
        }
    };


    useEffect(() => {
        fetchVideoData();
    }, [videoId])


    return (
        <div className='play-video'>
            {/* <video src={video1} controls autoPlay muted ></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
            <div className="play-video-info">
                <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} views &bull; {moment(apiData?.snippet?.publishedAt).fromNow()} </p>
                <div>
                    <span><img src={like} alt="" /> 503</span>
                    <span><img src={dislike} alt="" /> 3</span>
                    <span><img src={share} alt="" /> Share</span>
                    <span><img src={save} alt="" /> Save</span>
                </div>
            </div>
            <hr />

            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>Master coding</p>
                    <span>3M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-describtion">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus?</p>
                <hr />
                <h4>127 Comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita dolorum voluptatibus laborum. A dolorem beatae quidem, tenetur voluptates quibusdam velit?</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>54</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita dolorum voluptatibus laborum. A dolorem beatae quidem, tenetur voluptates quibusdam velit?</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>54</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita dolorum voluptatibus laborum. A dolorem beatae quidem, tenetur voluptates quibusdam velit?</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>54</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita dolorum voluptatibus laborum. A dolorem beatae quidem, tenetur voluptates quibusdam velit?</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>54</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default PlayVideo