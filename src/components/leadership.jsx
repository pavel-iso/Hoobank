import React from "react";
import leadershipImage from "../assets/leadership.jpg"; // Import the leadership image
const DiversitySection = () => {
  return (
    <div className="relative-d bg-gradient-to-r-d from-purple-500-d to-blue-500-d py-16-d">
      <div className="max-w-5xl-d mx-auto-d px-4-d">
        {/* Background Image */}
        <div
          className="bg-cover-d bg-center-d h-96-d mb-8-d relative-d"
          style={{ backgroundImage: `url(${leadershipImage})` }}
        >
          {/* Text Content */}
          <div className="text-white-d">
            <h2 className="text-lg-d font-semibold-d mb-2-d">
              A belief in diversity
            </h2>
          </div>
          <div>
            <p className="text-sm-d mb-8-d">
              How do you create remarkable change? By hiring, celebrating, and
              nurturing the best people - from all walks of life.
            </p>
          </div>
          <div>
            <button className="py-3-d px-6-d font-medium-d text-white-d bg-gradient-to-r-d from-blue-500-d to-purple-500-d rounded-lg-d shadow hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
              Search Open Roles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiversitySection;
