import axios from "axios";
import {
  Bell,
  CreditCard,
  Home,
  LogOut,
  Package,
  PieChart,
  Settings,
  User,
  Wifi,
} from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingUI from "../../components/LoadingUI";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Progress } from "../../components/ui/progress";
import { AuthContext } from "../AuthContext";

const AccHome = () => {
  const { user } = useContext(AuthContext);
  const [isToggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.accountId) {
      console.error("User ID is not defined");
      return;
    }
  }, [user]);

  const getDate = () => {
    let date = "Unknown";
    if (user.dateCreated) {
      date = user.dateCreated;
    }

    return date;
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/logout");

      if (response.data === "Logged out successfully") {
        alert("Logged out successfully");
      }

      setTimeout(() => {
        setLoading(false);
      }, 5000);

      navigate("/signin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return <LoadingUI />;
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-red-600 text-white p-6">
        <div className="flex items-center mb-8">
          <Wifi className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold">OptiNET</h1>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-red-700"
              >
                <Home className="h-5 w-5 mr-3" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-red-700"
              >
                <CreditCard className="h-5 w-5 mr-3" />
                Billing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-red-700"
              >
                <Package className="h-5 w-5 mr-3" />
                Plans
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-red-700"
              >
                <PieChart className="h-5 w-5 mr-3" />
                Usage
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-red-700"
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome back, {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}!
          </h2>
          <div className="flex items-center gap-2 justify-center">
            <Button variant="outline" className="border-0" size="icon">
              <Bell className="h-7 w-7" />
            </Button>
            <DropdownMenu className="w-full">
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage className="w-12 h-12" src="https://avatars.githubusercontent.com/u/144509235?v=4" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="hover:bg-slate-100 cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-100 cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="hover:bg-slate-100 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Monthly Bill Card */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Bill</CardTitle>
              <CardDescription>Due on May 1, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">$59.99</div>
              <p className="text-sm text-green-600 mt-2">
                Paid on April 25, 2024
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                View Bill Details
              </Button>
            </CardFooter>
          </Card>

          {/* Current Plan Card */}
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>High-Speed Internet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold mb-2">100 Mbps</div>
              <Progress value={75} className="h-2 mb-2" />
              <p className="text-sm text-gray-600">75% of your data used</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Manage Plan
              </Button>
            </CardFooter>
          </Card>

          {/* Upgrade Plan Card */}
          <Card>
            <CardHeader>
              <CardTitle>Upgrade Your Plan</CardTitle>
              <CardDescription>Get more speed and data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>250 Mbps</span>
                  <span className="font-semibold">$79.99/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>500 Mbps</span>
                  <span className="font-semibold">$99.99/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>1 Gbps</span>
                  <span className="font-semibold">$129.99/mo</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Upgrade Now
              </Button>
            </CardFooter>
          </Card>

          {/* Usage Statistics Card */}
          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle>Usage Statistics</CardTitle>
              <CardDescription>
                Your internet usage over the past month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] bg-gray-100 rounded-md flex items-center justify-center">
                <span className="text-gray-500">Usage graph placeholder</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AccHome;
