"use client";

import { StoryBoard } from "@/model/storyboard";
import { Suspense, useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";
import StoryBoardDetail from "./StoryBoardDetail";
import StoryBoardModal from "./StoryBoardModal";
import ModalPortal from "./ui/ModalPortal";
import { useRouter, useSearchParams } from "next/navigation";

export default function StoryBoard() {
  const {
    data,
    isLoading: loading,
    error,
  } = useSWR<StoryBoard[]>("api/storyboard", { refreshInterval: 5000 });

  const [openModal, setOpenModal] = useState<string | null>(null);
  const navigate = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const isModalOpen = searchParams.get("modal");
    setOpenModal(isModalOpen);
  }, [searchParams]);

  const closeModal = () => {
    navigate.push("/");
    setOpenModal(null);
  };

  const openModalAction = (title: string) => {
    navigate.push(`?modal=${title}`);
    setOpenModal(title);
  };

  return (
    <>
      <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 min-h-[90px] overflow-x-auto">
        {loading || !data ? (
          <PropagateLoader size={15} color="red" />
        ) : (
          <ul className="flex w-full gap-4">
            {data.map((item) => (
              <li
                key={item.title}
                className="flex flex-col items-center w-20"
                onClick={() => openModalAction(item.title)}
              >
                <Avatar image={item.thumnail} highlight={true} />
                <p className="text-sm text-ellipsis w-18 text-center truncate">
                  {item.title}
                </p>

                {openModal === item.title && (
                  <ModalPortal>
                    <StoryBoardModal onClose={closeModal}>
                      <StoryBoardDetail
                        key={item.title}
                        title={item.title}
                        images={item.images}
                      />
                    </StoryBoardModal>
                  </ModalPortal>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
