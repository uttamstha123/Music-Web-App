import React from 'react'
import "./cardstyle.css";

const MusicCard = ({ songs }) => {
    return (<>{
        songs.map((song, index) => (
            <div key={index} className="music-card m-4 mb-0 card border-0 p-2" style={{ width: "10rem" }}>
                <i class="play-icon text-primary fs-2 bi bi-play-circle-fill"></i>
                <img src={songs[index].share.image} alt="" className="card-img-top" />
                <div className="card-body pb-0 pt-2">
                    <h6 className="card-title m-0 text-center fw-bold">
                        {song.title}
                    </h6>

                </div>
            </div>
        ))
    }
    </>
    )
}
export default MusicCard