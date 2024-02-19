"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

// CAROUSEL DATA

interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
  list: string;
  list2?: string;
  list3?: string;
}

const postData: DataType[] = [
  {
    profession: "Tienda de muebles de alta calidad",
    name: "Melatec",
    imgSrc: "/images/Expert/melatec.jpg",
    list: "✏️ Landing page para la informacion de la empresa",
    list2: "📱 Desarrollo de tienda online",
    list3: "📈 Estrategia de marketing digital",
  },
  {
    profession: "Polos con diseños de las mejores marcas",
    name: "EDRI",
    imgSrc: "/images/Expert/edri.jpg",
    list: "✏️ Landing page para la informacion de la empresa",
    list2: "📱 Desarrollo de tienda online",
    list3: "📈 Estrategia de marketing digital",
  },
  //   {
  //     profession: "Visagras y tornillos de alta calidad",
  //     name: "Lecco",
  //     imgSrc: "/images/Expert/lecco.svg",
  //   },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      // centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="py-10 sm:py-20 bg-darkpink">
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
          <div className="text-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51">
                Casos de éxito
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-black">
                Empresas que transformaron su rumbo digitalmente
              </h3>
            </Fade>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="m-3 py-14 my-10 text-center">
                  <Image
                    alt=""
                    width={300}
                    height={300}
                    src={items.imgSrc}
                    className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                  />
                  <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong className="font-medium">{items.name}</strong>
                    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-pink"></span>
                    <p className="mt-0.5 opacity-50 sm:mt-0">
                      {items.profession} <br></br>
                    </p>
                  </div>
                  <p className="pt-8 flex justify-start">{items.list} </p>
                  <p className="pt-2 flex justify-start">{items.list2}</p>
                  <p className="pt-2 flex justify-start">{items.list3}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
