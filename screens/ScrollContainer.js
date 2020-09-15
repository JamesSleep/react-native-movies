import React from "react";
import PropTypes from "prop-types";
import { ScrollView, ActivityIndicator, RefreshControl } from "react-native";

const ScrollContainer = ({ loading, children }) => (
  <ScrollView
    refreshControl={<RefreshControl tintColor={"white"} />}
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      flex: loading ? 1 : "auto",
      justifyContent: loading ? "center" : "flex-end"
    }}
  >
    {loading ? (
      <ActivityIndicator color="white" size="small"/>
    ) : children}
  </ScrollView>
)

ScrollContainer.propTypes={
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default ScrollContainer;