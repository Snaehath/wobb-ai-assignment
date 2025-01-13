import React, { useState } from "react";
import { Grid, Search, BookmarkPlus, Calendar, Users } from "lucide-react";

import { campaignData } from "./data/sampleData.js";
import Card from "./components/Card.jsx";
import Navbar from "./components/Navbar.jsx";
import Filter from "./components/Filter.jsx";

const CampaignCard = () => {
  const [viewType, setViewType] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredCampaigns = campaignData.filter((campaign) => {
    const matchesSearchQuery = campaign.brand
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === "All" ||
      campaign.payout.includes(filter) ||
      campaign.platform.includes(filter);

    return matchesSearchQuery && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Available Campaigns
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 sm:flex-none">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  className="pl-10 pr-4 py-2 w-full sm:w-64 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                className="p-2 rounded-lg border hover:bg-gray-50"
                onClick={() =>
                  setViewType(viewType === "grid" ? "list" : "grid")
                }
              >
                <Grid size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
          <Filter setFilter={setFilter} />
        </div>

        {/* Campaign Grid */}
        <div
          className={`grid gap-6 ${
            viewType === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {filteredCampaigns.length > 0 ? (
            filteredCampaigns.map((campaign) => (
              <Card key={campaign.id}>
                <div className="relative">
                  <img
                    src={campaign.image}
                    alt={campaign.brand}
                    className="w-full h-48 object-contain rounded-t-lg"
                  />
                  <button className="absolute top-4 right-4 p-1.5 rounded-full bg-white/90 hover:bg-white">
                    <BookmarkPlus size={20} className="text-gray-700" />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-gray-900">
                        {campaign.brand}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium
                      ${
                        campaign.payout.includes("Fixed Pay")
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                      >
                        {campaign.payout}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {campaign.deadline}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {campaign.hired}/{campaign.total} hired
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                        style={{
                          width: `${(campaign.hired / campaign.total) * 100}%`,
                        }}
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      {campaign.total - campaign.hired} spots remaining
                    </p>
                  </div>

                  <p className="text-gray-600">{campaign.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">Platform:</span>
                      {campaign.platform}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {campaign.requirements.map((req) => (
                        <span
                          key={req}
                          className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Quick Apply
                    </button>
                    <button className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <h1 className="text-center text-gray-500 text-xl font-medium mt-10 md:text-2xl lg:text-3xl">
              No Results
            </h1>
          )}
        </div>
      </main>
    </div>
  );
};

export default CampaignCard;
