import React from 'react';
import logo from '../img/logo.svg';
import android from '../img/android.png';
import api from '../img/api.png';
import apple from '../img/apple.png';
import bank from '../img/bank.svg';
import linux from '../img/linux.png';
import play from '../img/play.png';
import trade from '../img/trade.svg';
import tradeImg from '../img/trade.jpg'
import window from '../img/window.png';
import account from '../img/account.svg';
import { useEffect } from 'react';
import {gsap} from 'gsap';
import { Back } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Main = () => {

    useEffect(() => {
        let t1 = gsap.timeline({defaults:{duration: 0.7, ease: Back.easeOut.config(2), opacity: 0}})
let t2 = gsap.timeline({defaults:{duration: 1.5, delay:1}})
let t3 = gsap.timeline({defaults:{duration: 1.5}})

t1.from('.card-bg', {delay: 1, scale: 0.2, transformOrigin: 'center' }, "=.2s")
    .from('.card-top', { scaleY: 0, transformOrigin: 'top' } )
    .from('.card-icon', { scale: 0.2, transformOrigin: 'center' }, "-=.7" )
    .from('.line1', { scaleY: 0, transformOrigin: 'bottom' })
    .from('.graph1',{scaleX:0, transformOrigin:"left"} )
    .from('.graph2', {scaleY:0, transformOrigin:'bottom'})
    .from('.line2', { scaleY: 0, transformOrigin: 'bottom' }, "-=.2" )
    .from('.line3', { scaleY: 0, transformOrigin: 'bottom' }, "-=.3" )
    .from('.line4', { scaleY: 0, transformOrigin: 'bottom' }, "-=.4" )
    .from('.line5', { scaleY: 0, transformOrigin: 'bottom' }, "-=.5" )
    .from('.line6', { scaleY: 0, transformOrigin: 'bottom' }, "-=.6" )
    .from('.line7', { scaleY: 0, transformOrigin: 'bottom' }, "-=.7" )
    .from('.line8', { scaleY: 0, transformOrigin: 'bottom' }, "-=.8" )
    .from('.blip1', { scaleX: 0, transformOrigin:'left'})
    .from('.blip2', { scaleX: 0, transformOrigin:'left'}, '-=0.2')
    .from('.blip3', { scaleX: 0, transformOrigin:'left'}, '-=0.3')
    .from('.blip4', { scaleX: 0, transformOrigin:'left'}, '-=0.4')
    
t2.from(".whole-card", {y:10, repeat: -1, yoyo:true})
t3.from(".details1", {opacity:0,y: 40, stagger:0.3})

const navSlide = () => {
    const burger = document.querySelector(".ham");
    const nav = document.querySelector(".nav-items");
    const navItem = document.querySelectorAll(".nav-item");
   


    burger.addEventListener('click', () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle('toggle');

        navItem.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
               
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
              
            }
        })
    })

   
}

navSlide();
let counter = 1;


    const rateSlide = document.querySelector('.rate-slide');
    const rateItems = document.querySelectorAll('.rates');

    //counter
    
    const size = rateItems[0].clientHeight;
    //console.log(size);

    rateSlide.style.transform = 'translateY(' + (-size * counter) +'px)';
    //console.log(rateSlide.style.transform);


setInterval(function(){
    counter++;
   // console.log("interval",counter);
    rateSlide.style.transition = 'transform 0.3s ease-in-out';
    rateSlide.style.transform = 'translateY(' + (-size * counter) +'px)';
    if(rateItems[counter].id === 'firstClone'){
        rateSlide.style.transition = 'none';
        counter = 1;
        //console.log("slide",counter);
        rateSlide.style.transform = 'translateY(' + (-size * counter) +'px)';
        
       }
    //console.log(rateSlide.style.transform);
},2000);

gsap.registerPlugin(ScrollTrigger);

