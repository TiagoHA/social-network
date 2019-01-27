import * as React from "react";
import { View, ActivityIndicator } from "react-native";

interface Props {
  loading: boolean;
}

export default function Loading(props) {
  const { loading, children } = props;

  if (loading === false) return children && children;

  return (
    <View
      style={{
        alignSelf: "center",
        marginTop: 10
      }}
    >
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
