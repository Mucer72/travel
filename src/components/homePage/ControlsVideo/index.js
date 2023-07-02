import { buttonSetting } from "./setting";
import { getOriginURL } from "../../../handler";

const ControlsVideo = () => {
  const onClickHandle = (event, videoLink) => {
    const videoBtn = document.querySelectorAll(".vid-btn");
    videoBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    event.target.classList.add("active");
    document.querySelector("#video-slider").src = videoLink;
  };
  return (
    <>
      <div class="controls">
        {buttonSetting.map((button, index) => (
          <span
            onClick={(e) => onClickHandle(e, button.video_source)}
            class={`${!index && "active"} vid-btn`}
            key={button.video_source}
          ></span>
        ))}
      </div>
      <div class="video-container">
        <video id="video-slider" loop autoPlay muted>
          <source src={`${getOriginURL}/images/vid-1.mp4`} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default ControlsVideo;