gsap.from(".image", {
    scrollTrigger: {
        trigger:'.image',
        start:"top center",
    },
    x:-500,
    opacity: 0,
    duration:1.5
})
gsap.from(".media-details", {
    scrollTrigger: {
        trigger:'.image',
        start:"top center",
    },
    x:500,
    opacity: 0,
    duration:1.5
});
gsap.from(".buy-section", {
    scrollTrigger: {
        trigger:'.buy-section',
        start:"top center",
    },
    y:-200,
    opacity: 0,
    duration:1.5
});
gsap.from(".main", {
    scrollTrigger: {
        trigger:'.main',
        start:"top center",
    },
    y:-200,
    opacity: 0,
    duration:1.5
});


    }, [])


    return (
        <div className="mainSection">
            <nav>
      <div className="container">
        <div className="navigation">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-items">
            <h5 className="nav-item">Prices</h5>
            <h5 className="nav-item">Learn</h5>
            <h5 className="nav-item">Businesses</h5>
            <h5 className="nav-item">Company</h5>
            <button className="btn sec nav-item hide">Sign in</button>
            <button className="btn pri nav-item hide">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
    <header>
      <div className="container">
        <div className="head">
          <div className="details details1">
            <div className="heading">
              <h1>
                We Don't Make Cryptocurrency. We Make Cryptocurrency Better.
              </h1>
            </div>
            <div className="input">
              <input type="text" />
              <button className="pri btn get">Get Started</button>
            </div>
          </div>
          <div className="card">
            <svg
              className="whole-card"
              width="335"
              height="462"
              viewBox="0 0 335 462"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="card">
                <rect
                  className="card-bg"
                  id="Rectangle 1"
                  width="335"
                  height="462"
                  rx="10"
                  fill="#4B4A42"
                />
                <path
                  className="card-top"
                  id="Rectangle 2"
                  d="M0 10C0 4.47715 4.47715 0 10 0H325C330.523 0 335 4.47715 335 10V136H0V10Z"
                  fill="#68675C"
                />
                <g id="3287275_bitcoin_chart_cryptocurrency_dollar_rate_icon 1">
                  <g className="card-icon" id="card-icon">
                    <g id="ratio_rate">
                      <g id="Group">
                        <g id="Group_2">
                          <g id="Group_3">
                            <g id="Group_4">
                              <path
                                id="Vector"
                                d="M193.25 108.503C180.826 108.503 170.719 98.295 170.719 85.75C170.719 80.485 172.544 75.35 175.859 71.2908C176.422 70.605 177.44 70.4977 178.125 71.073C178.811 71.645 178.91 72.6655 178.344 73.361C175.502 76.8385 173.938 81.2358 173.938 85.75C173.938 96.5043 182.599 105.253 193.25 105.253C203.901 105.253 212.562 96.5043 212.562 85.75C212.562 74.9958 203.901 66.2468 193.25 66.2468C189.574 66.2468 185.998 67.2965 182.905 69.2855C182.155 69.7665 181.16 69.539 180.684 68.7883C180.208 68.031 180.427 67.0267 181.176 66.5457C184.788 64.2252 188.963 63 193.25 63C205.674 63 215.781 73.2083 215.781 85.7533C215.781 98.2983 205.674 108.503 193.25 108.503Z"
                                fill="#F9FAE0"
                              />
                            </g>
                          </g>
                        </g>
                        <g id="Group_5">
                          <g id="Group_6">
                            <g id="Group_7">
                              <path
                                id="Vector_2"
                                d="M141.75 63.0032C129.326 63.0032 119.219 52.795 119.219 40.25C119.219 34.985 121.044 29.85 124.356 25.7907C124.919 25.1017 125.936 24.9977 126.622 25.5697C127.307 26.1417 127.407 27.1622 126.841 27.8577C124.002 31.3352 122.438 35.7357 122.438 40.25C122.438 51.0042 131.099 59.7532 141.75 59.7532C152.401 59.7532 161.062 51.0042 161.062 40.25C161.062 29.4957 152.401 20.7467 141.75 20.7467C138.074 20.7467 134.498 21.7965 131.405 23.7855C130.652 24.2632 129.66 24.0422 129.184 23.285C128.708 22.5277 128.927 21.5235 129.676 21.0425C133.288 18.722 137.463 17.4967 141.75 17.4967C154.174 17.4967 164.281 27.705 164.281 40.25C164.281 52.795 154.174 63.0032 141.75 63.0032Z"
                                fill="#F9FAE0"
                              />
                            </g>
                          </g>
                        </g>
                        <g id="Group_8">
                          <g id="Group_9">
                            <g id="Group_10">
                              <path
                                id="Vector_3"
                                d="M193.25 98.75C197.763 98.75 201.297 95.1815 201.297 90.625C201.297 86.9363 198.815 84.2485 193.923 82.6365L193.559 82.5162C191.724 81.9117 190.031 81.0993 190.031 79.25C190.031 77.3358 191.354 76 193.25 76C195.516 76 197.029 77.2285 197.042 77.2415C197.727 77.82 198.738 77.729 199.311 77.0465C199.884 76.3575 199.794 75.337 199.115 74.7585C199.018 74.6773 196.713 72.75 193.25 72.75C189.577 72.75 186.812 75.545 186.812 79.25C186.812 83.7155 191.138 85.1422 192.558 85.6037L192.922 85.724C196.391 86.868 198.078 88.4735 198.078 90.625C198.078 93.4038 196.002 95.5 193.25 95.5C190.263 95.5 188.554 93.511 188.1 92.9C187.566 92.1785 186.555 92.0388 185.847 92.5718C185.132 93.1113 184.987 94.1285 185.522 94.8467C186.204 95.7665 188.769 98.75 193.25 98.75Z"
                                fill="#F9FAE0"
                              />
                            </g>
                          </g>
                          <g id="Group_11">
                            <g id="Group_12">
                              <path
                                id="Vector_4"
                                d="M193.25 102C194.138 102 194.859 101.272 194.859 100.375V98.75C194.859 97.853 194.138 97.125 193.25 97.125C192.362 97.125 191.641 97.853 191.641 98.75V100.375C191.641 101.272 192.362 102 193.25 102Z"
                                fill="#F9FAE0"
                              />
                            </g>
                          </g>
                          <g id="Group_13">
                            <g id="Group_14">
                              <path
                                id="Vector_5"
                                d="M193.25 74.375C194.138 74.375 194.859 73.647 194.859 72.75V71.125C194.859 70.228 194.138 69.5 193.25 69.5C192.362 69.5 191.641 70.228 191.641 71.125V72.75C191.641 73.647 192.362 74.375 193.25 74.375Z"
                                fill="#F9FAE0"
                              />
                            </g>
                          </g>
                        </g>
                        <g id="Group_15">
                          <g id="Group_16">
                            <g id="Group_17">
                              <g id="Group_18">
                                <path
                                  id="Vector_6"
                                  d="M143.359 53.2467H133.703C132.815 53.2467 132.094 52.5187 132.094 51.6217C132.094 50.7247 132.815 49.9967 133.703 49.9967H143.359C146.021 49.9967 148.188 47.8095 148.188 45.1217C148.188 42.434 146.021 40.2467 143.359 40.2467H136.922V36.9967H143.359C147.795 36.9967 151.406 40.6432 151.406 45.1217C151.406 49.6002 147.795 53.2467 143.359 53.2467Z"
                                  fill="#F9FAE0"
                                />
                              </g>
                            </g>
                          </g>
                          <g id="Group_19">
                            <g id="Group_20">
                              <g id="Group_21">
                                <path
                                  id="Vector_7"
                                  d="M141.75 40.2467H136.922V36.9967H141.75C143.524 36.9967 144.969 35.5407 144.969 33.7467C144.969 31.9527 143.524 30.4967 141.75 30.4967H133.703C132.815 30.4967 132.094 29.7687 132.094 28.8717C132.094 27.9747 132.815 27.2467 133.703 27.2467H141.75C145.3 27.2467 148.188 30.162 148.188 33.7467C148.188 37.3315 145.3 40.2467 141.75 40.2467Z"
                                  fill="#F9FAE0"
                                />
                              </g>
                            </g>
                          </g>
                          <g id="Group_22">
                            <g id="Group_23">
                              <g id="Group_24">
                                <path
                                  id="Vector_8"
                                  d="M140.141 56.4902C139.252 56.4902 138.531 55.7622 138.531 54.8652V51.6152H141.75V54.8652C141.75 55.7622 141.029 56.4902 140.141 56.4902Z"
                                  fill="#F9FAE0"
                                />
                              </g>
                            </g>
                          </g>
                          <g id="Group_25">
                            <g id="Group_26">
                              <g id="Group_27">
                                <path
                                  id="Vector_9"
                                  d="M138.531 28.8717V25.6217C138.531 24.7247 139.252 23.9967 140.141 23.9967C141.029 23.9967 141.75 24.7247 141.75 25.6217V28.8717H138.531Z"
                                  fill="#F9FAE0"
                                />
                              </g>
                            </g>
                          </g>
                          <g id="Group_28">
                            <g id="Group_29">
                              <g id="Group_30">
                                <path
                                  id="Vector_10"
                                  d="M138.531 27.2467H135.312V53.2467H138.531V27.2467Z"
                                  fill="#F9FAE0"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <g id="Group_31">
                          <g id="Group_32">
                            <g id="Group_33">
                              <g id="Group_34">
                                <g id="Group_35">
                                  <path
                                    id="Vector_11"
                                    d="M215.089 38.6835C215.051 39.5772 214.304 40.2825 213.419 40.25C212.534 40.2142 211.835 39.4602 211.874 38.5632L212.334 25.8005C212.373 24.9067 211.674 24.2015 210.789 24.2372L198.139 24.702C197.248 24.7377 196.501 24.0325 196.469 23.1355C196.437 22.2417 197.135 21.4845 198.02 21.4487L214.12 20.8605C215.006 20.8247 215.704 21.53 215.672 22.4237L215.089 38.6835Z"
                                    fill="#F9FAE0"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g id="Group_36">
                        <path
                          id="Vector_12"
                          d="M122.438 103.625C122.026 103.625 121.614 103.466 121.298 103.15C120.67 102.517 120.67 101.486 121.298 100.853L169.579 52.1027C170.043 51.638 170.732 51.5015 171.334 51.7517C171.935 51.9987 172.328 52.5935 172.328 53.25V62.3305L212.978 21.3415C213.605 20.7077 214.626 20.7077 215.257 21.3415C215.884 21.9752 215.884 23.0055 215.257 23.6392L171.858 67.4005C171.398 67.8652 170.706 68.0017 170.104 67.7515C169.502 67.5012 169.109 66.9065 169.109 66.25V57.1727L123.577 103.15C123.262 103.466 122.85 103.625 122.438 103.625Z"
                          fill="#F9FAE0"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <rect
                  className="graph1"
                  id="Rectangle 3"
                  width="318"
                  height="4"
                  transform="matrix(1 0 0 -1 9 321)"
                  fill="#68675C"
                />
                <rect
                  className="graph2"
                  id="Rectangle 4"
                  x="9"
                  y="175"
                  width="4"
                  height="143"
                  fill="#68675C"
                />
                <path
                  className="line1"
                  id="Rectangle 5"
                  d="M37 212C37 210.343 38.3431 209 40 209H47C48.6569 209 50 210.343 50 212V317H37V212Z"
                  fill="#C4C4C4"
                />
                <path
                  className="line2"
                  id="Rectangle 6"
                  d="M73 236C73 234.343 74.3431 233 76 233H82C83.6569 233 85 234.343 85 236V317H73V236Z"
                  fill="#C4C4C4"
                />
                <path
                  className="line3"
                  id="Rectangle 7"
                  d="M108 181C108 179.343 109.343 178 111 178H118C119.657 178 121 179.343 121 181V317H108V181Z"
                  fill="#C4C4C4"
                />
                <path
                  className="line4"
                  id="Rectangle 8"
                  d="M144 209C144 207.343 145.343 206 147 206H154C155.657 206 157 207.343 157 209V317H144V209Z"
                  fill="#C4C4C4"
                />
                <path
                  className="line5"
                  id="Rectangle 9"
                  d="M180 277C180 275.343 181.343 274 183 274H189C190.657 274 192 275.343 192 277V318H180V277Z"
                  fill="#C4C4C4"
                />
                <path
                  className="line6"
                  id="Rectangle 10"
                  d="M215 199C215 197.343 216.343 196 218 196H225C226.657 196 228 197.343 228 199V317H215V199Z"
                  fill="#C4C4C4"
                />
                <path
                  className="line7"
                  id="Rectangle 12"
                  d="M287 240C287 238.343 288.343 237 290 237H296C297.657 237 299 238.343 299 240V318H287V240Z"
                  fill="#C4C4C4"
                />
                <path
                  className="line8"
                  id="Rectangle 13"
                  d="M251 234C251 232.343 252.343 231 254 231H261C262.657 231 264 232.343 264 234V317H251V234Z"
                  fill="#C4C4C4"
                />
                <rect
                  className="blip1"
                  id="Rectangle 14"
                  x="10"
                  y="341"
                  width="147"
                  height="17"
                  rx="8"
                  fill="#C4C4C4"
                />
                <rect
                  className="blip2"
                  id="Rectangle 15"
                  opacity="0.75"
                  x="10"
                  y="372"
                  width="191"
                  height="16"
                  rx="8"
                  fill="#C4C4C4"
                />
                <rect
                  className="blip3"
                  id="Rectangle 16"
                  opacity="0.6"
                  x="13"
                  y="428"
                  width="65"
                  height="15"
                  rx="7.5"
                  fill="#C4C4C4"
                />
                <rect
                  className="blip4"
                  id="Rectangle 17"
                  opacity="0.95"
                  x="262"
                  y="428"
                  width="65"
                  height="15"
                  rx="7.5"
                  fill="#C4C4C4"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </header>
    <section className="data">
      <div className="container">
        <div className="sets">
          <div className="set">
            <h2>$450B</h2>
            <p>Quaterly volume traded</p>
          </div>
          <div className="set">
            <h2>100+</h2>
            <p>Countries supported</p>
          </div>
          <div className="set">
            <h2>270+ M</h2>
            <p>Verified users</p>
          </div>
        </div>
      </div>
    </section>
    <section className="main">
      <div className="container">
        <div className="desc">
          <div className="heading">
            <h1>Get started in few minutes</h1>
            <p>
              Coinbase supports a variety of the most popular digital
              currencies.
            </p>
          </div>
          <div className="sets icons">
            <div className="set icon">
              <img src={account} alt="account" />
              <p>Create an account</p>
            </div>
            <div className="set icon">
              <img src={bank} alt="bank" />
              <p>Link your bank account</p>
            </div>
            <div className="set icon">
              <img src={trade} alt="trade" />
              <p>Start buying and selling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="ham">
      <div className="ham-line l1"></div>
      <div className="ham-line l2"></div>
      <div className="ham-line l3"></div>
    </div>
    <div className="buy">
      <div className="container">
        <div className="buy-section">
          <h1>Buy and Sell Crypto in minutes</h1>
          <h3>Join the world's largest crypto exchange</h3>
          <button className="btn pri reg">Register now</button>
          <div className="rate-car">
            <div className="rate-slide">
              <div className="rates rates3" id="lastClone">
                <div className="rate">
                  <h3>BNB/BUSD 333<span>-5.13%</span></h3>
                  <h4>44,758.21</h4>
                  <h5>$397.2</h5>
                </div>
                <div className="rate">
                  <h3>AXS/BUSD <span>+2.1%</span></h3>
                  <h4>13,254.5</h4>
                  <h5>$200.3</h5>
                </div>
                <div className="rate">
                  <h3>SOL/BUSD <span>-4%</span></h3>
                  <h4>1,058.21</h4>
                  <h5>$97.2</h5>
                </div>
                <div className="rate">
                  <h3>DOT/BUSD <span>+13%</span></h3>
                  <h4>445</h4>
                  <h5>$122</h5>
                </div>
                <div className="rate">
                  <h3>SHIB/BUSD <span>-5%</span></h3>
                  <h4>12.35</h4>
                  <h5>$540</h5>
                </div>
              </div>
              <div className="rates rates1">
                <div className="rate">
                  <h3>BNB/BUSD 111 <span>-5.13%</span></h3>
                  <h4>44,758.21</h4>
                  <h5>$397.2</h5>
                </div>
                <div className="rate">
                  <h3>AXS/BUSD <span>+2.1%</span></h3>
                  <h4>13,254.5</h4>
                  <h5>$200.3</h5>
                </div>
                <div className="rate">
                  <h3>SOL/BUSD <span>-4%</span></h3>
                  <h4>1,058.21</h4>
                  <h5>$97.2</h5>
                </div>
                <div className="rate">
                  <h3>DOT/BUSD <span>+13%</span></h3>
                  <h4>445</h4>
                  <h5>$122</h5>
                </div>
                <div className="rate">
                  <h3>SHIB/BUSD <span>-5%</span></h3>
                  <h4>12.35</h4>
                  <h5>$540</h5>
                </div>
              </div>
              <div className="rates rates2">
                <div className="rate">
                  <h3>BNB/BUSD 222<span>-5.13%</span></h3>
                  <h4>44,758.21</h4>
                  <h5>$397.2</h5>
                </div>
                <div className="rate">
                  <h3>AXS/BUSD <span>+2.1%</span></h3>
                  <h4>13,254.5</h4>
                  <h5>$200.3</h5>
                </div>
                <div className="rate">
                  <h3>SOL/BUSD <span>-4%</span></h3>
                  <h4>1,058.21</h4>
                  <h5>$97.2</h5>
                </div>
                <div className="rate">
                  <h3>DOT/BUSD <span>+13%</span></h3>
                  <h4>445</h4>
                  <h5>$122</h5>
                </div>
                <div className="rate">
                  <h3>SHIB/BUSD <span>-5%</span></h3>
                  <h4>12.35</h4>
                  <h5>$540</h5>
                </div>
              </div>
              <div className="rates rates3">
                <div className="rate">
                  <h3>BNB/BUSD 333<span>-5.13%</span></h3>
                  <h4>44,758.21</h4>
                  <h5>$397.2</h5>
                </div>
                <div className="rate">
                  <h3>AXS/BUSD <span>+2.1%</span></h3>
                  <h4>13,254.5</h4>
                  <h5>$200.3</h5>
                </div>
                <div className="rate">
                  <h3>SOL/BUSD <span>-4%</span></h3>
                  <h4>1,058.21</h4>
                  <h5>$97.2</h5>
                </div>
                <div className="rate">
                  <h3>DOT/BUSD <span>+13%</span></h3>
                  <h4>445</h4>
                  <h5>$122</h5>
                </div>
                <div className="rate">
                  <h3>SHIB/BUSD <span>-5%</span></h3>
                  <h4>12.35</h4>
                  <h5>$540</h5>
                </div>
              </div>
              <div className="rates rates1" id="firstClone">
                <div className="rate">
                  <h3>BNB/BUSD 111<span>-5.13%</span></h3>
                  <h4>44,758.21</h4>
                  <h5>$397.2</h5>
                </div>
                <div className="rate">
                  <h3>AXS/BUSD <span>+2.1%</span></h3>
                  <h4>13,254.5</h4>
                  <h5>$200.3</h5>
                </div>
                <div className="rate">
                  <h3>SOL/BUSD <span>-4%</span></h3>
                  <h4>1,058.21</h4>
                  <h5>$97.2</h5>
                </div>
                <div className="rate">
                  <h3>DOT/BUSD <span>+13%</span></h3>
                  <h4>445</h4>
                  <h5>$122</h5>
                </div>
                <div className="rate">
                  <h3>SHIB/BUSD <span>-5%</span></h3>
                  <h4>12.35</h4>
                  <h5>$540</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="media">
      <div className="container">
        <div className="media-section">
          <div className="image">
            <img src={tradeImg} alt="trade" />
          </div>
          <div className="media-details">
            <h1>Trade. Anywhere.</h1>
            <p>
              Compatible with multiple devices, start trading with safety and
              convenience.
            </p>
            <div className="platforms">
              <div className="platform">
                <img src={apple} alt="" />
                <h6>Apple</h6>
              </div>
              <div className="platform">
                <img src={android} alt="" />
                <h6>Android</h6>
              </div>
              <div className="platform">
                <img src={linux} alt="" />
                <h6>Linux</h6>
              </div>
              <div className="platform">
                <img src={api} alt="" />
                <h6>API</h6>
              </div>
              <div className="platform">
                <img src={play} alt="" />
                <h6>Playstore</h6>
              </div>
              <div className="platform">
                <img src={window} alt="" />
                <h6>Windows</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div className="container">
        <div className="footer-section">
          <div className="row">
            <div className="col">
              <h3>About us</h3>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
            </div>
            <div className="col">
              <h3>Company</h3>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
            </div>
            <div className="col">
              <h3>Policy</h3>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
            </div>
            <div className="col">
              <h3>Trade</h3>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>
    )
}

export default Main;