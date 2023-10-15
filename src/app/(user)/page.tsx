import React from "react";
import First from "@/components/First";
import Description from "@/components/Description";
import Count from "@/components/Count";
import TeamLeaders from "@/components/TeamLeaders";
import Footer from "@/components/Footer";

function page() {
  return (
    <div className="">
      <First />
      <Count />
      <Description />
      <TeamLeaders />
      <Footer />
    </div>
  );
}

export default page;