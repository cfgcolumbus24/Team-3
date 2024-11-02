import Sidebar from '../sidebar_components/sidebar';

export const Dashboard = () => {
  return (
    <>
        <Sidebar />
        {/* Main Content */}
      <div className="w-4/5 p-8 space-y-6">
        {/* Top Row - Funding Cards */}
        <div className="flex space-x-6">
          {/* Funding Left Card */}
          <Card className="flex-1 p-6 bg-white shadow-lg rounded-lg">
            <CardHeader className="text-xl font-bold text-gray-800">
              Funding Left
            </CardHeader>
            <CardContent className="mt-4 text-gray-700">
              <p className="text-2xl font-semibold">$50,000</p>
              <p className="text-sm mt-2">
                <span className="font-bold">+10%</span> from last month
              </p>
            </CardContent>
          </Card>

          {/* Monthly Funding Card */}
          <Card className="flex-1 p-6 bg-white shadow-lg rounded-lg">
            <CardHeader className="text-xl font-bold text-gray-800">
              Monthly Funding Received
            </CardHeader>
            <CardContent className="mt-4 text-gray-700">
              <p className="text-2xl font-semibold">$60,000</p>
              <p className="text-sm mt-2">
                <span className="font-bold text-green-500">+15%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section - Ongoing Projects */}
        <div>
          <h2 className="text-xl font-bold mb-4">Ongoing Projects</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <Card className="p-6 bg-white shadow-lg rounded-lg">
              <CardHeader className="text-lg font-semibold text-gray-800">
                Rebuilding Playground
              </CardHeader>
              <CardContent className="mt-4 text-gray-700">
                <p className="mb-2">Improving playground facilities for the kids.</p>
                <Progress value={60} className="h-2 bg-gray-300" />
                <p className="text-sm mt-2">60% Complete</p>
              </CardContent>
            </Card>

            {/* Project Card 2 */}
            <Card className="p-6 bg-white shadow-lg rounded-lg">
              <CardHeader className="text-lg font-semibold text-gray-800">
                New Library Construction
              </CardHeader>
              <CardContent className="mt-4 text-gray-700">
                <p className="mb-2">Building a new library for the school.</p>
                <Progress value={45} className="h-2 bg-gray-300" />
                <p className="text-sm mt-2">45% Complete</p>
              </CardContent>
            </Card>

            {/* Project Card 3 */}
            <Card className="p-6 bg-white shadow-lg rounded-lg">
              <CardHeader className="text-lg font-semibold text-gray-800">
                STEM Lab Upgrade
              </CardHeader>
              <CardContent className="mt-4 text-gray-700">
                <p className="mb-2">Upgrading equipment in the STEM lab.</p>
                <Progress value={30} className="h-2 bg-gray-300" />
                <p className="text-sm mt-2">30% Complete</p>
              </CardContent>
            </Card>

            {/* Project Card 4 */}
            <Card className="p-6 bg-white shadow-lg rounded-lg">
              <CardHeader className="text-lg font-semibold text-gray-800">
                Cafeteria Renovation
              </CardHeader>
              <CardContent className="mt-4 text-gray-700">
                <p className="mb-2">Renovating the cafeteria facilities.</p>
                <Progress value={75} className="h-2 bg-gray-300" />
                <p className="text-sm mt-2">75% Complete</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
