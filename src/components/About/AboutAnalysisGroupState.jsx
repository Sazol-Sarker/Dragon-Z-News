
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import moment from "moment";
import React from 'react';

const AboutAnalysisGroupState = () => {
const [showAccordion, setShowAccordion] = useState(null);
  const [duration, setDuration] = useState("Calculating...");

  // Calculate live site duration
  useEffect(() => {
    const calculateDuration = () => {
      const now = moment();
      const futureDate = moment([2025, 1, 21]); // Feb 21, 2025

      const years = futureDate.diff(now, "years");
      const months = futureDate.diff(now.clone().add(years, "years"), "months");
      const days = futureDate.diff(now.clone().add(years, "years").add(months, "months"), "days");
      const hours = futureDate.diff(
        now.clone().add(years, "years").add(months, "months").add(days, "days"),
        "hours"
      );
      const minutes = futureDate.diff(
        now
          .clone()
          .add(years, "years")
          .add(months, "months")
          .add(days, "days")
          .add(hours, "hours"),
        "minutes"
      );
      const seconds = futureDate.diff(
        now
          .clone()
          .add(years, "years")
          .add(months, "months")
          .add(days, "days")
          .add(hours, "hours")
          .add(minutes, "minutes"),
        "seconds"
      );

      setDuration(
        `${Math.abs(years)} years, ${Math.abs(months)} months, ${Math.abs(days)} days, ${Math.abs(hours)} hours, ${Math.abs(minutes)} minutes, ${Math.abs(seconds)} seconds`
      );
    };

    calculateDuration();
    const interval = setInterval(calculateDuration, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="w-10/12 mx-auto">
      <NavBar />
      <div className="about-container mt-10 w-1/2 flex flex-col items-center justify-center mx-auto">
        {/* Accordion 1 - Developed By */}
        <div
          onClick={() => setShowAccordion(showAccordion === 1 ? null : 1)}
          className="hover:cursor-pointer collapse collapse-arrow bg-base-200 my-4"
        >
          <div className="collapse-title text-xl font-medium">Developed By</div>
          <div className={`collapse-content ${showAccordion === 1 ? "block" : "hidden"}`}>
            <p>Sazol Sarker</p>
          </div>
        </div>

        {/* Accordion 2 - GitHub Repo */}
        <div
          onClick={() => setShowAccordion(showAccordion === 2 ? null : 2)}
          className="hover:cursor-pointer collapse collapse-arrow bg-base-200 my-4"
        >
          <div className="collapse-title text-xl font-medium">
            Dragon-Z-News (React Project): GitHub Repository
          </div>
          <div className={`collapse-content ${showAccordion === 2 ? "block" : "hidden"}`}>
            <p className="text-green-600 font-semibold hover:text-green-800">
              <Link to="https://github.com/Sazol-Sarker/Dragon-Z-News.git" target="_blank">
                GitHub Repository
              </Link>
            </p>
          </div>
        </div>

        {/* Accordion 3 - Website Live Duration */}
        <div
          onClick={() => setShowAccordion(showAccordion === 3 ? null : 3)}
          className="hover:cursor-pointer collapse collapse-arrow bg-base-200 my-4"
        >
          <div className="collapse-title text-xl font-medium">Website is Live for</div>
          <div className={`collapse-content ${showAccordion === 3 ? "block" : "hidden"}`}>
            <p>{duration}</p> {/* ✅ FIXED: Using `duration` instead of `years, months, days, ...` */}
          </div>
        </div>
      </div>
    </div>
  );   
};

export default AboutAnalysisGroupState;



