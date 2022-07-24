import YouTube from 'react-youtube';


const playlist = () => {
    const opts = {
        height: '590',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

  return (
    <div className='w-full mx-auto my-[100px]'>
        <h2 className='my-3 font-bold text-2xl text-[#15133C]'>Our Latest Video</h2>
        <YouTube videoId="60dc_v2Oze4" opts={opts} onReady={_onReady} />
    </div>
  )
}

function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

export default playlist