import Banner from "@/components/Banner";
import OrganicRemedies from "@/components/OrganicRemedies";
import PestControl from "@/components/PestControl";
import React from "react";

function page() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Banner image={"/banner3.jpg"} />
      <PestControl />
      <OrganicRemedies/>
    </div>
  );
}

export default page;
