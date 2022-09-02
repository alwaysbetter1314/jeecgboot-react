import React, { useState, useEffect } from "react";
import screenFull from "screenfull";
import {Button, message, Tooltip} from "antd";
import "./index.less";
import {SmileOutlined} from "@ant-design/icons";

const click = () => {
  if (!screenFull.isEnabled) {
    message.warning("you browser can not work");
    return false;
  }
  screenFull.toggle();
};

const FullScreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const change = () => {
    setIsFullscreen(screenFull.isFullscreen);
  };

  useEffect(() => {
    screenFull.isEnabled && screenFull.on("change", change);
    return () => {
      screenFull.isEnabled && screenFull.off("change", change);
    };
  }, []);

  const title = isFullscreen ? "取消全屏" : "全屏";
  const type = isFullscreen ? "fullscreen-exit" : "fullscreen";
  return (
    <div className="fullScreen-container">
      <Tooltip placement="bottom" title={title}>
        <Button
            icon={<SmileOutlined />}
            onClick={click}
        />
      </Tooltip>
    </div>
  );
};

export default FullScreen;
