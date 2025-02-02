"use client"
import React, { useState } from 'react';
import {
  Users,
  Award,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Edit
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AdminDashboard = () => {
  const [rewardsOpen, setRewardsOpen] = useState(true);
  const [selectedContributor, setSelectedContributor] = useState(null);
  const [pointsToAssign, setPointsToAssign] = useState('');
  const [selectedContributionType, setSelectedContributionType] = useState('');

  const contributors = [
    {
      id: 1,
      name: 'John Doe',
      address: '0x1234...5678',
      points: 156,
      monthlyPoints: 23,
      claimedRewards: 1200,
      pendingRewards: 450,
      recentContributions: [
        { type: 'Bug Fix', points: 5, date: '2024-02-01', status: 'approved' },
        { type: 'Feature', points: 8, date: '2024-01-28', status: 'pending' }
      ]
    },
    // Add more mock contributors as needed
  ];

  const monthlyStats = {
    totalContributions: 45,
    totalPointsAwarded: 342,
    totalRewardsClaimed: 5600,
    pendingRewards: 2300,
    activeContributors: 12
  };

  const contributionTypes = [
    { name: "Minor Bug Fix", points: "1-2", category: "Bug Fixes" },
    { name: "Medium Bug Fix", points: "3-5", category: "Bug Fixes" },
    { name: "Major Bug Fix", points: "6-8", category: "Bug Fixes" },
    { name: "Critical Bug Fix", points: "9-10", category: "Bug Fixes" },
    { name: "Simple Feature", points: "2-4", category: "Feature Development" },
    { name: "Medium Feature", points: "5-7", category: "Feature Development" },
    { name: "Complex Feature", points: "8-10", category: "Feature Development" }
  ];

  const handlePointAssignment = (contributorId, points, contributionType) => {
    // Implement point assignment logic here
    console.log(`Assigned ${points} points for ${contributionType} to contributor ${contributorId}`);
  };

  const toggleRewardsWindow = () => {
    setRewardsOpen(!rewardsOpen);
  };

  const MonthlyOverview = () => (
    <Card className="bg-purple-900/10 border-purple-500/20 col-span-2">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Calendar className="text-purple-400" size={24} />
          <CardTitle className="text-purple-200">Monthly Overview</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <p className="text-purple-300">Total Contributions</p>
            <p className="text-2xl font-bold text-purple-400">{monthlyStats.totalContributions}</p>
          </div>
          <div className="space-y-2">
            <p className="text-purple-300">Points Awarded</p>
            <p className="text-2xl font-bold text-purple-400">{monthlyStats.totalPointsAwarded}</p>
          </div>
          <div className="space-y-2">
            <p className="text-purple-300">Active Contributors</p>
            <p className="text-2xl font-bold text-purple-400">{monthlyStats.activeContributors}</p>
          </div>
          <div className="space-y-2">
            <p className="text-purple-300">Total Rewards Claimed</p>
            <p className="text-2xl font-bold text-purple-400">{monthlyStats.totalRewardsClaimed} AIX</p>
          </div>
          <div className="space-y-2">
            <p className="text-purple-300">Pending Rewards</p>
            <p className="text-2xl font-bold text-purple-400">{monthlyStats.pendingRewards} AIX</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const RewardsControl = () => (
    <Card className="bg-purple-900/10 border-purple-500/20">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Award className="text-purple-400" size={24} />
          <CardTitle className="text-purple-200">Rewards Control</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-purple-300">Rewards Window Status</span>
            <span className={`text-${rewardsOpen ? 'green' : 'red'}-400`}>
              {rewardsOpen ? 'Open' : 'Closed'}
            </span>
          </div>
          <Button
            onClick={toggleRewardsWindow}
            className={`w-full ${rewardsOpen
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-green-600 hover:bg-green-700'
              } text-white`}
          >
            {rewardsOpen ? 'Close Rewards Window' : 'Open Rewards Window'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const ContributorsList = () => (
    <Card className="bg-purple-900/10 border-purple-500/20 col-span-2">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Users className="text-purple-400" size={24} />
          <CardTitle className="text-purple-200">Contributors</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contributors.map((contributor) => (
            <div key={contributor.id} className="border border-purple-500/20 rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-purple-200 font-semibold">{contributor.name}</h3>
                  <p className="text-purple-400 text-sm">{contributor.address}</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Assign Points
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-purple-900 border-purple-500">
                    <DialogHeader>
                      <DialogTitle className="text-purple-200">
                        Assign Points to {contributor.name}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Select
                        onValueChange={setSelectedContributionType}
                        className="text-purple-200"
                      >
                        <SelectTrigger className="bg-purple-900/50 border-purple-500">
                          <SelectValue placeholder="Select contribution type" />
                        </SelectTrigger>
                        <SelectContent className="bg-purple-900 border-purple-500">
                          {contributionTypes.map((type) => (
                            <SelectItem
                              key={type.name}
                              value={type.name}
                              className="text-purple-200 hover:bg-purple-800"
                            >
                              {type.name} ({type.points} pts)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        type="number"
                        placeholder="Enter points"
                        value={pointsToAssign}
                        onChange={(e) => setPointsToAssign(e.target.value)}
                        className="bg-purple-900/50 border-purple-500 text-purple-200"
                      />
                      <Button
                        onClick={() => handlePointAssignment(
                          contributor.id,
                          pointsToAssign,
                          selectedContributionType
                        )}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        Confirm Points
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-purple-300 text-sm">Total Points</p>
                  <p className="text-purple-200 font-semibold">{contributor.points}</p>
                </div>
                <div>
                  <p className="text-purple-300 text-sm">Monthly Points</p>
                  <p className="text-purple-200 font-semibold">{contributor.monthlyPoints}</p>
                </div>
                <div>
                  <p className="text-purple-300 text-sm">Claimed Rewards</p>
                  <p className="text-purple-200 font-semibold">{contributor.claimedRewards} AIX</p>
                </div>
                <div>
                  <p className="text-purple-300 text-sm">Pending Rewards</p>
                  <p className="text-purple-200 font-semibold">{contributor.pendingRewards} AIX</p>
                </div>
              </div>
              <div>
                <p className="text-purple-300 text-sm mb-2">Recent Contributions</p>
                <div className="space-y-2">
                  {contributor.recentContributions.map((contribution, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-purple-900/20 p-2 rounded"
                    >
                      <div>
                        <p className="text-purple-200">{contribution.type}</p>
                        <p className="text-purple-400 text-sm">{contribution.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-200">+{contribution.points} pts</span>
                        {contribution.status === 'approved' ? (
                          <CheckCircle className="text-green-400" size={16} />
                        ) : (
                          <AlertTriangle className="text-yellow-400" size={16} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MonthlyOverview />
        <RewardsControl />
        <ContributorsList />
      </div>
    </div>
  );
};

export default AdminDashboard;
