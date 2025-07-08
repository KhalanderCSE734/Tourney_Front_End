import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/Components/Navigation';
import Footer from '@/Components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, User } from "lucide-react";

const Fixtures = () => {
  const location = useLocation();
  const eventName = location.state?.eventName || "Tournament";
  
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Sample fixtures data - in a real app, this would come from an API
  const sampleFixtures = [
    {
      id: 1,
      round: "Quarter Finals",
      matches: [
        { id: 101, team1: "Team Alpha", team2: "Team Beta", time: "09:00 AM", date: "2023-12-15" },
        { id: 102, team1: "Team Gamma", team2: "Team Delta", time: "11:00 AM", date: "2023-12-15" },
        { id: 103, team1: "Team Epsilon", team2: "Team Zeta", time: "01:00 PM", date: "2023-12-15" },
        { id: 104, team1: "Team Eta", team2: "Team Theta", time: "03:00 PM", date: "2023-12-15" },
      ]
    },
    {
      id: 2,
      round: "Semi Finals",
      matches: [
        { id: 201, team1: "TBD", team2: "TBD", time: "10:00 AM", date: "2023-12-16" },
        { id: 202, team1: "TBD", team2: "TBD", time: "01:00 PM", date: "2023-12-16" },
      ]
    },
    {
      id: 3,
      round: "Finals",
      matches: [
        { id: 301, team1: "TBD", team2: "TBD", time: "06:00 PM", date: "2023-12-17" },
      ]
    }
  ];

  // Fetch fixtures data
  useEffect(() => {
    // In a real application, you would fetch the fixtures data from an API
    // For now, we'll use the sample data
    setTimeout(() => {
      setFixtures(sampleFixtures);
      setLoading(false);
    }, 1000);
  }, []);

  // Display each match in a round
  const MatchComponent = ({ match }) => {
    return (
      <Card className="mb-4 shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">{match.date} - {match.time}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center w-5/12">
              <div className="p-3 bg-blue-50 rounded-lg text-center w-full mb-2">
                <span className="font-semibold">{match.team1}</span>
              </div>
            </div>
            <div className="w-2/12 text-center">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">
                VS
              </span>
            </div>
            <div className="flex flex-col items-center w-5/12">
              <div className="p-3 bg-blue-50 rounded-lg text-center w-full mb-2">
                <span className="font-semibold">{match.team2}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">{eventName} Fixtures</h1>
            <p className="text-gray-600 mt-2">View all matches and tournament brackets</p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {fixtures.map((round) => (
                <div key={round.id} className="bg-white rounded-xl shadow p-6">
                  <h2 className="text-xl font-bold mb-4 text-blue-600">{round.round}</h2>
                  <div className="space-y-4">
                    {round.matches.map((match) => (
                      <MatchComponent key={match.id} match={match} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-12 bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Tournament Rules</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>All matches will start at the scheduled time.</li>
              <li>Teams must report 30 minutes before their scheduled match time.</li>
              <li>Match format will be according to international standards.</li>
              <li>The referee's decision will be final and binding.</li>
              <li>Any disputes must be raised with the tournament director.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Fixtures; 