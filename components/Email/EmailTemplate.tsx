import * as React from "react";

type EmailTemplateProps = {
  firstName: string;
  message?: string;
};

export function EmailTemplate({ firstName, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ margin: "0 0 8px", fontSize: "20px", color: "#111" }}>
        Welcome, {firstName}! 👋
      </h1>

      <p
        style={{
          margin: 0,
          fontSize: "14px",
          lineHeight: "1.5",
          color: "#555",
        }}
      >
        {message ?? "Thanks for signing up. Your account is ready."}
      </p>
    </div>
  );
}
