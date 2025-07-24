import React, { useRef, useState } from 'react';

const ScreenRecorder = () => {
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const [isRecording, setIsRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: { mediaSource: 'screen' },
      audio: true
    });

    recordedChunksRef.current = [];
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunksRef.current.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      setVideoURL(url);
    };

    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Screen Recorder</h2>

      {!isRecording ? (
        <button
          onClick={startRecording}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Start Recording
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Stop Recording
        </button>
      )}

      {videoURL && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Preview:</h3>
          <video src={videoURL} controls className="w-full rounded border" />
          <a
            href={videoURL}
            download="recording.webm"
            className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded"
          >
            Download Recording
          </a>
        </div>
      )}
    </div>
  );
};

export default ScreenRecorder;
