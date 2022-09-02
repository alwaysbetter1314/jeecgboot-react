import React from "react";
import { connect } from "react-redux";
import {Button, Tooltip} from "antd";
import { toggleSettingPanel } from "@/store/actions";
import "./index.less";
import {SmileOutlined} from "@ant-design/icons";
const Settings = (props) => {
  const { toggleSettingPanel } = props;
  return (
    <div className="settings-container">
      <Tooltip placement="bottom" title="系统设置">
          <Button
              icon={<SmileOutlined />}
              onClick={toggleSettingPanel}
          />
      </Tooltip>
    </div>
  );
};

export default connect(null, { toggleSettingPanel })(Settings);
