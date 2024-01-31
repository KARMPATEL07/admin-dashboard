import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const userImg =
  "https://media.licdn.com/dms/image/D4D35AQE5osco-SJJ2Q/profile-framedphoto-shrink_400_400/0/1698775377644?e=1707332400&v=beta&t=R5wuOO67c6TyGvTZgPXShXU_M8v18-OP_09hlTs3CSk";

const dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        {/* ..........Top-Bar................. */}
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search" />
          <FaRegBell />
          <img className="user-img" src={userImg} alt="userImage" />
        </div>

        {/* ..........Widgets................. */}
        <section className="widgetContainer">
          <WidgetItem
            percentage={40}
            amount={true}
            value={340000}
            title="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percentage={-14}
            value={400}
            title="Users"
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percentage={80}
            value={23000}
            title="Transactions"
            color="rgb(255,196,0)"
          />
          <WidgetItem
            percentage={30}
            value={1000}
            title="Products"
            color="rgb(75,0,255)"
          />
        </section>
      </main>
    </div>
  );
};

interface WidgetProps {
  title: string;
  value: number;
  percentage: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  title,
  value,
  percentage,
  color,
  amount=false,
}: WidgetProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{title}</p>
      <h4>{amount ? `₹${value}` : value}</h4>
      {percentage > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percentage}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown />
          {percentage}%
        </span>
      )}
    </div>
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(${color} ${
          (Math.abs(percentage) / 100) * 360
        }deg, rgb(255,255,255) 0)`,
      }}
    >
      <span style={{color}}>{percentage}%</span>
    </div>
  </article>
);

export default dashboard;
