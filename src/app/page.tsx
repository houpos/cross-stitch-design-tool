import { getAllProjects } from "@/api/projects";
import styles from "./page.module.scss";
import Cards from "./components/cards";
import CreateDesignButton from "./components/create-design-button";

export default async function Home() {
  const allProjects = await getAllProjects();
  return (
    <main className={styles.dashboardContainer}>
      {allProjects.length === 0 ? (
        <div className={styles.noProjects}>
          <img src="/bear-with-hoop.jpg" alt="" />
          <span className={styles.title}>
            You currently don&apos;t have any projects!
          </span>
          <span className={styles.subTitle}>
            Click the button below and get started.
          </span>
          <CreateDesignButton />
        </div>
      ) : (
        <Cards projects={allProjects} />
      )}
    </main>
  );
}
