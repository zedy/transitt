"use client";

import { DatePicker } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import { CalendarOutlined } from "@ant-design/icons";

/**
 * Date picker component based of Ant Design.
 *
 * The component receives on change functions from parent component,
 * so that we ensure scalability and reusability.
 *
 * The onChange function can by any type of FN just as long as it returns void
 */
export default function AntDDatePicker({
  onChange,
}: {
  onChange: (a: Dayjs | null, b: string) => void;
}) {
  return (
    <DatePicker
      onChange={onChange}
      defaultValue={dayjs()}
      format="YYYY-MM-DD"
      suffixIcon={<CalendarOutlined style={{ color: "white" }} />}
      style={{
        backgroundColor: "transparent",
        border: "none",
        color: "white",
        maxWidth: "130px",
      }}
    />
  );
}
