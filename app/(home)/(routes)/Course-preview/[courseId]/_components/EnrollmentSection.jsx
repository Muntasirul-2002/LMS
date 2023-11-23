import { EnrollCourse, PublishCourse } from "@/app/_services";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import React from "react";

function EnrollmentSection({ courseDetail, userCourse }) {
  const { user } = useUser();
  const router = useRouter();
  const enrollCourse = async () => {
    if (user) {
      await EnrollCourse(
        courseDetail.id,
        user.primaryEmailAddress.emailAddress
      ).then(async (resp) => {
        // console.log("EnrollCourse Response=>", resp);
        if (resp) {
          await PublishCourse(resp?.createUserEnrollCourse?.id).then(
            (result) => {
              // console.log(result);
              if (result) {
                router.push("/view-course" + courseDetail.id);
              }
            }
          );
        }
      });
    } else {
      router.push("/sign-in");
    }
  };
  return (
    <div>
      {userCourse?.courseId ? (
        <div className="mt-5 border rounded-lg p-2 text-center">
          <h2 className="text-gray-500">
            Continue to build Project,Access, SourceCode and track your progress
            for free
          </h2>
          <button
            onClick={() => router.push(`/view-course/${courseDetail.id}`)}
            className="p-2 w-full bg-purple-600 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700"
          >
            Continue
          </button>
        </div>
      ) : null}

      {courseDetail.free && !userCourse?.courseId ? (
        <div className="mt-5 border rounded-lg p-2 text-center">
          <h2 className="text-gray-500">
            Buy this course, Source Code and Track your progress !
          </h2>
          <button className="p-2 w-full bg-purple-600 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700">
            Buy Course for ₹400/-
          </button>
        </div>
      ) : !userCourse?.courseId ? (
        <div className="mt-5 border rounded-lg p-2 text-center">
          <h2 className="text-gray-500">
            Lean and build Project, Access, SourceCode and track your progress
            for free
          </h2>
          <button
            onClick={() => enrollCourse()}
            className="p-2 w-full bg-purple-600 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700"
          >
            Enroll Now
          </button>
        </div>
      ) : null}
      <div className="mt-5 border rounded-lg p-2 text-center">
        <h2 className="text-gray-500">
          Buy Monthly membership and get all courses, Source Code and Track your
          progress !
        </h2>
        <button className="p-2 w-full bg-purple-600 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700">
          Buy MemberShip ₹1000/-
        </button>
      </div>
    </div>
  );
}

export default EnrollmentSection;
