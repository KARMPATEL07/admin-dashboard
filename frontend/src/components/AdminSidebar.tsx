import {IconType} from "react-icons";
import {Link,Location,useLocation} from "react-router-dom";
import {RiDashboardFill, RiShoppingBag3Fill,RiCoupon3Fill} from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { FaChartBar,FaChartLine,FaChartPie,FaStopwatch,FaGamepad} from "react-icons/fa";

const AdminSidebar = () => {

  const location=useLocation();

  return (
    <aside>
      <h2>Logo.</h2>

      {/* ..............Dashboard ..................*/}
      <div>
        <h5>Dashboard</h5>
        <ul>
          <Li
            url="/admin/dashboard"
            location={location}
            Icon={RiDashboardFill}
            name="Dashboard"
          />
          <Li
            url="/admin/product"
            location={location}
            Icon={RiShoppingBag3Fill}
            name="Products"
          />
          <Li
            url="/admin/customer"
            location={location}
            Icon={IoIosPeople}
            name="Customer"
          />
          <Li
            url="/admin/transaction"
            location={location}
            Icon={AiFillFileText}
            name="Transaction"
          />
        </ul>
      </div>

      {/* ................Charts............... */}

      <div>
        <h5>Charts</h5>
        <ul>
          <Li
            url="/admin/chart/bar"
            location={location}
            Icon={FaChartBar}
            name="Bar"
          />
          <Li
            url="/admin/chart/pie"
            location={location}
            Icon={FaChartPie}
            name="Pie"
          />
          <Li
            url="/admin/chart/line"
            location={location}
            Icon={FaChartLine}
            name="Line"
          />
        </ul>
      </div>

      {/* ................Apps............... */}

      <div>
        <h5>Apps</h5>
        <ul>
          <Li
            url="/admin/app/stopwatch"
            location={location}
            Icon={FaStopwatch}
            name="Stopwatch"
          />
          <Li
            url="/admin/app/coupon"
            location={location}
            Icon={RiCoupon3Fill}
            name="Coupon"
          />
          <Li
            url="/admin/app/Toss"
            location={location}
            Icon={FaGamepad}
            name="Toss"
          />
        </ul>
      </div>

    </aside>
  );
}

interface LiProps{
  url:string;
  location:Location;
  Icon:IconType;
  name:string;
}

const Li =({url,location,Icon,name}:LiProps)=>(
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url)
          ? "rgb(0,115,255)"
          : "black",
      }}
    >
      <Icon />
      {name}
    </Link>
  </li>
)

export default AdminSidebar