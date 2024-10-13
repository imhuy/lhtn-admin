"use client";
import { authApi } from "@/api-client";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  function MainView() {
    const searchParams = useSearchParams();
    const [id] = searchParams.getAll("id") || "";
    // const [data, setData] = useState<any>(null);

    const listHistory = useQuery({
      queryKey: ["checkinHistoryScan"],
      queryFn: async () => await authApi.CheckinHistory(),
    });

    useEffect(() => {
      const intervalId = setInterval(() => {
        getData(intervalId);
      }, 1000);
      getData(intervalId);
      return () => clearInterval(intervalId);
    }, []);

    const getData = async (clearId?: any) => {
      try {
        listHistory.refetch();
      } catch (error) {
        // toast.error("Error when payment, please try again!");
      }
    };
    return (
      <>
        {!listHistory.isLoading && (
          <div className='   '>
            <body className='    bg-[#FFE18A]'>
              <div className='relative w-full   '>
                <img src='/bgmttq.jpg' alt='Background Image' className='w-full   h-[100lvh]    ' />

                <div className='delegate-position text-center  flex- flex-col'>
                  <p className='  mb-8  text-[#2857A5]  font-utmHelvetIns  text-4xl font-utmHelvetIn   uppercase'></p>
                  <p className='mb-8   text-white text-center font-utmHelvetIns text-4xl md:text-5xl lg:text-6xl xl:text-6xl uppercase'>
                    {listHistory.data[0]?.full_name}
                  </p>
                  <p className='  mb-8   text-white  text-center font-utmHelvetIns     text-3xl  max-md:text-xl uppercase'>
                    {listHistory.data[0]?.position}
                  </p>
                </div>

                {listHistory.data[0]?.avatar ? (
                  <img
                    src={listHistory.data[0]?.avatar}
                    alt='Black Image'
                    className=' rounded-md w-[28%] h-[49%] custom-position'
                  />
                ) : (
                  <img src='/avatar.jpg' alt='Black Image' className='rounded-full custom-position' />
                )}
              </div>
            </body>
          </div>
        )}
      </>
    );
  }
  return (
    <div className='   justify-center'>
      <Suspense>
        <MainView />
      </Suspense>
    </div>
  );
}
