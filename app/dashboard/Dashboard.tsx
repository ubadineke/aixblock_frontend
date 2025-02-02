import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


const Dashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    <Card className="bg-purple-900/10 border-purple-500/20">
      <CardHeader>
        <CardTitle className="text-purple-200">Your Contributions</CardTitle>
        <CardDescription className="text-purple-300">
          Track your open source impact
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-purple-200">Total Points</span>
            <span className="text-2xl font-bold text-purple-400">156</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-purple-200">This Month</span>
            <span className="text-xl text-purple-400">23</span>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className="bg-purple-900/10 border-purple-500/20">
      <CardHeader>
        <CardTitle className="text-purple-200">Rewards Available</CardTitle>
        <CardDescription className="text-purple-300">
          Claimable tokens based on points
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-purple-200">Available Tokens</span>
            <span className="text-2xl font-bold text-purple-400">2,450 AIX</span>
          </div>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-all">
            Claim Rewards
          </button>
        </div>
      </CardContent>
    </Card>

    <Card className="bg-purple-900/10 border-purple-500/20">
      <CardHeader>
        <CardTitle className="text-purple-200">Recent Activity</CardTitle>
        <CardDescription className="text-purple-300">
          Your latest contributions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { type: "Bug Fix", points: 5, date: "2024-02-01" },
            { type: "Feature", points: 8, date: "2024-01-28" }
          ].map((activity, i) => (
            <div key={i} className="flex justify-between items-center">
              <div>
                <div className="text-purple-200">{activity.type}</div>
                <div className="text-sm text-purple-400">{activity.date}</div>
              </div>
              <span className="text-purple-300">+{activity.points} pts</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default Dashboard
