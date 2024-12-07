```jsx
    import React, { useRef, useEffect } from 'react';
    import './App.css';

    function App() {
      const videoRef = useRef(null);
      const cursorRef = useRef(null);

      useEffect(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, []);

      const handleMouseMove = (e) => {
        if (cursorRef.current) {
          cursorRef.current.style.left = e.clientX + 'px';
          cursorRef.current.style.top = e.clientY + 'px';
        }
      };

      return (
        <div className="App" onMouseMove={handleMouseMove}>
          <video ref={videoRef} autoPlay loop muted>
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div ref={cursorRef} className="cursor"></div>
          <div className="waitlist-content">
            <h1>Join the Waitlist</h1>
            <p>Be the first to know when we launch!</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      );
    }

    export default App;
    ```
