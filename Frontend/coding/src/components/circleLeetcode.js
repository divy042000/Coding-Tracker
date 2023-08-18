import React, { useRef, useEffect,useState } from 'react';
import styled from "styled-components";

export default function CircleLeetcode() {
  // Calculate the stroke lengths based on the number of problems solved
  const easySolved=300,totalEasyProblems=705;
  const mediumSolved=131,totalMediumProblems=1490;
  const hardSolved=46,totalHardProblems=600;

  const [easy, setEasy] = useState(0);
  const [medium,setMedium] = useState(0);
  useEffect(() => {
    const easyCircle = document.getElementById('easyCircle');

    const easyDashLength = (easySolved / totalEasyProblems) * 50;
    const gapLength = 260 - easyDashLength;

    easyCircle.setAttribute('stroke-dasharray', `${easyDashLength} ${gapLength}`);
    easyCircle.setAttribute('stroke-dashoffset', '0');

    setEasy(easyDashLength);
  }, [easySolved, totalEasyProblems]);

  useEffect(() => {
    const mediumCircle = document.getElementById('mediumCircle');

    const MediumDashLength = (mediumSolved / totalMediumProblems) * 50;
    const gapLength = 260 - MediumDashLength;
    const mediumOffset = MediumDashLength - easy; // Adjust the offset value here
    setMedium(mediumOffset);
    mediumCircle.setAttribute('stroke-dasharray', `${MediumDashLength} ${gapLength}`);
    mediumCircle.setAttribute('stroke-dashoffset', `${mediumOffset}`);
  }, [mediumSolved, totalMediumProblems, easy]);

  useEffect(() => {
    const hardCircle = document.getElementById('hardCircle');

    const hardDashLength = (hardSolved / totalHardProblems) * 50;
    const gapLength = 260 - hardDashLength;
    const hardOffset =medium; // Adjust the offset value here

    hardCircle.setAttribute('stroke-dasharray', `${hardDashLength} ${gapLength}`);
    hardCircle.setAttribute('stroke-dashoffset', `${hardOffset}`);
  }, [hardSolved, totalHardProblems, easy,medium]);

  return (
    <div className="h-48 w-96 bg-[#292726] opacity-1 rounded-lg py-2 shadow-md m-4">
      <div className="flex h-9 items-center justify-between ">
        <div className="min-w-[70px] flex-shrink truncate text-lg font-medium text-lc-text-primary text-white hover:text-gray-400 m-4">
          LeetCode
        </div>
      </div>
      <div className="mx-1">
        <div className="flex items-center justify-between h-32 bg-white text-black rounded-lg ">
          <div className="w-1/2">
            <div>
              <svg
                class="h-full w-full origin-center -rotate-90 transform flex"
                viewBox="0 0 100 100"
              >
                <circle
                  fill="none"
                  cx="50px"
                  cy="50px"
                  r="27px"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke="currentColor"
                  class="text-gray-4 dark:text-dark-gray-4"
                ></circle>
                <circle
                   id="easyCircle"
                  fill="none"
                  cx="50px"
                  cy="50px"
                  r="27px"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke="#22c55e"
                  class="cursor-pointer text-pink dark:text-dark-pink"
                  stroke-dasharray=""
                  stroke-dashoffset="-26.351866736081547"
                  data-difficulty="Easy"
                ></circle>

                <circle
                  id="mediumCircle"
                  fill="none"
                  cx="50px"
                  cy="50px"
                  r="27px"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke="#facc15"
                  class="cursor-pointer text-yellow dark:text-dark-yellow"
                  stroke-dasharray="11.3 251.60874894272882"
                  stroke-dashoffset="-14.06683277726773"
                  data-difficulty="MEDIUM"
                ></circle>
                <circle
                  id="hardCircle"
                  fill="none"
                  cx="50px"
                  cy="50px"
                  r="27px"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke="#db2777"
                  class="cursor-pointer text-pink dark:text-dark-pink"
                  stroke-dasharray="0.01 260"
                  stroke-dashoffset="-26.351866736081547"
                  data-difficulty="HARD"
                ></circle>
              </svg>
            </div>
          </div>
          <div className="flex flex-auto flex-col min-w-max space-y-2.5 max-w-[150px] min-w-[145px]">
            <div
              data-difficulty="EASY"
              class="flex items-center justify-between text-center truncate cursor-pointer "
            >
              <div class="text-base leading-tight grow text-left">
                <span class="text-olive text-[#22c55e] font-semibold">
                  Easy
                </span>
              </div>
              <div class="text-label-2 dark:text-dark-label-2 font-semibold leading-none px-[3px] text-lg">
                150
              </div>
              <div class="text-label-4 dark:text-dark-label-4 text-base leading-none font-semibold pr-2">
                / 705
              </div>
            </div>
            <div
              data-difficulty="MEDIUM"
              class="flex items-center justify-between text-center truncate cursor-pointer"
            >
              <div class="text-base leading-tight grow text-left">
                <span class="text-yellow text-[#facc15] font-semibold ">
                  Medium{" "}
                </span>
              </div>
              <div class="text-label-2 dark:text-dark-label-2 font-semibold leading-none px-[1px] text-lg">
                131
              </div>
              <div class="text-label-4 dark:text-dark-label-4 text-base leading-none font-semibold pr-2 tracking-tightest">
                /1490
              </div>
            </div>
            <div
              data-difficulty="HARD"
              class="flex items-center justify-between text-center truncate cursor-pointer"
            >
              <div class="text-base leading-tight grow text-left">
                <span class="text-pink text-[#db2777] font-semibold ">
                  Hard
                </span>
              </div>
              <div class="text-label-2 dark:text-dark-label-2 font-semibold leading-none px-[3px] text-lg">
                8
              </div>
              <div class="text-label-4 dark:text-dark-label-4 text-base leading-none font-semibold pr-2">
                /619
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Adding a new flex container below */}
    </div>
  );
}
