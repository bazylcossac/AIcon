import React, { useState } from "react";
import WavesurferPlayer from "@wavesurfer/react";
import WaveSurfer from "wavesurfer.js";
function WaveForm({
  matches,
  fileUrl,
}: {
  matches: boolean | undefined;
  fileUrl: string;
}) {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const onReady = (ws: WaveSurfer) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  return (
    <>
      <WavesurferPlayer
        height={70}
        width={matches ? "35vw" : "70vw"}
        waveColor="#016630"
        dragToSeek
        normalize
        url={fileUrl}
        onReady={onReady}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <button
        onClick={onPlayPause}
        className="bg-green-700 px-2 py-1 rounded-md cursor-pointer hover:bg-green-800"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </>
  );
}

export default WaveForm;
