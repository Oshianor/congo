import React, { useState } from "react";
import SerratedTabs from "./SerratedTabs";

const Demo = () => {
  const [index, setIndex] = useState(0);
  return (
    <AppBar
      position={"static"}
      elevation={0}
      style={{ backgroundColor: "#E6E8EB" }}
    >
      <Toolbar
        // you need to set override hidden in toolbar
        style={{ overflow: "hidden" }}
      >
        <SerratedTabs
          style={{ alignSelf: "flex-end" }}
          tabs={[
            { label: "Profile" },
            { label: "Calendar" },
            { label: "Contacts" },
            { label: "Settings" }
          ]}
          tabStyle={{
            bgColor: "#4486a3",
            selectedBgColor: "#ffffff"
          }}
          tabProps={{
            disableRipple: true
          }}
          value={index}
          onChange={(e, i) => setIndex(i)}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Demo;
