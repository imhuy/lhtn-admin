"use client";
import Header from "@/components/Header";
import AppLayout from "@/components/Layout/AppLayout";

import { productApi } from "@/api-client";
import { NextPage } from "next";
import { FormEvent, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
const axios = require("axios");

const Push: NextPage<any> = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [checkValue, setCheckValue] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedItem, setSelectedItem] = useState<any>("");
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setCheckValue(isChecked);
    if (isChecked) {
      // Call your processing function here
      console.log("Checkbox is checked");
      // Add your processing code here
    } else {
      console.log("Checkbox is unchecked");
    }
  };

  const sendPush = async () => {
    let data = JSON.stringify({
      message: {
        topic: "test",
        android: {
          priority: "high",
        },
        notification: {
          title: title,
          body: description,
        },
        data: {
          screen: "NotificationPush",
          message: title,
        },
      },
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://fcm.googleapis.com/v1/projects/pushnotifi-52af9/messages:send",
      headers: {
        Authorization:
          "Bearer ya29.c.c0ASRK0Ga7f-h6XTy739tEhY5XOa7BvpLutuWjcHjjqOXP28PvQQrqykiSQB80RXC-h7SJNsdRPnLwVUhLDeU1SOQ0hyIkw6mihvAk9VAef4aIWhbeOxEql8meRtVDIvJaGOtVcRzAeYRcRjE_vYqzSzx13ow7j3SVZObuGAFkX0IQeJyiYkyIEvBAqlJ955JktV9JogvqMKyFowaGs7AMmfPzrj2QhjeHe0GG-WEIjvTt9VcVeEdRa1BV_DFvlRHpC0nlxc_BcsIfSp7uSdSPNZbJU_xo-qHfqXbx9IogAcCgPe6xjR2lfM5r4RB-ldAMJg0mZFZkgUes-649K8I6KypGyaUIGpbcUoVZ87hDm4TVjKUvmQnwaVOFswN387CumY7leVesRbmRmO9MaS0dy-aYJwfwZxXshXyvm59R7SvB4SXOX4d9feOhtyF96pahFMMB4M8ct_9u8bi71Xb46B6lq7fW6l_8I9VvWJBrz1m29cxjWg5nzwB8IIZ_uwR_2zmzv3wsMtxBXc0c2MYd9F8zBSUOF_IsciO69knmocBBXMh08ndymvS2gJ2xJSomozgMsXYWnUJZ2tQ4pfVnJz8Vw43xk5i55icxm6BBZ7IbgRgM36ysi5g6ry7j7jrxWhR9QJ5FlJScvilk2FxMfWJiVeRlqZWl-YFkbX9oR17bxstu-WuOc0Fbv9w8t8l17cOR1lUROwz84p8wiM093OJbS5logShUr9w_4b_Vg4rfde8s49b1xS8fm9owdzzjItmy7V_WlMz6yekOqMaOvVUwQ73c0xZpI_3wZ78-QRSOhByd15d_-jgc82Ypf8hz5sazv4VVIWsXg4JdItU6l7F_9hsqhM3OBV5WZf0ddsSiFi4Z5Qaf_7mmrl9kU591F8RJJ6Q-mzv-Ivayiq_jQBWixbB_B1Xun3f3esR90wQOtFi01Q6QMetmt8jyVhoZMBVrhdqppba3YjZZqhqlI0de155QhVwg56g0i5uXQ_dXRBg1R3tlhQJ",
        "Content-Type": "application/json",
      },
      data: data,
    };

    let send = await axios.request(config);
    console.log("sendsend", send);
  };

  const formValidate = () => {
    if (!title) {
      toast.error("Vui lòng nhập tiêu đề", { autoClose: 4000 });
      return false;
    }

    if (!description) {
      toast.error("Vui lòng nhập tiêu đề", { autoClose: 4000 });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formValidate()) return;

    const postForm: any = {
      title: title,
      content: content,
      image: "1",
      cat_id: 5,
      hashtag: [],
      day: "1",
      short_description: description,
    };

    try {
      const data = await productApi.postNews(postForm);
      if (data.code === 0) {
        setTitle("");
        setContent("");
        setDescription("");

        setSelectedItem(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        if (checkValue) {
          sendPush();
        }
        // sendPush();
        toast.success("Đăng bài thành công", { autoClose: 4000 });
      } else {
        toast.error("Xảy ra lỗi vui lòng thử lại", { autoClose: 4000 });
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <AppLayout>
      <div className='w-full bg-white  h-screen flex flex-col'>
        <div className='p-6'>
          <Header title='Đăng bài viết' />
          <div className='h-[1px] bg-black  bg-opacity-20 my-4 max-lg:hidden' />
          <div className=' h-lvh    rounded-xl '>
            <div className='flex flex-col justify-between   '>
              <p className=' font-workSansMedium text-lg'>Tiêu đề thông báo</p>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='w-[80%] border h-12 rounded-md px-2 mt-2'
                placeholder={"Tiêu đề thông báo"}
              ></input>
            </div>

            <div className='flex flex-col justify-between  mt-4  '>
              <p className=' font-workSansMedium text-lg'>Chi tiết thông báo</p>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='w-[80%] border h-12 rounded-md px-2 mt-2'
                placeholder={"Chi tiết thông báo"}
              ></input>
            </div>

            <div className='flex items-center mt-6   gap-x-5'>
              <div>
                <span className=' mr-4'> Gửi push notification</span>
                <input type='checkbox' onChange={handleCheckboxChange} />
              </div>
              <button
                className='     w-1/2  '
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                <p className=' bg-primary-500 font-extrabold text-lg border z-50  px-8 py-2 border-slate-400 rounded-md flex items-center justify-center text-white	'>
                  Đăng bài
                </p>
              </button>
            </div>

            <span>{content}</span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
export default Push;
