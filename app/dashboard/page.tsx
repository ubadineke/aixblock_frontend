"use client"
import React, { useState } from 'react';
import { GithubIcon, Code, Bug, LineChart, LogIn } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import AdminDashboard from './AdminDashboard';
import Dashboard from './Dashboard';
import Hero from "./Hero"

const ContributionTracker = () => {
  // const [isAdmin, setIsAdmin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isConnected, setIsConnected] = useState(false);

  const contributionTypes = [
    {
      type: "Bug Fixes",
      ratio: "25%",
      icon: Bug,
      breakdown: [
        { name: "Minor Bug Fix", points: "1-2" },
        { name: "Medium Bug Fix", points: "3-5" },
        { name: "Major Bug Fix", points: "6-8" },
        { name: "Critical Bug Fix", points: "9-10" }
      ]
    },
    {
      type: "Feature Development",
      ratio: "40%",
      icon: Code,
      breakdown: [
        { name: "Simple Feature", points: "2-4" },
        { name: "Medium Feature", points: "5-7" },
        { name: "Complex Feature", points: "8-10" }
      ]
    },
    {
      type: "Code Optimization",
      ratio: "15%",
      icon: LineChart,
      breakdown: [
        { name: "Minor Optimization", points: "1-2" },
        { name: "Medium Optimization", points: "3-5" },
        { name: "Major Optimization", points: "6-8" }
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="bg-purple-900/20 border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-purple-300">AIxBlock</div>
            {!isConnected ? (
              <button className="flex items-center space-x-2 bg-purple-600 px-4 py-2 rounded-lg">
                <LogIn size={20} />
                <span>Sign In</span>
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <span className="text-purple-300">0x1234...5678</span>
                <img
                  src="/api/placeholder/32/32"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            )}
          </div>
        </div>
      </nav>

      {!isConnected ? (
        <Hero setIsConnected={setIsConnected} />
      ) : (
        <div className="container mx-auto">
          <div className="flex space-x-4 p-6">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'dashboard' ? 'bg-purple-600' : 'bg-purple-900/20'
                }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('contributions')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'contributions' ? 'bg-purple-600' : 'bg-purple-900/20'
                }`}
            >
              Contributions
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`px-4 py-2 rounded-lg ${activeTab === 'admin' ? 'bg-purple-600' : 'bg-purple-900/20'
                }`}
            >
              Admin
            </button>
          </div>

          {activeTab === 'dashboard' && <Dashboard />}

          {activeTab === 'contributions' && (
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contributionTypes.map((contribution, index) => (
                <Card key={index} className="bg-purple-900/10 border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <contribution.icon className="text-purple-400" size={24} />
                      <CardTitle className="text-purple-200">
                        {contribution.type}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-purple-300">
                      Ratio: {contribution.ratio}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {contribution.breakdown.map((item, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <span className="text-purple-200">{item.name}</span>
                          <span className="text-purple-400">{item.points} pts</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'admin' && isAdmin && <AdminDashboard />}
        </div>
      )}
    </div>
  );
};

export default ContributionTracker;
