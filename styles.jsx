"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "#191b22",
        padding: 10
    },
    content: {
        display: "flex",
        flexDirection: "column",
    },
    list: {
        backgroundColor: "#282c37",
    },
    sideBarHeader: {
        backgroundColor: "#393f4f",
        display: "flex",
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        minHeight: 15,
        justifyContent: "space-between",
        marginBottom: 5
    },
    searchBar: {
        marginBottom: 5,
        backgroundColor: "#313543"
    },
    searchBarInput: {
        // backgroundColor: "#191b22",
        backgroundColor: "#313543"
    },
    titleBar: {
        backgroundColor: "#1f232b",
        padding: 5
    },
    icon: {
        margin: 5,
        color: "white"
    },
    whiteText: {
        color: "white"
    },
    row: {
        flex: 1,
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        marginBottom: 15,
        alignItems: "center"
    },
    mt: {
        marginTop: 18
    }
});
exports.default = styles;
