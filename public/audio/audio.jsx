import mp3_file from "../assets/Harry-Potter-Theme.mp3"

const AudioPlayer = function() {
  return (
    <audio src={mp3_file} autoPlay />
  );
}
export default AudioPlayer;