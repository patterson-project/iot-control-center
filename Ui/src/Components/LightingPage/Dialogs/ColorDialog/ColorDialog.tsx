import { Box, Grid, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import {
  BrightnessRequest,
  Device,
  TemperatureRequest,
} from "../../../../types";
import config from "../../../../config";
import { post } from "../../../../utils";
import { pageDivStyle, subHeadingStyle } from "../../../../Styles/CommonStyles";
import ColorSelectionTab from "./ColorSelectionTab";
import LightingDeviceSwitches from "./LightingDeviceSwitches";
import Slider from "../../../Common/Slider";

interface IColorDialog {
  devices: Device[];
}

const gridContainerStyle = {
  marginTop: "0px",
  paddingBottom: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const gridItemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const titleStyle = {
  color: "white",
  fontSize: "40px",
  fontFamily: "Ubuntu, -apple-system",
  fontWeight: "bold",
};

const leftIconStyle = {
  color: "white",
  fontSize: "medium",
  marginLeft: "15px",
};

const rightIconStyle = {
  color: "white",
  fontSize: "medium",
  marginRight: "15px",
};

const ColorDialog: FC<IColorDialog> = (props) => {
  const [targetDevices, setTargetDevices] = useState<Device[]>([]);
  const [bulbOneTarget, setBulbOneTarget] = useState<boolean>(false);
  const [bulbTwoTarget, setBulbTwoTarget] = useState<boolean>(false);
  const [ledStripTarget, setLedStripTarget] = useState<boolean>(false);

  const onChangeBrightness = (value: number) => {
    targetDevices.forEach((device) => {
      const brightnessRequest: BrightnessRequest = {
        target: device._id,
        operation: "brightness",
        brightness: value,
      };
      if (device.model === "Kasa Bulb") {
        post(config.BULB_ENDPOINT + "/request", brightnessRequest);
      } else if (device.model === "Custom Led Strip") {
        post(config.CUSTOM_LED_STRIP_ENDPOINT + "/request", brightnessRequest);
      }
    });
  };

  const onChangeBulbTemperature = (value: number) => {
    targetDevices.forEach((device) => {
      const temperatureRequest: TemperatureRequest = {
        target: device._id,
        operation: "temperature",
        temperature: value,
      };
      if (device.model === "Kasa Bulb") {
        post(config.BULB_ENDPOINT + "/request", temperatureRequest);
      } else if (device.model === "Custom Led Strip") {
        post(config.CUSTOM_LED_STRIP_ENDPOINT + "/request", temperatureRequest);
      }
    });
  };

  return (
    <div style={pageDivStyle}>
      <Box style={gridItemStyle}>
        <Typography style={titleStyle}>Colors</Typography>
      </Box>
      <Box style={gridItemStyle}>
        <Typography style={subHeadingStyle}>
          Control your lighting devices
        </Typography>
      </Box>
      <Grid container spacing={1.5} style={gridContainerStyle}>
        <Grid item xs={12} style={gridItemStyle}>
          <ColorSelectionTab
            targetDevices={targetDevices}
            ledStripTarget={ledStripTarget}
            bulbOneTarget={bulbOneTarget}
            bulbTwoTarget={bulbTwoTarget}
          />
        </Grid>
        <Grid item xs={12} style={gridItemStyle}>
          <LightingDeviceSwitches
            targetDevices={targetDevices}
            setTargetDevices={setTargetDevices}
            devices={props.devices}
            setBulbOneTarget={setBulbOneTarget}
            setBulbTwoTarget={setBulbTwoTarget}
            setLedStripTarget={setLedStripTarget}
          />
        </Grid>
        <Grid item xs={12} style={gridItemStyle}>
          <Slider
            min={0}
            max={100}
            step={1}
            defaultValue={100}
            onChange={onChangeBrightness}
            startIcon={<BrightnessLowIcon style={leftIconStyle} />}
            endIcon={<BrightnessHighIcon style={rightIconStyle} />}
            title="Brightness"
          />
        </Grid>
        <Grid item xs={12} style={gridItemStyle}>
          <Slider
            min={2500}
            max={6500}
            step={50}
            defaultValue={2500}
            onChange={onChangeBulbTemperature}
            startIcon={<WbTwilightIcon style={leftIconStyle} />}
            endIcon={<WbSunnyIcon style={rightIconStyle} />}
            title="Temperature"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ColorDialog;
