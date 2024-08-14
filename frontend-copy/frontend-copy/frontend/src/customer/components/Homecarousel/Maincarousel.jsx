// import React, { useState, useEffect } from 'react';
// import { Maincarouseldata } from './Maincarouseldata';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { getImageSize } from 'react-image-size';

// const MainCarousel = () => {
//   const [imageDimensions, setImageDimensions] = useState([]);

//   useEffect(() => {
//     const fetchImageDimensions = async () => {
//       const dimensionsPromises = Maincarouseldata.map(async (item) => {
//         const dimensions = await getImageSize(item.Image);
//         return { src: item.Image, dimensions };
//       });

//       const resolvedDimensions = await Promise.all(dimensionsPromises);
//       setImageDimensions(resolvedDimensions);
//     };

//     fetchImageDimensions();
//   }, []);

//   const maxWidth = 1000; 
//   const maxAspectRatio = 2; // Set your maximum aspect ratio (height/width)

//   const items = imageDimensions.map((item) => {
//     const width = Math.min(item.dimensions.width, maxWidth);
//     const height = Math.min(width * maxAspectRatio, item.dimensions.height);

//     return (
//       <img
//         key={item.src}
//         className='cursor-pointer'
//         role='presentation'
//         src={item.src}
//         alt=''
//         width={width}
//         height={height}
//       />
//     );
//   });

//   return (
//     <div className="carousel-container">
//       <AliceCarousel
//         items={items}
//         disableButtonsControls
//         autoPlay
//         autoPlayInterval={1000}
//         infinite
//       />
//     </div>
//   );
// };

// export default MainCarousel;
// import React, { useState, useEffect } from 'react';
// import { Maincarouseldata } from './Maincarouseldata';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { getImageSize } from 'react-image-size';

// const MainCarousel = () => {
//   const [imageDimensions, setImageDimensions] = useState([]);

//   useEffect(() => {
//     const fetchImageDimensions = async () => {
//       const dimensionsPromises = Maincarouseldata.map(async (item) => {
//         const dimensions = await getImageSize(item.Image);
//         return { src: item.Image, dimensions };
//       });

//       const resolvedDimensions = await Promise.all(dimensionsPromises);
//       setImageDimensions(resolvedDimensions);
//     };

//     fetchImageDimensions();
//   }, []);

//   const maxWidth = 1000; 
//   const maxAspectRatio = 2;

//   const items = imageDimensions.map((item) => {
//     const width = Math.min(item.dimensions.width, maxWidth);
//     const height = Math.min(width * maxAspectRatio, item.dimensions.height);

//     return (
//       <img
//         key={item.src}
//         className='cursor-pointer'
//         role='presentation'
//         src={item.src}
//         alt=''
//         style={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover', // Ensures the image covers the container
//         }}
//         width={width}
//         height={height}
//       />
//     );
//   });

//   return (
//     <div
//       style={{
//         width: '100%',
//         height: '800px', // Adjust height as needed
//         overflow: 'hidden',
//       }}
//     >
//       <AliceCarousel
//         items={items}
//         disableButtonsControls
//         autoPlay
//         autoPlayInterval={1000}
//         infinite
//       />
//     </div>
//   );
// };

// export default MainCarousel;
// import React, { useState, useEffect } from 'react';
// import { Maincarouseldata } from './Maincarouseldata';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { getImageSize } from 'react-image-size';

// const MainCarousel = () => {
//   const [imageDimensions, setImageDimensions] = useState([]);

//   useEffect(() => {
//     const fetchImageDimensions = async () => {
//       const dimensionsPromises = Maincarouseldata.map(async (item) => {
//         const dimensions = await getImageSize(item.Image);
//         return { src: item.Image, dimensions, text: item.text };
//       });

//       const resolvedDimensions = await Promise.all(dimensionsPromises);
//       setImageDimensions(resolvedDimensions);
//     };

//     fetchImageDimensions();
//   }, []);

//   const maxWidth = 1000; 
//   const maxAspectRatio = 2;

//   const items = imageDimensions.map((item) => {
//     const width = Math.min(item.dimensions.width, maxWidth);
//     const height = Math.min(width * maxAspectRatio, item.dimensions.height);

//     return (
//       <div
//         key={item.src}
//         style={{
//           position: 'relative',
//           width: '100%',
//           height: '100%',
//         }}
//       >
//         <img
//           src={item.src}
//           alt=''
//           style={{
//             width: '100%',
//             height: '50%',
//             objectFit: 'contain',
//             filter: 'blur(4px)', // Slight blur to highlight text
//           }}
//           width={width}
//           height={height}
//         />
//         <div
//           style={{
//             position: 'absolute',
//             top: '20%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             color: 'white',
//             fontSize: '2em',
//             fontWeight: 'bold',
//             textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
//           }}
//         >
//           {item.text}
//         </div>
//       </div>
//     );
//   });

//   return (
//     <div
//       style={{
//         width: '100%',
//         height: '500px', // Adjust height as needed
//         overflow: 'hidden',
//       }}
//     >
//       <AliceCarousel
//         items={items}
//         disableButtonsControls
//         autoPlay
//         autoPlayInterval={1000}
//         infinite
//       />
//     </div>
//   );
// };

// export default MainCarousel;
import React, { useState, useEffect } from 'react';
import { Maincarouseldata } from './Maincarouseldata';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getImageSize } from 'react-image-size';

const MainCarousel = () => {
  const [imageDimensions, setImageDimensions] = useState([]);

  useEffect(() => {
    const fetchImageDimensions = async () => {
      const dimensionsPromises = Maincarouseldata.map(async (item) => {
        const dimensions = await getImageSize(item.Image);
        return { src: item.Image, dimensions, text: item.text };
      });

      const resolvedDimensions = await Promise.all(dimensionsPromises);
      setImageDimensions(resolvedDimensions);
    };

    fetchImageDimensions();
  }, []);

  const items = imageDimensions.map((item) => {
    return (
      <div
        key={item.src}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={item.src}
          alt=''
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain', // Ensure the entire image is shown within the container
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%', // Position text at the bottom
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for text
            padding: '10px 20px',
            borderRadius: '10px',
            color: 'white',
            fontSize: '1.5em',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {item.text}
        </div>
      </div>
    );
  });

  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        overflow: 'hidden',
        borderRadius: '15px', // Add some rounding for a smoother look
      }}
    >
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000} // Slower interval for better viewing
        infinite
        animationType="fadeout" // Smooth fade transitions
        animationDuration={800}
      />
    </div>
  );
};

export default MainCarousel;
