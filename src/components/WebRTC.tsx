import { useRef, useEffect } from 'react';

const WebRTCComponent: React.FC = () => {
  const peerConnection = useRef<RTCPeerConnection | null>(null);

  const setupWebRTC = async () => {
    const pc = new RTCPeerConnection();

    // Handle the answer from the remote peer
    // signalingServer.onmessage = async (message) => {
    //   const data = JSON.parse(message.data);
    //   if (data.answer) {
    //     await pc.setRemoteDescription(new RTCSessionDescription(data.answer));
    //   } else if (data.candidate) {
    //     await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
    //   }
    // };

    if (peerConnection) {
      peerConnection.current = pc;
    }
  };

  useEffect(() => {
    setupWebRTC();

    return () => {
      if (peerConnection.current) {
        peerConnection.current.close();
      }
    };
  }, []);

  return (
    <div>
      <h3>
        WebRTC Component
      </h3>
    </div>
  );
};

export default WebRTCComponent;