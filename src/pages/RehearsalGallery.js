import React from 'react';

const PhotoGallery = () => {
  const images = [
    "https://i.ibb.co/bjJ5xVTJ/02.jpg",
    "https://i.ibb.co/CKdbCs3w/01.jpg",
    "https://i.ibb.co/DfTJXPpQ/04.jpg",
    "https://i.ibb.co/cKgmPNRF/03.jpg",
    "https://i.ibb.co/wZpwFTVn/06.jpg",
    "https://i.ibb.co/pBNXYmSc/05.jpg",
    "https://i.ibb.co/tpyy4q4s/07.jpg",
    "https://i.ibb.co/0RC9GB4W/06a.jpg",
    "https://i.ibb.co/Zz9gxX3g/09.jpg",
    "https://i.ibb.co/VYgb8zp5/08.jpg",
    "https://i.ibb.co/VYh6v0nB/11.jpg",
    "https://i.ibb.co/VYh6v0nB/11.jpg",
    "https://i.ibb.co/ZzBJ9WgS/10.jpg",
    "https://i.ibb.co/1JvK4KjD/15.jpg",
    "https://i.ibb.co/q35YNSdN/14.jpg",
    "https://i.ibb.co/twK8gGqV/13.jpg",
    "https://i.ibb.co/2YpSw4R7/11a.jpg",
    "https://i.ibb.co/9HrfkSL0/17.jpg",
    "https://i.ibb.co/7dRqGJwD/16.jpg",
    "https://i.ibb.co/DD15T1F4/19.jpg",
    "https://i.ibb.co/Kxy30JHq/22.jpg",
    "https://i.ibb.co/cKhqb901/21a.jpg",
    "https://i.ibb.co/GgH9sTC/21.jpg",
    "https://i.ibb.co/GfZTtb2k/20.jpg",
    "https://i.ibb.co/XxW1YdnJ/25.jpg",
    "https://i.ibb.co/sdg9STZC/24.jpg",
    "https://i.ibb.co/wNf4hCjH/23.jpg",
    "https://i.ibb.co/pj1RRghf/26.jpg",
    "https://i.ibb.co/rBkygdW/28.jpg",
    "https://i.ibb.co/PRQzvJh/27.jpg",
    "https://i.ibb.co/Z1Tk039w/30.jpg",
    "https://i.ibb.co/r2Z70j58/29.jpg",
    "https://i.ibb.co/1t1Fp0Zk/35.jpg",
    "https://i.ibb.co/ZpJWj9ft/34.jpg",
    "https://i.ibb.co/1GJ7fDNv/33.jpg",
    "https://i.ibb.co/yBxfNXTx/37.jpg",
    "https://i.ibb.co/sLhBYTJ/36.jpg",
    "https://i.ibb.co/vC23dZGW/39.jpg",
    "https://i.ibb.co/spKpMf29/38.jpg",
    "https://i.ibb.co/XrJDwBt8/40.jpg",
    "https://i.ibb.co/B2CcmBgw/41.jpg",
    "https://i.ibb.co/zHSXJcbt/43.jpg",
    "https://i.ibb.co/V7rd6cj/42.jpg",
    "https://i.ibb.co/KBHnGhz/45.jpg",
    "https://i.ibb.co/f3J9nxr/44.jpg",
    "https://i.ibb.co/Gfk7Q1G5/46.jpg",
    "https://i.ibb.co/kgYxggjM/49.jpg",
    "https://i.ibb.co/spd07Qgh/48.jpg",
    "https://i.ibb.co/N6t9xmcW/51.jpg",
    "https://i.ibb.co/CKZ9jSJH/50.jpg",
    "https://i.ibb.co/yF0vkBPs/53.jpg",
    "https://i.ibb.co/ZRz6BYMG/52.jpg",
    "https://i.ibb.co/bMVvxYxZ/55.jpg",
    "https://i.ibb.co/RG2tNzT4/54.jpg",
    "https://i.ibb.co/ZR7y33H2/56.jpg",
    "https://i.ibb.co/Z1p2R0h0/56a.jpg",
    "https://i.ibb.co/5X5djV8z/57.jpg",
    "https://i.ibb.co/HLbKDCYh/62.jpg",
    "https://i.ibb.co/ZCTdTGH/60.jpg"
  ];

  return (
    <main className="photo-wrapper">
      <section className="container">
        <h2 className="photo-title">Rehearsal Gallery</h2>
        <div className="photo-columns">
          {images.map((url, index) => (
            <img 
              key={index} 
              src={url} 
              alt={`Gallery image ${index + 1}`} 
              className="gallery-photo"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default PhotoGallery;