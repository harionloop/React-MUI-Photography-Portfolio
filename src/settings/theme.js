import { createTheme } from "@mui/material/styles"
const theme = createTheme({
    palette: {
        background: {
            default: "#F0EDEE",
        },
        primary: {
            main: "#0A090C",
            dark: "F06543"
        },
        secondary: {
            main: "#FF92C2",
        },
        text: {
            primary: "#0A090C"
        }

    },
    typography: {
        fontFamily: ["Dosis",
            'Nunito Sans',
            "Lora",
        ].join(",")
    }
})


export default theme