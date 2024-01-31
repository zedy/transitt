import React from "react";

function Divider({ margin }: { margin?: string }) {
  return <div className="h-1 w-full" style={{ margin }} />;
}

export default React.memo(Divider);
