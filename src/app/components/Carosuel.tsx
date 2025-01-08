import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Carosuel: React.FC = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px]">
        <Image
          src="/caro-image1.jpg"
          alt="image-1"
          width={800}
          height={400}
          className="object-cover w-full h-full object-center"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <Link href="#slide6" className="btn btn-circle">❮</Link>
          <Link href="#slide2" className="btn btn-circle">❯</Link>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px]">
        <Image
          src="/caro-image2.jpg"
          alt="image-2"
          width={800}
          height={400}
          className="object-cover w-full h-full object-center"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <Link href="#slide1" className="btn btn-circle">❮</Link>
          <Link href="#slide3" className="btn btn-circle">❯</Link>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px]">
        <Image
          src="/caro-image3.jpg"
          alt="image-3"
          width={800}
          height={400}
          className="object-cover w-full h-full object-center"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <Link href="#slide2" className="btn btn-circle">❮</Link>
          <Link href="#slide4" className="btn btn-circle">❯</Link>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px]">
        <Image
          src="/caro-image4.jpg"
          alt="image-4"
          width={800}
          height={400}
          className="object-cover w-full h-full object-center"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <Link href="#slide3" className="btn btn-circle">❮</Link>
          <Link href="#slide5" className="btn btn-circle">❯</Link>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px]">
        <Image
          src="/caro-image5.jpg"
          alt="image-5"
          width={800}
          height={400}
          className="object-cover w-full h-full object-center"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <Link href="#slide4" className="btn btn-circle">❮</Link>
          <Link href="#slide6" className="btn btn-circle">❯</Link>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px]">
        <Image
          src="/caro-image6.jpg"
          alt="image-6"
          width={800}
          height={400}
          className="object-cover w-full h-full object-center"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <Link href="#slide5" className="btn btn-circle">❮</Link>
          <Link href="#slide1" className="btn btn-circle">❯</Link>
        </div>
      </div>
    </div>
  );
};

export default Carosuel;
