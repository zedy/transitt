"use client";

import { TimePicker } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import { ClockCircleOutlined } from "@ant-design/icons";

/**
 * Time picker component based of Ant Design.
 *
 * The component receives on change function from parent component,
 * so that we ensure scalability and reusability.
 */
export default function AntDTimePicker({
  onChange,
}: {
  onChange: (a: Dayjs | null, b: string) => void;
}) {
  const now = new Date();
  const timeNow = now.toLocaleTimeString();

  return (
    <TimePicker
      onChange={onChange}
      defaultValue={dayjs(timeNow, "HH:mm")}
      format="HH:mm"
      suffixIcon={<ClockCircleOutlined style={{ color: "white" }} />}
      style={{
        backgroundColor: "transparent",
        border: "none",
        color: "white",
        maxWidth: "100px",
      }}
    />
  );
}
