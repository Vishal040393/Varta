import localFont from "next/font/local";

const notoSerifRegular = localFont({
    src: "./fonts/NotoSerif-Regular.ttf",
    variable: "--font-noto-serif-regular",
    weight: "100 900",
});


export default function provideFonts() {
    return `${notoSerifRegular.variable} antialiased`
}
