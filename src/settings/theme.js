import { createTheme } from "@mui/material/styles"
const theme = createTheme({
    palette: {
        background: {
            default: "#FCFFFD",
        },
        primary: {
            main: "#0A090C",
            dark: "#738290"
        },
        secondary: {
            main: "#FCFFFD",
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