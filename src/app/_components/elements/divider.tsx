import React from "react";

/**
 * Horizontal divider component.
 *
 * Use it in between components to separate them so that you don't
 * need to write the same code over and over again and to keep
 * the code DRY, but most importantly to stop needless margins from beeing
 * added to sibling components.
 *
 * @param margin string
 * @returns React.ReactNode
 */
function Divider({ margin }: { margin?: string }) {
  return <div className="h-1 w-full" style={{ margin }} />;
}

export default React.memo(Divider);
