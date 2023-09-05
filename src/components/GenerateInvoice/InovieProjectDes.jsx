/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Text, View, StyleSheet, Image, Svg, Line } from "@react-pdf/renderer";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    // margin: 10,
    padding: 10,
  },
  box: {
    width: "100%",
    height: 200,
    backgroundColor: "lightgray",
    borderRadius: 5,
    position: "relative",
  },
  text: {
    fontSize: 12,
    textAlign: "left",
    margin: "10px 10px 10px 10px",
    textDecoration: "underline",
    fontWeight: 400,
  },
  text2: {
    fontSize: 12,
    textAlign: "center",
    margin: "10px 10px 10px 10px",
    fontWeight: 400,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    paddingRight: 20,
  },
  logo: {
    width: 30,
    height: 15,
    marginTop: 50,
  },
  line: {
    borderTop: 1,
    borderColor: "black",
    width: "100%",
    position: "absolute",
    top: "75%",
  },
});

const InovieProjectDes = () => {
  return (
    <View style={styles.section}>
      <View style={styles.box}>
        <Text style={styles.text}>Project:-</Text>
        <View style={styles.line}></View>
        <Text style={styles.text2}>
          Follow Us:
          <Image style={styles.logo} src={google} />
          <Image style={styles.logo} src={facebook} />
          <Image style={styles.logo} src={instagram} />
          <Image style={styles.logo} src={twitter} />
          <Image style={styles.logo} src={linkedin} />
        </Text>
      </View>
    </View>
  );
};

export default InovieProjectDes;

{
  /* <Svg height="210" width="500">
          <Line
            x1="0"
            y1="0"
            x2="91%"
            y2="0 "
            strokeWidth={2}
            stroke="rgb(0,0,0)"
            style={styles.line}
          />
        </Svg> */
}

// const styles = StyleSheet.create({
//   reactangle: {
//     marginTop: 10,
//     marginLeft: "auto",
//     marginRight: "auto",
//     width: 400,
//     height: 150,
//     backgroundColor: "lightgray",
//     borderRadius: 20,
//     boxShadow: "1px 2px 9px #F4AAB9",
//   },
// });
