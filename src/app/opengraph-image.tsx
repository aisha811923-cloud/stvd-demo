import { ImageResponse } from "next/og";
import { getBaseUrl } from "@/lib/constants";

export const runtime = "edge";
export const alt = "St. Teresa Vidya Deep Senior Secondary School, Udaipur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const siteUrl = getBaseUrl();
  const crestUrl = `${siteUrl}/images/brand/crest.png`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050b14",
          backgroundImage:
            "radial-gradient(circle at 50% 40%, #1e293b 0%, #050b14 70%)",
          border: "12px solid #1e293b",
          padding: "40px",
          textAlign: "center",
        }}
      >
        {/* Crest Container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            height: "150px",
            marginBottom: "24px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={crestUrl}
            alt="STVDS Crest"
            width="150"
            height="150"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* School Name */}
        <div
          style={{
            fontSize: "44px",
            fontWeight: "bold",
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginBottom: "8px",
            fontFamily: "serif",
          }}
        >
          St. Teresa Vidya Deep Sr. Sec. School
        </div>

        {/* Motto & Heritage */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#fbbf24",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          SEEK YE WISDOM • ESTD. 1996
        </div>

        {/* Accreditation & Campus */}
        <div
          style={{
            fontSize: "18px",
            color: "#94a3b8",
            maxWidth: "750px",
          }}
        >
          CBSE Affiliated Co-Educational Convent Institution • Saveena, Udaipur
        </div>
      </div>
    ),
    { ...size }
  );
}
