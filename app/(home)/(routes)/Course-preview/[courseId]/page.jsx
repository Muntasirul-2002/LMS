"use client";
import { getCourseById } from "@/app/_services";
import React, { useEffect, useState } from "react";
import Videoplayer from "./_components/Videoplayer";
import CourseDetails from "./_components/CourseDetails";

import OptionSection from "./_components/OptionSection";
import EnrollmentSection from "./_components/EnrollmentSection";
import { useUser } from "@clerk/nextjs";

function CoursePreview({ params }) {
  const [courseDetail, setCourseDetails] = useState([]);
  const [userCourse, setUserCourse] = useState([]);

  const { user } = useUser();

  useEffect(() => {
    params.courseId ? getCourse(params.courseId) : null;
  }, [user]);

  const getCourse = () => {
    getCourseById(
      params.courseId,
      user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      console.log(resp);
      setCourseDetails(resp.courseLists[0]); // Set course details
      setUserCourse(resp.userEnrollCourses[0]); // Set user course details
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-2">
          <Videoplayer />
          <CourseDetails courseDetail={courseDetail} />
        </div>
        <div className="mt-5 md:mt-0">
          <OptionSection />
          <EnrollmentSection
            courseDetail={courseDetail}
            userCourse={userCourse}
          />
        </div>
      </div>
    </div>
  );
}

export default CoursePreview;
