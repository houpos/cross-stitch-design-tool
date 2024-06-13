import styles from "./page.module.scss";
import { getDmcColors } from "@/api/colors";
import { Color } from "@/api/types";
import ColorSelector from "@/app/components/color-selector";
import DrawingGrid from "@/app/components/drawing-grid";
import DesignInformation from "@/app/components/design-info";
import { Suspense } from "react";

export default async function CurrentProject() {
  const dmcColors: Color[] = await getDmcColors();

  return (
    <main className={styles.designContainer}>
      <div className={styles.infoContainer}>
        <DesignInformation />
      </div>
      <div className={styles.creationContainer}>
        <DrawingGrid />
        <Suspense fallback={<div>Loading ... </div>}>
          <ColorSelector colors={dmcColors} />
        </Suspense>
      </div>
    </main>
  );
}
