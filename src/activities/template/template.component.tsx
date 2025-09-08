import { Tab, TabList, Tabs, TabPanel, TabPanels } from "@chakra-ui/tabs";
import React, { useEffect, useRef, useState } from "react";
import { useTitle } from "../../hooks/useTitle.component";
import { ActivityProps } from "../activity.interface";
import { AccessibilityToggle } from "./accessibilityToggle/accessibilityToggle.component";
import {
  activity,
  description,
  jsNotWorking,
  keyboardInfo,
  mobileKeyboard,
  tab,
  tabList,
  tabsContainer,
} from "./template.styles";
import { PretendKeys } from "./pretendKeyboardButtons/pretendKeyboardButtons.component";
import { isMobile, isTablet } from "react-device-detect";

interface ActivityTemplateProps {
  heading: string;
  description: JSX.Element;
  issue: JSX.Element;
  instructions: JSX.Element;
  activity: (props: ActivityProps) => JSX.Element;
  solution: JSX.Element;
}

//todo show message for non js initially

export function ActivityTemplate(props: ActivityTemplateProps) {
  useTitle(props.heading);
  const [isAccessible, setIsAccessible] = useState(false);
  const activityContainerRef = useRef<HTMLDivElement>(null);
  const [shouldShowPretendKeyboard, setShouldShowPretendKeyboard] =
    useState(false);
  const [solution, setSolution] = useState<JSX.Element>(<></>);
  const [isJsEnabled, setIsJsEnabled] = useState(false);

  useEffect(() => {
    setIsJsEnabled(true);
  }, []);

  //hydration is weird so this is needed otherwise it complains about the server html not matching what it expected initially
  useEffect(() => {
    setShouldShowPretendKeyboard(isMobile || isTablet);
    setSolution(props.solution);
  }, [isMobile, isTablet]);

  return (
    <>
      <h1>{props.heading}</h1>
      <p css={description}>{props.description}</p>

      {!isJsEnabled && (
        <noscript>
          <div css={jsNotWorking}>
            <span>!</span>
            <p>
              Your JavaScript is disabled or not working. The activity and Fix
              It tabs require JavaScript because they're interactive. If you
              want to access them, turn on JavaScript and refresh this page.
            </p>
            <p>
              For now, you can still see the explanation tab which describes the
              accessibility issue.
            </p>
          </div>
        </noscript>
      )}

      <noscript>{noJsTabs()}</noscript>

      {isJsEnabled && JsTabs()}
    </>
  );

  function noJsTabs() {
    return (
      <Tabs>
        <TabList css={tabList}>
          <Tab css={tab}>Explained</Tab>
        </TabList>

        <TabPanels css={tabsContainer}>
          <TabPanel>{props.issue}</TabPanel>
        </TabPanels>
      </Tabs>
    );
  }

  function JsTabs() {
    return (
      <Tabs defaultIndex={1}>
        <TabList css={tabList}>
          <Tab css={tab}>Explained</Tab>
          <Tab css={tab}>Experience it</Tab>
          <Tab css={tab}>Fix it</Tab>
        </TabList>

        <TabPanels css={tabsContainer}>
          <TabPanel>{props.issue}</TabPanel>
          <TabPanel>
            <>
              <AccessibilityToggle
                isAccessible={isAccessible}
                setIsAccessible={setIsAccessible}
              />
              <div ref={activityContainerRef}>
                {shouldShowPretendKeyboard && (
                  <>
                    <p css={keyboardInfo}>
                      Since you don't seem to be on a computer, here are some
                      keys that you can use for this keyboard accessibility
                      activity
                    </p>

                    <div css={mobileKeyboard}>
                      <PretendKeys ref={activityContainerRef} />
                    </div>
                  </>
                )}
                <div id="activity" css={activity}>
                  {props.activity({ isAccessible })}
                </div>
              </div>
            </>
          </TabPanel>
          <TabPanel>{solution}</TabPanel>
        </TabPanels>
      </Tabs>
    );
  }
}
