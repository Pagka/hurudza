const PortfolioShowReel = () => {
  return (
    <div className="w-screen h-[90vh] bg-zinc-900">
      <video
        src="https://framerusercontent.com/assets/xczsI9Xq2X6OvsvU8NVUiUJUXuA.mp4"
        preload="auto"
        poster="https://framerusercontent.com/images/XfPXWibbQSwv7OVrWRygN2HTJY.webp"
        // style="cursor: auto; width: 100%; height: 100%; border-radius: 0px; display: block; object-fit: cover; background-color: rgba(0, 0, 0, 0); object-position: 50% 50%;"
        style={{
          cursor: "auto",
          width: "100%",
          height: "100%",
          borderRadius: "0px",
          display: "block",
          objectFit: "cover",
          backgroundColor: "rgba(0, 0, 0, 0)",
          objectPosition: "50% 50%",
        }}
        playsInline
        autoPlay
        loop
      ></video>
    </div>
  );
};

export default PortfolioShowReel;
