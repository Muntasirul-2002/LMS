// Import React and useContext separately
import React, { useContext } from "react";
import { CheckCircle } from "lucide-react";
import { CompletedChapterContext } from "@/app/_context/CompletedChapterContext";
import { markChapterCompleted as markChapterCompletedService } from "@/app/_services";

function FullVideoPlayer({ activeChapter, userCourse }) {
  console.log("Rendering FullVideoPlayer with activeChapter:", activeChapter);
  console.log(activeChapter);

  if (!activeChapter) {
    return null; // or return some default content if needed
  }

  const { completedChapter, setCompletedChapter } = useContext(
    CompletedChapterContext
  );

  const isChapterCompleted = (chapterId) => {
    return completedChapter.find((item) => item.chapterId == chapterId);
  };

  const markChapterAsCompleted = async () => {
    if (!completedChapter?.length) {
      setCompletedChapter([]);
    }

    const updatedCompletedChapter = completedChapter
      ? [
          ...completedChapter,
          {
            chapterId: activeChapter?.chapterNumber + "",
          },
        ]
      : [
          {
            chapterId: activeChapter?.chapterNumber + "",
          },
        ];

    setCompletedChapter(updatedCompletedChapter);

    await markChapterCompletedService(
      userCourse.id,
      activeChapter?.chapterNumber
    ).then((resp) => {
      console.log(resp);
    });

    console.log(updatedCompletedChapter);
  };

  return (
    <div className="p-5">
      <video width="1000" height="300" controls controlsList="nodownload">
        <source
          src="https://youtu.be/-mJFZp84TIY?si=5RxSqcMeobiHdjHO"
          type="video/mp4"
        />
      </video>
      <div className="p-5 border rounded-lg mt-5 flex justify-between items-center">
        <h2 className="text-[18px] font-medium">{activeChapter.name}</h2>
        {!isChapterCompleted(activeChapter.chapterNumber) ? (
          <button
            className="bg-purple-500 text-white p-2 px-5 rounded-lg flex gap-5 hover:bg-purple-800"
            onClick={() => markChapterAsCompleted()}
          >
            <CheckCircle />
            <h2>Mark as Complete</h2>
          </button>
        ) : (
          <button className="text-purple-600 p-2 px-5 rounded-lg flex gap-5 hover:bg-purple-100">
            <h2>Mark InComplete</h2>
          </button>
        )}
      </div>
    </div>
  );
}

export default FullVideoPlayer;
