"use client";
import html2canvas from "html2canvas";
import { useQRCode } from "next-qrcode";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
const axios = require("axios");

export default function Home() {
  const [loading, setLoading] = useState(false);
  var base64ToBlob = function (base64: any) {
    const byteCharacters = atob(base64.split(",")[1]);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: base64.split(",")[0].split(":")[1].split(";")[0] });
    return blob;
  };
  const takeScreenshot = (
    id: string,
    avatar: string,
    name: string,
    stt: string,
    place_of_residence: string,
    idElement: string
  ) => {
    setLoading(true);
    const style = document.createElement("style");
    document.head.appendChild(style);
    style.sheet?.insertRule("body > div:last-child img { display: inline-block; }");
    const element = document.getElementById(idElement);

    if (element) {
      html2canvas(element, {
        useCORS: false,
        proxy: `${avatar}`,
        allowTaint: true,
        logging: true,
        scale: 4,
      })
        .then(async (canvas) => {
          const img = new Image();
          img.src = canvas.toDataURL("image/png");
          img.onload = () => {
            // Tạo một canvas mới với kích thước cố định 800x1200
            const fixedCanvas = document.createElement("canvas");
            fixedCanvas.width = 1280;
            fixedCanvas.height = 1920;
            const ctx = fixedCanvas.getContext("2d");
            if (ctx) {
              // Vẽ nội dung của canvas ban đầu lên canvas mới với kích thước cố định
              ctx.drawImage(img, 0, 0, 1280, 1920);

              const imgData = fixedCanvas.toDataURL("image/png");
              const link: any = document.createElement("a");
              link.href = imgData;
              link.download = `${place_of_residence}.${name}.${id}.${stt}.png`;

              document.body.appendChild(link);
              link.click();
              link.remove();

              style.remove();
              // productApi.uploadImageBase64({ type: 4, image: imgData }).then((dataUrl) => {
              //   if (imgData) {
              //     link.href = imgData;
              //   } else {
              //     link.href = dataUrl;
              //   }
              //   if (idElement === "captureId") {
              //     link.download = `${stt}.${name}.png`;
              //   }
              //   if (idElement === "captureQr") {
              //     link.download = `${stt}.${name}.Qr.jpg`;
              //   }

              //   document.body.appendChild(link);
              //   link.click();
              //   link.remove();

              //   style.remove();
              // });
            }
          };
        })
        .catch((err) => {
          console.error("Error taking screenshot:", err);
        });
    } else {
      console.error("Element to capture not found!");
    }
  };

  function MainView() {
    const searchParams = useSearchParams();
    const [id] = searchParams.getAll("id") || "";
    const [stt] = searchParams.getAll("stt") || "";
    const [data, setData] = useState<any>(null);
    const { SVG } = useQRCode();

    if (id == "" || id == undefined) {
      redirect("https://mttqhanoi.org.vn/");
    }
    const fetchData = async (id: string) => {
      if (typeof window !== "undefined") {
        const hostname = window.location.hostname;
      }
      try {
        const response = await axios.get(`https://api.daihoi.net/api/user/get-delegation?code=${id}`);

        const { data } = response.data;
        setData(data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    useEffect(() => {
      if (id) {
        fetchData(id);
      }
    }, [id]);

    function createMarkup(text: string) {
      return { __html: text };
    }

    return (
      <div className='flex flex-col  h-full w-[1280px]   '>
        <div className=' w-[1280px] h-[1920px] flex items-center mt-4 flex-col  relative' id='captureId'>
          <img src='/the1.jpg' alt='Sample Image' className=' w-[1280px] h-[1920px]  rounded-[10px]' />

          {data?.avatar ? (
            <img
              src={data?.avatar}
              alt='Sample Image'
              className='w-[332px]   rounded-md h-[480px]  absolute  top-[690px] left-[520px] '
            />
          ) : (
            <img
              src='/avatar.jpg'
              alt='Sample Image'
              className='w-[332px]   rounded-md  h-[480px] absolute  top-[700px] left-[520px] '
            />
          )}

          <div className='flex flex-col self-center justify-start items-center   absolute top-[1200px] left-[0px]  w-full '>
            <span className=' text-white uppercase    font-utmHelvetIns  font-thin text-[55px] text-center '>
              {/* {data?.full_name} */}
              <div dangerouslySetInnerHTML={createMarkup(data?.full_name)} />
              {/* <div dangerouslySetInnerHTML={createMarkup(data?.full_name)} /> */}
            </span>
            <span className='  uppercase text-white  w-[95%]     font-utmHelvetIns  font-thin     self-center text-center text-[45px]'>
              {/* {data?.position} */}
              <div dangerouslySetInnerHTML={createMarkup(data?.position)} />
            </span>
          </div>

          <div className='absolute w-[220px] h-[220px]  top-[1520px] left-[570px] '>
            <SVG
              text={id ? id : "Không tìm thấy mã đại biểu"}
              options={{
                margin: 2,
                width: 220,
                color: {
                  dark: "#F5F5F5",
                  light: "#FFFFFF00",
                },
              }}
            />
          </div>
        </div>

        <button
          className='px-4 py-3  uppercase  bg-[#1E6FA2] rounded-md my-2  text-center self-center text-white  font-workSansBold  w-full  '
          onClick={() => takeScreenshot(id, data.avatar, data.full_name, stt, data.place_of_residence, "captureId")}
          id='downloadImage'
        >
          Tải thẻ đại biểu
        </button>
      </div>
    );
  }
  return (
    <div className=' flex   justify-center'>
      <Suspense>
        <div className='flex flex-col w-[1080px]'>
          <MainView />
        </div>
      </Suspense>
    </div>
  );
}
