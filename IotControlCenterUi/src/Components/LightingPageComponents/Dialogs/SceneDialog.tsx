import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import AnimationIcon from "@mui/icons-material/Animation";
import IOperationButton, { sceneButtonStyle } from "../../OperationButton";
import {
  gridContainerStyle,
  gridItemStyle,
  titleStyle,
  pageDivStyle,
  subHeadingStyle,
} from "../../../Styles/DialogStyles";
// import background from "../LightingComponents/image.png";
import { LightingRequest } from "../../../types";
import { post } from "../../../utils";
import config from "../../../config";

const buttonBoxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  backgroundColor: "#2C2C2E",
  width: "90%",
  borderRadius: "10px",
  paddingBottom: "10px",
  paddingTop: "10px",
};

const oceanSceneButtonStyle = {
  fontFamily: "Ubuntu, -apple-system",
  fontWeight: "medium",
  fontSize: "16px",
  color: "white",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "left",
  width: "85%",
  height: "80px",
  borderRadius: "10px",
  backgroundColor: "#2a5cd1",
};

const roseSceneButtonStyle = {
  fontFamily: "Ubuntu, -apple-system",
  fontWeight: "medium",
  fontSize: "16px",
  color: "white",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "left",
  width: "85%",
  height: "80px",
  borderRadius: "10px",
  backgroundColor: "#f368f7",
};

const candySceneButtonStyle = {
  fontFamily: "Ubuntu, -apple-system",
  fontWeight: "medium",
  fontSize: "16px",
  color: "white",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "left",
  width: "85%",
  height: "80px",
  borderRadius: "10px",
  backgroundColor: "#ab5dc7",
};

const rainbowSceneButtonStyle = {
  fontFamily: "Ubuntu, -apple-system",
  fontWeight: "medium",
  fontSize: "16px",
  color: "white",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "left",
  width: "85%",
  height: "80px",
  borderRadius: "10px",
  backgroundImage: "url(/image.png)",
};

const peachySceneButtonStyle = {
  fontFamily: "Ubuntu, -apple-system",
  fontWeight: "medium",
  fontSize: "16px",
  color: "white",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "left",
  width: "85%",
  height: "80px",
  borderRadius: "10px",
  backgroundColor: "#f09f48",
};

const jungleSceneButtonStyle = {
  fontFamily: "Ubuntu, -apple-system",
  fontWeight: "medium",
  fontSize: "16px",
  color: "white",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "left",
  width: "85%",
  height: "80px",
  borderRadius: "10px",
  backgroundColor: "#227a1c",
};

const onClickOcean = () => {
  const sceneRequest: LightingRequest = {
    operation: "ocean",
  };
  post(config.OCEAN_SCENE_ENDPOINT, sceneRequest);
};

const onClickRose = () => {
  const sceneRequest: LightingRequest = {
    operation: "rose",
  };
  post(config.ROSE_SCENE_ENDPOINT, sceneRequest);
};

const onClickRainbow = () => {
  const sceneRequest: LightingRequest = {
    operation: "rainbow",
  };
  post(config.RAINBOW_SCENE_ENDPOINT, sceneRequest);
};

const onClickCandy = () => {
  const sceneRequest: LightingRequest = {
    operation: "candy",
  };
  post(config.CANDY_SCENE_ENDPOINT, sceneRequest);
};

const onClickPeachy = () => {
  const sceneRequest: LightingRequest = {
    operation: "peachy",
  };
  post(config.PEACHY_SCENE_ENDPOINT, sceneRequest);
};

const onClickJungle = () => {
  const sceneRequest: LightingRequest = {
    operation: "jungle",
  };
  post(config.JUNGLE_SCENE_ENDPOINT, sceneRequest);
};

const SceneDialog: FC = () => {
  return (
    <div style={pageDivStyle}>
      <Box style={gridItemStyle}>
        <Typography style={titleStyle}>Environments</Typography>
      </Box>
      <Box style={gridItemStyle}>
        <Typography style={subHeadingStyle}>Select a preset scene</Typography>
      </Box>
      <Grid container spacing={2} style={gridContainerStyle}>
        <Grid item xs={12} style={gridItemStyle}>
          <Box style={buttonBoxStyle}>
            <Grid container spacing={2} style={gridContainerStyle}>
              <Grid item xs={6} style={gridItemStyle}>
                <IOperationButton
                  operationName={"Ocean"}
                  style={oceanSceneButtonStyle}
                  onClick={onClickOcean}
                  icon={<AnimationIcon></AnimationIcon>}
                ></IOperationButton>
              </Grid>
              <Grid item xs={6} style={gridItemStyle}>
                <IOperationButton
                  operationName={"Rose"}
                  style={roseSceneButtonStyle}
                  onClick={onClickRose}
                  icon={<AnimationIcon></AnimationIcon>}
                ></IOperationButton>
              </Grid>
              <Grid item xs={6} style={gridItemStyle}>
                <IOperationButton
                  operationName={"Candy"}
                  style={candySceneButtonStyle}
                  onClick={onClickCandy}
                  icon={<AnimationIcon></AnimationIcon>}
                ></IOperationButton>
              </Grid>
              <Grid item xs={6} style={gridItemStyle}>
                <IOperationButton
                  operationName={"Rainbow"}
                  style={rainbowSceneButtonStyle}
                  onClick={onClickRainbow}
                  icon={<AnimationIcon></AnimationIcon>}
                ></IOperationButton>
              </Grid>
              <Grid item xs={6} style={gridItemStyle}>
                <IOperationButton
                  operationName={"Peachy"}
                  style={peachySceneButtonStyle}
                  onClick={onClickPeachy}
                  icon={<AnimationIcon></AnimationIcon>}
                ></IOperationButton>
              </Grid>
              <Grid item xs={6} style={gridItemStyle}>
                <IOperationButton
                  operationName={"Jungle"}
                  style={jungleSceneButtonStyle}
                  onClick={onClickJungle}
                  icon={<AnimationIcon></AnimationIcon>}
                ></IOperationButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default SceneDialog;
