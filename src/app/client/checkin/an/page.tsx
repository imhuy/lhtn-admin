"use client";
import { NextPage } from "next";

const Huydev: NextPage = () => {
  return (
    <div className='overflow-hidden font-inter'>
      <div className='bg-blue100 py-3 relative s-top hidden md:block'>
        <a
          href='https://my.runware.ai/signup/'
          className='cursor-pointer absolute left-0 top-0 block w-full h-full z-10'
        />
        <div className='max-w-1240px px-5 mx-auto flex justify-center items-center relative'>
          <div className='font-semibold text-15px leading-6 text-white'>
            Sign up now! Get $15 free credit if you use your business email →
          </div>
          <div className='top-1/2 absolute right-0 2xl:-right-24 -translate-y-1/2 mr-3 cursor-pointer z-20 s-top-close'>
            <img src='https://runware.ai/img/icons/icon-close.svg' alt='img' />
          </div>
        </div>
      </div>
      <header className='py-9 s-header'>
        <div className='max-w-1240px px-5 mx-auto flex items-center justify-between gap-10'>
          <a href='/' className='s-header-logo'>
            <img src='https://runware.ai/img/logo.svg' alt='img' />
          </a>
          <ul className='s-header-menu font-semibold text-sm leading-6 tracking-0.4px  items-center gap-9 ml-6 hidden md:flex'>
            {/* <li><a href="#" class="text-blue200"><span>Products</span><img src="https://runware.ai/img/icons/arrow-down.svg" alt="img"></a></li>
            <li><a href="#" class="text-blue200"><span>Platform</span><img src="https://runware.ai/img/icons/arrow-down.svg" alt="img"></a></li> */}
            <li>
              <a href='/product/image-generation/' className='text-blue200'>
                Features
              </a>
            </li>
            <li>
              <a href='/sonic-inference-engine/' className='text-blue200'>
                Platform
              </a>
            </li>
            <li>
              <a href='https://docs.runware.ai/en/getting-started/introduction' className='text-blue200'>
                Docs
              </a>
            </li>
            <li>
              <a href='/pricing/' className='text-blue200'>
                Pricing
              </a>
            </li>
            {/* <li><a href="/about/" class="text-blue200">About</a></li> */}
            {/* <li><a href="#" class="text-blue200"><span>Resources</span><img src="https://runware.ai/img/icons/arrow-down.svg" alt="img"></a></li> */}
          </ul>
          <div className='hidden sm:flex items-center gap-5 sm:ml-auto md:ml-0'>
            <a
              href='https://my.runware.ai/login/'
              className='font-semibold text-sm leading-6 tracking-0.4px text-blue200'
            >
              Sign in
            </a>
            <a href='https://my.runware.ai/signup/' className='b-btn'>
              <span>Sign up</span>
              <img src='https://runware.ai/img/icons/arrow-right.svg' alt='img' />
            </a>
          </div>
          <div className='js-toggle block md:hidden s-header-toggle cursor-pointer relative w-8 h-8 rounded-full bg-dark200  transition-all z-100 duration-200 ease-out transition-all'>
            <span className='icon-menu-burger w-3 absolute m-auto left-0 bottom-0 right-0 top-0 transition-transform duration-200 h-px b-block'>
              <span className='icon-menu-burger-line' />
            </span>
          </div>
        </div>
      </header>
      <div className='s-menu js-menu flex flex-col md:hidden fixed left-0 -translate-x-full w-full h-full overflow-y-auto transition-transform duration-300 ease-in-expo  px-5 bg-white  pb-7 top-0 z-40'>
        <div className='py-9'>
          <div className='flex justify-start gap-10 items-center relative'>
            <a href='/'>
              <img src='https://runware.ai/img/logo.svg' alt='img' className='block' />
            </a>
          </div>
        </div>
        <div className='flex items-center gap-4 flex-wrap pt-3.5 sm:hidden'>
          <div className='w-full flex justify-center'>
            <a
              href='https://my.runware.ai/login/'
              className='h-10 rounded-21px px-5 shadow-sh1 flex items-center justify-center bg-white transition-all whitespace-nowrap font-semibold text-base leading-6 tracking-0.4px text-blue200 w-full'
            >
              Sign in
            </a>
          </div>
          <div className='w-full'>
            <a href='https://my.runware.ai/signup/' className='b-btn w-full'>
              <span>Sign up</span>
              <img src='https://runware.ai/img/icons/arrow-right.svg' alt='img' />
            </a>
          </div>
        </div>
        <ul className='s-header-menu font-semibold text-base leading-6 tracking-0.4px divide-y divide-y-gray800 pt-6'>
          {/* <li><a href="#" class="text-blue200"><span>Products</span><img src="https://runware.ai/img/icons/arrow-down.svg" alt="img"></a></li>
            <li><a href="#" class="text-blue200"><span>Platform</span><img src="https://runware.ai/img/icons/arrow-down.svg" alt="img"></a></li> */}
          <li className='py-3'>
            <a href='/product/image-generation/' className='text-blue200'>
              Features
            </a>
          </li>
          <li className='py-3'>
            <a href='/sonic-inference-engine/' className='text-blue200'>
              Platform
            </a>
          </li>
          <li className='py-3'>
            <a href='https://docs.runware.ai/en/getting-started/introduction' className='text-blue200'>
              Docs
            </a>
          </li>
          <li className='py-3'>
            <a href='/pricing/' className='text-blue200'>
              Pricing
            </a>
          </li>
          {/* <li><a href="/about/" class="text-blue200">About</a></li> */}
          {/* <li><a href="#" class="text-blue200"><span>Resources</span><img src="https://runware.ai/img/icons/arrow-down.svg" alt="img"></a></li> */}
        </ul>
      </div>
      <div className='s-platformhero pt-11 md:pt-20 pb-16 bg-white'>
        <div className='max-w-1240px px-5 mx-auto md:pt-1'>
          <div className='flex flex-wrap items-start -mx-3.5 -mb-12'>
            <div className='px-3.5 w-full md:w-1/2 pb-12'>
              <div className='s-hero-info md:-mt-4 max-w-564px'>
                <h1 className='text-5xl lg:text-64px tracking-n1.2px leading-115 md:leading-115 lg:leading-125 font-extrabold text-blue200 s-hero-title'>
                  Introducing: <br />
                  Sonic Inference Engine™
                </h1>
                <p className='font-normal text-lg lg:text-22px tracking-0.2px leading-8 text-gray400 pt-7 pr-6'>
                  Built from scratch, our custom hardware and unique orchestration layer is the world's fastest AI
                  compute engine, powered by renewable energy.
                </p>
              </div>
            </div>
            <div className='px-3.5 w-full md:w-1/2 pb-12'>
              <div className=''>
                <div className='s-platformhero-video rounded-3xl relative '>
                  <div className='s-platformhero-video-poster absolute left-0 top-0 block w-full h-full cursor-pointer'>
                    <picture className='block w-full h-full'>
                      <source
                        type='image/webp'
                        srcSet='https://runware.ai/img/platform/platform-img1.webp 1x, https://runware.ai/img/platform/platform-img1@2x.webp 2x'
                      />
                      <img
                        src='https://runware.ai/img/platform/platform-img1.jpg'
                        srcSet='https://runware.ai/img/platform/platform-img1@2x.jpg 2x'
                        alt='img'
                        className='rounded-3xl w-full shadow-sh6 js-hero-video-play object-center object-cover h-full'
                      />
                    </picture>
                    <button
                      onclick='myFunction();return false;'
                      className='absolute left-0 top-0 block w-full h-full bg-transparent border-none rounded-3xl z-10'
                    />
                  </div>
                  <div id='video' style={{ height: 315 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gradient1 h-px w-full max-w-1440px mx-auto' />
      <div className='s-platformstart pt-10 pb-12'>
        <div className='max-w-1240px px-5 mx-auto'>
          <h3 className='font-bold text-3xl md:text-40px leading-120 text-blue200 text-center tracking-n1px'>
            Generate 10,000+ images on us!
          </h3>
          <div className='flex items-center gap-5 justify-center pt-8 flex-wrap'>
            <a href='https://my.runware.ai/signup/' className='b-btn'>
              <span>Get Started With $15 Free Credits</span>
              <img src='https://runware.ai/img/icons/arrow-right.svg' alt='img' />
            </a>
            <a
              href='https://docs.runware.ai/en/getting-started/introduction'
              className='font-medium text-sm leading-6 tracking-0.4px text-purple100 flex items-center gap-2'
            >
              <span>API Docs</span>
              <img src='https://runware.ai/img/icons/arrow-rightlink.svg' alt='img' />
            </a>
          </div>
        </div>
      </div>
      <div className='bg-blue300 pt-16 md:pt-20 s-platforminfo pb-16 md:pb-20'>
        <div className='max-w-1240px px-5 mx-auto pb-3'>
          <h2 className='font-extrabold text-4xl md:text-5xl leading-115 md:leading-115 text-white text-center'>
            Built purely for AI
          </h2>
          <div className='font-normal text-lg lg:text-xl leading-7 tracking-0.2px text-white max-w-814px mx-auto text-center pt-7'>
            Welcome a new breed of AI inference technology that gives you unparalleled flexibility at the lowest cost.
            If you need the world’s quickest and most cost-effective media generation, you’re at the right place.{" "}
            <a href='/pricing/' className='text-blue400'>
              Compare pricing.
            </a>
          </div>
          <div className='flex items-start -mx-3.5 pt-16 md:pt-24 flex-wrap -mb-12 md:mt-2.5 pb-16'>
            <div className='px-3.5 w-full md:w-1/3 pb-12'>
              <div className=''>
                <h3 className='flex font-bold items-center text-2xl leading-8 text-white gap-4'>
                  <span className='bg-gradient2 p-px h-12 w-12 rounded-lg block min-w-48px'>
                    <span className='flex bg-blue300 items-center justify-center h-full rounded-lg'>
                      <img src='https://runware.ai/img/icons/platform-icon1.svg' alt='img' />
                    </span>
                  </span>
                  <span className=''>
                    Custom-built <br />
                    hardware
                  </span>
                </h3>
                <div className='font-medium text-base lg:text-lg text-light100 leading-140 pt-3.5'>
                  Bespoke servers, motherboards, GPUs and cooling systems designed and built specifically for AI
                  workloads.
                </div>
              </div>
            </div>
            <div className='px-3.5 w-full md:w-1/3 pb-12'>
              <div className=''>
                <h3 className='flex font-bold items-center text-2xl leading-8 text-white gap-4'>
                  <span className='bg-gradient2 p-px h-12 w-12 rounded-lg block min-w-48px'>
                    <span className='flex bg-blue300 items-center justify-center h-full rounded-lg'>
                      <img src='https://runware.ai/img/icons/platform-icon2.svg' alt='img' />
                    </span>
                  </span>
                  <span className=''>Deep software optimization</span>
                </h3>
                <div className='font-medium text-base lg:text-lg text-light100 leading-140 pt-3.5'>
                  System performance optimized from the BIOS up, ensuring multi-layer efficiency gains and blazing-fast
                  speeds.
                </div>
              </div>
            </div>
            <div className='px-3.5 w-full md:w-1/3 pb-12'>
              <div className=''>
                <h3 className='flex font-bold items-center text-2xl leading-8 text-white gap-4'>
                  <span className='bg-gradient2 p-px h-12 w-12 rounded-lg block min-w-48px'>
                    <span className='flex bg-blue300 items-center justify-center h-full rounded-lg'>
                      <img src='https://runware.ai/img/icons/platform-icon3.svg' alt='img' />
                    </span>
                  </span>
                  <span className=''>
                    Extreme power <br />
                    efficiency
                  </span>
                </h3>
                <div className='font-medium text-base lg:text-lg text-light100 leading-140 pt-3.5'>
                  Custom cooled and solar-powered, making AI workloads with Runware cheaper than others’ energy costs
                  alone.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gradient3 h-2px w-full block max-w-1440px mx-auto' />
        <div className='max-w-1240px px-5 mx-auto pt-16 md:pt-20 md:mt-1'>
          <div className='flex items-center -mx-3.5 flex-wrap'>
            <div className='px-3.5 w-full md:w-2/3'>
              <div className='mb-5 pb-1'>
                <h2 className='font-extrabold text-3xl md:text-5xl bg-gradient5 text-gradient leading-120 md:leading-120'>
                  People who are really serious about software should make their own hardware.
                </h2>
                <div className='font-bold text-xl leading-8 tracking-0.15px text-white pt-5'>Alan Kay</div>
                <div className='font-normal text-base leading-7 text-light100'>Computer science pioneer</div>
              </div>
            </div>
            <div className='px-3.5 w-full md:w-1/3'>
              <div className='relative py-16 md:py-20'>
                <div className='absolute left-5 -top-14 md:-left-32 md:-top-14 z-0 md:-mr-20'>
                  <picture>
                    <source
                      type='image/webp'
                      srcSet='https://runware.ai/img/next-bg.webp 1x, https://runware.ai/img/next-bg@2x.webp 2x'
                    />
                    <img
                      src='https://runware.ai/img/next-bg.png'
                      srcSet='https://runware.ai/img/next-bg@2x.png 2x'
                      alt='img'
                      loading='lazy'
                    />
                  </picture>
                </div>
                <div className='flex justify-center md:justify-end xl:pr-7 relative z-10'>
                  <img src='https://runware.ai/img/logo1.svg' alt='img' className='w-28 lg:w-auto' loading='lazy' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-1440px mx-auto relative'>
          <img src='https://runware.ai/img/icons/icon-devide1.svg' alt='img' className='mx-auto relative z-10' />
          <div className='absolute bg-gradient3 h-2px w-full top-1/2 left-0 block -translate-y-1/2' />
          <div className='absolute left-0 top-10 right-0 mx-auto w-2px h-100px bg-gradient4' />
        </div>
        <div className='max-w-1240px px-5 mx-auto pb-12 pt-28 md:pt-32 md:mt-2.5'>
          <h2 className='font-extrabold text-4xl md:text-5xl leading-115 md:leading-115 text-white text-center'>
            World’s fastest inference
          </h2>
          <div className='flex items-start -mx-3.5 pt-16 md:pt-24 flex-wrap -mb-16 md:mt-3'>
            <div className='px-3.5 w-full md:w-1/3 pb-16'>
              <div className=''>
                <h3 className='flex font-bold items-center text-2xl leading-8 text-white gap-4'>
                  <span className='bg-gradient2 p-px h-12 w-12 rounded-lg block min-w-48px'>
                    <span className='flex bg-blue300 items-center justify-center h-full rounded-lg'>
                      <img src='https://runware.ai/img/icons/platform-icon4.svg' alt='img' />
                    </span>
                  </span>
                  <span className=''>
                    Sub-second <br />
                    generation
                  </span>
                </h3>
                <div className='font-medium text-base lg:text-lg text-light100 leading-140 pt-3.5'>
                  Say hello to the industry's fastest inference, all without any compromises that lead to quality loss.
                </div>
              </div>
            </div>
            <div className='px-3.5 w-full md:w-1/3 pb-16'>
              <div className=''>
                <h3 className='flex font-bold items-center text-2xl leading-8 text-white gap-4'>
                  <span className='bg-gradient2 p-px h-12 w-12 rounded-lg block min-w-48px'>
                    <span className='flex bg-blue300 items-center justify-center h-full rounded-lg'>
                      <img src='https://runware.ai/img/icons/platform-icon5.svg' alt='img' />
                    </span>
                  </span>
                  <span className=''>
                    Instant checkpoint <br />
                    loading
                  </span>
                </h3>
                <div className='font-medium text-base lg:text-lg text-light100 leading-140 pt-3.5'>
                  Outperform typical cold start times by more than 20x with checkpoints that activate in just half a
                  second.
                </div>
              </div>
            </div>
            <div className='px-3.5 w-full md:w-1/3 pb-16'>
              <div className=''>
                <h3 className='flex font-bold items-center text-2xl leading-8 text-white gap-4'>
                  <span className='bg-gradient2 p-px h-12 w-12 rounded-lg block min-w-48px'>
                    <span className='flex bg-blue300 items-center justify-center h-full rounded-lg'>
                      <img src='https://runware.ai/img/icons/platform-icon6.svg' alt='img' />
                    </span>
                  </span>
                  <span className=''>
                    Realtime LoRA <br />
                    starts
                  </span>
                </h3>
                <div className='font-medium text-base lg:text-lg text-light100 leading-140 pt-3.5'>
                  Cold start any LoRA in 0.1s, making your fine-tunes available for on-demand use.
                </div>
              </div>
            </div>
            <div className='px-3.5 w-full md:w-1/3 pb-16'>
              <div className=''>
                <h3 className='flex font-bold items-center text-2xl leading-8 text-white gap-4'>
                  <span className='bg-gradient2 p-px h-12 w-12 rounded-lg block min-w-48px'>
                    <span className='flex bg-blue300 items-center justify-center h-full rounded-lg'>
                      <img src='https://runware.ai/img/icons/platform-icon7.svg' alt='img' />
                    </span>
                  </span>
                  <span className=''>Parallel pipeline processing</span>
                </h3>
                <div className='font-medium text-base lg:text-lg text-light100 leading-140 pt-3.5'>
                  Better performance with algorithms that allocate inference workloads smartly.
                </div>
              </div>
            </div>
            <div className='px-3.5 w-full md:w-1/3 pb-16'>
              <div className=''>
                <h3 className='flex font-bold items-center text-2xl leading-8 text-white gap-4'>
                  <span className='bg-gradient2 p-px h-12 w-12 rounded-lg block min-w-48px'>
                    <span className='flex bg-blue300 items-center justify-center h-full rounded-lg'>
                      <img src='https://runware.ai/img/icons/platform-icon8.svg' alt='img' />
                    </span>
                  </span>
                  <span className=''>
                    Advanced auto- <br />
                    scaling
                  </span>
                </h3>
                <div className='font-medium text-base lg:text-lg text-light100 leading-140 pt-3.5'>
                  Even if you have a huge influx of users sub-second generation times are guaranteed, at no additional
                  cost.
                </div>
              </div>
            </div>
            <div className='px-3.5 w-full md:w-1/3 pb-16'>
              <div className=''>
                <h3 className='flex font-bold items-center text-2xl leading-8 text-white gap-4'>
                  <span className='bg-gradient2 p-px h-12 w-12 rounded-lg block min-w-48px'>
                    <span className='flex bg-blue300 items-center justify-center h-full rounded-lg'>
                      <img src='https://runware.ai/img/icons/platform-icon9.svg' alt='img' />
                    </span>
                  </span>
                  <span className=''>
                    Proven <br />
                    reliability
                  </span>
                </h3>
                <div className='font-medium text-base lg:text-lg text-light100 leading-140 pt-3.5'>
                  Runware already processes enormous traffic with ease, with over 2.5B images generated.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='s-platformnums pt-8 md:pt-12 pb-16'>
          <div className='max-w-1240px px-5 mx-auto pt-1'>
            <div className='flex items-stretch -mx-3.5 flex-wrap -mb-12'>
              <div className='px-3.5 w-1/2 md:w-1/4 pb-12'>
                <div className='h-full flex flex-col'>
                  <div className='h-px bg-dark200 m-0 hidden md:block' />
                  <div className='font-bold text-3xl lg:text-7xl text-white leading-140 lg:leading-110 md:pt-11  mt-0 -mb-2.5 '>
                    <span className='text-5xl md:text-6xl lg:text-7xl'>0.5</span>s
                  </div>
                  <div className='font-medium text-lg md:text-xl leading-6 text-light100 pt-2 pb-1 grow'>
                    Checkpoint Cold Start
                  </div>
                  <div className='h-px bg-dark200 md:mt-11 hidden md:block' />
                </div>
              </div>
              <div className='px-3.5 w-1/2 md:w-1/4 pb-12'>
                <div className='h-full flex flex-col'>
                  <div className='h-px bg-dark200 m-0 hidden md:block' />
                  <div className='font-bold text-3xl lg:text-7xl text-white leading-140 lg:leading-110 md:pt-11 mt-0 -mb-2.5'>
                    <span className='text-5xl md:text-6xl lg:text-7xl'>0.1</span>s
                  </div>
                  <div className='font-medium text-lg md:text-xl leading-6 text-light100 pt-2 pb-1 grow '>
                    LORA loads
                  </div>
                  <div className='h-px bg-dark200 md:mt-11 hidden md:block' />
                </div>
              </div>
              <div className='px-3.5 w-1/2 md:w-1/4 pb-12'>
                <div className='h-full flex flex-col'>
                  <div className='h-px bg-dark200 m-0 hidden md:block' />
                  <div className='font-bold text-3xl lg:text-40px text-white leading-140 lg:leading-120 md:pt-11 m-0'>
                    <span className='text-5xl md:text-6xl lg:text-7xl'>500M</span>
                  </div>
                  <div className='font-medium text-lg md:text-xl leading-6 text-light100 pt-2 pb-1 grow'>
                    API Requests
                  </div>
                  <div className='h-px bg-dark200 md:mt-11 hidden md:block' />
                </div>
              </div>
              <div className='px-3.5 w-1/2 md:w-1/4 pb-12'>
                <div className='h-full flex flex-col'>
                  <div className='h-px bg-dark200 m-0 hidden md:block' />
                  <div className='font-bold text-3xl lg:text-40px text-white leading-140 lg:leading-120 md:pt-11 m-0'>
                    <span className='text-5xl md:text-6xl lg:text-7xl'>2.5</span>B
                  </div>
                  <div className='font-medium text-lg md:text-xl leading-6 text-light100 pt-2 pb-1 grow'>
                    Images Generated
                  </div>
                  <div className='h-px bg-dark200 md:mt-11 hidden md:block' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-1240px px-5 mx-auto pt-12 relative z-10'>
          <h2 className='font-extrabold text-4xl md:text-5xl leading-115 md:leading-115 text-white text-center'>
            Solar-driven, hydro backup
          </h2>
          <div className='font-normal text-lg lg:text-xl leading-7 tracking-0.2px text-white max-w-794px mx-auto text-center pt-7'>
            Data centers powered by self-generated, off-grid solar energy. Supported by zero-emmission hydro power.
          </div>
        </div>
        <div className='-mt-200px -mb-40'>
          <div className='h-64'>
            <img
              src='https://runware.ai/img/platform/platform-bg1.svg'
              alt='img'
              className='mx-auto w-full h-full object-cover object-center'
              loading='lazy'
            />
          </div>
          <div className='h-56'>
            <picture className='w-full w-full h-full object-cover object-center'>
              <source
                type='image/webp'
                srcSet='https://runware.ai/img/platform/platform-bg2.webp 1x, https://runware.ai/img/platform/platform-bg2@2x.webp 2x'
              />
              <img
                src='https://runware.ai/img/platform/platform-bg2.jpg'
                srcSet='https://runware.ai/img/platform/platform-bg2@2x.jpg 2x'
                alt='img'
                loading='lazy'
                className='w-full w-full h-full object-cover object-center'
              />
            </picture>
          </div>
          <div className='h-44'>
            <img
              src='https://runware.ai/img/platform/platform-bg3.svg'
              alt='img'
              className='mx-auto w-full h-full object-cover object-center'
              loading='lazy'
            />
          </div>
        </div>
        <div className='max-w-1240px px-5 mx-auto relative z-10 pt-3 pb-14'>
          <h3 className='font-bold text-2xl leading-7 bg-gradient5 text-gradient text-center'>
            Saving 60 metric tonnes of CO₂ per month
          </h3>
          <div className='font-medium text-lg leading-7  text-light100 max-w-794px mx-auto text-center pt-4 pb-2 js-textanim relative'>
            <div className='relative'>
              <div className='textanim text1' style={{ opacity: 1, visibility: "inherit" }}>
                Equivalent to the energy used to fully charge over 7.5 million smartphones
              </div>
              <div className='textanim text2' style={{ opacity: 0, visibility: "hidden" }}>
                Equivalent to avoiding 150 round-trip flights between New York and London
              </div>
              <div className='textanim text3' style={{ opacity: 0, visibility: "hidden" }}>
                Equivalent of 1000 trees growing for 10 years to absorb this amount of CO₂
              </div>
              <div className='textanim text4' style={{ opacity: 1, visibility: "inherit" }}>
                Equivalent to the monthly electricity use of almost 100 households
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-1440px mx-auto relative'>
          <img src='https://runware.ai/img/icons/icon-devide2.svg' alt='img' className='mx-auto relative z-10' />
          <div className='absolute bg-gradient3 h-2px w-full top-1/2 left-0 block -translate-y-1/2' />
          <div className='absolute left-0 top-10 right-0 mx-auto w-2px h-100px bg-gradient4' />
        </div>
        <div className='max-w-1240px px-5 mx-auto pt-28 md:pt-24 md:mt-1 md:pb-6'>
          <h2 className='font-extrabold text-4xl md:text-5xl leading-115 md:leading-115 text-white text-center'>
            A flexible, well-designed API
          </h2>
          <div className='font-normal text-lg lg:text-xl leading-7 tracking-0.2px text-white max-w-794px mx-auto text-center pt-7 space-y-9 pb-1'>
            <p>
              Run any type of AI workload with our fast and flexible API. We’ve fully abstracted all the complexity so
              you never have to worry about code or infrastructure.
            </p>
            <p>
              But this doesn’t mean limitations. Expect extreme versatility to configure anything and everything you
              want.{" "}
              <a href='https://docs.runware.ai/en/getting-started/introduction' className='text-blue400'>
                View documentation.
              </a>
            </p>
          </div>
          <div className='border border-dark200 rounded-2xl h-auto bg-blue300 pb-5 max-w-692px mx-auto mt-12'>
            <div className='px-8 py-3 bg-blue800 rounded-t-2xl'>
              <ul className='s-code-tabs js-tabs flex items-center gap-6 relative flex-wrap pr-6'>
                <li className='active'>
                  <a
                    href='#tab0'
                    className='flex items-center gap-2 transition-all duration-200 text-light100'
                    data-class='s-code-contant'
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} fill='none'>
                      <g clipPath='url(#a2)'>
                        <path
                          fill='url(#b)'
                          d='M3.125 10.259c0-4.347 3.223-6.517 5.855-5.61l-.008.004h.002c.054.02 2.645 1.043 2.645 4.385 0 3.343-2.636 4.358-2.636 4.358l.003.005.008.003c2.338 1 5.934-1.338 5.934-5.631C14.93 1.316 10.298.048 9.088 0L8.982 0C4.381 0 0 3.805 0 9.01 0 14.796 5.022 18 8.982 18h-.006c-.796-.027-5.85-.78-5.85-7.74v-.001Z'
                        />
                        <path
                          fill='url(#c)'
                          d='m9.018 0 .068.001c1.21.047 5.842 1.315 5.842 7.77 0 4.294-3.594 6.631-5.933 5.632l-.008-.003c-.156-.062-2.637-1.112-2.637-4.382 0-3.27 2.474-4.305 2.622-4.366a.03.03 0 0 1 .008-.003C6.348 3.74 3.124 5.91 3.124 10.258c0 6.959 5.053 7.714 5.85 7.74h.043c4.6 0 8.982-3.805 8.982-9.01C18 3.205 12.978 0 9.018 0Z'
                        />
                      </g>
                      <defs>
                        <radialGradient
                          id='b'
                          cx={0}
                          cy={0}
                          r={1}
                          gradientTransform='translate(3.233 4.825) scale(14.2661)'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#fff' />
                          <stop offset={1} stopColor='#fff' stopOpacity='.1' />
                        </radialGradient>
                        <radialGradient
                          id='c'
                          cx={0}
                          cy={0}
                          r={1}
                          gradientTransform='translate(13.752 14.6) scale(15.3776)'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#fff' />
                          <stop offset={1} stopColor='#fff' stopOpacity='.1' />
                        </radialGradient>
                        <clipPath id='a2'>
                          <path fill='#fff' d='M0 0h18v18H0z' />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>JSON</span>
                  </a>
                </li>
                <li>
                  <a
                    href='#tab2'
                    className='flex items-center gap-2 transition-all duration-200 text-light100'
                    data-class='s-code-contant'
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} fill='none'>
                      <g clipPath='url(#a1)' opacity='.7'>
                        <path
                          fill='currentColor'
                          d='M0 0v18h18V0H0Zm9.52 11.23c0 1.96 0 3-.02 3.09-.11.92-.55 1.54-1.29 1.84-.62.25-1.46.27-2.12.05-.62-.21-1.14-.66-1.44-1.25l-.05-.1.66-.4c.36-.22.66-.4.67-.4 0 0 .05.06.1.14.3.51.55.69.98.69.3 0 .48-.06.62-.2.1-.1.16-.21.2-.39l.04-.14v-2.95l.01-2.94h1.63v2.95l.01.01Zm5.99 4.41c-.39.38-.9.6-1.57.7-.27.04-.79.04-1.07 0-1.07-.14-1.86-.64-2.37-1.5-.06-.11-.08-.14-.06-.16.03-.02 1.29-.76 1.31-.76 0 0 .05.06.11.14.39.58.87.84 1.52.84.38 0 .69-.1.89-.3a.87.87 0 0 0 .15-.2c.13-.27.07-.61-.13-.83-.16-.18-.42-.32-1.12-.62-.51-.22-.8-.36-1.02-.49-.85-.51-1.23-1.16-1.23-2.09 0-.62.19-1.11.6-1.51.39-.39.92-.62 1.55-.67.24-.02.27-.02.52 0 .52.04.91.16 1.27.41.2.13.49.43.65.67.07.11.14.21.14.22 0 .01-1.21.79-1.25.81-.01 0-.05-.04-.1-.12-.04-.07-.14-.19-.22-.26-.21-.21-.42-.3-.74-.3-.28 0-.47.07-.62.24-.11.12-.16.24-.17.42-.01.23.05.41.19.56.15.16.38.29 1.07.58.91.39 1.36.66 1.71 1.02.18.19.29.33.4.55.15.32.22.65.22 1.06 0 .65-.2 1.17-.62 1.57l-.01.02Z'
                        />
                      </g>
                      <defs>
                        <clipPath id='a1'>
                          <path fill='currentColor' d='M0 0h18v18H0z' />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>JavaScript</span>
                  </a>
                </li>
                <li>
                  <a
                    href='#tab1'
                    className='flex items-center gap-2 transition-all duration-200 text-light100'
                    data-class='s-code-contant'
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} fill='none' opacity='.7'>
                      <path
                        fill='currentColor'
                        fillRule='evenodd'
                        d='M7.348 2.14a.809.809 0 1 0-1.62 0c0 .46.37.82.81.82.44 0 .81-.37.81-.82ZM6.818.18C7.438.07 8.148 0 8.888 0c.75 0 1.52.05 2.27.18 1.18.19 2.17 1.07 2.17 2.23v4.1c0 1.2-.96 2.18-2.17 2.18h-4.34c-1.47 0-2.71 1.25-2.71 2.67v1.96h-1.49c-1.26 0-2-.91-2.31-2.18-.42-1.7-.4-2.72 0-4.36.34-1.43 1.45-2.18 2.71-2.18h5.97v-.55h-4.34V2.41c0-1.24.33-1.91 2.17-2.23Zm5.42 15.58c0-.46-.36-.82-.81-.82-.44 0-.81.37-.81.82a.809.809 0 1 0 1.62 0Zm1.63-9.27V4.57h1.63c1.26 0 1.86.94 2.17 2.18.43 1.72.45 3.01 0 4.36-.44 1.31-.91 2.18-2.17 2.18h-6.51v.55h4.34v1.64c0 1.24-1.08 1.87-2.17 2.18-1.65.47-2.97.4-4.34 0-1.15-.33-2.17-1.02-2.17-2.18v-4.09c0-1.17.98-2.18 2.17-2.18h4.34c1.44 0 2.71-1.24 2.71-2.72Z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span>Python</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='s-code-contant active relative' id='tab0'>
              <button
                className='copy absolute -top-9 right-6 inline-flex text-white cursor-pointer tooltip'
                hover-tooltip='Copy'
                aria-label='Copy'
                onclick="
                      const snippet = this.parentElement?.querySelector('code')?.textContent
  
                      if (snippet) {
                        navigator.clipboard.writeText(snippet)
                        this.classList.add('copied')
                        setTimeout(() => { this.classList.remove('copied') }, 2000)
                      }
                      "
              >
                <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none'>
                  <path
                    fill='currentColor'
                    d='M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H9V4h9v12ZM3 15v-2h2v2H3Zm0-5.5h2v2H3v-2ZM10 20h2v2h-2v-2Zm-7-1.5v-2h2v2H3ZM5 22c-1.1 0-2-.9-2-2h2v2Zm3.5 0h-2v-2h2v2Zm5 0v-2h2c0 1.1-.9 2-2 2ZM5 6v2H3c0-1.1.9-2 2-2Z'
                  />
                </svg>
              </button>
              <div className='generic-code text-purple200 pl-14 pt-3.5 font-roboto-mono relative overflow-y-auto h-auto'>
                <div className='generic-code-lines font-roboto-mono text-sm leading-5 font-normal text-gray300 absolute left-0 top-0 h-full block pt-3.5 pl-6'>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <figure className='h-full'>
                  <pre className='h-full'>
                    <code className='font-roboto-mono text-sm leading-5 font-normal block'>
                      <span className='text-gray200'>[</span>
                      {"\n"}
                      {"  "}
                      {"{"}
                      {"\n"}
                      {"    "}
                      <span className='text-gray200'>"taskType"</span>
                      <span className='text-red100'>:</span> <span className='text-orange100'>"imageInference"</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}
                      {"    "}
                      <span className='text-gray200'>"taskUUID"</span>
                      <span className='text-red100'>:</span>{" "}
                      <span className='text-orange100'>"67aa2c57-3301-43ae-aa3b-dd40bbce2d33"</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}
                      {"    "}
                      <span className='text-gray200'>"positivePrompt"</span>
                      <span className='text-red100'>:</span>{" "}
                      <span className='text-orange100'>"Concept design for a futuristic motorbike"</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}
                      {"    "}
                      <span className='text-gray200'>"height"</span>
                      <span className='text-red100'>:</span> <span className='text-blue500'>1024</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}
                      {"    "}
                      <span className='text-gray200'>"width"</span>
                      <span className='text-red100'>:</span> <span className='text-blue500'>1024</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}
                      {"    "}
                      <span className='text-gray200'>"model"</span>
                      <span className='text-red100'>:</span> <span className='text-orange100'>"runware:100@1"</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}
                      {"    "}
                      <span className='text-gray200'>"steps"</span>
                      <span className='text-red100'>:</span> <span className='text-blue500'>25</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}
                      {"    "}
                      <span className='text-gray200'>"CFGScale"</span>
                      <span className='text-red100'>:</span> <span className='text-blue500'>4.0</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}
                      {"    "}
                      <span className='text-gray200'>"numberResults"</span>
                      <span className='text-red100'>:</span> <span className='text-blue500'>4</span>
                      {"\n"}
                      {"  "}
                      {"}"}
                      {"\n"}
                      <span className='text-gray200'>]</span>
                      {"\n"}
                    </code>
                  </pre>
                </figure>
              </div>
            </div>
            <div className='s-code-contant relative' id='tab1'>
              <button
                className='copy absolute -top-9 right-6 inline-flex text-white cursor-pointer tooltip'
                hover-tooltip='Copy'
                aria-label='Copy'
                onclick="
                      const snippet = this.parentElement?.querySelector('code')?.textContent
  
                      if (snippet) {
                        navigator.clipboard.writeText(snippet)
                        this.classList.add('copied')
                        setTimeout(() => { this.classList.remove('copied') }, 2000)
                      }
                      "
              >
                <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none'>
                  <path
                    fill='currentColor'
                    d='M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H9V4h9v12ZM3 15v-2h2v2H3Zm0-5.5h2v2H3v-2ZM10 20h2v2h-2v-2Zm-7-1.5v-2h2v2H3ZM5 22c-1.1 0-2-.9-2-2h2v2Zm3.5 0h-2v-2h2v2Zm5 0v-2h2c0 1.1-.9 2-2 2ZM5 6v2H3c0-1.1.9-2 2-2Z'
                  />
                </svg>
              </button>
              <div className='generic-code text-purple200 pl-14 pt-3.5 font-roboto-mono relative overflow-y-auto h-auto'>
                <div className='generic-code-lines font-roboto-mono text-sm leading-5 font-normal text-gray300 absolute left-0 top-0 h-full block pt-3.5 pl-6'>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <figure className='h-full'>
                  <pre className='h-full'>
                    <code className='font-roboto-mono text-sm leading-5 font-normal block'>
                      runware <span className='text-red100'>=</span> Runware
                      <span className='text-gray200'>(api_key</span>
                      <span className='text-red100'>=</span>
                      <span className='text-gray200'>RUNWARE_API_KEY)</span>
                      {"\n"}
                      {"\n"}
                      <span className='text-red100'>await</span> runware.connect()
                      {"\n"}
                      {"\n"}request_image <span className='text-red100'>=</span> IImageInference({"\n"}
                      {"  "}
                      <span className='text-gray200'>positivePrompt</span>
                      <span className='text-red100'>=</span>
                      <span className='text-orange100'>'Concept design for a futuristic motorbike'</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}
                      {"  "}
                      <span className='text-gray200'>height</span>
                      <span className='text-red100'>=</span>
                      <span className='text-blue500'>1024</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}
                      {"  "}
                      <span className='text-gray200'>width</span>
                      <span className='text-red100'>=</span>
                      <span className='text-blue500'>1024</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}
                      {"  "}
                      <span className='text-gray200'>model</span>
                      <span className='text-red100'>=</span>
                      <span className='text-orange100'>'runware:100@1'</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}
                      {"  "}
                      <span className='text-gray200'>steps</span>
                      <span className='text-red100'>=</span>
                      <span className='text-blue500'>25</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}
                      {"  "}
                      <span className='text-gray200'>CFGScale</span>
                      <span className='text-red100'>=</span>
                      <span className='text-blue500'>4.0</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}
                      {"  "}
                      <span className='text-gray200'>numberResults</span>
                      <span className='text-red100'>=</span>
                      <span className='text-blue500'>4</span>
                      <span className='text-gray200'>,</span>
                      {"\n"}){"\n"}
                      {"\n"}images <span className='text-red100'>=</span> <span className='text-red100'>await</span>{" "}
                      runware.imageInference
                      <span className='text-gray200'>(requestImage</span>
                      <span className='text-red100'>=</span>
                      <span className='text-gray200'>request_image)</span>
                      {"\n"}
                    </code>
                  </pre>
                </figure>
              </div>
            </div>
            <div className='s-code-contant relative' id='tab2'>
              <button
                className='copy absolute -top-9 right-6 inline-flex text-white cursor-pointer tooltip'
                hover-tooltip='Copy'
                aria-label='Copy'
                onclick="
                      const snippet = this.parentElement?.querySelector('code')?.textContent
  
                      if (snippet) {
                        navigator.clipboard.writeText(snippet)
                        this.classList.add('copied')
                        setTimeout(() => { this.classList.remove('copied') }, 2000)
                      }
                      "
              >
                <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none'>
                  <path
                    fill='currentColor'
                    d='M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H9V4h9v12ZM3 15v-2h2v2H3Zm0-5.5h2v2H3v-2ZM10 20h2v2h-2v-2Zm-7-1.5v-2h2v2H3ZM5 22c-1.1 0-2-.9-2-2h2v2Zm3.5 0h-2v-2h2v2Zm5 0v-2h2c0 1.1-.9 2-2 2ZM5 6v2H3c0-1.1.9-2 2-2Z'
                  />
                </svg>
              </button>
              <div className='generic-code text-purple200 pl-14 pt-3.5 font-roboto-mono relative overflow-y-auto h-auto'>
                <div className='generic-code-lines font-roboto-mono text-sm leading-5 font-normal text-gray300 absolute left-0 top-0 h-full block pt-3.5 pl-6'>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <figure className='h-full'>
                  <pre className='h-full'>
                    <code className='font-roboto-mono text-sm leading-5 font-normal block'>
                      <span className='text-red100'>from</span> runware <span className='text-red100'>import</span>{" "}
                      Runware, IRequestImage{"\n"}
                      <span className='text-red100'>async def</span> main() -&gt;{" "}
                      <span className='text-blue600'>None:</span>
                      {"\n"}runware <span className='text-red100'>=</span> Runware
                      <span className='text-gray200'>(api_key</span>
                      <span className='text-red100'>=</span>
                      <span className='text-gray200'>RUNWARE_API_KEY)</span>
                      {"\n"}
                      <span className='text-red100'>await</span> runware.connect
                      <span className='text-gray200'>()</span>
                      {"\n"}request_image <span className='text-red100'>=</span> IRequestImage({"\n"}
                      {"\t"}
                      <span className='text-gray200'>
                        positive_prompt<span className='text-red100'>=</span>
                        <span className='text-orange100'>"A beautiful sunset over the mountains"</span>,
                      </span>
                      {"\n"}
                      {"\t"}
                      <span className='text-gray200'>
                        width<span className='text-red100'>=</span>
                        <span className='text-blue500'>512</span>,
                      </span>
                      {"\n"}
                      {"\t"}
                      <span className='text-gray200'>
                        height<span className='text-red100'>=</span>
                        <span className='text-blue500'>512</span>,
                      </span>
                      {"\n"}
                      {"\t"}
                      <span className='text-gray200'>
                        model_id<span className='text-red100'>=</span>
                        <span className='text-blue500'>13</span>,
                      </span>
                      {"\n"}
                      {"\t"}
                      <span className='text-gray200'>
                        number_of_images<span className='text-red100'>=</span>
                        <span className='text-blue500'>5</span>,
                      </span>
                      {"\n"}
                      {"\t"}
                      <span className='text-gray200'>
                        negative_prompt<span className='text-red100'>=</span>
                        <span className='text-orange100'>"cloudy, rainy"</span>,
                      </span>
                      {"\n"}){"\n"}images <span className='text-red100'>= await</span> runware.requestImages
                      <span className='text-gray200'>(requestImage</span>
                      <span className='text-red100'>=</span>
                      <span className='text-gray200'>request_image)</span>
                      {"   "}
                      {"\n"}
                      <span className='text-red100'>for</span> image <span className='text-red100'>in</span> images:
                      {"\n"}
                      {"    "}print<span className='text-gray200'>(</span>
                      <span className='text-red100'>f</span>
                      <span className='text-orange100'>"Image URL:</span>{" "}
                      <span className='text-gray200'>
                        {"{"}image.imageSrc{"}"}
                      </span>
                      <span className='text-orange100'>"</span>
                      <span className='text-gray200'>)</span>
                      {"\n"}
                    </code>
                  </pre>
                </figure>
              </div>
            </div>
            <div className='s-code-contant relative' id='tab3'>
              <button
                className='copy absolute -top-9 right-6 inline-flex text-white cursor-pointer tooltip'
                hover-tooltip='Copy'
                aria-label='Copy'
                onclick="
                      const snippet = this.parentElement?.querySelector('code')?.textContent
  
                      if (snippet) {
                        navigator.clipboard.writeText(snippet)
                        this.classList.add('copied')
                        setTimeout(() => { this.classList.remove('copied') }, 2000)
                      }
                      "
              >
                <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none'>
                  <path
                    fill='currentColor'
                    d='M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H9V4h9v12ZM3 15v-2h2v2H3Zm0-5.5h2v2H3v-2ZM10 20h2v2h-2v-2Zm-7-1.5v-2h2v2H3ZM5 22c-1.1 0-2-.9-2-2h2v2Zm3.5 0h-2v-2h2v2Zm5 0v-2h2c0 1.1-.9 2-2 2ZM5 6v2H3c0-1.1.9-2 2-2Z'
                  />
                </svg>
              </button>
              <div className='generic-code text-purple200 pl-14 pt-3.5 font-roboto-mono relative overflow-y-auto h-322px'>
                <div className='generic-code-lines font-roboto-mono text-sm leading-5 font-normal text-gray300 absolute left-0 top-0 h-full block pt-3.5 pl-6'>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <figure className='h-full'>
                  <pre className='h-full'>
                    <code className='font-roboto-mono text-sm leading-5 font-normal block'>
                      <span className='text-red100'>from</span> runware <span className='text-red100'>import</span>{" "}
                      Runware, IRequestImage{"\n"}
                      <span className='text-red100'>async def</span> main() -&gt;{" "}
                      <span className='text-blue600'>None:</span>
                      {"\n"}runware <span className='text-red100'>=</span> Runware
                      <span className='text-gray200'>(api_key</span>
                      <span className='text-red100'>=</span>
                      <span className='text-gray200'>RUNWARE_API_KEY)</span>
                      {"\n"}
                      <span className='text-red100'>await</span> runware.connect
                      <span className='text-gray200'>()</span>
                      {"\n"}request_image <span className='text-red100'>=</span> IRequestImage({"\n"}
                      {"\t"}
                      <span className='text-gray200'>
                        positive_prompt<span className='text-red100'>=</span>
                        <span className='text-orange100'>"A beautiful sunset over the mountains"</span>,
                      </span>
                      {"\n"}
                      {"\t"}
                      <span className='text-gray200'>
                        width<span className='text-red100'>=</span>
                        <span className='text-blue500'>512</span>,
                      </span>
                      {"\n"}
                      {"\t"}
                      <span className='text-gray200'>
                        height<span className='text-red100'>=</span>
                        <span className='text-blue500'>512</span>,
                      </span>
                      {"\n"}
                      {"\t"}
                      <span className='text-gray200'>
                        model_id<span className='text-red100'>=</span>
                        <span className='text-blue500'>13</span>,
                      </span>
                      {"\n"}
                      {"\t"}
                      <span className='text-gray200'>
                        number_of_images<span className='text-red100'>=</span>
                        <span className='text-blue500'>5</span>,
                      </span>
                      {"\n"}
                      {"\t"}
                      <span className='text-gray200'>
                        negative_prompt<span className='text-red100'>=</span>
                        <span className='text-orange100'>"cloudy, rainy"</span>,
                      </span>
                      {"\n"}){"\n"}images <span className='text-red100'>= await</span> runware.requestImages
                      <span className='text-gray200'>(requestImage</span>
                      <span className='text-red100'>=</span>
                      <span className='text-gray200'>request_image)</span>
                      {"   "}
                      {"\n"}
                      <span className='text-red100'>for</span> image <span className='text-red100'>in</span> images:
                      {"\n"}
                      {"    "}print<span className='text-gray200'>(</span>
                      <span className='text-red100'>f</span>
                      <span className='text-orange100'>"Image URL:</span>{" "}
                      <span className='text-gray200'>
                        {"{"}image.imageSrc{"}"}
                      </span>
                      <span className='text-orange100'>"</span>
                      <span className='text-gray200'>)</span>
                      {"\n"}
                    </code>
                  </pre>
                </figure>
              </div>
            </div>
          </div>
          <div className='overflow-hidden'>
            <div className='flex flex-nowrap items-start pt-14 gap-3 md:gap-22px js-api' id='api1'>
              <div
                className='flex flex-nowrap items-start gap-3 md:gap-22px s-platform-api-block'
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(-82.5344%, 0%) translate3d(0px, 0px, 0px)",
                }}
              >
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon1.svg' alt='img' />
                  <span>negativePrompt</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon2.svg' alt='img' />
                  <span>Lora</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon3.svg' alt='img' />
                  <span>Weighting</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon4.svg' alt='img' />
                  <span>Steps</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon5.svg' alt='img' />
                  <span>Height</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon6.svg' alt='img' />
                  <span>PositivePrompt</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon7.svg' alt='img' />
                  <span>Model</span>
                </div>
              </div>
              <div
                className='flex flex-nowrap items-start gap-3 md:gap-22px s-platform-api-block'
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(-82.5344%, 0%) translate3d(0px, 0px, 0px)",
                }}
              >
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon1.svg' alt='img' />
                  <span>negativePrompt</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon2.svg' alt='img' />
                  <span>Lora</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon3.svg' alt='img' />
                  <span>Weighting</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon4.svg' alt='img' />
                  <span>Steps</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon5.svg' alt='img' />
                  <span>Height</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon6.svg' alt='img' />
                  <span>PositivePrompt</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon7.svg' alt='img' />
                  <span>Model</span>
                </div>
              </div>
              <div
                className='flex flex-nowrap items-start gap-3 md:gap-22px s-platform-api-block'
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(-82.5344%, 0%) translate3d(0px, 0px, 0px)",
                }}
              >
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon1.svg' alt='img' />
                  <span>negativePrompt</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon2.svg' alt='img' />
                  <span>Lora</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon3.svg' alt='img' />
                  <span>Weighting</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon4.svg' alt='img' />
                  <span>Steps</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon5.svg' alt='img' />
                  <span>Height</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon6.svg' alt='img' />
                  <span>PositivePrompt</span>
                </div>
                <div className='s-platform-api-item'>
                  <img src='https://runware.ai/img/icons/api-icon7.svg' alt='img' />
                  <span>Model</span>
                </div>
              </div>
            </div>
            <div className='-ml-20'>
              <div className='flex flex-nowrap items-start justify-end gap-3 md:gap-22px pt-6 js-api1' id='api2'>
                <div
                  className='flex flex-nowrap items-start gap-3 md:gap-22px s-platform-api-block'
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(82.5344%, 0%) translate3d(0px, 0px, 0px)",
                  }}
                >
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon8.svg' alt='img' />
                    <span>CFGscale</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon9.svg' alt='img' />
                    <span>ControlNet</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon10.svg' alt='img' />
                    <span>Blend</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon11.svg' alt='img' />
                    <span>ClipSkip</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon12.svg' alt='img' />
                    <span>NumberResults</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon13.svg' alt='img' />
                    <span>Schedulers</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon14.svg' alt='img' />
                    <span>CheckNSFW</span>
                  </div>
                </div>
                <div
                  className='flex flex-nowrap items-start gap-3 md:gap-22px s-platform-api-block'
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(82.5344%, 0%) translate3d(0px, 0px, 0px)",
                  }}
                >
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon8.svg' alt='img' />
                    <span>CFGscale</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon9.svg' alt='img' />
                    <span>ControlNet</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon10.svg' alt='img' />
                    <span>Blend</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon11.svg' alt='img' />
                    <span>ClipSkip</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon12.svg' alt='img' />
                    <span>NumberResults</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon13.svg' alt='img' />
                    <span>Schedulers</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon14.svg' alt='img' />
                    <span>CheckNSFW</span>
                  </div>
                </div>
                <div
                  className='flex flex-nowrap items-start gap-3 md:gap-22px s-platform-api-block'
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(82.5344%, 0%) translate3d(0px, 0px, 0px)",
                  }}
                >
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon8.svg' alt='img' />
                    <span>CFGscale</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon9.svg' alt='img' />
                    <span>ControlNet</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon10.svg' alt='img' />
                    <span>Blend</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon11.svg' alt='img' />
                    <span>ClipSkip</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon12.svg' alt='img' />
                    <span>NumberResults</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon13.svg' alt='img' />
                    <span>Schedulers</span>
                  </div>
                  <div className='s-platform-api-item'>
                    <img src='https://runware.ai/img/icons/api-icon14.svg' alt='img' />
                    <span>CheckNSFW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white pt-16 md:pt-28 pb-16 md:pb-24'>
        <div className='max-w-1240px px-5 mx-auto pt-2 pb-2'>
          <h2 className='font-extrabold text-4xl md:text-5xl leading-115 md:leading-115 text-blue200 text-center mx-auto max-w-400px'>
            All working with 194,137 models
          </h2>
          <div className='font-normal text-lg lg:text-xl leading-7 tracking-0.2px text-gray400 max-w-997px mx-auto text-center pt-9 space-y-8 pb-1'>
            <p>
              Whether it’s base models, custom checkpoints, LoRAs, ControlNets or embeddings, the entire Stable
              Diffusion ecosystem runs quickly and flexibly through the Runware API.{" "}
            </p>
            <p>
              Access the latest AI technologies, including ControlNet, InstantID, AnimateDiff, IP-Adapters, and more.{" "}
              <a href='/product/image-generation/' className='text-purple100'>
                See all supported Image Gen technologies.
              </a>
            </p>
          </div>
        </div>
        <div className='flex pt-16 mt-1 gap-2.5 md:gap-5 items-start js-gallery gallery-wrapper' id='img-gallery'>
          <div
            className='s-logos-item flex items-start gap-2.5 md:gap-5 flex-nowrap'
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(-82.5344%, 0%) translate3d(0px, 0px, 0px)",
            }}
          >
            <div className='gallery'>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img1.webp 1x, https://runware.ai/img/platform/gallery-img1@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img1.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img1@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img2.webp 1x, https://runware.ai/img/platform/gallery-img2@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img2.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img2@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper horizontal rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img3.webp 1x, https://runware.ai/img/platform/gallery-img3@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img3.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img3@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper vertical rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img4.webp 1x, https://runware.ai/img/platform/gallery-img4@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img4.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img4@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img5.webp 1x, https://runware.ai/img/platform/gallery-img5@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img5.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img5@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper horizontal rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img6.webp 1x, https://runware.ai/img/platform/gallery-img6@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img6.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img6@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
            </div>
            <div className='gallery'>
              <div className='image-wrapper horizontal rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img7.webp 1x, https://runware.ai/img/platform/gallery-img7@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img7.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img7@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper vertical rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img8.webp 1x, https://runware.ai/img/platform/gallery-img8@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img8.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img8@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img9.webp 1x, https://runware.ai/img/platform/gallery-img9@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img9.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img9@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl vertical '>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img11.webp 1x, https://runware.ai/img/platform/gallery-img11@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img11.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img11@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img10.webp 1x, https://runware.ai/img/platform/gallery-img10@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img10.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img10@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img12.webp 1x, https://runware.ai/img/platform/gallery-img12@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img12.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img12@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
            </div>
            <div className='gallery'>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img13.webp 1x, https://runware.ai/img/platform/gallery-img13@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img13.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img13@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img14.webp 1x, https://runware.ai/img/platform/gallery-img14@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img14.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img14@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper horizontal rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img16.webp 1x, https://runware.ai/img/platform/gallery-img16@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img16.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img16@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper vertical rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img15.webp 1x, https://runware.ai/img/platform/gallery-img15@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img15.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img15@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img17.webp 1x, https://runware.ai/img/platform/gallery-img17@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img17.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img17@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper horizontal rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img18.webp 1x, https://runware.ai/img/platform/gallery-img18@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img18.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img18@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
            </div>
            <div className='gallery'>
              <div className='image-wrapper horizontal rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img19.webp 1x, https://runware.ai/img/platform/gallery-img19@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img19.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img19@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper vertical rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img20.webp 1x, https://runware.ai/img/platform/gallery-img20@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img20.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img20@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img21.webp 1x, https://runware.ai/img/platform/gallery-img21@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img21.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img21@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl vertical '>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img22.webp 1x, https://runware.ai/img/platform/gallery-img22@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img22.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img22@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img23.webp 1x, https://runware.ai/img/platform/gallery-img23@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img23.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img23@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img24.webp 1x, https://runware.ai/img/platform/gallery-img24@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img24.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img24@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
            </div>
          </div>
          <div
            className='s-logos-item flex items-start gap-5 flex-nowrap'
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(-82.5344%, 0%) translate3d(0px, 0px, 0px)",
            }}
          >
            <div className='gallery'>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img1.webp 1x, https://runware.ai/img/platform/gallery-img1@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img1.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img1@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img2.webp 1x, https://runware.ai/img/platform/gallery-img2@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img2.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img2@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper horizontal rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img3.webp 1x, https://runware.ai/img/platform/gallery-img3@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img3.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img3@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper vertical rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img4.webp 1x, https://runware.ai/img/platform/gallery-img4@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img4.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img4@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img5.webp 1x, https://runware.ai/img/platform/gallery-img5@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img5.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img5@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper horizontal rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img6.webp 1x, https://runware.ai/img/platform/gallery-img6@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img6.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img6@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
            </div>
            <div className='gallery'>
              <div className='image-wrapper horizontal rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img7.webp 1x, https://runware.ai/img/platform/gallery-img7@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img7.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img7@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper vertical rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img8.webp 1x, https://runware.ai/img/platform/gallery-img8@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img8.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img8@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img9.webp 1x, https://runware.ai/img/platform/gallery-img9@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img9.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img9@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl vertical '>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img11.webp 1x, https://runware.ai/img/platform/gallery-img11@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img11.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img11@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img10.webp 1x, https://runware.ai/img/platform/gallery-img10@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img10.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img10@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img12.webp 1x, https://runware.ai/img/platform/gallery-img12@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img12.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img12@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
            </div>
            <div className='gallery'>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img13.webp 1x, https://runware.ai/img/platform/gallery-img13@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img13.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img13@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img14.webp 1x, https://runware.ai/img/platform/gallery-img14@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img14.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img14@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper horizontal rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img16.webp 1x, https://runware.ai/img/platform/gallery-img16@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img16.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img16@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper vertical rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img15.webp 1x, https://runware.ai/img/platform/gallery-img15@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img15.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img15@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img17.webp 1x, https://runware.ai/img/platform/gallery-img17@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img17.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img17@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper horizontal rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img18.webp 1x, https://runware.ai/img/platform/gallery-img18@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img18.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img18@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
            </div>
            <div className='gallery'>
              <div className='image-wrapper horizontal rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img19.webp 1x, https://runware.ai/img/platform/gallery-img19@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img19.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img19@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper vertical rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img20.webp 1x, https://runware.ai/img/platform/gallery-img20@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img20.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img20@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img21.webp 1x, https://runware.ai/img/platform/gallery-img21@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img21.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img21@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl vertical '>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img22.webp 1x, https://runware.ai/img/platform/gallery-img22@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img22.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img22@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img23.webp 1x, https://runware.ai/img/platform/gallery-img23@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img23.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img23@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
              <div className='image-wrapper rounded-2xl'>
                <picture>
                  <source
                    type='image/webp'
                    srcSet='https://runware.ai/img/platform/gallery-img24.webp 1x, https://runware.ai/img/platform/gallery-img24@2x.webp 2x'
                  />
                  <img
                    src='https://runware.ai/img/platform/gallery-img24.jpg'
                    srcSet='https://runware.ai/img/platform/gallery-img24@2x.jpg 2x'
                    alt='img'
                    className='rounded-2xl'
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-blue300 pt-16 md:pt-24' id='footer'>
        <div className='max-w-1240px px-5 mx-auto md:pt-1.5'>
          <div className='flex items-center flex-wrap -mx-3.5 flex-wrap'>
            <div className='px-3.5 w-full md:w-2/5'>
              <div className=''>
                <h3 className='font-bold text-3xl md:text-5xl tracking-n1.2px text-white leading-120 md:leading-120'>
                  Enjoy 10,000+ free image generations
                </h3>
                <div className='flex pt-8 mb-2.5'>
                  <a href='https://my.runware.ai/signup/' className='b-btn blue'>
                    <span>Get Started With $15 Free Credit</span>
                    <img src='https://runware.ai/img/icons/arrow-right1.svg' alt='img' />
                  </a>
                </div>
              </div>
            </div>
            <div className='px-3.5 w-3/5 hidden md:block'>
              <div className='flex relative md:-mt-20 md:-ml-32 md:-mr-32 lg:mr-0 lg:ml-0 lg:mt-9 xl:pl-14 xl:ml-1 s-footer-imgs md:scale-50 lg:scale-100 md:max-w-692px lg:max-w-inherit'>
                <img
                  src='https://runware.ai/img/footer-bg1.svg'
                  alt='img'
                  loading='lazy'
                  className='absolute right-0 -top-8 '
                />
                <img
                  src='https://runware.ai/img/footer-bg2.svg'
                  alt='img'
                  loading='lazy'
                  className='absolute -top-2 right-8 s-footer-img1'
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    visibility: "inherit",
                    transform: "translate(0px, 0px)",
                  }}
                />
                <img
                  src='https://runware.ai/img/footer-bg3.svg'
                  alt='img'
                  loading='lazy'
                  className='absolute top-2.5 right-16 pr-1 s-footer-img2'
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    visibility: "inherit",
                    transform: "translate(0px, 0px)",
                  }}
                />
                <img
                  src='https://runware.ai/img/footer-bg4.svg'
                  alt='img'
                  loading='lazy'
                  className='absolute right-28 top-3.5 s-footer-img3'
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    visibility: "inherit",
                    transform: "translate(0px, 0px)",
                  }}
                />
                <img
                  src='https://runware.ai/img/footer-bg5.svg'
                  alt='img'
                  loading='lazy'
                  className='relative s-footer-img4'
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    visibility: "inherit",
                    transform: "translate(0px, 0px)",
                  }}
                />
              </div>
            </div>
          </div>
          <div className='flex items-start -mx-3.5 pt-12 md:pt-44 pb-12 md:pb-14 flex-wrap -mb-12'>
            <div className='w-full md:w-5/12 px-3.5 pb-12'>
              <div className=''>
                <a href='/' className='inline-flex'>
                  <img src='https://runware.ai/img/footer-logo.svg' alt='img' loading='lazy' />
                </a>
                <p className='font-normal text-base leading-6 text-white pt-3.5'>
                  Generative media in the blink of an API.
                </p>
                <ul className='flex items-center pt-8 gap-4'>
                  <li>
                    <a href='https://github.com/Runware/' target='_blank'>
                      <img src='https://runware.ai/img/icons/icon-soc1.svg' alt='img' />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/@RunwareAI' target='_blank'>
                      <img src='https://runware.ai/img/icons/icon-soc2.svg' alt='img' />
                    </a>
                  </li>
                  <li>
                    <a href='https://x.com/RunwareAI' target='_blank'>
                      <img src='https://runware.ai/img/icons/icon-soc3.svg' alt='/img' />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/company/runware/' target='_blank'>
                      <img src='https://runware.ai/img/icons/icon-soc4.svg' alt='img' />
                    </a>
                  </li>
                  <li>
                    <a href='https://discord.gg/ajNHpW4c' target='_blank'>
                      <img src='https://runware.ai/img/icons/icon-soc5.svg' alt='img' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-full md:w-7/12 px-3.5 pb-8 md:pb-12'>
              <div className='flex items-start pt-1 sm:max-w-626px md:mx-auto flex-wrap -mx-3.5 '>
                <div className='w-1/3 px-3.5 flex md:justify-center'>
                  <div className=''>
                    <h3 className='tracking-0.1px font-semibold text-sm leading-5 text-white'>
                      <a href='#' className='text-white'>
                        Product
                      </a>
                    </h3>
                    <ul className='font-normal text-sm leading-5 tracking-0.17px text-light100 pt-2 space-y-2'>
                      {/* <li><a href="#" class="text-light100 transition-all duration-200 hover:text-white">Media Gen</a></li> */}
                      <li>
                        <a
                          href='/product/image-generation/'
                          className='text-light100 transition-all duration-200 hover:text-white'
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href='/sonic-inference-engine/'
                          className='text-light100 transition-all duration-200 hover:text-white'
                        >
                          Platform
                        </a>
                      </li>
                      <li></li>
                      <li>
                        <a href='/pricing/' className='text-light100 transition-all duration-200 hover:text-white'>
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='w-1/3 px-3.5 flex md:justify-center'>
                  <div className=''>
                    <h3 className='tracking-0.1px font-semibold text-sm leading-5 text-white'>
                      <a href='#' className='text-white'>
                        Resources
                      </a>
                    </h3>
                    <ul className='font-normal text-sm leading-5 tracking-0.17px text-light100 pt-2 space-y-2'>
                      <li>
                        <a
                          href='https://docs.runware.ai/en/getting-started/introduction'
                          className='text-light100 transition-all duration-200 hover:text-white'
                        >
                          Docs
                        </a>
                      </li>
                      {/* <li><a href="#" class="text-light100 transition-all duration-200 hover:text-white">Use Cases</a></li>
                      <li><a href="#" class="text-light100 transition-all duration-200 hover:text-white">Blog</a></li> */}
                    </ul>
                  </div>
                </div>
                <div className='w-1/3 px-3.5 flex md:justify-center'>
                  <div className=''>
                    <h3 className='tracking-0.1px font-semibold text-sm leading-5 text-white'>
                      <a href='#' className='text-white'>
                        Company
                      </a>
                    </h3>
                    <ul className='font-normal text-sm leading-5 tracking-0.17px text-light100 pt-2 space-y-2'>
                      <li>
                        <a href='/about/' className='text-light100 transition-all duration-200 hover:text-white'>
                          About
                        </a>
                      </li>
                      <li>
                        <a href='/contact/' className='text-light100 transition-all duration-200 hover:text-white'>
                          Contact
                        </a>
                      </li>
                      {/* <li><a href="#" class="text-light100 transition-all duration-200 hover:text-white">Support</a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gradient6 h-px'></div>
          <div className='flex gap-10 justify-between items-center py-9 flex-wrap'>
            <div className='font-normal text-sm leading-5 tracking-0.17px text-light100'>
              © 2024 Runware, Inc. All rights reserved
            </div>
            <ul className='font-normal text-sm leading-5 tracking-0.17px flex items-center gap-4 md:gap-7 flex-wrap'>
              <li>
                <a href='/terms/' className='text-light100 transition-all duration-200 hover:text-white'>
                  Terms of Use
                </a>
              </li>
              <li>
                <a href='/privacy/' className='text-light100 transition-all duration-200 hover:text-white'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='/cookies-policy/' className='text-light100 transition-all duration-200 hover:text-white'>
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Huydev;
