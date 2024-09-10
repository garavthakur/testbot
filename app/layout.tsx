// import type { Metadata } from "next";
// import localFont from "next/font/local";
import Script from "next/script";
// import "./globals.css";
import "./asset/css/fonts/ff-1.css";
import "./asset/css/fonts/ff-3.css";
import "./css/fonts/bootstrap-icons.css";


import "./css/plugins.min.css"
import "./css/style.min.css"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     

      <body className="bg-black">{children}
      {/* <Script
          src="./js/plugins.js"
        
        /> */}
      <Script
          src="./js/app.js"
         // Load JavaScript after interactive
        />
      {/* <script src="./js/plugins.js"></script>
      <script src="/asset/js/app.js"></script> */}
      </body>
    </html>
  );
}
