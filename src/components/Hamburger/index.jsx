import React from "react";
import { connect } from "react-redux";
import {  SmileOutlined  } from "@ant-design/icons";
import { toggleSiderBar } from "@/store/actions";
import "./index.less";
import {Button} from "antd";
const Hamburger = (props) => {
  const { sidebarCollapsed, toggleSiderBar } = props;
  return (
    <div className="hamburger-container">
        <Button
            icon={sidebarCollapsed?<SmileOutlined />:''}
            onClick={toggleSiderBar}
        />

    </div>
  );
};

export default connect((state) => state.app, { toggleSiderBar })(Hamburger);
