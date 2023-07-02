import React from 'react';
import * as PANOLENS from 'panolens';
import '../../css/panorama.css'

// const PanoramaViewer = ({ imageSrc }) => {
//   const viewerRef = useRef();

//   useEffect(() => {
//     const viewer = new PANOLENS.Viewer({
//       container: viewerRef.current,
//       enableReticle: false,
//     });

//     const panorama = new PANOLENS.ImagePanorama(imageSrc);
//     viewer.add(panorama);

//     return () => {
//       viewer.dispose();
//     };
//   }, [imageSrc]);

//   return (
//     <div className="panorama-container" ref={viewerRef} style={{ display:'grid', padding:'0,0,0,0', boxSizing:'border-box'}}>

//     </div>
//   );
// };
// return <div ref={viewerRef} style={{ height: '500px', width:'100%', padding:'0,0,0,0', boxSizing:'border-box'}} />; 
//https://images.pexels.com/photos/5048124/pexels-photo-5048124.jpeg?cs=srgb&dl=pexels-sergio-souza-5048124.jpg&fm=jpg

function PanoramaViewer({imageSrc}) {
  const panoramaRef = React.useRef(null);

  React.useEffect(() => {
    const panorama = new PANOLENS.ImagePanorama(imageSrc);
    const viewer = new PANOLENS.Viewer({
      container: panoramaRef.current,
      //autoRotate: true,
      //autoRotateSpeed: 1.0,
      enablecontrol: true,
    });
    viewer.add(panorama); 

    // hide the second viewer using CSS
    const container = panoramaRef.current;
    if (container) {
      container.classList.add('panorama-container');
    }
  }, []);

  return <div ref={panoramaRef} style={{ height: '70vh', width:'100%', padding:'0,0,0,0', boxSizing:'border-box', borderRadius:'5px'}}/>;
}


const VR = ({ blog }) => {
  return (
    <section class="item vrsection" id="vrsection">
      <ul class="heading showtotop delay-02">
        <li id="sectionHeader">VR section</li>
      </ul>
      <div class="sub-heading showtotop delay-04">
        <p>Trải nghiệm thực tế ảo một cách chân thật </p>
      </div>
      {/* <img class="heading showtotop delay-02" src={blog.img} alt="" /> */}
        <div class="sub-heading showtotop delay-04">
        <PanoramaViewer imageSrc={blog.img}></PanoramaViewer>
        </div>
    </section>
  );
};

export default VR;
