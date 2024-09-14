"use client";
import Header from "@/components/Header";
import AppLayout from "@/components/Layout/AppLayout";

import { authApi, productApi } from "@/api-client";
import { NextPage } from "next";
import { FormEvent, Suspense, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { number } from "yup";

const Profile: NextPage<any> = () => {
  function MainView() {
    const [formData, setFormData] = useState<any>({});
    const [dateRelease, setDateRelease] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [symbolNumber, setSymbolNumber] = useState("");
    const [file, setFile] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const searchParams = useSearchParams();

    const [idDocs] = searchParams.getAll("id") || "";

    const [selectedItem, setSelectedItem] = useState<any>("");

    const DocumentDetail = useQuery<any>({
      queryKey: ["DocsDetail", idDocs],
      queryFn: async () => await authApi.documentDetail(idDocs),
    });

    console.log("idDocsidDocsidDocs", DocumentDetail.data);
    const formValidate = () => {
      if (!name) {
        toast.error("Vui lòng nhập tiêu đề", { autoClose: 4000 });
        return false;
      }

      if (!file) {
        toast.error("Vui lòng chọn file", { autoClose: 4000 });
        return false;
      }

      return true;
    };

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      if (!formValidate()) return;

      const postForm: any = {
        id: Number(idDocs),
        name: name,
        detail: description,
        file: [file],
        sector: 2,
        release_date: dateRelease,
        symbol_number: symbolNumber,
      };

      console.log("postFormpostFormpostForm", postForm);

      try {
        const data = await productApi.updateDocs(postForm);
        if (data.code === 0) {
          setName("");
          setSymbolNumber("");
          setDescription("");
          setFile("");
          setSelectedItem(null);
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
          toast.success("Cập nhật tài liệu thành công", { autoClose: 4000 });
        } else {
          toast.error("Xảy ra lỗi vui lòng thử lại", { autoClose: 4000 });
        }
      } catch (error: any) {
        console.log(error);
      }
    };

    const handleUploadImage = async (files: any) => {
      const formData = new FormData();
      formData.append("images", files[0]);
      const data = await productApi.uploadFile(formData);
      setFile(data[0]);
    };

    return (
      <AppLayout>
        <div className='w-full bg-white  h-screen flex flex-col'>
          <div className='p-6'>
            <Header title={`Sửa tài liệu số  ${idDocs}`} />
            <div className='h-[1px] bg-black  bg-opacity-20 my-4 max-lg:hidden' />
            <div className=' h-lvh    rounded-xl '>
              <div className='flex flex-col justify-between   '>
                <p className=' font-workSansMedium text-lg'>Tên tài liệu</p>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-[80%] border h-12 rounded-md px-2 mt-2'
                  placeholder={"Tên tài liệu "}
                ></input>
              </div>

              <div className='flex flex-col justify-between  mt-4  '>
                <p className=' font-workSansMedium text-lg'>Số kí hiệu</p>
                <input
                  value={symbolNumber}
                  onChange={(e) => setSymbolNumber(e.target.value)}
                  className='w-[80%] border h-12 rounded-md px-2 mt-2'
                  placeholder={"Số kí hiệu"}
                ></input>
              </div>

              <div className='flex flex-col justify-between  mt-4  '>
                <p className=' font-workSansMedium text-lg'>Mô tả</p>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className='w-[80%] border h-12 rounded-md px-2 mt-2'
                  placeholder={"Mô tả"}
                ></input>
              </div>

              <div className='flex gap-x-8 mt-6 mb-2'>
                <input
                  ref={fileInputRef}
                  type='file'
                  accept='application/pdf'
                  onChange={(e) => handleUploadImage(e.target.files as any)}
                />
              </div>

              <button
                className='  mt-6 h-16  w-1/2  '
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                <p className=' bg-primary-500 font-extrabold text-lg border z-50  px-8 py-2 border-slate-400 rounded-md flex items-center justify-center text-white	'>
                  Đăng tài liệu
                </p>
              </button>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <Suspense>
      <MainView />
    </Suspense>
  );
};
export default Profile;
