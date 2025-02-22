import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import moment from "moment";

const About = () => {
  const [showAccordion, setShowAccordion] = useState(false);
  const [duration, setDuration] = useState("xx");
  console.log(duration, "=> duration");
  // calc live site time
  // Calculate live site duration
  useEffect(() => {
    const calculateDuration = () => {
      const now = moment();
      const futureDate = moment([2025, 1, 21]); // Feb 21, 2025

      const years = futureDate.diff(now, "years");
      const months = futureDate.diff(now.clone().add(years, "years"), "months");
      const days = futureDate.diff(
        now.clone().add(years, "years").add(months, "months"),
        "days"
      );
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
        `${Math.abs(years)} years, ${Math.abs(months)} months, ${Math.abs(
          days
        )} days, ${Math.abs(hours)} hours, ${Math.abs(
          minutes
        )} minutes, ${Math.abs(seconds)} seconds`
      );
    };

    calculateDuration();
    const interval = setInterval(calculateDuration, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="w-10/12 mx-auto">
      <NavBar></NavBar>
      <div className="about-container mt-10 w-1/2 flex flex-col items-center justify-center mx-auto ">
        {/* 1stt accordion */}
        <div
          onClick={() => setShowAccordion(!showAccordion)}
          className="hover:cursor-pointer collapse collapse-arrow bg-base-200 my-4"
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">Developed By</div>
          <div
            className={`collapse-content ${showAccordion ? "block" : "hidden"}`}
          >
            <p>Sazol Sarker</p>
          </div>
        </div>
        {/* 2nd accordion */}
        <div
          onClick={() => setShowAccordion(!showAccordion)}
          className="collapse collapse-arrow bg-base-200 my-4"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Dragon-Z-News (React Project): Github Repository
          </div>
          <div
            className={`collapse-content ${
              showAccordion ? "display" : "hidden"
            }`}
          >
            <p className="text-green-600 font-semibold hover:text-green-800">
              <Link
                to={"https://github.com/Sazol-Sarker/Dragon-Z-News.git"}
                target="_blank"
              >
                https://github.com/Sazol-Sarker/Dragon-Z-News.git
              </Link>
            </p>
          </div>
        </div>
        <div
          onClick={() => setShowAccordion(!showAccordion)}
          className="collapse collapse-arrow bg-base-200 my-4"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            WebSite is Live for
          </div>
          <div
            className={`collapse-content ${
              showAccordion ? "display" : "hidden"
            }`}
          >
            <p>
              {duration}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
